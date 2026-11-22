const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'careers.db');
const db = new sqlite3.Database(dbPath);

// Configuration arrays for procedural generation
const prefixes = [
  "Advanced", "Applied", "Theoretical", "Computational", "Experimental", 
  "Digital", "Global", "Specialized", "Integrated", "Strategic", 
  "Analytical", "Practical", "Modern", "Systems", "Quantitative", 
  "Qualitative", "Industrial", "Sustainable", "Clinical", "Developmental", 
  "Molecular", "Cellular", "Micro", "Macro", "Nano", 
  "Quantum", "Bio", "Neuro", "Environmental", "Forensic", 
  "Cyber", "Financial", "Corporate", "Political", "Social", 
  "Cultural", "Visual", "Performing", "Technical", "Vocational", 
  "Creative", "Cognitive", "Behavioral", "Structural", "Thermal", 
  "Aerospace", "Marine", "Agricultural", "Horticultural", "Stochastic"
];

const domains = [
  "Computer Science", "Software Engineering", "Information Technology", "Mechanical Engineering", "Electrical Engineering", 
  "Civil Engineering", "Biotechnology", "Business Administration", "Economics", "Physics", 
  "Chemistry", "Mathematics", "Sociology", "Psychology", "History", 
  "Literature", "Journalism", "Fine Arts", "Law", "Agriculture", 
  "Forestry", "Horticulture", "Animal Science", "Food Science", "Nutrition", 
  "Geology", "Meteorology", "Oceanography", "Astrobiology", "Astrochemistry", 
  "Astrophysics", "Genetics", "Microbiology", "Immunology", "Pharmacology", 
  "Toxicology", "Pathology", "Epidemiology", "Cardiology", "Neurology", 
  "Oncology", "Pediatrics", "Geriatrics", "Dentistry", "Pharmacy", 
  "Physiotherapy", "Nursing", "Anesthesiology", "Radiology", "Dermatology", 
  "Psychiatry", "Accounting", "Finance", "Marketing", "Human Resources", 
  "Operations Management", "Supply Chain", "Business Analytics", "Information Systems", "International Business", 
  "Entrepreneurship", "Public Administration", "Public Policy", "International Relations", "Political Science", 
  "Philosophy", "Linguistics", "Archaeology", "Anthropology", "Criminology", 
  "Forensic Science", "Media Studies", "Graphic Design", "UI/UX Design", "Fashion Design", 
  "Interior Design", "Industrial Design", "Game Design", "Animation", "Photography", 
  "Musicology", "Theatre Studies", "Dance Studies", "Comparative Literature", "Creative Writing", 
  "Translation Studies", "Education", "Curriculum Design", "Educational Leadership", "Special Education", 
  "Early Childhood", "Higher Education", "Sports Science", "Kinesiology", "Recreation Studies", 
  "Tourism Management", "Hospitality Management", "Culinary Arts", "Aeronautical Engineering", "Automobile Engineering"
];

const suffixes = [
  "with Artificial Intelligence", "in Cyber Security", "with Data Analytics", "and Smart Systems", "in Nanotechnology", 
  "and Renewable Energy", "with Financial Management", "in Clinical Research", "with Digital Media", "and Environmental Studies", 
  "with Blockchain", "in Quantum Computing", "and Robotics", "with Supply Chain", "in Sustainable Agriculture", 
  "with Machine Learning", "in VLSI Design", "with IoT Solutions", "in Bio-informatics", "and Health Informatics", 
  "with Cloud Computing", "in Space Science", "and Satellite Technology", "with Business Intelligence", "in Creative Writing", 
  "and Performing Arts", "with Legal Studies", "in Public Policy", "and Global Studies", "with Project Management", 
  "in Industrial Automation", "and Mechatronics", "with Renewable Power", "in Molecular Biology", "and Crop Science", 
  "with Soil Diagnostics", "in Wildlife Ecology", "and Conservation Science", "with Urban Planning", "in Architectural Design", 
  "and Structural Engineering", "with Geotechnical Science", "in Chemical Synthesis", "and Polymeric Materials", "with Forensic Analytics", 
  "in Crime Scene Investigation", "and Cyber Forensics", "with Digital Marketing", "in Brand Strategy", "and Neuroimaging"
];

const stageDegrees = {
  "after10th": [
    { prefix: "Diploma in", duration: "3 Years" },
    { prefix: "ITI Certification in", duration: "2 Years" },
    { prefix: "Vocational Certificate in", duration: "2 Years" },
    { prefix: "Advanced Diploma in", duration: "3 Years" }
  ],
  "after12th": [
    { prefix: "B.Tech in", duration: "4 Years" },
    { prefix: "B.E. in", duration: "4 Years" },
    { prefix: "B.Sc in", duration: "3 Years" },
    { prefix: "B.A. in", duration: "3 Years" },
    { prefix: "B.Com in", duration: "3 Years" },
    { prefix: "BBA in", duration: "3 Years" },
    { prefix: "BFA in", duration: "4 Years" },
    { prefix: "B.Des in", duration: "4 Years" },
    { prefix: "B.Voc in", duration: "3 Years" }
  ],
  "afterUG": [
    { prefix: "M.Tech in", duration: "2 Years" },
    { prefix: "M.E. in", duration: "2 Years" },
    { prefix: "M.Sc in", duration: "2 Years" },
    { prefix: "M.A. in", duration: "2 Years" },
    { prefix: "M.Com in", duration: "2 Years" },
    { prefix: "MBA in", duration: "2 Years" },
    { prefix: "MFA in", duration: "2 Years" },
    { prefix: "M.Des in", duration: "2 Years" },
    { prefix: "MCA in", duration: "2 Years" }
  ],
  "afterPG": [
    { prefix: "PhD in", duration: "3-5 Years" },
    { prefix: "Post-Doctoral Fellowship in", duration: "2 Years" }
  ]
};

async function seed3LakhCourses() {
  console.log("Starting 300,000 Courses Seeder...");
  const startTime = Date.now();

  // Create table if not exists
  await new Promise((resolve, reject) => {
    db.run(`
      CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        stage TEXT NOT NULL,
        name TEXT NOT NULL,
        duration TEXT NOT NULL,
        description TEXT NOT NULL,
        careers TEXT NOT NULL, -- JSON string
        skills TEXT NOT NULL,  -- JSON string
        subjects TEXT NOT NULL  -- JSON string
      )
    `, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  // Truncate existing courses table
  console.log("Clearing existing courses...");
  await new Promise((resolve, reject) => {
    db.run("DELETE FROM courses", (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  // Procedural generator state
  const targetCount = 300000;
  let currentCount = 0;
  
  const stages = Object.keys(stageDegrees);

  // We want to avoid duplicates. Since we have a vast space:
  // stages (4) * degrees (avg 6) * prefixes (50) * domains (100) * suffixes (50) = 6,000,000 combinations
  // We can loop systematically to produce exactly 300,000 unique records.

  console.log("Generating courses...");
  
  db.serialize(() => {
    db.run("BEGIN TRANSACTION");

    const stmt = db.prepare(`
      INSERT INTO courses (stage, name, duration, description, careers, skills, subjects)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    let sIdx = 0; // stage index
    let dIdx = 0; // degree index
    let pIdx = 0; // prefix index
    let domIdx = 0; // domain index
    let sufIdx = 0; // suffix index

    while (currentCount < targetCount) {
      const stage = stages[sIdx % stages.length];
      const degrees = stageDegrees[stage];
      const degreeObj = degrees[dIdx % degrees.length];

      const prefix = prefixes[pIdx % prefixes.length];
      const domain = domains[domIdx % domains.length];
      const suffix = suffixes[sufIdx % suffixes.length];

      // Formulate name
      // e.g. "B.Tech in Computational Computer Science with Artificial Intelligence"
      // Alternating format to keep it diverse
      let courseName = "";
      if (currentCount % 3 === 0) {
        courseName = `${degreeObj.prefix} ${prefix} ${domain} ${suffix}`;
      } else if (currentCount % 3 === 1) {
        courseName = `${degreeObj.prefix} ${domain} ${suffix}`;
      } else {
        courseName = `${degreeObj.prefix} ${prefix} ${domain}`;
      }

      const duration = degreeObj.duration;
      const description = `This is a comprehensive ${duration} program of study in ${courseName}. Designed to provide deep analytical, theoretical, and practical expertise, the curriculum aligns with advanced modern industry standards and scientific breakthroughs in ${domain}.`;
      
      const careers = [
        `${prefix} ${domain} Specialist`,
        `${domain} R&D Lead`,
        `${domain} Architect`,
        `Senior Consultant in ${domain}`
      ];

      const skills = [
        domain,
        prefix,
        "Analytical Skills",
        "Problem Solving",
        "Critical Thinking",
        "Academic Writing"
      ];

      const subjects = [
        `Foundations of ${domain}`,
        `Advanced ${prefix} ${domain}`,
        `Practical Applications of ${domain}`,
        `Research Seminar in ${domain}`,
        `Core Project in ${domain}`
      ];

      stmt.run(
        stage,
        courseName,
        duration,
        description,
        JSON.stringify(careers),
        JSON.stringify(skills),
        JSON.stringify(subjects)
      );

      currentCount++;

      // Advance indices combinatorially
      sufIdx++;
      if (sufIdx >= suffixes.length) {
        sufIdx = 0;
        domIdx++;
        if (domIdx >= domains.length) {
          domIdx = 0;
          pIdx++;
          if (pIdx >= prefixes.length) {
            pIdx = 0;
            dIdx++;
            if (dIdx >= degrees.length) {
              dIdx = 0;
              sIdx++;
            }
          }
        }
      }

      if (currentCount % 50000 === 0) {
        console.log(`Generated ${currentCount} courses...`);
      }
    }

    stmt.finalize();

    db.run("COMMIT", (err) => {
      if (err) {
        console.error("Failed to commit transaction:", err);
      } else {
        const endTime = Date.now();
        console.log(`Successfully generated and inserted ${currentCount} courses in ${((endTime - startTime) / 1000).toFixed(2)} seconds.`);
        
        // Verify final count
        db.get("SELECT COUNT(*) AS count FROM courses", (err, row) => {
          if (row) {
            console.log(`Verification: Total courses count in DB is ${row.count}.`);
          }
          db.close();
        });
      }
    });
  });
}

seed3LakhCourses().catch(console.error);
