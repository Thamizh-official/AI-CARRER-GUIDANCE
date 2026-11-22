const http = require('http');
const app = require('./server');
const { db, initDatabase } = require('./database');

const PORT = 4567; // Use a distinct port for testing
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

// Helper to make GET/POST HTTP requests using native http module
function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const reqOptions = {
      hostname: 'localhost',
      port: PORT,
      path: path,
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    };

    const req = http.request(reqOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve({
            statusCode: res.statusCode,
            body: JSON.parse(data)
          });
        } catch (e) {
          resolve({
            statusCode: res.statusCode,
            body: data
          });
        }
      });
    });

    req.on('error', (err) => reject(err));

    if (options.body) {
      req.write(JSON.stringify(options.body));
    }
    req.end();
  });
}

async function runTests() {
  console.log("--------------------------------------------------");
  console.log("AURA AI Career Guidance - Backend API Verification");
  console.log("--------------------------------------------------");

  try {
    await initDatabase();
    await startServer();

    // Test Case 1: GET /api/courses
    console.log("\n[1/5] Testing GET /api/courses...");
    const resCourses = await request('/api/courses');
    console.log(`Status: ${resCourses.statusCode}`);
    if (resCourses.statusCode !== 200) {
      throw new Error(`GET /api/courses failed with status ${resCourses.statusCode}`);
    }
    if (!Array.isArray(resCourses.body) || resCourses.body.length === 0) {
      throw new Error(`GET /api/courses returned empty or invalid catalog.`);
    }
    console.log(`✓ Passed: Found ${resCourses.body.length} courses loaded from DB.`);

    // Test Case 2: GET /api/companies (Hiring directory)
    console.log("\n[2/5] Testing GET /api/companies...");
    const resCompanies = await request('/api/companies?page=1&pageSize=5');
    console.log(`Status: ${resCompanies.statusCode}`);
    if (resCompanies.statusCode !== 200) {
      throw new Error(`GET /api/companies failed with status ${resCompanies.statusCode}`);
    }
    const { totalItems, companies } = resCompanies.body;
    if (totalItems < 1000) {
      throw new Error(`GET /api/companies totalItems: ${totalItems}. Expected >= 1000.`);
    }
    if (!Array.isArray(companies) || companies.length !== 5) {
      throw new Error(`GET /api/companies did not return correct page items count.`);
    }
    console.log(`✓ Passed: Procedural directory returns ${totalItems} companies (Page size: ${companies.length}).`);

    // Test Case 3: POST /api/guidance (Career matcher)
    console.log("\n[3/5] Testing POST /api/guidance (AI matching engine)...");
    const testProfile = {
      qualification: 'UG',
      skills: ['CAD Modeling', 'Troubleshooting', 'Teamwork'],
      stream: 'Mechanical'
    };
    const resGuidance = await request('/api/guidance', {
      method: 'POST',
      body: testProfile
    });
    console.log(`Status: ${resGuidance.statusCode}`);
    if (resGuidance.statusCode !== 200) {
      throw new Error(`POST /api/guidance failed with status ${resGuidance.statusCode}`);
    }
    if (!Array.isArray(resGuidance.body) || resGuidance.body.length === 0) {
      throw new Error(`POST /api/guidance returned empty recommendations.`);
    }
    // Verify first recommendation matches Mechanical Design Engineer
    const topMatch = resGuidance.body[0];
    console.log(`Top recommended career: ${topMatch.title} (Match score: ${topMatch.matchScore}%)`);
    if (!topMatch.title.includes('Mechanical')) {
      throw new Error(`Expected mechanical candidate to match a Mechanical career first, got: ${topMatch.title}`);
    }
    if (!topMatch.companies || topMatch.companies.length === 0) {
      throw new Error(`Expected matched career to embed active vacancy listings.`);
    }
    console.log(`✓ Passed: Career matching returns scored matches with embedded vacancies correctly.`);

    // Test Case 4: POST /api/apply (Job application database write)
    console.log("\n[4/5] Testing POST /api/apply (Database write)...");
    const testApplication = {
      company_name: 'TATA Motors',
      job_title: 'Mechanical Design Engineer',
      applicant_name: 'Tamil Selvan',
      applicant_email: 'tamil@example.com'
    };
    const resApply = await request('/api/apply', {
      method: 'POST',
      body: testApplication
    });
    console.log(`Status: ${resApply.statusCode}`);
    if (resApply.statusCode !== 200) {
      throw new Error(`POST /api/apply failed with status ${resApply.statusCode}`);
    }
    if (!resApply.body.success || !resApply.body.applicationId) {
      throw new Error(`POST /api/apply returned unsuccessful body: ${JSON.stringify(resApply.body)}`);
    }
    console.log(`✓ Passed: Application successfully persisted with ID: ${resApply.body.applicationId}`);

    // Test Case 5: GET /api/applications (Database retrieval)
    console.log("\n[5/5] Testing GET /api/applications...");
    const resGetApps = await request('/api/applications');
    console.log(`Status: ${resGetApps.statusCode}`);
    if (resGetApps.statusCode !== 200) {
      throw new Error(`GET /api/applications failed with status ${resGetApps.statusCode}`);
    }
    if (!Array.isArray(resGetApps.body) || resGetApps.body.length === 0) {
      throw new Error(`GET /api/applications returned empty database list.`);
    }
    const latestApp = resGetApps.body[0];
    if (latestApp.applicant_name !== 'Tamil Selvan' || latestApp.company_name !== 'TATA Motors') {
      throw new Error(`GET /api/applications returned incorrect details.`);
    }
    console.log(`✓ Passed: Retrieved ${resGetApps.body.length} applications from SQLite DB successfully.`);

    console.log("\n--------------------------------------------------");
    console.log("✓ ALL BACKEND SERVER API TESTS PASSED SUCCESSFULLY!");
    console.log("--------------------------------------------------");
    
    await stopServer();
    process.exit(0);
  } catch (error) {
    console.error("\n❌ BACKEND VERIFICATION ERROR FOUND:");
    console.error(error.stack || error.message);
    if (server) {
      await stopServer();
    }
    process.exit(1);
  }
}

runTests();
