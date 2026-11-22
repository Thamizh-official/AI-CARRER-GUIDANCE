const http = require('http');
const app = require('./server');
const { db, initDatabase } = require('./database');

console.log("--------------------------------------------------");
console.log("AURA AI Course Architect - API Verification");
console.log("--------------------------------------------------");

const PORT = 4568;
let server;

function startServer() {
  return initDatabase().then(() => {
    return new Promise((resolve) => {
      server = app.listen(PORT, () => {
        console.log(`Test server started on port ${PORT}`);
        resolve();
      });
    });
  });
}

function stopServer() {
  return new Promise((resolve) => {
    server.close(() => {
      console.log("Test server stopped.");
      db.close(() => {
        console.log("Database connection closed.");
        resolve();
      });
    });
  });
}

function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : '';
    const options = {
      hostname: 'localhost',
      port: PORT,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: JSON.parse(body)
        });
      });
    });

    req.on('error', (e) => reject(e));
    if (data) {
      req.write(postData);
    }
    req.end();
  });
}

async function runTests() {
  try {
    await startServer();

    // Test 1: Generate AI Course Heuristics
    console.log("\n[1/4] Testing POST /api/courses/generate...");
    const genResult = await makeRequest('POST', '/api/courses/generate', { name: "B.Sc Forensic Science" });
    
    if (genResult.statusCode !== 200) {
      throw new Error(`Failed to generate course. Status: ${genResult.statusCode}`);
    }
    
    const course = genResult.data;
    console.log("Generated course details:", JSON.stringify(course, null, 2));
    
    if (course.stage !== 'after12th') throw new Error(`Incorrect stage generated: ${course.stage}`);
    if (course.duration !== '3 Years') throw new Error(`Incorrect duration generated: ${course.duration}`);
    if (!course.careers.includes("B.Sc Forensic Science Consultant")) {
      throw new Error(`Missing expected careers. Found: ${course.careers.join(', ')}`);
    }
    console.log("✓ Passed: Course generation is correct and complete.");

    // Test 2: Persist Generated Course to DB
    console.log("\n[2/4] Testing POST /api/courses...");
    const saveResult = await makeRequest('POST', '/api/courses', course);
    if (saveResult.statusCode !== 200 || !saveResult.data.success) {
      throw new Error(`Failed to save course. Status: ${saveResult.statusCode}, Data: ${JSON.stringify(saveResult.data)}`);
    }
    console.log("✓ Passed: Course persisted with ID:", saveResult.data.courseId);

    // Test 3: Verify course is searchable and listed
    console.log("\n[3/4] Testing GET /api/courses?query=Forensic...");
    const getResult = await makeRequest('GET', '/api/courses?query=Forensic');
    if (getResult.statusCode !== 200 || getResult.data.length === 0) {
      throw new Error(`Failed to retrieve saved course. Found: ${getResult.data.length} matches`);
    }
    const savedCourse = getResult.data[0];
    console.log("Retrieved course:", savedCourse.name);
    if (savedCourse.name !== "B.Sc Forensic Science") throw new Error("Course name mismatch in DB!");
    console.log("✓ Passed: Course retrieved from database correctly.");

    // Test 4: Verify generated careers match in Guidance Engine
    console.log("\n[4/4] Testing POST /api/guidance matching for generated career...");
    const guidanceResult = await makeRequest('POST', '/api/guidance', {
      qualification: 'UG',
      skills: ["Critical Thinking", "Research", "Communication", "Project Management"],
      stream: 'Forensic Science',
      mark: '92%'
    });
    
    if (guidanceResult.statusCode !== 200) {
      throw new Error(`Guidance failed. Status: ${guidanceResult.statusCode}`);
    }
    
    const match = guidanceResult.data.find(m => m.title === "B.Sc Forensic Science Consultant");
    if (!match) {
      throw new Error(`Newly created career was not recommended! Recommendations: ${guidanceResult.data.map(m => m.title).join(', ')}`);
    }
    console.log(`✓ Passed: Matched new career: ${match.title} with score: ${match.matchScore}%`);
    console.log(`- Dynamic Hiring vacancies generated: ${match.companies.length} companies.`);

    console.log("\n--------------------------------------------------");
    console.log("✓ ALL AI COURSE ARCHITECT API TESTS PASSED!");
    console.log("--------------------------------------------------");
  } catch (e) {
    console.error("\n❌ TEST FAILED:", e.message);
    process.exitCode = 1;
  } finally {
    await stopServer();
  }
}

runTests();
