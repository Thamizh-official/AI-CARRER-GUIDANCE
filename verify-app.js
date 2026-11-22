// AURA AI Career Guidance System - Test Verification Suite V2
const fs = require('fs');
const path = require('path');

console.log("--------------------------------------------------");
console.log("AURA AI Career Guidance V2 - Automated Verification");
console.log("--------------------------------------------------");

// Mock Browser globals
global.window = {
  requestAnimationFrame: () => {}
};
global.document = {
  addEventListener: (event, cb) => { if (cb) cb(); },
  createElement: () => ({
    className: '',
    textContent: '',
    onclick: null,
    setAttribute: () => {},
    appendChild: () => {}
  }),
  getElementById: () => ({
    appendChild: () => {},
    addEventListener: () => {},
    innerHTML: '',
    value: '',
    style: {},
    classList: { add: () => {}, remove: () => {} }
  }),
  querySelectorAll: () => []
};

// Mock fetch globally to prevent relative URL parse errors in Node environment
global.fetch = (url) => {
  if (url.includes('/api/courses')) {
    const mockCourses = [];
    if (global.window.coursesCatalog) {
      Object.keys(global.window.coursesCatalog).forEach(stage => {
        global.window.coursesCatalog[stage].forEach(c => {
          mockCourses.push({ ...c, stage, careers: JSON.stringify(c.careers), skills: JSON.stringify(c.skills) });
        });
      });
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockCourses)
    });
  }
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ companies: [], totalItems: 0, totalPages: 0 })
  });
};

try {
  // Load data.js
  const dataPath = path.join(__dirname, 'public', 'data.js');
  console.log(`[1/4] Reading data module from ${dataPath}...`);
  const dataCode = fs.readFileSync(dataPath, 'utf8');
  eval(dataCode); // Loads qualificationsData, coursesCatalog, Careers, etc.
  
  if (global.window.careersData && global.window.careersData.length > 0) {
    console.log(`✓ Data module verified. Found ${global.window.careersData.length} careers.`);
    console.log(`✓ Global Courses catalog verified. Stages: [${Object.keys(global.window.coursesCatalog).join(', ')}]`);
  } else {
    throw new Error("Failed to load careersData dataset.");
  }

  // Load app.js
  const appPath = path.join(__dirname, 'public', 'app.js');
  console.log(`[2/4] Reading application logic from ${appPath}...`);
  const appCode = fs.readFileSync(appPath, 'utf8');
  eval(appCode); // Runs generate1000Companies() internally, loading window.allGeneratedCompanies
  
  console.log("✓ Application engine successfully evaluated.");

  // Test Case A: Check company generator count (1000+ requirement)
  console.log("[3/4] Verifying Procedural Company Generator...");
  const companyCount = global.window.allGeneratedCompanies.length;
  console.log(`- Generated companies: ${companyCount}`);
  if (companyCount >= 1000) {
    console.log(`✓ Success: Procedurally generated ${companyCount} companies (exceeds the 1,000+ constraint).`);
  } else {
    throw new Error(`Failed: Company generator only yielded ${companyCount} items. Expected >= 1000.`);
  }

  // Test Case B: Check filters by sector
  const techCompanies = global.window.allGeneratedCompanies.filter(c => c.sector === 'Tech');
  const civilCompanies = global.window.allGeneratedCompanies.filter(c => c.sector === 'Engineering');
  console.log(`- Tech companies count: ${techCompanies.length}`);
  console.log(`- Civil/Engineering companies count: ${civilCompanies.length}`);
  
  if (techCompanies.length > 0 && civilCompanies.length > 0) {
    console.log("✓ Success: Procedural generator distributed companies across multiple industrial sectors.");
  } else {
    throw new Error("Failed: Industrial sector distribution failed.");
  }

  // Test Case C: Career Matcher Verification (Mechanical stream)
  console.log("[4/4] Verifying Career Matcher against non-tech stream...");
  
  const getQualLevel = (qualString) => {
    const qualMap = {
      '10th': 1,
      '12th Science': 2,
      '12th Commerce': 2,
      '12th Arts': 2,
      'Diploma': 2,
      'UG': 3,
      'PG': 4,
      'PhD': 5
    };
    return qualMap[qualString] || 1;
  };

  const testMatcher = (qual, skills, stream = '*') => {
    const userQualLevel = getQualLevel(qual);
    const matches = [];
    
    global.window.careersData.forEach(career => {
      const careerQualLevel = getQualLevel(career.minQualification);
      if (userQualLevel < careerQualLevel) return;
      
      let streamBonus = 0;
      const hasStreamRestriction = career.requiredStream && career.requiredStream[0] !== '*';
      if (hasStreamRestriction) {
        const isMatch = career.requiredStream.some(st => 
          stream.toLowerCase().includes(st.toLowerCase()) || 
          st.toLowerCase().includes(stream.toLowerCase())
        );
        if (isMatch) streamBonus = 15;
        else streamBonus = -20;
      }
      
      let skillsMatched = 0;
      career.requiredSkills.forEach(reqSkill => {
        const hasSkill = skills.some(s => s.toLowerCase().includes(reqSkill.toLowerCase()));
        if (hasSkill) skillsMatched++;
      });
      
      const skillsRatio = career.requiredSkills.length > 0 ? (skillsMatched / career.requiredSkills.length) : 0;
      let matchPercentage = 40 + (skillsRatio * 45) + streamBonus;
      
      const score = Math.min(Math.max(Math.round(matchPercentage), 35), 100);
      matches.push({ title: career.title, minQual: career.minQualification, score });
    });
    
    return matches.sort((a,b) => b.score - a.score);
  };

  const matchesMech = testMatcher('UG', ['CAD Modeling', 'Troubleshooting', 'Teamwork'], 'Mechanical');
  console.log(`\n--- Matcher Test: Mechanical Graduate ---`);
  console.log(`Top recommended role: ${matchesMech[0].title} (${matchesMech[0].score}%)`);
  
  if (matchesMech[0].title.includes("Mechanical Design")) {
    console.log("✓ Success: Mechanical candidate matches Mechanical career paths correctly.");
  } else {
    throw new Error(`Failed: Mechanical candidate matched with unrelated role: ${matchesMech[0].title}`);
  }

  // Test Case D: Academic next-step query test
  console.log("\n[5/5] Verifying Academic Next-Step Search...");
  const searchAcademicTest = (query) => {
    const allCourses = [];
    Object.keys(global.window.coursesCatalog).forEach(stage => {
      global.window.coursesCatalog[stage].forEach(course => {
        allCourses.push(course);
      });
    });
    return allCourses.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  };
  
  const studyMatches = searchAcademicTest('B.Sc Physics');
  console.log(`- Study search for 'B.Sc Physics' returns:`, studyMatches.map(m => m.name));
  if (studyMatches.length > 0 && studyMatches[0].name.includes('Physics')) {
    console.log("✓ Success: Academic search resolves correctly.");
  } else {
    throw new Error("Failed: Academic search returned empty or incorrect results.");
  }

  // Test Case E: Career scope query test
  console.log("Verifying Career Scope Search...");
  const getTestSearchKeywords = (query) => {
    const q = query.toLowerCase();
    const keywords = [q];
    if (q.includes('b.com') || q.includes('bcom') || q.includes('commerce') || q.includes('accounting')) {
      keywords.push('commerce', 'accounting', 'finance');
    }
    if (q.includes('b.sc') || q.includes('bsc') || q.includes('science')) {
      keywords.push('science', 'physics', 'chemistry', 'biotechnology', 'mathematics');
    }
    if (q.includes('b.e.') || q.includes('b.tech') || q.includes('engineering') || q.includes('be') || q.includes('btech')) {
      keywords.push('engineering', 'computer science', 'mechanical', 'civil');
    }
    return keywords;
  };

  const searchCareerTest = (query) => {
    const q = query.toLowerCase().trim();
    const allCourses = [];
    Object.keys(global.window.coursesCatalog).forEach(stage => {
      global.window.coursesCatalog[stage].forEach(course => {
        allCourses.push(course);
      });
    });
    
    let matches = allCourses.filter(course => 
      course.name.toLowerCase().includes(q) || 
      (course.careers && course.careers.some(c => c.toLowerCase().includes(q))) ||
      (course.skills && course.skills.some(s => s.toLowerCase().includes(q)))
    );
    
    if (matches.length === 0) {
      const keywords = getTestSearchKeywords(q);
      matches = allCourses.filter(course => {
        return keywords.some(kw => 
          course.name.toLowerCase().includes(kw) || 
          (course.careers && course.careers.some(c => c.toLowerCase().includes(kw))) ||
          (course.skills && course.skills.some(s => s.toLowerCase().includes(kw)))
        );
      });
    }
    return matches;
  };
  
  const careerMatches = searchCareerTest('B.Com');
  console.log(`- Career search for 'B.Com' returns matching course:`, careerMatches.map(m => m.name));
  if (careerMatches.length > 0 && careerMatches.some(m => m.careers.some(c => c.includes('Accountant') || c.includes('Banker')))) {
    console.log("✓ Success: Career search resolves correctly and yields target careers.");
  } else {
    throw new Error("Failed: Career search returned empty or incorrect results.");
  }

  // Test Case F: V4 Popup Modal catalog checks
  console.log("\n[6/6] Verifying V4 Popup Modal Catalog Directory Controls...");
  
  // Set up mock fetch and document elements
  const originalFetch = global.fetch;
  global.fetch = (url) => {
    if (url.includes('/api/courses')) {
      return {
        then: (cb) => {
          const res = {
            json: () => [
              {
                name: 'B.Sc Physics',
                duration: '3 Years',
                description: 'Study of mechanics dynamics...',
                careers: ['Lab Analyst'],
                skills: ['Physics Lab Work']
              }
            ]
          };
          const next = cb(res);
          return {
            then: (cb2) => {
              cb2(next);
              return { catch: () => {} };
            },
            catch: () => {}
          };
        }
      };
    }
    return Promise.resolve({ json: () => Promise.resolve([]) });
  };

  let appendChildCalledCount = 0;
  const mockElements = {
    'all-courses-modal': {
      classList: {
        classes: new Set(),
        add(cls) { this.classes.add(cls); },
        remove(cls) { this.classes.delete(cls); },
        contains(cls) { return this.classes.has(cls); }
      }
    },
    'modal-course-search': {
      value: ''
    },
    'modal-courses-directory': {
      innerHTML: ''
    },
    'advisor-search-academic': {
      value: ''
    },
    'advisor-results-academic': {
      innerHTML: '',
      appendChild: () => { appendChildCalledCount++; },
      scrollIntoView: () => { mockElements.scrolledToResults = true; }
    }
  };
  
  mockElements.scrolledToResults = false;
  
  // Override document.getElementById
  const originalGetElementById = global.document.getElementById;
  global.document.getElementById = (id) => {
    return mockElements[id] || {
      classList: { add: () => {}, remove: () => {} },
      style: {},
      value: '',
      innerHTML: ''
    };
  };
  
  // Now call openAllCoursesModal
  openAllCoursesModal();
  
  // Verify modal is active
  if (!mockElements['all-courses-modal'].classList.contains('active')) {
    throw new Error("openAllCoursesModal failed to add 'active' class to modal.");
  }
  
  // Parse rendered columns from directory innerHTML
  const renderedHTML = mockElements['modal-courses-directory'].innerHTML;
  if (!renderedHTML.includes('Secondary/Diploma') || !renderedHTML.includes('UG') || !renderedHTML.includes('PG') || !renderedHTML.includes('PhD')) {
    throw new Error("openAllCoursesModal did not render all 4 course catalog columns.");
  }
  
  console.log("✓ openAllCoursesModal successfully rendered course catalog columns.");

  // Set up querySelectorAll mock with persistent item nodes
  const col1Items = [
    {
      style: { display: '' },
      getAttribute: (attr) => attr === 'data-course-name' ? 'B.Sc Physics' : ''
    },
    {
      style: { display: '' },
      getAttribute: (attr) => attr === 'data-course-name' ? 'B.Sc Mathematics' : ''
    }
  ];
  
  const col2Items = [
    {
      style: { display: '' },
      getAttribute: (attr) => attr === 'data-course-name' ? 'MBA' : ''
    }
  ];

  const colElements = [
    {
      style: { display: '' },
      querySelectorAll: (sel) => {
        if (sel === '.modal-dir-item') {
          return col1Items;
        }
        return [];
      }
    },
    {
      style: { display: '' },
      querySelectorAll: (sel) => {
        if (sel === '.modal-dir-item') {
          return col2Items;
        }
        return [];
      }
    }
  ];
  
  const originalQuerySelectorAll = global.document.querySelectorAll;
  global.document.querySelectorAll = (sel) => {
    if (sel === '.modal-dir-col') {
      return colElements;
    }
    return [];
  };
  
  // Test filter matching "physics"
  mockElements['modal-course-search'].value = 'physics';
  filterModalCourses();
  
  // Check column 1 (B.Sc Physics should be shown, B.Sc Math hidden, column display should be visible)
  const itemsCol1 = colElements[0].querySelectorAll('.modal-dir-item');
  if (itemsCol1[0].style.display !== '' || itemsCol1[1].style.display !== 'none') {
    throw new Error("filterModalCourses failed to filter items correctly.");
  }
  if (colElements[0].style.display === 'none') {
    throw new Error("filterModalCourses hid a column that contains matching items.");
  }
  
  // Check column 2 (MBA doesn't match 'physics', so it should be hidden, and column should be hidden)
  const itemsCol2 = colElements[1].querySelectorAll('.modal-dir-item');
  if (itemsCol2[0].style.display !== 'none' || colElements[1].style.display !== 'none') {
    throw new Error("filterModalCourses failed to hide non-matching items/columns.");
  }
  
  console.log("✓ filterModalCourses successfully filtered items and columns.");

  // Test selection
  selectCourseFromModal('B.Sc Physics');
  
  if (mockElements['advisor-search-academic'].value !== 'B.Sc Physics') {
    throw new Error("selectCourseFromModal did not set search input value.");
  }
  if (mockElements['all-courses-modal'].classList.contains('active')) {
    throw new Error("selectCourseFromModal did not close the modal.");
  }
  if (appendChildCalledCount === 0) {
    throw new Error("selectCourseFromModal did not trigger runAcademicSearch or render any search results.");
  }
  if (!mockElements.scrolledToResults) {
    throw new Error("selectCourseFromModal did not scroll results into view.");
  }
  
  console.log("✓ selectCourseFromModal successfully selected, closed modal, triggered search, and scrolled to results.");
  
  // Restore document and global methods
  global.document.getElementById = originalGetElementById;
  global.document.querySelectorAll = originalQuerySelectorAll;
  global.fetch = originalFetch;

  console.log("\n--------------------------------------------------");
  console.log("✓ ALL V4 POPUP CATALOG CHECKS PASSED SUCCESSFULLY!");
  console.log("--------------------------------------------------");
} catch (error) {
  console.error("\n❌ VERIFICATION ERROR FOUND:");
  console.error(error.stack || error.message);
  process.exit(1);
}
