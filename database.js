const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const vm = require('vm');

const dbPath = path.join(__dirname, 'careers.db');
const db = new sqlite3.Database(dbPath);

function initDatabase() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // 1. Create applications table
      db.run(`
        CREATE TABLE IF NOT EXISTS applications (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          company_name TEXT NOT NULL,
          job_title TEXT NOT NULL,
          applicant_name TEXT NOT NULL,
          applicant_email TEXT NOT NULL,
          applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // 2. Create courses table
      db.run(`
        CREATE TABLE IF NOT EXISTS courses (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          stage TEXT NOT NULL,
          name TEXT NOT NULL,
          duration TEXT NOT NULL,
          description TEXT NOT NULL,
          careers TEXT NOT NULL, -- JSON string
          skills TEXT NOT NULL,  -- JSON string
          subjects TEXT NOT NULL DEFAULT '[]' -- JSON string
        )
      `);

      // 3. Create careers_meta table
      db.run(`
        CREATE TABLE IF NOT EXISTS careers_meta (
          career_id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          category TEXT NOT NULL,
          min_qualification TEXT NOT NULL,
          required_stream TEXT NOT NULL, -- JSON string
          required_skills TEXT NOT NULL, -- JSON string
          difficulty TEXT NOT NULL,
          salary_min REAL,
          salary_avg REAL,
          salary_max REAL,
          experience TEXT NOT NULL,
          description TEXT NOT NULL,
          skills_to_acquire TEXT NOT NULL, -- JSON string
          demand TEXT,
          growth TEXT
        )
      `);

      // Seed tables if empty
      db.get("SELECT COUNT(*) AS count FROM courses", (err, row) => {
        if (err || !row || row.count === 0) {
          console.log("Database catalog empty. Re-seeding with expanded A-Z courses...");
          db.serialize(() => {
            db.run("DROP TABLE IF EXISTS courses", () => {
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
              `, () => {
                seedData()
                  .then(resolve)
                  .catch(reject);
              });
            });
          });
        } else {
          resolve();
        }
      });
    });
  });
}

function seedData() {
  return new Promise((resolve, reject) => {
    try {
      const windowMock = { window: {} };
      const dataCode = fs.readFileSync(path.join(__dirname, 'public', 'data.js'), 'utf8');
      vm.runInNewContext(dataCode, windowMock);
      const coursesCatalog = windowMock.window.coursesCatalog;
      const careersData = windowMock.window.careersData;

      if (!coursesCatalog || !careersData) {
        return reject(new Error("Failed to load catalog data from data.js"));
      }

      db.serialize(() => {
        // Seed courses
        const insertCourse = db.prepare("INSERT INTO courses (stage, name, duration, description, careers, skills, subjects) VALUES (?, ?, ?, ?, ?, ?, ?)");
        Object.keys(coursesCatalog).forEach(stage => {
          coursesCatalog[stage].forEach(course => {
            insertCourse.run(
              stage,
              course.name,
              course.duration,
              course.description,
              JSON.stringify(course.careers || []),
              JSON.stringify(course.skills || []),
              JSON.stringify(course.subjects || [])
            );
          });
        });
        insertCourse.finalize();

        // Seed careers_meta
        const insertCareer = db.prepare(`
          INSERT OR REPLACE INTO careers_meta (
            career_id, title, category, min_qualification, required_stream, required_skills, 
            difficulty, salary_min, salary_avg, salary_max, experience, description, skills_to_acquire, demand, growth
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        careersData.forEach(career => {
          // Standard defaults or metadata if present
          let demand = 'High';
          let growth = '12% YoY';
          if (career.title.toLowerCase().includes('scientist') || career.title.toLowerCase().includes('research')) {
            demand = 'High'; growth = '15% YoY';
          } else if (career.title.toLowerCase().includes('engineer') || career.title.toLowerCase().includes('developer')) {
            demand = 'Very High'; growth = '18% YoY';
          } else if (career.title.toLowerCase().includes('nurse') || career.title.toLowerCase().includes('doctor')) {
            demand = 'Critical'; growth = '14% YoY';
          }

          insertCareer.run(
            career.id,
            career.title,
            career.category || 'Tech',
            career.minQualification,
            JSON.stringify(career.requiredStream || ['*']),
            JSON.stringify(career.requiredSkills || []),
            career.difficulty || 'Medium',
            career.baseSalary ? career.baseSalary.min : 4.0,
            career.baseSalary ? career.baseSalary.avg : 6.5,
            career.baseSalary ? career.baseSalary.max : 9.0,
            career.experience || '0-2 years',
            career.description || '',
            JSON.stringify(career.skillsToAcquire || []),
            demand,
            growth
          );
        });
        insertCareer.finalize(resolve);
      });
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  db,
  initDatabase
};
