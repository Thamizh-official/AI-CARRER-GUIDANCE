const fs = require('fs');
const path = require('path');

const projectRoot = 'C:/Users/tamil/.gemini/antigravity/scratch/ai-career-guidance';
const mdPath = path.join(projectRoot, 'Abstract.md');

const abstract16Lines = `# ABSTRACT

Choosing the right career path has become a major challenge for many college students today.
Most students are unaware of the exact technical and practical skills needed for modern job roles.
Traditional career counseling is often manual, expensive, and not easily accessible to everyone.
To solve this problem, this project introduces **AI Career Guidance and Job Sphere AI**.
It is an intelligent, user-friendly web platform designed to guide students toward the right careers.
The system allows users to enter their educational background, technical interests, and existing skills.
Using smart matching algorithms, it compares student profiles with current industry job requirements.
The platform automatically identifies skill gaps and clearly highlights what each student needs to learn.
It generates a personalized, step-by-step career roadmap tailored to the student's chosen career goal.
In addition, Job Sphere AI recommends the best online courses, practical projects, and certifications.
Students can also explore realistic salary ranges, job descriptions, and top hiring company trends.
An interactive resume review module helps students optimize their resumes to pass recruiter screenings.
Built with a responsive web interface and a fast backend, the application runs smoothly on any device.
Real-time testing confirms that the platform provides instant, reliable, and unbiased career advice.
It saves students valuable time and removes confusion and guesswork from their career decisions.
Overall, this project acts as an accessible 24/7 digital career mentor to help students achieve their career goals.

---

**Keywords:** *AI Career Guidance, Job Sphere AI, Skill Gap Analysis, Career Roadmap, Job Recommendation, Student Mentorship.*
`;

fs.writeFileSync(mdPath, abstract16Lines, 'utf8');
console.log('Successfully wrote 16-line Abstract.md');
