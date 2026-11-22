const express = require('express');
const cors = require('cors');
const path = require('path');
const { db, initDatabase } = require('./database');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// In-memory array of generated companies
let allCompanies = [];

// Helper variables for procedural company generator
const companyPrefixes = [
  "TATA", "Reliance", "Infosys", "Wipro", "HDFC", "ICICI", "Apollo", "Biocon", "Zoho", "L&T", 
  "Mahindra", "ITC", "Godrej", "Dr. Reddy's", "TVS", "Bajaj", "Bharat", "Cognizant", "Freshworks", 
  "Adani", "Dalmia", "Standard", "Vertex", "Apex", "Summit", "SpaceX", "GMR", "NTPC", "ONGC", "HCL",
  "Ashok Leyland", "Murugappa", "Muthoot", "Sundaram", "Kothari", "Elgi", "MRF", "Jindal", "TCS"
];
const companySuffixes = [
  "Technologies", "Motors", "Industries", "Finance", "Healthcare", "Consultancy", "Digital", "Infotech", 
  "Solutions", "Labs", "Group", "Enterprises", "Ventures", "Systems", "Logistics", "Services", 
  "Pharmaceuticals", "Power", "Infrastructure", "Media", "Steel", "Electronics", "Communications"
];
const locationsList = [
  "Chennai, TN", "Coimbatore, TN", "Bangalore, KA", "Hyderabad, TS", "Mumbai, MH", "Pune, MH", 
  "Delhi, DL", "Gurugram, HR", "Kochi, KL", "Trichy, TN", "Madurai, TN", "Salem, TN"
];
const skillSuggestions = [
  "Excel", "Communication", "Teamwork", "Problem Solving", "Critical Thinking", "Leadership", "Public Speaking",
  "Data Analysis", "Research", "Project Management", "Python", "SQL", "HTML/CSS", "JavaScript"
];

// Map qualification strings to hierarchy levels
const qualificationMap = {
  '10th': 1,
  '12th Science': 2,
  '12th Commerce': 2,
  '12th Arts': 2,
  'Diploma': 2,
  'UG': 3,
  'PG': 4,
  'PhD': 5
};

function getQualificationLevel(qual) {
  if (!qual) return 1;
  const matchKey = Object.keys(qualificationMap).find(key => qual.toLowerCase().includes(key.toLowerCase()));
  return matchKey ? qualificationMap[matchKey] : 1;
}

// Generate the 1,020 companies once careers data is in database
function generate1020Companies() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM careers_meta", (err, careers) => {
      if (err) return reject(err);
      
      const companies = [];
      for (let i = 0; i < 1020; i++) {
        const prefix = companyPrefixes[i % companyPrefixes.length];
        const suffix = companySuffixes[(i * 3) % companySuffixes.length];
        const countIndex = i >= (companyPrefixes.length * companySuffixes.length) ? ` ${Math.floor(i / 100)}` : "";
        const companyName = `${prefix} ${suffix}${countIndex}`;
        
        const location = locationsList[(i * 7) % locationsList.length];
        const career = careers[i % careers.length];
        
        const salMin = career.salary_min;
        const salMax = career.salary_max;
        const salWeight = (i % 10) / 10;
        const salaryVal = (salMin + salWeight * (salMax - salMin)).toFixed(1);
        
        const expIndex = i % 4;
        let experience = "Freshers";
        if (expIndex === 1) experience = "0-2 years";
        else if (expIndex === 2) experience = "3-5 years";
        else if (expIndex === 3) experience = "1-3 years";
        
        const vacancies = (i % 7) + 1;
        
        const reqSkills = JSON.parse(career.required_skills);
        const extraSkill1 = skillSuggestions[(i * 13) % skillSuggestions.length];
        const extraSkill2 = skillSuggestions[(i * 19) % skillSuggestions.length];
        if (!reqSkills.includes(extraSkill1)) reqSkills.push(extraSkill1);
        if (!reqSkills.includes(extraSkill2)) reqSkills.push(extraSkill2);
        
        companies.push({
          id: `comp-${i}`,
          name: companyName,
          logo: prefix.substring(0, 3).toUpperCase(),
          location: location,
          vacancies: vacancies,
          salary: `${salaryVal} LPA`,
          experience: experience,
          sector: career.category,
          minQualification: career.min_qualification,
          requirements: reqSkills,
          jobTitle: career.title,
          careerId: career.career_id
        });
      }
      allCompanies = companies;
      console.log(`Successfully generated ${allCompanies.length} company listings on the server.`);
      resolve();
    });
  });
}

// REST APIs
// 1. GET /api/courses - returns all courses, optional search filter
app.get('/api/courses', (req, res) => {
  const query = req.query.query ? req.query.query.trim() : '';
  const stage = req.query.stage ? req.query.stage.trim() : '';
  const letter = req.query.letter ? req.query.letter.toLowerCase().trim() : '';
  const sort = req.query.sort || 'id_desc';
  
  let sql = 'SELECT * FROM courses';
  const params = [];
  const conditions = [];
  
  if (query !== '') {
    conditions.push('(name LIKE ? OR stage LIKE ? OR careers LIKE ? OR skills LIKE ? OR subjects LIKE ?)');
    const likeVal = `%${query}%`;
    params.push(likeVal, likeVal, likeVal, likeVal, likeVal);
  }
  
  if (stage !== '' && stage !== 'all') {
    conditions.push('stage = ?');
    params.push(stage);
  }
  
  if (letter !== '' && letter !== 'all') {
    conditions.push('LOWER(name) LIKE ?');
    params.push(`${letter}%`);
  }
  
  if (conditions.length > 0) {
    sql += ' WHERE ' + conditions.join(' AND ');
  }
  
  if (sort === 'name_asc') {
    sql += ' ORDER BY name ASC';
  } else {
    sql += ' ORDER BY id DESC';
  }
  
  // Default limit is 100. If filtering/searching, allow up to 1000. Can be overridden.
  const defaultLimit = (query !== '' || stage !== '' || (letter !== '' && letter !== 'all')) ? 1000 : 100;
  const limit = parseInt(req.query.limit) || defaultLimit;
  sql += ' LIMIT ?';
  params.push(limit);
  
  db.all(sql, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    
    // Parse arrays
    const courses = rows.map(r => ({
      ...r,
      careers: JSON.parse(r.careers || '[]'),
      skills: JSON.parse(r.skills || '[]'),
      subjects: JSON.parse(r.subjects || '[]')
    }));
    
    res.json(courses);
  });
});

// 2. GET /api/companies - Paginated and filtered company listings
app.get('/api/companies', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;
  const nameQuery = req.query.name ? req.query.name.toLowerCase().trim() : '';
  const skillQuery = req.query.skill ? req.query.skill.toLowerCase().trim() : '';
  const sectorFilter = req.query.sector || 'all';
  const eduFilter = req.query.edu || 'all';
  
  let filtered = allCompanies;
  
  if (nameQuery !== '') {
    filtered = filtered.filter(c => c.name.toLowerCase().includes(nameQuery));
  }
  if (skillQuery !== '') {
    filtered = filtered.filter(c => c.requirements.some(req => req.toLowerCase().includes(skillQuery)));
  }
  if (sectorFilter !== 'all') {
    filtered = filtered.filter(c => c.sector === sectorFilter);
  }
  if (eduFilter !== 'all') {
    const userLevel = getQualificationLevel(eduFilter);
    filtered = filtered.filter(c => {
      const companyLevel = getQualificationLevel(c.minQualification);
      return userLevel >= companyLevel;
    });
  }
  
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIdx = (page - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, totalItems);
  const pageItems = filtered.slice(startIdx, endIdx);
  
  res.json({
    totalItems,
    totalPages,
    page,
    pageSize,
    companies: pageItems
  });
});

// 3. POST /api/guidance - Analyze educational profile, GitHub projects & Technical Assessment
app.post('/api/guidance', (req, res) => {
  const { name, qualification, skills, stream, mark, projectTitle, githubUrl, practicalScore, assessmentScore, atsScore } = req.body;
  if (!qualification || !Array.isArray(skills)) {
    return res.status(400).json({ error: "Missing required profile fields qualification/skills." });
  }
  
  const userQualLevel = getQualificationLevel(qualification);
  const userStream = stream ? stream.toLowerCase().trim() : '*';
  
  // Numerical factors (normalized 0-100)
  const normAts = typeof atsScore === 'number' ? atsScore : 85;
  const normPractical = typeof practicalScore === 'number' ? practicalScore : (projectTitle || githubUrl ? 90 : 70);
  const normAssessment = typeof assessmentScore === 'number' ? assessmentScore : 70;
  
  db.all("SELECT * FROM careers_meta", (err, careers) => {
    if (err) return res.status(500).json({ error: err.message });
    
    let matches = [];
    careers.forEach(career => {
      const careerQualLevel = getQualificationLevel(career.min_qualification);
      if (userQualLevel < careerQualLevel) return; // Skip if user's qualification is too low
      
      let streamBonus = 0;
      const reqStream = JSON.parse(career.required_stream);
      const hasStreamRestriction = reqStream && reqStream[0] !== '*';
      if (hasStreamRestriction) {
        const isMatch = reqStream.some(st => 
          userStream.includes(st.toLowerCase()) || 
          st.toLowerCase().includes(userStream)
        );
        if (isMatch) streamBonus = 10;
        else streamBonus = -15; // Stream mismatch penalty
      }
      
      let skillsMatched = 0;
      const reqSkills = JSON.parse(career.required_skills);
      reqSkills.forEach(reqSkill => {
        const hasSkill = skills.some(s => s.toLowerCase().includes(reqSkill.toLowerCase()));
        if (hasSkill) skillsMatched++;
      });
      
      const skillsRatio = reqSkills.length > 0 ? (skillsMatched / reqSkills.length) : 0;
      
      // User-specified Tri-Factor Placement Formula:
      // ATS Resume Skill Match (30%) + Practical Projects/GitHub (35%) + Company Assessment Exam (35%)
      const atsComponent = ((skillsRatio * 0.7) + ((normAts / 100) * 0.3)) * 30;
      const practicalComponent = (normPractical / 100) * 35;
      const assessmentComponent = (normAssessment / 100) * 35;
      
      let matchPercentage = atsComponent + practicalComponent + assessmentComponent + streamBonus;
      
      // Mark / GPA bonus (up to 5%)
      let markBonus = 0;
      if (mark) {
        const markStr = mark.toLowerCase();
        const percentMatch = markStr.match(/(\d+(\.\d+)?)\s*%/);
        const cgpMatch = markStr.match(/(\d+(\.\d+)?)\s*(\/\s*10)?\s*cgpa/);
        
        if (percentMatch) {
          const value = parseFloat(percentMatch[1]);
          if (value > 90) markBonus = 5;
          else if (value > 80) markBonus = 3;
        } else if (cgpMatch) {
          const value = parseFloat(cgpMatch[1]);
          if (value > 9.0) markBonus = 5;
          else if (value > 8.0) markBonus = 3;
        }
      }
      matchPercentage += markBonus;
      
      const score = Math.min(Math.max(Math.round(matchPercentage), 40), 99);
      
      // Filter list of vacancies associated with this career
      const vacancies = allCompanies.filter(comp => comp.careerId === career.career_id).slice(0, 5);
      
      matches.push({
        id: career.career_id,
        title: career.title,
        category: career.category,
        minQualification: career.min_qualification,
        requiredSkills: reqSkills,
        difficulty: career.difficulty,
        baseSalary: {
          min: career.salary_min,
          avg: career.salary_avg,
          max: career.salary_max
        },
        experience: career.experience,
        description: career.description,
        skillsToAcquire: JSON.parse(career.skills_to_acquire),
        companies: vacancies,
        matchScore: score,
        skillsMatchedCount: skillsMatched
      });
    });
    
    // Sort recommendations descending
    matches.sort((a, b) => b.matchScore - a.matchScore);
    
    // K. Annamalai custom filter: only return high-matching executive / advisory / leadership roles
    if (name && name.toLowerCase().includes("annamalai")) {
      matches = matches.filter(m => 
        m.id.includes("consultant") || 
        m.id.includes("scientist") || 
        m.id.includes("manager") ||
        m.id.includes("engineer") ||
        m.matchScore >= 80
      );
      // Remove junior development and operations roles explicitly
      matches = matches.filter(m => 
        !m.id.includes("junior") && 
        !m.id.includes("operator") && 
        !m.id.includes("assistant")
      );
    }
    
    res.json(matches);
  });
});

// 4. POST /api/apply - Save job application details to SQLite database
app.post('/api/apply', (req, res) => {
  const { company_name, job_title, applicant_name, applicant_email } = req.body;
  if (!company_name || !job_title || !applicant_name || !applicant_email) {
    return res.status(400).json({ error: "Missing required application parameters." });
  }
  
  const sql = `
    INSERT INTO applications (company_name, job_title, applicant_name, applicant_email)
    VALUES (?, ?, ?, ?)
  `;
  db.run(sql, [company_name, job_title, applicant_name, applicant_email], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({
      success: true,
      message: "Job application submitted successfully to server database.",
      applicationId: this.lastID
    });
  });
});

// 5. GET /api/applications - Retrieve all saved job applications
app.get('/api/applications', (req, res) => {
  db.all("SELECT * FROM applications ORDER BY applied_at DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 5b. GET /api/careers - Retrieve all registered careers and metadata
app.get('/api/careers', (req, res) => {
  db.all("SELECT * FROM careers_meta", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});


// 6. POST /api/courses - Add a new course manually
app.post('/api/courses', (req, res) => {
  const { stage, name, duration, description, careers, skills, subjects } = req.body;
  const subjectsArray = Array.isArray(subjects) ? subjects : [];
  if (!stage || !name || !duration || !description || !Array.isArray(careers) || !Array.isArray(skills)) {
    return res.status(400).json({ error: "Missing required course parameters." });
  }

  const sql = `
    INSERT INTO courses (stage, name, duration, description, careers, skills, subjects)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.run(sql, [stage, name, duration, description, JSON.stringify(careers), JSON.stringify(skills), JSON.stringify(subjectsArray)], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({
      success: true,
      message: "Course successfully saved to SQLite database.",
      courseId: this.lastID
    });
  });
});

// Helper: Ensure a career meta structure exists for AI-generated paths
function ensureCareerExists(careerTitle, stage, skills) {
  return new Promise((resolve, reject) => {
    const careerId = `c-${careerTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    
    db.get("SELECT * FROM careers_meta WHERE career_id = ?", [careerId], (err, row) => {
      if (err) return reject(err);
      if (row) return resolve(careerId); // Already exists
      
      // Map min qualification based on course stage
      let minQual = "UG";
      if (stage === "after10th") minQual = "Diploma";
      else if (stage === "after12th") minQual = "UG";
      else if (stage === "afterUG") minQual = "PG";
      else if (stage === "afterPG") minQual = "PhD";
      
      // Determine sector/category
      let category = "Tech";
      const titleLower = careerTitle.toLowerCase();
      if (titleLower.includes("engineer") || titleLower.includes("mechanic") || titleLower.includes("civil") || titleLower.includes("struct")) {
        category = "Engineering";
      } else if (titleLower.includes("doctor") || titleLower.includes("nurse") || titleLower.includes("clinical") || titleLower.includes("health")) {
        category = "Healthcare";
      } else if (titleLower.includes("analyst") || titleLower.includes("finance") || titleLower.includes("account") || titleLower.includes("bank")) {
        category = "Finance";
      } else if (titleLower.includes("write") || titleLower.includes("design") || titleLower.includes("artist") || titleLower.includes("journal")) {
        category = "Arts";
      }

      // Insert new career into SQLite
      const sql = `
        INSERT OR REPLACE INTO careers_meta (
          career_id, title, category, min_qualification, required_stream, required_skills, 
          difficulty, salary_min, salary_avg, salary_max, experience, description, skills_to_acquire, demand, growth
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      
      const salaryMin = 4.5;
      const salaryAvg = 7.2;
      const salaryMax = 12.5;

      db.run(sql, [
        careerId,
        careerTitle,
        category,
        minQual,
        JSON.stringify(["*"]),
        JSON.stringify(skills),
        "Medium",
        salaryMin,
        salaryAvg,
        salaryMax,
        "0-2 years",
        `Specialized professional career role focused on ${careerTitle.toLowerCase()} principles, project deliverables, and operational standards.`,
        JSON.stringify(skills),
        "High",
        "12% YoY"
      ], function(err) {
        if (err) return reject(err);
        
        // Generate in-memory hiring companies for this career
        for (let i = 0; i < 5; i++) {
          const prefix = companyPrefixes[(Math.floor(Math.random() * companyPrefixes.length) + i) % companyPrefixes.length];
          const suffix = companySuffixes[(Math.floor(Math.random() * companySuffixes.length) + i * 3) % companySuffixes.length];
          const companyName = `${prefix} ${suffix}`;
          const location = locationsList[(Math.floor(Math.random() * locationsList.length) + i * 7) % locationsList.length];
          
          allCompanies.push({
            id: `comp-gen-${Date.now()}-${i}`,
            name: companyName,
            logo: prefix.substring(0, 3).toUpperCase(),
            location: location,
            vacancies: (i % 3) + 1,
            salary: `${(salaryMin + Math.random() * (salaryMax - salaryMin)).toFixed(1)} LPA`,
            experience: "0-2 years",
            sector: category,
            minQualification: minQual,
            requirements: skills,
            jobTitle: careerTitle,
            careerId: careerId
          });
        }
        resolve(careerId);
      });
    });
  });
}

// 7. POST /api/courses/generate - Generate course content dynamically using heuristics
app.post('/api/courses/generate', (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: "Missing course name for generation." });
  }

  const courseName = name.trim();
  const lowerName = courseName.toLowerCase();
  
  // 1. Determine Stage
  let stage = "after12th";
  if (lowerName.includes("ph.d") || lowerName.includes("phd") || lowerName.includes("doctorate") || lowerName.includes("doctoral")) {
    stage = "afterPG";
  } else if (lowerName.includes("m.sc") || lowerName.includes("msc") || lowerName.includes("m.tech") || lowerName.includes("mtech") || lowerName.includes("mba") || lowerName.includes("m.com") || lowerName.includes("mcom") || lowerName.includes("master") || lowerName.includes("mca") || lowerName.includes("pg") || lowerName.includes("postgraduate")) {
    stage = "afterUG";
  } else if (lowerName.includes("b.e") || lowerName.includes("b.tech") || lowerName.includes("btech") || lowerName.includes("b.sc") || lowerName.includes("bsc") || lowerName.includes("b.com") || lowerName.includes("bcom") || lowerName.includes("b.a") || lowerName.includes("ba") || lowerName.includes("bba") || lowerName.includes("mbbs") || lowerName.includes("bachelor") || lowerName.includes("undergraduate") || lowerName.includes("ug")) {
    stage = "after12th";
  } else if (lowerName.includes("diploma") || lowerName.includes("polytechnic") || lowerName.includes("10th") || lowerName.includes("hsc") || lowerName.includes("12th")) {
    stage = "after10th";
  }
  
  // 2. Determine Duration
  let duration = "3 Years";
  if (stage === "afterPG") {
    duration = "3-5 Years";
  } else if (stage === "afterUG") {
    duration = "2 Years";
  } else if (stage === "after12th") {
    if (lowerName.includes("engg") || lowerName.includes("engineer") || lowerName.includes("tech") || lowerName.includes("arch")) {
      duration = "4 Years";
    } else if (lowerName.includes("mbbs") || lowerName.includes("dentist") || lowerName.includes("medicine")) {
      duration = "5.5 Years";
    }
  } else if (stage === "after10th") {
    duration = lowerName.includes("diploma") ? "3 Years" : "2 Years";
  }
  
  // 3. Determine Careers, Skills & Subjects
  let careers = [];
  let skills = [];
  let subjects = [];
  
  if (lowerName.includes("computer") || lowerName.includes("software") || lowerName.includes("ai") || lowerName.includes("data") || lowerName.includes("web") || lowerName.includes("developer") || lowerName.includes("information")) {
    careers = [`${courseName} Developer`, "Software Engineer", "Systems Architect"];
    skills = ["Python", "SQL", "JavaScript", "Data Structures", "Problem Solving"];
    subjects = ["Data Structures & Algorithms", "Advanced Databases (SQL)", "Web Development Layouts", "Cloud Infrastructure (AWS)", "Computer Networks", "Software Design Patterns"];
  } else if (lowerName.includes("mechanical") || lowerName.includes("robot") || lowerName.includes("automotive") || lowerName.includes("design") || lowerName.includes("cad")) {
    careers = ["Mechanical Design Engineer", "Robotics Specialist", "Production Lead"];
    skills = ["CAD Modeling", "Thermodynamics", "Materials Selection", "MATLAB", "Troubleshooting"];
    subjects = ["Applied Thermodynamics", "Fluid Dynamics & Hydraulics", "Computer-Aided Modeling (CAD)", "Mechanics of Solid Materials", "Automobile Safety & Design", "Manufacturing Automation"];
  } else if (lowerName.includes("civil") || lowerName.includes("structural") || lowerName.includes("architect") || lowerName.includes("build") || lowerName.includes("construct")) {
    careers = ["Civil Site Engineer", "Structural Analyst", "Urban Planner"];
    skills = ["AUTOCAD", "STAAD Pro", "Project Management", "Site Surveying", "Estimation"];
    subjects = ["Structural Design & Mechanics", "Geotechnical Engineering", "Site Surveying Principles", "Concrete Material Quality", "Project Scheduling & Costing", "Urban Layout & Planning"];
  } else if (lowerName.includes("medical") || lowerName.includes("nurse") || lowerName.includes("doctor") || lowerName.includes("health") || lowerName.includes("clinical") || lowerName.includes("pharma") || lowerName.includes("biotech")) {
    careers = ["Clinical Research Associate", "Laboratory Analyst", "Healthcare Coordinator"];
    skills = ["Clinical Diagnosis", "Patient Care", "Microbiology", "Laboratory Testing", "Academic Writing"];
    subjects = ["Human Anatomy & Physiology", "Clinical Pharmacology", "Pathology Investigations", "Laboratory Microbiology", "Emergency Medicine Procedures", "Healthcare Ward Logistics"];
  } else if (lowerName.includes("commerce") || lowerName.includes("account") || lowerName.includes("finance") || lowerName.includes("bank") || lowerName.includes("business") || lowerName.includes("marketing") || lowerName.includes("economics")) {
    careers = ["Financial Analyst", "Business Consultant", "Tax Advisor"];
    skills = ["Accounting", "Excel", "Financial Analysis", "Taxation", "Communication"];
    subjects = ["Financial Accounting & Bookkeeping", "Direct & Indirect Tax Codes", "Corporate Auditing Standards", "Macro & Micro Economics", "Business Strategy & Logistics", "Advanced Excel Spreadsheets"];
  } else {
    // Default fallback
    careers = [`${courseName} Consultant`, `${courseName} Specialist`, "Academic Researcher"];
    skills = ["Research", "Critical Thinking", "Communication", "Project Management", "Data Interpretation"];
    subjects = ["Research Methodology Foundations", "Critical Thinking & Analysis", "Scientific Communications", "Project Management Operations", "Data Interpretation & Statistics", "Contemporary Field Studies"];
  }

  // 4. Generate Description
  const description = `This course provides specialized education in the field of ${courseName}. Curated for aspiring candidates, the roadmap focuses on core concepts, laboratory investigations, theoretical methodologies, and real-world industrial projects.`;

  // 5. Ensure all generated careers exist in SQLite database and procedural company listings
  const syncPromises = careers.map(c => ensureCareerExists(c, stage, skills));
  
  Promise.all(syncPromises)
    .then(() => {
      // Return generated details
      res.json({
        stage,
        name: courseName,
        duration,
        description,
        careers,
        skills,
        subjects
      });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// Initialize database and start Express server if run directly
if (require.main === module) {
  initDatabase()
    .then(() => generate1020Companies())
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
      });
    })
    .catch(err => {
      console.error("Database initialization failed:", err);
      process.exit(1);
    });
} else {
  // If imported by verification test, initialize database but let test launch its own port
  initDatabase()
    .then(() => generate1020Companies())
    .catch(err => {
      console.error("Database initialization failed in test import:", err);
    });
}

module.exports = app;
