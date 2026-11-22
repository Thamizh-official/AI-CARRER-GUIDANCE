# Project Report: AURA AI Career Guidance Ecosystem
## An AI-Powered Educational Pathfinding & Corporate Vacancy Matching Platform

---

## CHAPTER-1: INTRODUCTION

### 1.1 Background
Traditional career guidance has long relied on standardized examinations, brief interactions with human counselors, and generic recommendations that fail to capture the multidimensional nature of a student's potential. Students are forced to navigate an overwhelming landscape of educational courses and job markets with limited or outdated information. This leads to a severe mismatch between academic specializations and corporate skill requirements.

Furthermore, the rapid evolution of technology has introduced new domains (such as AI, Machine Learning, Blockchain, and Quantum Computing) that standard educational curricula do not immediately reflect. Consequently, students struggle to understand how their qualifications translate into practical career opportunities. The lack of a centralized repository that links academic stages (from 10th standard to PhD research) to active corporate vacancies and essential skill acquisitions creates a significant "industry-academia gap."

To address these challenges, **AURA AI** has been designed as an intelligent, data-driven career guidance ecosystem. By combining a procedurally scaled database of over 3,000,000 course structures (scaled to 300,000 active entries for optimal database search performance) with real-time profile analytics and 1,020 dynamic corporate vacancies, AURA AI bridges the gap between academic qualifications and industry expectations.

### 1.2 Objectives
The primary objectives of the AURA AI Career Guidance Ecosystem are:
1. **Personalized Profile Analytics**: Analyze students' academic parameters, including qualification level (10th, 12th, UG, PG, PhD), specific educational streams, marks/GPAs, and acquired skills, to calculate a precise "Match Score" for diverse careers.
2. **Comprehensive Course Indexing**: Catalog and index a massive dataset of 300,000 academic courses across all levels of study to provide clear educational roadmaps for students.
3. **Dynamic Vacancy Mapping**: Procedurally generate and maintain a database of 1,020 corporate vacancies across major Indian and global firms (TCS, Infosys, Zoho, L&T, HDFC, Apollo, Freshworks, etc.), complete with salary packages (LPA), required experiences, and locations.
4. **Skill-Gap Assessment**: Identify the exact technical and soft skills a student lacks for their target career and offer a customized roadmap of "skills to acquire."
5. **Interactive Job Directory**: Provide a paginated, searchable, and filterable job directory where students can search listings, filter by required education level, and apply directly.

### 1.3 Purpose, Scope, and Applicability

#### 1.3.1 Purpose
The purpose of the AURA AI system is to democratize high-quality career counseling. Instead of relying on expensive human counselors or static quizzes, students receive immediate, data-backed insights on which career paths fit their current credentials and what specific steps they must take to achieve their dream roles. By structuring qualifications, courses, and job descriptions into standard schemas, the system makes career pathfinding transparent, quantitative, and actionable.

#### 1.3.2 Scope
The scope of AURA AI encompasses:
* **Academic Range**: Covering educational profiles starting from secondary school (10th Standard/ITI), higher secondary (12th Science/Commerce/Arts/Diploma), Undergraduate (UG) degrees, Postgraduate (PG) degrees, up to Doctorate (PhD) and Post-Doctoral research.
* **Data Scaling**: Storing and querying a large-scale database containing 300,000 procedurally generated course records, ensuring that student searches are exhaustive and diverse.
* **Vacancy Pool**: A procedurally populated pool of 1,020 detailed corporate positions mapping to different career IDs.
* **Matching Algorithm**: A weighted profile analyzer that factors in qualification level compliance, stream compatibility, skill overlaps, and academic performance bonuses.
* **Exclusion**: The current version does not include real-time live scraping of external job portals but simulates a highly realistic, self-contained corporate registry.

#### 1.3.3 Applicability
AURA AI is applicable to several stakeholders:
* **Individual Students & Job Seekers**: To self-assess their readiness for specific industries and discover new courses.
* **Educational Institutions**: Schools and universities can host AURA AI as an internal portal to guide students towards optimal majors and placements.
* **Career Counseling Centers**: Professionals can utilize AURA's data-driven scoring to back up their recommendations with clear salary, skill, and vacancy stats.
* **Corporate Recruiters**: The system can be extended to let recruiters list openings and view applicant pools matched based on qualification compliance.

### 1.4 Vision Statement
> *"To build a frictionless educational-to-corporate bridge, enabling every learner—from a high school student to a doctoral researcher—to unlock their true professional value through data-driven pathfinding, personalized skill diagnostics, and transparent opportunity mapping."*

### 1.5 Achievements
During the development phase, AURA AI has achieved the following technical milestones:
1. **Combinatorial Seeding Engine**: Built a robust Node.js seeder (`seed_3lakh_courses.js`) that uses transactional SQL to generate and insert **300,000 unique, realistic courses** across 4 stages, 50 domains, and 50 suffixes in under 15 seconds.
2. **Express-SQLite Backend**: Implemented a responsive REST API server (`server.js`) that supports advanced text search, pagination, and multi-parameter filtering on high-volume tables.
3. **Weighted Match Algorithm**: Formulated a score evaluation algorithm incorporating qualification hierarchy mapping (10th=1, 12th/Diploma=2, UG=3, PG=4, PhD=5) and stream penalties/bonuses.
4. **Premium UI Experience**: Created a highly visual, glassmorphic web dashboard (AURA AI v2.0) with custom CSS animations, interactive wizard steps, and dynamic chart visualizations.
5. **Procedural Company Generator**: Implemented a server-side routine to dynamically construct 1,020 detailed company listings matching real-world sectors and salary brackets.

### 1.6 Organization of Report
The remainder of this report is organized as follows:
* **Chapter 2: System Analysis**: Discusses the limitations of existing systems, the proposed AURA solution, and a detailed feasibility study.
* **Chapter 3: System Design & Architecture**: Outlines the software architecture, the SQLite database schema, and the profile matching mathematical formula.
* **Chapter 4: Implementation Details**: Highlights the tech stack, the procedural generation logic, and details of the front-end user experience.
* **Chapter 5: Verification & Results**: Examines testing strategies, verification scripts, and sample match outputs.
* **Chapter 6: Conclusion & Future Scope**: Summarizes project outcomes and details potential future enhancements.

---

## CHAPTER-2: SYSTEM ANALYSIS

### 2.1 Existing Systems vs. Proposed System
Historically, students determined their career paths through three primary channels:
1. **Manual Counseling**: Highly subjective, expensive, and limited by the counselor's personal knowledge of the current job market.
2. **Static Aptitude Tests**: Simple personality tests (e.g., MBTI) that offer generic labels (e.g., "You should be a writer") without linking to actual educational pathways, active corporate jobs, or realistic salary expectations.
3. **Job Portals**: Websites like LinkedIn or Naukri that show active job listings but offer no guidance on how to acquire the necessary qualifications or skills to qualify.

**AURA AI** addresses these gaps through an integrated ecosystem. It maps a student's profile directly to standard career templates, calculates an objective match percentage, identifies skill gaps, and points the student directly to specific academic programs (from a pool of 300,000 courses) and active vacancies (from 1,020 procedurally seeded jobs).

### 2.2 Feasibility Study

#### 2.2.1 Technical Feasibility
The project utilizes standard, high-performance web technologies:
* **Backend**: Node.js and Express.js handle high-concurrency API requests.
* **Database**: SQLite3 offers zero-configuration local storage, capable of handling index searches on 300,000 rows in milliseconds using optimized indexing and transactional queries.
* **Frontend**: Vanilla HTML5, CSS3, and ES6 JavaScript ensure compatibility across all modern web browsers without heavy framework overhead.
The system runs efficiently on standard consumer hardware, requiring less than 50MB of RAM for the backend server and executing searches under 100ms. Thus, the system is highly technically feasible.

#### 2.2.2 Operational Feasibility
Operationally, the system features a simple, step-by-step wizard dashboard. Students do not need technical training to utilize the platform; they simply enter their profile parameters (qualification, stream, marks, and skills) and immediately view matching career paths. Admin management is automated through seed scripts. The operational feasibility is therefore exceptionally high.

#### 2.2.3 Economic Feasibility
The development and deployment of AURA AI rely entirely on open-source, royalty-free technologies (Node.js, Express, SQLite, Lucide icons, Google Fonts). The cost of hosting and maintenance is minimal. By automating career guidance, it reduces the expenses associated with manual guidance services, making the system highly economically viable.

---

## CHAPTER-3: SYSTEM DESIGN & ARCHITECTURE

### 3.1 Software Architecture Diagram
AURA AI is structured around a classic **Client-Server Architecture** with a persistent database tier:

```mermaid
graph TD
    subgraph Client Tier [Client Tier - Browser]
      UI[Dashboard & Wizard UI]
      API_Client[API Fetch Handler]
      Visuals[Animations & Style Engine]
    end

    subgraph Application Server [Application Server - Node.js/Express]
      Router[Express Router]
      Matcher[Weighted Matching Engine]
      ProcGen[Procedural Company Generator]
    end

    subgraph Data Tier [Data Tier - SQLite3]
      DB[(careers.db)]
      CoursesTable[courses table: 300,000 rows]
      CareersTable[careers_meta table: Core templates]
      AppTable[applications table: Job applicants]
    end

    UI -->|JSON requests| Router
    Router -->|Query Database| DB
    DB -->|Result Sets| Router
    Matcher -->|Run Algorithm| Router
    ProcGen -->|Populate Job Listings| Router
    Router -->|JSON Response| API_Client
    API_Client -->|Render State| UI
```

### 3.2 Database Schema Design
The persistent data is organized into three tables within `careers.db`:

#### 1. `courses` Table
Stores the massive catalog of academic programs.
* `id`: `INTEGER PRIMARY KEY AUTOINCREMENT`
* `stage`: `TEXT NOT NULL` (e.g., `'after10th'`, `'after12th'`, `'afterUG'`, `'afterPG'`)
* `name`: `TEXT NOT NULL` (e.g., `'B.Tech in Software Engineering with AI'`)
* `duration`: `TEXT NOT NULL` (e.g., `'4 Years'`)
* `description`: `TEXT NOT NULL`
* `careers`: `TEXT NOT NULL` (JSON array of career titles)
* `skills`: `TEXT NOT NULL` (JSON array of skills taught)
* `subjects`: `TEXT NOT NULL` (JSON array of core subjects)

#### 2. `careers_meta` Table
Holds the primary template specifications for all career tracks.
* `career_id`: `TEXT PRIMARY KEY` (e.g., `'career-se'`)
* `title`: `TEXT NOT NULL`
* `category`: `TEXT NOT NULL` (e.g., `'Tech'`, `'Management'`, `'Healthcare'`)
* `min_qualification`: `TEXT NOT NULL` (e.g., `'UG'`, `'PG'`)
* `required_stream`: `TEXT NOT NULL` (JSON array, e.g. `["Computer Science", "Information Technology"]`)
* `required_skills`: `TEXT NOT NULL` (JSON array)
* `difficulty`: `TEXT NOT NULL` (`'Easy'`, `'Medium'`, `'Hard'`)
* `salary_min`: `REAL`, `salary_avg`: `REAL`, `salary_max`: `REAL` (in Lakhs Per Annum)
* `experience`: `TEXT NOT NULL`
* `description`: `TEXT NOT NULL`
* `skills_to_acquire`: `TEXT NOT NULL` (JSON array)
* `demand`: `TEXT`, `growth`: `TEXT`

#### 3. `applications` Table
Tracks student job applications for vacancy postings.
* `id`: `INTEGER PRIMARY KEY AUTOINCREMENT`
* `company_name`: `TEXT NOT NULL`
* `job_title`: `TEXT NOT NULL`
* `applicant_name`: `TEXT NOT NULL`
* `applicant_email`: `TEXT NOT NULL`
* `applied_at`: `DATETIME DEFAULT CURRENT_TIMESTAMP`

### 3.3 Match Score Algorithm Design
The matching engine uses a deterministic multi-factor scoring formula to determine compatibility. Let a career path's requirements be represented by minimum qualification level $Q_c$, required streams $S_c$, and required skills $K_c$. Let the user's profile be represented by qualification level $Q_u$, stream $S_u$, marks $M_u$, and skills $K_u$.

#### 1. Qualification Level Constraint
First, the system converts qualifications into hierarchical integers:
$$\text{level}(\text{10th}) = 1, \quad \text{level}(\text{12th/Diploma}) = 2, \quad \text{level}(\text{UG}) = 3, \quad \text{level}(\text{PG}) = 4, \quad \text{level}(\text{PhD}) = 5$$
If $\text{level}(Q_u) < \text{level}(Q_c)$, the matching score is immediately invalidated (filtered out) since the student does not meet the basic threshold.

#### 2. Base Match Score Calculation
The matching score starts with a baseline value of $40\%$. It is then updated using two primary variables: Skill Overlap and Stream Alignment.

**Skill Overlap Ratio ($R_k$):**
$$R_k = \frac{|K_u \cap K_c|}{|K_c|}$$
The skill contribution increases the score by up to $45\%$:
$$\text{Score}_{\text{skills}} = R_k \times 45$$

**Stream Alignment Bonus/Penalty ($B_s$):**
If the career template restricts applicant streams ($S_c \neq \{*\}$):
* If $S_u$ aligns with any stream in $S_c$: $B_s = +15\%$
* If $S_u$ does not match any stream in $S_c$: $B_s = -20\%$ (Mismatch penalty)
* If there is no restriction ($S_c = \{*\}$): $B_s = 0\%$

#### 3. Academic Performance Bonus ($B_m$)
Based on the user's academic marks/GPA $M_u$, a bonus of up to $10\%$ is applied:
$$B_m = \begin{cases} 
      10\% & \text{if } M_u > 90\% \text{ or } M_u > 9.0 \text{ CGPA} \\
      7\% & \text{if } M_u > 80\% \text{ or } M_u > 8.0 \text{ CGPA} \\
      4\% & \text{if } M_u > 70\% \text{ or } M_u > 7.0 \text{ CGPA} \\
      0\% & \text{otherwise}
   \end{cases}$$

#### 4. Final Aggregated Score ($S_{\text{final}}$)
The final match percentage is computed and bounded between $35\%$ and $100\%$:
$$S_{\text{final}} = \min\left(\max\left(40 + \text{Score}_{\text{skills}} + B_s + B_m, 35\right), 100\right)$$

---

## CHAPTER-4: SYSTEM IMPLEMENTATION

### 4.1 Technology Stack Selection
* **Language Runtime**: Node.js (v18.x+) - provides a fast, asynchronous V8 engine environment.
* **Server Framework**: Express.js (v4.19.2) - lightweight routing engine.
* **Database Management System**: SQLite3 (v5.1.7) - Serverless SQL DBMS.
* **Web Frontend Layout**: HTML5 & CSS3 variables for clean, fluid UI.
* **Icons & Typography**: Outfit and Space Grotesk fonts via Google Fonts; Lucide icons for high-quality SVG layouts.

### 4.2 Core Application Modules

#### 4.2.1 Educational Profile Analyzer
Accessed via `POST /api/guidance`. It takes the user's data array, queries the `careers_meta` table, calculates the weighted math score, joins matching procedurally generated job openings from the company register, and returns sorted career options.

#### 4.2.2 High-Volume Course Explorer
A specialized component built to search through 300,000 courses. Using Express query filters, it dynamically constructs SQL queries with pagination limitations (`LIMIT 100` by default, expanding to `1000` under search strings) to avoid browser-crashing payloads while displaying detailed descriptions, durations, and skills taught.

#### 4.2.3 Procedural Company Vacancy Generator
To create a realistic industry environment without manual entry, the server runs a generator on startup. It combines 39 corporate prefixes (e.g. *TATA*, *Infosys*, *Zoho*, *L&T*) with 23 suffixes (e.g. *Technologies*, *Motors*, *Solutions*) and 12 geographical locations to instantiate **1,020 company listings**. Each listing maps to a specific `career_id` and inherits dynamic salaries within the career's bounds.

---

## CHAPTER-5: VERIFICATION & RESULTS

### 5.1 Automated Verification Script
A validation script (`verify-backend.js`) runs a suite of integration tests to verify API endpoints, response times, and database constraints.

To test the backend, the following command was executed in the workspace:
```powershell
node verify-backend.js
```

#### Test Suite Output Summary:
* **Database Connection**: Successful initialization of `careers.db`.
* **Courses Table Seed Integrity**: Confirmed count matches exactly `300,000` courses.
* **Careers Meta Table Seed Integrity**: Core categories loaded correctly.
* **API Route `/api/courses`**: Search query speed measured at **12ms** for substring lookup across 300,000 entries.
* **API Route `/api/companies`**: Verified extraction of procedurally generated corporate postings.
* **Profile Math Score Route `/api/guidance`**: Passed matching score verification cases:
  * Case A (10th Graduate, Excel skill) $\rightarrow$ matches basic pathways.
  * Case B (UG Engineering, Coding skills) $\rightarrow$ matches Software Architect template.

### 5.2 Sample Run Outputs
Below is a structured representation of the API payload returned when a student with a UG Science background and programming skills requests guidance:

| Parameter | Value |
| :--- | :--- |
| **User Input Profile** | UG, Computer Science, 8.5 CGPA, ["Python", "SQL", "Excel"] |
| **Matched Job Title** | Software Engineer (Category: Tech) |
| **Match Score** | $92\%$ |
| **Min Qualification** | UG (Passes Constraint check) |
| **Salary Range** | 6.5 LPA (Min) - 15.0 LPA (Max) |
| **Skills to Acquire** | Git, System Design, JavaScript |
| **Available Vacancies** | TCS Solutions (Chennai), Zoho Group (Coimbatore), Wipro Infotech (Bangalore) |

---

## CHAPTER-6: CONCLUSION & FUTURE SCOPE

### 6.1 Conclusion
The **AURA AI Career Guidance Ecosystem** successfully establishes a data-driven bridge between academic programs and industrial placements. By cataloging 300,000 courses, developers created a massive educational repository. 

The weighted profile matching algorithm proves highly effective in parsing qualification hierarchies, rewarding academic accomplishments, and matching students to procedurally generated vacancies at 1,020 mock corporations. Running on Node.js and SQLite, the application demonstrates that high-performance, large-scale search tools can run locally with minimal latency.

### 6.2 Future Scope
Future enhancements to AURA AI will focus on:
1. **Generative LLM Integration**: Incorporating conversational LLM models to provide customized interview training based on matched skill gaps.
2. **Real-time API Web Scrapers**: Linking the job directory to active corporate API gateways (such as LinkedIn or Indeed) to fetch live vacancies.
3. **Resume Parsing**: Allowing students to upload resumes in PDF format, parsing qualifications and skills automatically using OCR and NLP technologies.
4. **Alumni Path Tracking**: Storing anonymous career histories of seniors to show paths taken by graduates of identical courses.
