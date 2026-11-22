// AURA AI Career Guidance System - Core Datasets

// Hierarchical Educational Qualifications Mapping
const qualificationsData = {
  "10th": {
    name: "10th Standard / SSLC",
    level: 1,
    nextOptions: ["12th Science", "12th Commerce", "12th Arts", "Diploma in Engineering", "ITI Certification"]
  },
  "12th Science": {
    name: "12th Science (HSC)",
    level: 2,
    nextOptions: ["B.E. / B.Tech Computer Science", "B.E. Mechanical", "B.E. Civil", "B.Sc Physics", "B.Sc Biotechnology", "MBBS / BDS"]
  },
  "12th Commerce": {
    name: "12th Commerce (HSC)",
    level: 2,
    nextOptions: ["B.Com (General)", "BBA (Management)", "CA Foundation (Chartered Accountancy)", "B.Sc Economics"]
  },
  "12th Arts": {
    name: "12th Arts (HSC)",
    level: 2,
    nextOptions: ["B.A. English Lit", "B.A. Journalism", "B.FA (Fine Arts)", "B.Sc Visual Communication", "Integrated Law (BA LLB)"]
  },
  "Diploma": {
    name: "Diploma in Engineering",
    level: 2,
    nextOptions: ["B.E. / B.Tech (Lateral Entry)", "Associate Technical Roles"]
  },
  "UG": {
    name: "Undergraduate Degree (UG)",
    level: 3,
    nextOptions: ["Postgraduate Degree (PG)", "M.Sc", "M.Tech", "MBA", "Corporate Specialist Jobs"]
  },
  "PG": {
    name: "Postgraduate Degree (PG)",
    level: 4,
    nextOptions: ["PhD Research", "Senior Executive Roles", "University Lecturer Roles"]
  },
  "PhD": {
    name: "Doctor of Philosophy (PhD)",
    level: 5,
    nextOptions: ["Post-Doc Fellowship", "Professor / Academic Dean", "Principal Scientist", "R&D Lead"]
  }
};

// Global Comprehensive Courses Catalog (World-wide Courses Roadmap)
const coursesCatalog = {
  "after10th": [
    {
      "name": "12th Science Stream (PCM / PCB)",
      "duration": "2 Years",
      "category": "Higher Secondary",
      "description": "Foundational higher secondary stream focusing on Physics, Chemistry, Mathematics, and Biology/Computer Science. Direct gateway to Engineering, Medicine, and Pure Sciences.",
      "careers": [
        "Software Engineer",
        "Doctor",
        "R&D Scientist",
        "Mechanical Engineer"
      ],
      "skills": [
        "Analytical Skills",
        "Mathematics",
        "Science Labs",
        "Logical Thinking"
      ],
      "subjects": [
        "Physics I & II",
        "Chemistry I & II",
        "Mathematics I & II",
        "Biology / Computer Science"
      ],
      "salary": "Pre-requisite for UG degrees",
      "companies": [
        "IITs, NITs, AIIMS, State Universities"
      ]
    },
    {
      "name": "12th Commerce Stream",
      "duration": "2 Years",
      "category": "Higher Secondary",
      "description": "Covers Accountancy, Economics, Business Studies, and Commerce. Gateway to Banking, Finance, Corporate Law, and Management.",
      "careers": [
        "Chartered Accountant (CA)",
        "Financial Analyst",
        "Corporate Lawyer",
        "Investment Banker"
      ],
      "skills": [
        "Accounting",
        "Financial Analysis",
        "Economics",
        "Taxation"
      ],
      "subjects": [
        "Accountancy",
        "Business Studies",
        "Macro & Micro Economics",
        "Business Mathematics"
      ],
      "salary": "Pre-requisite for B.Com/BBA/CA",
      "companies": [
        "SRCC, Loyola College, Christ University"
      ]
    },
    {
      "name": "12th Arts & Humanities Stream",
      "duration": "2 Years",
      "category": "Higher Secondary",
      "description": "Focuses on History, Geography, Political Science, Psychology, and Literature. Gateway to Civil Services (UPSC), Journalism, Design, and Law.",
      "careers": [
        "Civil Services (IAS/IPS)",
        "Corporate Lawyer",
        "Digital Journalist",
        "UI/UX Designer"
      ],
      "skills": [
        "Critical Thinking",
        "Communication",
        "Creative Writing",
        "Research"
      ],
      "subjects": [
        "Political Science",
        "History",
        "Sociology",
        "Economics",
        "English Literature"
      ],
      "salary": "Pre-requisite for BA/Law/Design",
      "companies": [
        "Delhi University, St. Xavier's, NIFT, NLUs"
      ]
    },
    {
      "name": "Diploma in Computer Engineering (Polytechnic)",
      "duration": "3 Years",
      "category": "Polytechnic Diploma",
      "description": "Vocational engineering diploma in hardware, networking, programming, and databases. Enables direct lateral entry into B.E/B.Tech 2nd year.",
      "careers": [
        "Junior Software Developer",
        "Network Administrator",
        "Hardware Technician"
      ],
      "skills": [
        "C/C++",
        "Java",
        "Computer Networks",
        "Hardware Troubleshooting",
        "SQL"
      ],
      "subjects": [
        "Digital Electronics",
        "Data Structures",
        "Operating Systems",
        "Computer Hardware & Networking",
        "Web Design"
      ],
      "salary": "₹3.0 - 6.0 LPA",
      "companies": [
        "Zoho",
        "TCS",
        "Cognizant",
        "L&T",
        "Schneider Electric"
      ]
    },
    {
      "name": "Diploma in Mechanical Engineering",
      "duration": "3 Years",
      "category": "Polytechnic Diploma",
      "description": "Practical engineering training in machine tools, CAD drafting, manufacturing processes, and automobile maintenance.",
      "careers": [
        "Junior Mechanical Engineer",
        "CAD Draftsman",
        "Plant Maintenance Supervisor"
      ],
      "skills": [
        "AutoCAD",
        "CNC Programming",
        "Machine Maintenance",
        "Manufacturing Processes"
      ],
      "subjects": [
        "Engineering Mechanics",
        "Thermodynamics",
        "Manufacturing Technology",
        "Machine Drawing",
        "Thermal Engineering"
      ],
      "salary": "₹2.8 - 5.5 LPA",
      "companies": [
        "Tata Motors",
        "Ashok Leyland",
        "TVS Motors",
        "L&T",
        "Hyundai"
      ]
    },
    {
      "name": "Diploma in Electrical & Electronics Engineering (EEE)",
      "duration": "3 Years",
      "category": "Polytechnic Diploma",
      "description": "Hands-on diploma covering power generation, electrical machines, switchgears, and wiring circuits.",
      "careers": [
        "Junior Electrical Engineer",
        "Substation Operator",
        "Panel Wiring Specialist"
      ],
      "skills": [
        "Circuit Wiring",
        "PLC Programming",
        "Power Distribution",
        "Troubleshooting"
      ],
      "subjects": [
        "Electrical Circuit Theory",
        "Electrical Machines I & II",
        "Power Systems",
        "Control of Electrical Machines",
        "Basic Electronics"
      ],
      "salary": "₹3.0 - 5.5 LPA",
      "companies": [
        "TNEB / State Discoms",
        "BHEL",
        "ABB",
        "Siemens",
        "L&T"
      ]
    },
    {
      "name": "Diploma in Electronics & Communication (ECE)",
      "duration": "3 Years",
      "category": "Polytechnic Diploma",
      "description": "Focuses on semiconductor electronics, analog & digital communication, microcontrollers, and IoT sensor setups.",
      "careers": [
        "Telecom Technician",
        "Embedded Board Tester",
        "PCB Design Assistant"
      ],
      "skills": [
        "Microcontrollers",
        "PCB Soldering",
        "Oscilloscope Diagnostics",
        "Telecom Testing"
      ],
      "subjects": [
        "Electronic Devices & Circuits",
        "Digital Electronics",
        "Microcontroller 8051",
        "Communication Engineering",
        "Embedded C"
      ],
      "salary": "₹3.0 - 6.0 LPA",
      "companies": [
        "Foxconn",
        "Salcomp",
        "Samsung Electronics",
        "Airtel",
        "Jio"
      ]
    },
    {
      "name": "Diploma in Civil Engineering",
      "duration": "3 Years",
      "category": "Polytechnic Diploma",
      "description": "Practical training in construction surveying, site inspection, structural concrete, and blueprint estimation.",
      "careers": [
        "Junior Site Engineer",
        "Surveyor",
        "Building Inspector",
        "AutoCAD Draftsman"
      ],
      "skills": [
        "AutoCAD",
        "Surveying (Total Station)",
        "Site Supervision",
        "Quantity Estimation"
      ],
      "subjects": [
        "Surveying I & II",
        "Civil Engineering Drawing",
        "Concrete Technology",
        "Transportation Engineering",
        "Estimation & Costing"
      ],
      "salary": "₹2.8 - 5.0 LPA",
      "companies": [
        "L&T Construction",
        "Shapoorji Pallonji",
        "DLF",
        "NHAI",
        "PWD"
      ]
    },
    {
      "name": "Diploma in Automobile Engineering",
      "duration": "3 Years",
      "category": "Polytechnic Diploma",
      "description": "Specialized diploma in vehicle chassis, IC engines, EV battery mechanics, and diagnostic testing.",
      "careers": [
        "Automotive Technician",
        "EV Maintenance Supervisor",
        "Service Engineer"
      ],
      "skills": [
        "Engine Overhauling",
        "EV Powertrain Diagnostics",
        "Vehicle Inspection",
        "CAD"
      ],
      "subjects": [
        "Automotive Engines",
        "Automotive Chassis & Transmission",
        "Electric & Hybrid Vehicles",
        "Vehicle Maintenance",
        "Automotive Electrical Systems"
      ],
      "salary": "₹3.0 - 5.5 LPA",
      "companies": [
        "Maruti Suzuki",
        "TVS Motors",
        "Ola Electric",
        "Mahindra",
        "Royal Enfield"
      ]
    },
    {
      "name": "Diploma in Medical Laboratory Technology (DMLT)",
      "duration": "2 Years",
      "category": "Allied Health Diploma",
      "description": "Paramedical diploma training candidates in clinical biochemistry, pathology testing, blood banking, and microbiology cultures.",
      "careers": [
        "Medical Lab Technician",
        "Phlebotomist",
        "Diagnostic Lab Assistant"
      ],
      "skills": [
        "Blood Testing",
        "Pathology Diagnostics",
        "Microscopy",
        "Biochemistry Analyzers"
      ],
      "subjects": [
        "Clinical Biochemistry",
        "Hematology & Blood Banking",
        "Medical Microbiology",
        "Clinical Pathology",
        "Histopathology"
      ],
      "salary": "₹2.5 - 4.5 LPA",
      "companies": [
        "Apollo Diagnostics",
        "Dr. Lal PathLabs",
        "Metropolis",
        "SRL Diagnostics"
      ]
    },
    {
      "name": "Diploma in Pharmacy (D.Pharm)",
      "duration": "2 Years",
      "category": "Pharmacy Diploma",
      "description": "Approved by Pharmacy Council of India (PCI). Qualifies candidates to obtain registered pharmacist license to dispense drugs or open retail medical stores.",
      "careers": [
        "Registered Pharmacist",
        "Hospital Dispenser",
        "Medical Representative"
      ],
      "skills": [
        "Pharmacology",
        "Drug Dispensing",
        "Inventory Management",
        "Patient Counseling"
      ],
      "subjects": [
        "Pharmaceutics",
        "Pharmaceutical Chemistry",
        "Pharmacognosy",
        "Human Anatomy & Physiology",
        "Drug Store Management"
      ],
      "salary": "₹2.8 - 5.0 LPA",
      "companies": [
        "Apollo Pharmacy",
        "MedPlus",
        "Cipla",
        "Sun Pharma",
        "Fortis"
      ]
    },
    {
      "name": "ITI Electrician Trade",
      "duration": "2 Years",
      "category": "Vocational ITI",
      "description": "Hands-on vocational trade training certified by NCVT for residential, commercial, and industrial electrical installations.",
      "careers": [
        "Industrial Electrician",
        "Maintenance Technician",
        "Control Panel Wireman"
      ],
      "skills": [
        "Domestic Wiring",
        "Motor Rewinding",
        "Transformer Maintenance",
        "Safety Protocols"
      ],
      "subjects": [
        "Trade Theory (Electrical)",
        "Engineering Drawing",
        "Workshop Calculation & Science",
        "Trade Practical",
        "Safety Practices"
      ],
      "salary": "₹2.2 - 4.2 LPA",
      "companies": [
        "Indian Railways",
        "BHEL",
        "State Electricity Boards",
        "Schneider Electric"
      ]
    },
    {
      "name": "ITI Fitter & Machinist Trade",
      "duration": "2 Years",
      "category": "Vocational ITI",
      "description": "Practical trade certification focused on lathe operations, milling, drilling, CNC machining, and mechanical assembly.",
      "careers": [
        "Machinist",
        "Tool & Die Maker",
        "Assembly Line Operator"
      ],
      "skills": [
        "Lathe Operations",
        "Precision Measurement",
        "CNC Machine Handling",
        "Blueprint Reading"
      ],
      "subjects": [
        "Fitter Trade Theory",
        "Machinist Practices",
        "Engineering Drawing",
        "Workshop Science",
        "Precision Measuring Instruments"
      ],
      "salary": "₹2.2 - 4.0 LPA",
      "companies": [
        "Tata Motors",
        "Bharat Forge",
        "HAL",
        "ISRO Subcontractors",
        "Ashok Leyland"
      ]
    }
  ],
  "after12th": [
    {
      "name": "B.E. Computer Science & Engineering (CSE)",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Core computing degree covering data structures, algorithms, operating systems, compiler design, full-stack development, and cloud computing.",
      "careers": [
        "Software Engineer",
        "Full-Stack Developer",
        "Cloud Engineer",
        "System Architect"
      ],
      "skills": [
        "Data Structures",
        "Java",
        "Python",
        "SQL",
        "Cloud Architecture",
        "System Design"
      ],
      "subjects": [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "Software Engineering",
        "Compiler Design"
      ],
      "salary": "₹6.5 - 24 LPA",
      "companies": [
        "Zoho",
        "Amazon",
        "Google",
        "Microsoft",
        "TCS Digital",
        "Infosys DSE"
      ]
    },
    {
      "name": "B.Tech Artificial Intelligence & Data Science (AI & DS)",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Specialized undergraduate engineering degree focused on machine learning algorithms, deep learning neural networks, big data processing, and natural language processing.",
      "careers": [
        "AI Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Big Data Architect"
      ],
      "skills": [
        "Python",
        "Machine Learning",
        "TensorFlow",
        "SQL",
        "Deep Learning",
        "Data Visualization"
      ],
      "subjects": [
        "Linear Algebra & Calculus",
        "Data Structures & Algorithms",
        "Applied Machine Learning",
        "Deep Learning & Neural Nets",
        "Big Data Analytics (Spark)",
        "Computer Vision & NLP"
      ],
      "salary": "₹7.5 - 25 LPA",
      "companies": [
        "Google",
        "Amazon",
        "Zoho",
        "Microsoft",
        "Cognizant AI Labs",
        "Flipkart"
      ]
    },
    {
      "name": "B.Tech Cyber Security & Digital Forensics",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Comprehensive program covering network defense, ethical hacking, malware reverse engineering, cryptography, incident response, and cloud security.",
      "careers": [
        "Cyber Security Analyst",
        "Ethical Hacker / Penetration Tester",
        "SOC Analyst",
        "Security Architect"
      ],
      "skills": [
        "Ethical Hacking",
        "Network Security",
        "Wireshark",
        "Penetration Testing",
        "Cryptography",
        "Linux"
      ],
      "subjects": [
        "Cryptography & Network Security",
        "Ethical Hacking & Vulnerability Assessment",
        "Malware Analysis & Forensics",
        "Web Application Security",
        "Cloud & IoT Security",
        "Cyber Laws & Compliance"
      ],
      "salary": "₹6.5 - 20 LPA",
      "companies": [
        "CrowdStrike",
        "Palo Alto Networks",
        "TCS Cyber Defense",
        "Infosys",
        "KPMG",
        "EY"
      ]
    },
    {
      "name": "B.Tech Cloud Computing & DevOps",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Industry-aligned engineering stream focused on AWS/Azure architectures, Kubernetes orchestration, CI/CD automation, and site reliability engineering.",
      "careers": [
        "DevOps Engineer",
        "Cloud Architect",
        "Site Reliability Engineer (SRE)",
        "Infrastructure Automation Lead"
      ],
      "skills": [
        "Docker",
        "Kubernetes",
        "AWS / Azure",
        "CI/CD (Jenkins/GitHub Actions)",
        "Terraform",
        "Linux"
      ],
      "subjects": [
        "Cloud Virtualization & Hypervisors",
        "Containerization & Orchestration",
        "Continuous Integration & Deployment",
        "Infrastructure as Code",
        "Microservices Architecture",
        "Cloud Monitoring"
      ],
      "salary": "₹7.0 - 22 LPA",
      "companies": [
        "Amazon Web Services",
        "Microsoft Azure",
        "Wipro",
        "TCS",
        "Accenture",
        "Cognizant"
      ]
    },
    {
      "name": "B.E. Information Technology (IT)",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Focuses on software application design, enterprise networks, information security, database administration, and web engineering.",
      "careers": [
        "Software Developer",
        "Information Systems Manager",
        "Database Administrator",
        "DevOps Engineer"
      ],
      "skills": [
        "Java",
        "JavaScript",
        "SQL",
        "Networking",
        "REST APIs",
        "Agile Methodologies"
      ],
      "subjects": [
        "Object-Oriented Programming",
        "Design & Analysis of Algorithms",
        "Web Technologies",
        "Information Security",
        "Software Project Management",
        "Distributed Systems"
      ],
      "salary": "₹6.0 - 20 LPA",
      "companies": [
        "Cognizant",
        "TCS",
        "Infosys",
        "HCL",
        "Zoho",
        "Wipro"
      ]
    },
    {
      "name": "B.E. Electronics & Communication Engineering (ECE)",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Core branch covering semiconductor physics, VLSI chip design, embedded systems, signals and DSP, and 5G wireless telecommunications.",
      "careers": [
        "VLSI Design Engineer",
        "Embedded Systems Developer",
        "Telecom Specialist",
        "Firmware Engineer"
      ],
      "skills": [
        "Verilog / VHDL",
        "Embedded C",
        "MATLAB",
        "Microcontrollers (ARM)",
        "Digital Signal Processing"
      ],
      "subjects": [
        "Electronic Circuits & Devices",
        "Digital Logic Design",
        "Signals & Systems",
        "VLSI Design",
        "Microprocessors & Microcontrollers",
        "Wireless & Mobile Communication"
      ],
      "salary": "₹5.5 - 18 LPA",
      "companies": [
        "Qualcomm",
        "Intel",
        "Texas Instruments",
        "Broadcom",
        "Airtel",
        "Jio"
      ]
    },
    {
      "name": "B.E. Electrical & Electronics Engineering (EEE)",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Study of electrical power transmission, smart grids, renewable solar/wind energy, electric vehicle (EV) drives, and industrial automation.",
      "careers": [
        "Electrical Design Engineer",
        "EV Powertrain Engineer",
        "Power Grid Controller",
        "Automation Specialist"
      ],
      "skills": [
        "MATLAB / Simulink",
        "PLC & SCADA",
        "Circuit Analysis",
        "Power Electronics",
        "EV Battery Systems"
      ],
      "subjects": [
        "Electric Circuit Theory",
        "Electrical Machines I & II",
        "Power System Analysis",
        "Power Electronics & Drives",
        "Control Systems",
        "Renewable Energy Systems"
      ],
      "salary": "₹5.0 - 16 LPA",
      "companies": [
        "Schneider Electric",
        "Siemens",
        "L&T",
        "ABB",
        "Tata Power",
        "Tesla / Ola Electric"
      ]
    },
    {
      "name": "B.E. Mechanical Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Pillar engineering discipline covering thermodynamics, fluid dynamics, CAD/CAM drafting, automated manufacturing, and automobile kinetics.",
      "careers": [
        "Mechanical Design Engineer",
        "Thermal Systems Analyst",
        "Manufacturing Lead",
        "Automotive Engineer"
      ],
      "skills": [
        "SolidWorks",
        "ANSYS FEA",
        "Thermodynamics",
        "AutoCAD",
        "Manufacturing Process"
      ],
      "subjects": [
        "Engineering Thermodynamics",
        "Fluid Mechanics & Machinery",
        "Strength of Materials",
        "Kinematics & Dynamics of Machines",
        "Design of Machine Elements",
        "Heat & Mass Transfer"
      ],
      "salary": "₹4.8 - 15 LPA",
      "companies": [
        "Tata Motors",
        "Ashok Leyland",
        "Mahindra & Mahindra",
        "L&T",
        "BHEL",
        "Bosch"
      ]
    },
    {
      "name": "B.E. Civil Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Covers structural analysis, concrete mechanics, geotechnical soil testing, transportation highways, and environmental water systems.",
      "careers": [
        "Structural Engineer",
        "Civil Site Engineer",
        "Project Planning Engineer",
        "Geotechnical Consultant"
      ],
      "skills": [
        "AutoCAD",
        "STAAD.Pro / ETABS",
        "Quantity Surveying",
        "Project Management",
        "Site Inspection"
      ],
      "subjects": [
        "Structural Analysis I & II",
        "Mechanics of Solids",
        "Reinforced Concrete Design",
        "Soil Mechanics & Foundation",
        "Transportation Engineering",
        "Water Resources & Hydrology"
      ],
      "salary": "₹4.5 - 14 LPA",
      "companies": [
        "L&T Construction",
        "Shapoorji Pallonji",
        "Tata Projects",
        "Gammon",
        "Afcons"
      ]
    },
    {
      "name": "B.E. Robotics & Automation Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Interdisciplinary stream combining mechanical kinematics, electrical actuators, computer vision, and AI to design autonomous robotic systems.",
      "careers": [
        "Robotics Engineer",
        "Automation Architect",
        "Computer Vision Specialist",
        "Mechatronics Lead"
      ],
      "skills": [
        "ROS (Robot Operating System)",
        "Python / C++",
        "Computer Vision (OpenCV)",
        "Kinematics",
        "Microcontrollers"
      ],
      "subjects": [
        "Robot Kinematics & Dynamics",
        "Industrial Automation & PLC",
        "Sensors & Actuators",
        "Computer Vision for Robotics",
        "Autonomous Mobile Robots",
        "Artificial Intelligence in Robotics"
      ],
      "salary": "₹6.5 - 20 LPA",
      "companies": [
        "FANUC",
        "KUKA Robotics",
        "ABB Robotics",
        "Tesla",
        "GreyOrange",
        "Addverb"
      ]
    },
    {
      "name": "B.E. Aerospace & Aeronautical Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Study of aircraft and spacecraft aerodynamics, supersonic flight mechanics, jet engine propulsion, structural composites, and orbital navigation.",
      "careers": [
        "Aerospace Engineer",
        "Propulsion Specialist",
        "Aerodynamicist",
        "Flight Controls Engineer"
      ],
      "skills": [
        "Aerodynamics",
        "CATIA / SolidWorks",
        "ANSYS Fluent (CFD)",
        "Flight Dynamics",
        "Propulsion Systems"
      ],
      "subjects": [
        "Incompressible & Compressible Aerodynamics",
        "Aircraft Propulsion",
        "Flight Mechanics & Stability",
        "Aircraft Structural Mechanics",
        "Spacecraft Dynamics & Orbit Mechanics",
        "Avionics Systems"
      ],
      "salary": "₹6.0 - 22 LPA",
      "companies": [
        "ISRO",
        "DRDO",
        "HAL",
        "Boeing India",
        "Airbus",
        "Collins Aerospace"
      ]
    },
    {
      "name": "B.Tech Biotechnology & Genetic Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Combines biology with engineering technology: recombinant DNA, bioprocess engineering, vaccine development, and bioinformatics computational modeling.",
      "careers": [
        "Biotechnologist",
        "Bioinformatics Scientist",
        "Bioprocess Engineer",
        "Clinical Research Associate"
      ],
      "skills": [
        "Bioinformatics (BLAST/Python)",
        "PCR & Gel Electrophoresis",
        "Cell Culture",
        "Bioprocess Design",
        "Statistical Genomics"
      ],
      "subjects": [
        "Cell Biology & Genetics",
        "Biochemistry & Biophysics",
        "Molecular Biology",
        "Recombinant DNA Technology",
        "Bioprocess Engineering",
        "Bioinformatics & Computational Biology"
      ],
      "salary": "₹5.0 - 15 LPA",
      "companies": [
        "Biocon",
        "Serum Institute of India",
        "Dr. Reddy's",
        "Bharat Biotech",
        "Syngene"
      ]
    },
    {
      "name": "B.Tech Chemical Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Covers mass transfer, reaction kinetics, petrochemical refining, industrial safety, and process plant design.",
      "careers": [
        "Chemical Process Engineer",
        "Petrochemical Specialist",
        "Plant Operations Manager",
        "Safety Officer"
      ],
      "skills": [
        "Aspen Plus / HYSYS",
        "Process Simulation",
        "Thermodynamics",
        "Chemical Safety",
        "Plant Optimization"
      ],
      "subjects": [
        "Chemical Engineering Thermodynamics",
        "Heat Transfer Operations",
        "Mass Transfer Operations",
        "Chemical Reaction Engineering",
        "Plant Design & Economics",
        "Petroleum Refining"
      ],
      "salary": "₹5.5 - 16 LPA",
      "companies": [
        "Reliance Industries",
        "Indian Oil (IOCL)",
        "BPCL",
        "ONGC",
        "Tata Chemicals"
      ]
    },
    {
      "name": "B.E. Biomedical Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Merges medical sciences with electronics: patient monitoring equipment, MRI/CT scanners, prosthetic biomechanics, and medical software.",
      "careers": [
        "Biomedical Engineer",
        "Medical Device Designer",
        "Hospital Equipment Specialist",
        "Clinical Engineer"
      ],
      "skills": [
        "Biomedical Signal Processing",
        "Medical Imaging",
        "Sensors & Transducers",
        "MATLAB",
        "Hardware Testing"
      ],
      "subjects": [
        "Human Anatomy & Physiology",
        "Biomedical Instrumentation",
        "Medical Imaging Systems",
        "Biomechanics & Biomaterials",
        "Biosignal Processing",
        "Hospital Management Systems"
      ],
      "salary": "₹4.8 - 14 LPA",
      "companies": [
        "GE Healthcare",
        "Philips Medical",
        "Siemens Healthineers",
        "Apollo Hospitals",
        "Medtronic"
      ]
    },
    {
      "name": "B.E. Automobile Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Dedicated study of modern vehicle design, IC & EV powertrains, crashworthiness safety, aerodynamics, and autonomous driving.",
      "careers": [
        "Automotive Engineer",
        "EV Battery Specialist",
        "Vehicle Dynamics Engineer",
        "Homologation Engineer"
      ],
      "skills": [
        "AutoCAD / CATIA",
        "EV Powertrain Design",
        "Vehicle Dynamics",
        "MATLAB / Simulink",
        "Testing"
      ],
      "subjects": [
        "Automotive Engines & Emission",
        "Vehicle Dynamics & Suspension",
        "Electric & Hybrid Vehicles",
        "Automotive Transmission",
        "Chassis Design",
        "Vehicle Safety & Crash Testing"
      ],
      "salary": "₹5.0 - 15 LPA",
      "companies": [
        "Tata Motors",
        "Mahindra",
        "Hyundai",
        "Maruti Suzuki",
        "Ola Electric",
        "Ather Energy"
      ]
    },
    {
      "name": "B.E. Mechatronics Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Synergistic integration of precision mechanical engineering, electronics controls, sensor systems, and smart factory automation.",
      "careers": [
        "Mechatronics Engineer",
        "Automation Engineer",
        "Embedded Controls Specialist",
        "Instrumentation Engineer"
      ],
      "skills": [
        "PLC / SCADA",
        "Microcontrollers",
        "Hydraulics & Pneumatics",
        "Sensor Integration",
        "CAD"
      ],
      "subjects": [
        "Sensors & Signal Conditioning",
        "Microcontroller Architectures",
        "Hydraulics & Pneumatics Systems",
        "Robotics & Industrial Automation",
        "Digital Control Systems",
        "MEMS Technology"
      ],
      "salary": "₹5.5 - 16 LPA",
      "companies": [
        "Bosch",
        "L&T",
        "Siemens",
        "Honeywell",
        "Schneider Electric"
      ]
    },
    {
      "name": "B.Tech Food Technology",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Covers food microbiology, nutritional engineering, preservation processing, industrial packaging, and FSSAI food quality safety.",
      "careers": [
        "Food Technologist",
        "Quality Assurance Manager",
        "Product Development Scientist",
        "Food Safety Auditor"
      ],
      "skills": [
        "Food Chemistry",
        "Microbiology Testing",
        "Quality Standards (FSSAI/HACCP)",
        "Packaging Technology"
      ],
      "subjects": [
        "Food Chemistry & Nutrition",
        "Food Microbiology",
        "Food Processing Principles",
        "Dairy & Beverage Technology",
        "Food Quality & Safety Standards",
        "Food Packaging Technology"
      ],
      "salary": "₹4.5 - 12 LPA",
      "companies": [
        "Nestle India",
        "ITC Foods",
        "Britannia",
        "Amul",
        "Hindustan Unilever (HUL)"
      ]
    },
    {
      "name": "B.Tech Agricultural Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Applies engineering technology to agriculture: mechanized farm tractors, smart drip irrigation, drone crop monitoring, and soil conservation.",
      "careers": [
        "Agricultural Engineer",
        "Irrigation System Designer",
        "Precision Farming Specialist",
        "Agri-Tech Consultant"
      ],
      "skills": [
        "GIS & Remote Sensing",
        "Hydrology & Irrigation",
        "Farm Machinery CAD",
        "Soil Conservation"
      ],
      "subjects": [
        "Farm Machinery & Power",
        "Soil & Water Conservation Engineering",
        "Irrigation & Drainage Engineering",
        "Post-Harvest Engineering",
        "Precision Farming & Drones"
      ],
      "salary": "₹4.5 - 12 LPA",
      "companies": [
        "Mahindra Tractors",
        "Jain Irrigation",
        "John Deere",
        "ITC Agri-Business",
        "Escorts"
      ]
    },
    {
      "name": "B.E. Marine Engineering",
      "duration": "4 Years",
      "category": "Engineering",
      "description": "Specialized DG Shipping approved maritime engineering covering ship propulsion engines, auxiliary naval boilers, and offshore vessel systems.",
      "careers": [
        "Marine Engineer (Merchant Navy)",
        "Chief Engineer",
        "Ship Surveyor",
        "Offshore Platform Lead"
      ],
      "skills": [
        "Ship Engine Maintenance",
        "Marine Safety",
        "Auxiliary Boilers",
        "Refrigeration Systems",
        "Navigation Tech"
      ],
      "subjects": [
        "Marine Diesel Engines",
        "Marine Boilers & Steam Turbines",
        "Ship Construction & Naval Architecture",
        "Marine Electrical Systems",
        "Marine Auxiliary Machinery",
        "Maritime Law & Safety"
      ],
      "salary": "₹9.0 - 30 LPA (Tax-Free at Sea)",
      "companies": [
        "Maersk Line",
        "Anglo-Eastern",
        "Fleet Management",
        "MSC",
        "Shipping Corporation of India"
      ]
    },
    {
      "name": "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      "duration": "5.5 Years",
      "category": "Medical",
      "description": "Premier medical qualification in India. Comprehensive study of clinical diagnosis, human anatomy, pathology, pharmacology, and surgical procedures.",
      "careers": [
        "Medical Doctor / Physician",
        "Surgeon (Post-MS)",
        "Medical Officer",
        "Clinical Researcher"
      ],
      "skills": [
        "Clinical Diagnosis",
        "Patient Care",
        "Emergency Medicine",
        "Pharmacology",
        "Surgical Skills"
      ],
      "subjects": [
        "Human Anatomy",
        "Physiology & Biochemistry",
        "Pathology & Microbiology",
        "Pharmacology",
        "Forensic Medicine",
        "General Medicine & Surgery",
        "Pediatrics & Obstetrics"
      ],
      "salary": "₹8.0 - 25 LPA (Higher Post-Specialization)",
      "companies": [
        "AIIMS",
        "Apollo Hospitals",
        "Fortis Healthcare",
        "Manipal Hospitals",
        "Govt Health Services"
      ]
    },
    {
      "name": "BDS (Bachelor of Dental Surgery)",
      "duration": "5 Years",
      "category": "Medical",
      "description": "Professional medical dental program focusing on oral health, tooth restoration, maxillofacial surgery, and dental prosthetics.",
      "careers": [
        "Dental Surgeon",
        "Orthodontist (Post-MDS)",
        "Cosmetic Dentist",
        "Oral Pathologist"
      ],
      "skills": [
        "Dental Procedures",
        "Patient Care",
        "Clinical Diagnosis",
        "Prosthodontics",
        "Oral Surgery"
      ],
      "subjects": [
        "Dental Anatomy & Histology",
        "General Pathology & Microbiology",
        "Oral Medicine & Radiology",
        "Periodontology",
        "Prosthodontics",
        "Oral & Maxillofacial Surgery"
      ],
      "salary": "₹5.0 - 15 LPA",
      "companies": [
        "Clove Dental",
        "Apollo Dental",
        "Private Practice Clinics",
        "Government Hospitals"
      ]
    },
    {
      "name": "B.Pharm (Bachelor of Pharmacy)",
      "duration": "4 Years",
      "category": "Medical",
      "description": "Approved by Pharmacy Council of India. Focuses on pharmaceutical formulation synthesis, pharmacology, clinical trials, and drug regulatory affairs.",
      "careers": [
        "Clinical Pharmacist",
        "Drug Quality Analyst",
        "Regulatory Affairs Specialist",
        "Formulation Scientist"
      ],
      "skills": [
        "Drug Formulation",
        "HPLC Diagnostics",
        "Pharmacology",
        "Regulatory Compliance (FDA/CDSCO)"
      ],
      "subjects": [
        "Pharmaceutics I-IV",
        "Pharmaceutical Chemistry",
        "Pharmacology I-III",
        "Pharmacognosy",
        "Pharmaceutical Analysis",
        "Biopharmaceutics & Pharmacokinetics"
      ],
      "salary": "₹4.5 - 14 LPA",
      "companies": [
        "Sun Pharma",
        "Cipla",
        "Dr. Reddy's",
        "Lupin",
        "Zydus Lifesciences",
        "Novartis"
      ]
    },
    {
      "name": "Pharm.D (Doctor of Pharmacy)",
      "duration": "6 Years",
      "category": "Medical",
      "description": "Doctoral level clinical pharmacy course including 5 years academic study and 1 year intensive clinical hospital residency.",
      "careers": [
        "Clinical Pharmacist",
        "Medical Writer",
        "Clinical Trial Lead",
        "Pharmacovigilance Specialist"
      ],
      "skills": [
        "Clinical Pharmacotherapy",
        "Patient Ward Monitoring",
        "Pharmacovigilance",
        "Drug Interaction Analysis"
      ],
      "subjects": [
        "Pathophysiology",
        "Clinical Pharmacokinetics",
        "Hospital & Clinical Pharmacy",
        "Pharmacotherapeutics I-III",
        "Clinical Toxicology",
        "Pharmacoepidemiology"
      ],
      "salary": "₹5.5 - 18 LPA",
      "companies": [
        "IQVIA",
        "Parexel",
        "Apollo Hospitals",
        "Pfizer",
        "Novartis",
        "Fortis"
      ]
    },
    {
      "name": "B.Sc Nursing",
      "duration": "4 Years",
      "category": "Medical",
      "description": "Comprehensive medical nursing program preparing healthcare professionals for critical care units, operation theaters, and patient care management.",
      "careers": [
        "Registered Nurse (RN)",
        "ICU / Critical Care Nurse",
        "Nurse Administrator",
        "Global Healthcare Nurse"
      ],
      "skills": [
        "Patient Care",
        "First Aid & CPR",
        "Medication Administration",
        "Clinical Documentation",
        "Empathy"
      ],
      "subjects": [
        "Anatomy & Physiology",
        "Foundations of Nursing",
        "Medical-Surgical Nursing",
        "Pediatric Nursing",
        "Obstetric & Midwifery Nursing",
        "Community Health Nursing"
      ],
      "salary": "₹4.0 - 12 LPA (Up to ₹40L+ Overseas)",
      "companies": [
        "Apollo Hospitals",
        "Manipal Health",
        "NHS UK",
        "Max Healthcare",
        "Fortis"
      ]
    },
    {
      "name": "BPT (Bachelor of Physiotherapy)",
      "duration": "4.5 Years",
      "category": "Medical",
      "description": "Allied medical healthcare program specializing in musculoskeletal rehabilitation, sports injury therapy, and neurological physical recovery.",
      "careers": [
        "Physiotherapist",
        "Sports Rehabilitation Therapist",
        "Ergonomics Consultant",
        "Neuro-Physiotherapist"
      ],
      "skills": [
        "Physical Therapy",
        "Manual Therapy Techniques",
        "Rehabilitation Exercise",
        "Pain Management"
      ],
      "subjects": [
        "Human Anatomy & Physiology",
        "Biomechanics & Kinesiology",
        "Exercise Therapy",
        "Electrotherapy",
        "Orthopedic Physiotherapy",
        "Neurological Physiotherapy"
      ],
      "salary": "₹4.2 - 12 LPA",
      "companies": [
        "Sports Authority of India (SAI)",
        "BCCI",
        "Apollo Hospitals",
        "Columbia Asia",
        "Rehab Centers"
      ]
    },
    {
      "name": "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
      "duration": "5.5 Years",
      "category": "Medical",
      "description": "Traditional Indian medical healthcare system recognized by the Ministry of AYUSH, integrating herbal pharmacology, pulse diagnostics, and surgery.",
      "careers": [
        "Ayurvedic Physician",
        "AYUSH Medical Officer",
        "Panchakarma Specialist",
        "Wellness Director"
      ],
      "skills": [
        "Ayurvedic Diagnosis",
        "Pulse Reading (Nadi Pariksha)",
        "Panchakarma Therapies",
        "Herbology"
      ],
      "subjects": [
        "Sanskrit & Samhita",
        "Ayurvedic Anatomy (Rachana Sharir)",
        "Herbal Pharmacology (Dravyaguna)",
        "Pathology (Roga Nidana)",
        "Internal Medicine (Kayachikitsa)",
        "Panchakarma"
      ],
      "salary": "₹4.5 - 14 LPA",
      "companies": [
        "Kottakkal Arya Vaidya Sala",
        "Himalaya Wellness",
        "Patanjali",
        "AYUSH Govt Dispensaries"
      ]
    },
    {
      "name": "BHMS (Bachelor of Homeopathic Medicine)",
      "duration": "5.5 Years",
      "category": "Medical",
      "description": "Study of homeopathic medical science based on the principle of 'similia similibus curentur', repertory analysis, and constitutional medicine.",
      "careers": [
        "Homeopathic Doctor",
        "Public Health Consultant",
        "Medical Officer",
        "Research Scientist"
      ],
      "skills": [
        "Constitutional Diagnosis",
        "Case Taking",
        "Repertory Analysis",
        "Patient Care"
      ],
      "subjects": [
        "Homeopathic Pharmacy",
        "Anatomy & Physiology",
        "Organon of Medicine",
        "Homeopathic Materia Medica",
        "Repertory",
        "Practice of Medicine"
      ],
      "salary": "₹4.0 - 12 LPA",
      "companies": [
        "Dr. Batra's",
        "Schwabe India",
        "SBL Global",
        "Government AYUSH Hospitals"
      ]
    },
    {
      "name": "B.Sc Medical Laboratory Technology (BMLT)",
      "duration": "3 Years",
      "category": "Medical",
      "description": "Allied diagnostic healthcare course training candidates in automated biochemistry analyzers, PCR molecular testing, and blood bank management.",
      "careers": [
        "Senior Lab Technologist",
        "Pathology Supervisor",
        "Molecular Diagnostics Analyst"
      ],
      "skills": [
        "Clinical Biochemistry",
        "Hematology Diagnostics",
        "Automated Analyzers",
        "Quality Control"
      ],
      "subjects": [
        "Clinical Biochemistry I & II",
        "Hematology & Transfusion Medicine",
        "Medical Microbiology & Immunology",
        "Histopathology Techniques",
        "Clinical Pathology"
      ],
      "salary": "₹3.5 - 8.0 LPA",
      "companies": [
        "Dr. Lal PathLabs",
        "Metropolis Healthcare",
        "Apollo Diagnostics",
        "Thyrocare"
      ]
    },
    {
      "name": "B.Sc Radiology & Imaging Technology",
      "duration": "3 Years",
      "category": "Medical",
      "description": "Specialized allied healthcare training in X-Ray radiography, CT scanning, MRI imaging, ultrasound operations, and radiation safety protocols.",
      "careers": [
        "Radiology Technologist",
        "MRI Specialist",
        "CT Scan Technologist",
        "Radiation Safety Assistant"
      ],
      "skills": [
        "MRI / CT Operation",
        "Radiographic Positioning",
        "Radiation Safety",
        "Image Quality Analysis"
      ],
      "subjects": [
        "Radiation Physics",
        "Radiographic Anatomy",
        "X-Ray Equipment & Techniques",
        "Computed Tomography (CT)",
        "Magnetic Resonance Imaging (MRI)",
        "Nuclear Medicine"
      ],
      "salary": "₹4.0 - 10.0 LPA",
      "companies": [
        "Apollo Hospitals",
        "Max Healthcare",
        "Vijaya Diagnostics",
        "Fortis",
        "Medanta"
      ]
    },
    {
      "name": "B.Sc Optometry",
      "duration": "4 Years",
      "category": "Medical",
      "description": "Primary eye care healthcare program covering vision assessment, refraction testing, contact lens fitting, and ocular disease detection.",
      "careers": [
        "Optometrist",
        "Refraction Specialist",
        "Vision Consultant",
        "Contact Lens Specialist"
      ],
      "skills": [
        "Refraction Testing",
        "Ophthalmic Instruments",
        "Visual Acuity Assessment",
        "Patient Communication"
      ],
      "subjects": [
        "Ocular Anatomy & Physiology",
        "Physical & Geometrical Optics",
        "Visual Optics & Refraction",
        "Ocular Diseases & Pathology",
        "Contact Lens Practice",
        "Binocular Vision"
      ],
      "salary": "₹3.8 - 9.0 LPA",
      "companies": [
        "Lenskart",
        "Titan Eyeplus",
        "Sankara Nethralaya",
        "Aravind Eye Hospital",
        "Vasan Eye Care"
      ]
    },
    {
      "name": "B.V.Sc & AH (Veterinary Science & Animal Husbandry)",
      "duration": "5.5 Years",
      "category": "Medical",
      "description": "Professional medical program for animal healthcare, pet surgery, livestock management, animal breeding, and veterinary epidemiology.",
      "careers": [
        "Veterinary Doctor / Surgeon",
        "Livestock Consultant",
        "Animal Nutritionist",
        "Govt Veterinary Officer"
      ],
      "skills": [
        "Animal Surgery",
        "Veterinary Pharmacology",
        "Vaccination & Diagnosis",
        "Animal Husbandry"
      ],
      "subjects": [
        "Veterinary Anatomy",
        "Veterinary Physiology & Biochemistry",
        "Veterinary Pathology",
        "Animal Genetics & Breeding",
        "Veterinary Surgery & Radiology",
        "Livestock Production"
      ],
      "salary": "₹5.0 - 15 LPA",
      "companies": [
        "Government Veterinary Services",
        "Amul / NDDB",
        "Nestle",
        "Pet Care Hospitals",
        "Zoological Parks"
      ]
    },
    {
      "name": "BCA (Bachelor of Computer Applications)",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Comprehensive computing degree emphasizing modern software applications, web technologies, database design, and mobile app programming.",
      "careers": [
        "Software Developer",
        "Web Developer",
        "System Support Engineer",
        "Database Specialist"
      ],
      "skills": [
        "Java",
        "Python",
        "Web Technologies (HTML/CSS/JS)",
        "SQL",
        "Data Structures"
      ],
      "subjects": [
        "Computer Fundamentals",
        "C & C++ Programming",
        "Database Systems (SQL)",
        "Java Programming",
        "Web Application Development",
        "Software Engineering"
      ],
      "salary": "₹4.5 - 14 LPA",
      "companies": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Zoho",
        "Tech Mahindra"
      ]
    },
    {
      "name": "B.Sc Computer Science",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Strong theoretical and practical grounding in computing algorithms, programming paradigms, operating systems, and network protocols.",
      "careers": [
        "Software Programmer",
        "Data Analyst",
        "Technical Support Specialist",
        "System Administrator"
      ],
      "skills": [
        "Python",
        "C++",
        "SQL",
        "Linux",
        "Data Structures",
        "Algorithm Analysis"
      ],
      "subjects": [
        "Programming in C/C++",
        "Data Structures",
        "Computer Organization & Architecture",
        "Relational Database Management",
        "Operating Systems",
        "Python Programming"
      ],
      "salary": "₹4.5 - 14 LPA",
      "companies": [
        "Wipro",
        "TCS",
        "Accenture",
        "Cognizant",
        "HCL Tech",
        "Mindtree"
      ]
    },
    {
      "name": "B.Sc Data Science & Analytics",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Mathematics and computing fusion: exploratory data analysis, predictive statistical modeling, SQL databases, and business intelligence dashboards.",
      "careers": [
        "Data Analyst",
        "Business Intelligence Specialist",
        "Junior Data Scientist",
        "Data Engineer"
      ],
      "skills": [
        "Python (Pandas/Numpy)",
        "SQL",
        "Power BI / Tableau",
        "Statistics",
        "Machine Learning Basics"
      ],
      "subjects": [
        "Statistical Methods",
        "Python for Data Analysis",
        "Database Systems & SQL",
        "Data Visualization & Dashboards",
        "Applied Machine Learning",
        "Big Data Concepts"
      ],
      "salary": "₹5.5 - 16 LPA",
      "companies": [
        "Tiger Analytics",
        "Mu Sigma",
        "LatentView",
        "Cognizant",
        "Deloitte",
        "EY"
      ]
    },
    {
      "name": "B.Sc Artificial Intelligence & Machine Learning",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Undergraduate curriculum targeting machine learning workflows, artificial neural networks, computer vision, and cognitive computing.",
      "careers": [
        "AI Developer",
        "Machine Learning Analyst",
        "Computer Vision Assistant",
        "NLP Associate"
      ],
      "skills": [
        "Python",
        "Scikit-Learn",
        "TensorFlow",
        "Linear Algebra",
        "Data Cleaning"
      ],
      "subjects": [
        "Foundations of AI",
        "Python & Data Science",
        "Machine Learning Algorithms",
        "Neural Networks & Deep Learning",
        "Natural Language Processing",
        "Computer Vision Basics"
      ],
      "salary": "₹5.5 - 18 LPA",
      "companies": [
        "Zoho",
        "Fractal Analytics",
        "Accenture AI",
        "Capgemini",
        "Infosys"
      ]
    },
    {
      "name": "B.Sc Information Technology",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Applied computing program covering IT infrastructure, network architecture, web services, database administration, and cloud basics.",
      "careers": [
        "IT Support Engineer",
        "Network Associate",
        "Web Designer",
        "Database Assistant"
      ],
      "skills": [
        "Computer Networks",
        "HTML/CSS/JS",
        "SQL",
        "Operating Systems",
        "Cybersecurity Basics"
      ],
      "subjects": [
        "Information Technology Concepts",
        "Programming in Java",
        "Computer Networks",
        "Database Management",
        "Web Engineering",
        "Network Security Basics"
      ],
      "salary": "₹4.2 - 12 LPA",
      "companies": [
        "TCS",
        "Infosys",
        "Wipro",
        "LTI",
        "Tech Mahindra"
      ]
    },
    {
      "name": "B.Sc Forensic Science & Criminology",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Covers scientific crime scene analysis, ballistic forensics, fingerprint verification, DNA profiling, and criminal courtroom evidence.",
      "careers": [
        "Forensic Scientist",
        "Crime Scene Investigator",
        "Cyber Forensic Analyst",
        "Fingerprint Expert"
      ],
      "skills": [
        "Crime Scene Documentation",
        "Chromatography",
        "DNA Profiling",
        "Microscopy",
        "Legal Evidence Rules"
      ],
      "subjects": [
        "Introduction to Forensic Science",
        "Forensic Chemistry & Toxicology",
        "Forensic Biology & Serology",
        "Physical Evidences & Fingerprinting",
        "Criminal Law & Courtroom Evidence",
        "Cyber Forensics"
      ],
      "salary": "₹4.5 - 12 LPA",
      "companies": [
        "Central Forensic Science Labs (CFSL)",
        "State Police FSL",
        "CBI",
        "Private Investigation Agencies"
      ]
    },
    {
      "name": "B.Sc Agriculture (Honours)",
      "duration": "4 Years",
      "category": "Science & Computing",
      "description": "ICAR approved degree covering crop agronomy, agricultural microbiology, soil chemistry, plant genetics, and agribusiness marketing.",
      "careers": [
        "Agriculture Field Officer (IBPS AFO)",
        "Agronomist",
        "Farm Manager",
        "Seed Technology Specialist"
      ],
      "skills": [
        "Soil Diagnostics",
        "Crop Management",
        "Pest Identification",
        "Agronomy Planning"
      ],
      "subjects": [
        "Fundamentals of Agronomy",
        "Soil Science & Chemistry",
        "Genetics & Plant Breeding",
        "Agricultural Entomology",
        "Plant Pathology",
        "Agricultural Economics & Marketing"
      ],
      "salary": "₹4.5 - 12 LPA",
      "companies": [
        "UPL Limited",
        "Bayer CropScience",
        "Syngenta",
        "ITC Agri-Business",
        "Public Sector Banks (AFO)"
      ]
    },
    {
      "name": "B.Sc Biotechnology",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Pure science biotechnology: molecular microbiology, recombinant DNA, biochemical analysis, and pharmaceutical cell cultures.",
      "careers": [
        "Biotech Lab Analyst",
        "QC/QA Executive",
        "Research Assistant",
        "Medical Coding Specialist"
      ],
      "skills": [
        "PCR Techniques",
        "Spectrophotometry",
        "Microbial Culture",
        "Cell Biology"
      ],
      "subjects": [
        "Cell Biology & Biochemistry",
        "General Microbiology",
        "Molecular Genetics",
        "Immunology Basics",
        "Genetic Engineering",
        "Industrial Biotechnology"
      ],
      "salary": "₹4.0 - 10.0 LPA",
      "companies": [
        "Biocon",
        "Syngene",
        "Dr. Reddy's",
        "Serum Institute",
        "Omega Healthcare"
      ]
    },
    {
      "name": "B.Sc Microbiology",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Study of bacteria, viruses, fungi, immunology defense systems, environmental microbial ecology, and industrial fermentation.",
      "careers": [
        "Microbiologist",
        "Food Quality Inspector",
        "Clinical Lab Analyst",
        "Water Quality Specialist"
      ],
      "skills": [
        "Aseptic Culture",
        "Gram Staining",
        "Pathogen Identification",
        "Sterilization Standards"
      ],
      "subjects": [
        "General Microbiology",
        "Bacteriology & Virology",
        "Immunology & Serology",
        "Food & Dairy Microbiology",
        "Industrial Microbiology",
        "Medical Microbiology"
      ],
      "salary": "₹3.8 - 9.5 LPA",
      "companies": [
        "Hindustan Unilever",
        "Nestle",
        "Biocon",
        "Water Testing Boards",
        "Apollo Hospitals"
      ]
    },
    {
      "name": "B.Sc Mathematics & Statistics",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Theoretical and applied mathematics: differential calculus, abstract algebra, probability theory, linear modeling, and quantitative analysis.",
      "careers": [
        "Actuarial Analyst",
        "Quantitative Analyst (Quant)",
        "Data Modeler",
        "Risk Analyst"
      ],
      "skills": [
        "Calculus",
        "Probability & Statistics",
        "R Programming / Python",
        "Mathematical Modeling"
      ],
      "subjects": [
        "Calculus & Analytical Geometry",
        "Linear Algebra & Matrices",
        "Probability & Distributions",
        "Differential Equations",
        "Real Analysis",
        "Statistical Inference"
      ],
      "salary": "₹5.0 - 16 LPA",
      "companies": [
        "Goldman Sachs",
        "JP Morgan",
        "American Express",
        "Mu Sigma",
        "Swiss Re"
      ]
    },
    {
      "name": "B.Sc Physics",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Rigorous study of classical mechanics, quantum theory, electrodynamics, optics, solid state physics, and experimental laboratory methods.",
      "careers": [
        "Scientific Assistant",
        "Laboratory Analyst",
        "Physics Teacher / Lecturer",
        "Technical Content Specialist"
      ],
      "skills": [
        "Experimental Physics",
        "Data Modeling",
        "Mathematical Derivations",
        "Optics Instruments"
      ],
      "subjects": [
        "Mechanics & Waves",
        "Electricity & Magnetism",
        "Thermal Physics",
        "Optics & Spectroscopy",
        "Quantum Mechanics Basics",
        "Solid State Electronics"
      ],
      "salary": "₹3.8 - 9.0 LPA",
      "companies": [
        "BARC / ISRO (Tech Exam)",
        "DRDO Labs",
        "EdTech Companies",
        "Scientific Instrument Vendors"
      ]
    },
    {
      "name": "B.Sc Chemistry",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Study of organic reaction mechanisms, inorganic coordination compounds, physical kinetics, and analytical spectroscopic instrumentation.",
      "careers": [
        "Chemical Analyst",
        "Quality Control Chemist",
        "Formulation Assistant",
        "Laboratory Chemist"
      ],
      "skills": [
        "Organic Synthesis",
        "Titration & Titrimetry",
        "Spectroscopy (UV/FTIR)",
        "Chemical Safety"
      ],
      "subjects": [
        "Inorganic Chemistry I-III",
        "Organic Chemistry I-III",
        "Physical Chemistry I-III",
        "Analytical Chemistry",
        "Polymer & Industrial Chemistry"
      ],
      "salary": "₹3.8 - 9.5 LPA",
      "companies": [
        "Asian Paints",
        "Pidilite Industries",
        "Tata Chemicals",
        "Sun Pharma",
        "Dr. Reddy's"
      ]
    },
    {
      "name": "B.Sc Visual Communication & Multimedia",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Blends creative arts with media technology: graphic design, video editing, photography, 2D/3D animation, and advertising production.",
      "careers": [
        "Visual Designer",
        "Video Editor",
        "Motion Graphic Artist",
        "Creative Director",
        "UI Designer"
      ],
      "skills": [
        "Adobe Premiere / After Effects",
        "Photoshop / Illustrator",
        "Photography",
        "Storyboarding"
      ],
      "subjects": [
        "Introduction to Visual Communication",
        "Graphic Design & Typography",
        "Digital Photography",
        "Audiovisual Production & Editing",
        "Advertising & Media Psychology",
        "Animation Basics"
      ],
      "salary": "₹4.0 - 12 LPA",
      "companies": [
        "Sun TV",
        "Star India",
        "Ogilvy",
        "Zoho",
        "Media Production Houses",
        "Ad Agencies"
      ]
    },
    {
      "name": "B.Sc Psychology & Behavioral Science",
      "duration": "3 Years",
      "category": "Science & Computing",
      "description": "Scientific exploration of human cognition, developmental psychology, psychometrics assessment, and counseling therapy foundations.",
      "careers": [
        "Counseling Assistant",
        "HR Recruiter",
        "Behavioral Analyst",
        "Child Development Specialist"
      ],
      "skills": [
        "Psychological Assessment",
        "Active Listening",
        "Empathy",
        "Research Methodology"
      ],
      "subjects": [
        "Introduction to Psychology",
        "Developmental Psychology",
        "Social Psychology",
        "Abnormal Psychology",
        "Cognitive Psychology",
        "Psychological Testing & Statistics"
      ],
      "salary": "₹3.8 - 9.0 LPA",
      "companies": [
        "Fortis Healthcare",
        "Corporate HR Departments",
        "NGOs",
        "Schools & Child Guidance Centers"
      ]
    },
    {
      "name": "B.Com (General)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Versatile commerce curriculum covering financial accounting, mercantile law, income tax calculations, auditing, and business economics.",
      "careers": [
        "Accounts Executive",
        "Financial Auditor",
        "Tax Consultant",
        "Bank Probationary Officer (IBPS PO)"
      ],
      "skills": [
        "Tally Prime",
        "Financial Accounting",
        "Income Tax Rules",
        "Excel",
        "Auditing"
      ],
      "subjects": [
        "Financial Accounting",
        "Corporate Law",
        "Business Economics",
        "Income Tax Law & Practice",
        "Cost Accounting",
        "Auditing Principles"
      ],
      "salary": "₹3.8 - 10.0 LPA",
      "companies": [
        "Big 4 (Deloitte, PwC, EY, KPMG)",
        "HDFC Bank",
        "ICICI Bank",
        "Genpact",
        "Wipro Finance"
      ]
    },
    {
      "name": "B.Com (Corporate Secretaryship)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Specialized commerce track tailored for corporate governance, secretarial audit, company law compliance, and board management.",
      "careers": [
        "Company Secretary (Post-ICSI CS)",
        "Corporate Compliance Officer",
        "Legal Secretary",
        "Governance Associate"
      ],
      "skills": [
        "Company Law Compliance",
        "Secretarial Practice",
        "ROC Filings",
        "Corporate Governance"
      ],
      "subjects": [
        "Corporate Accounting",
        "Company Law & Secretarial Practice",
        "Corporate Governance",
        "Direct & Indirect Tax",
        "Drafting & Conveyancing"
      ],
      "salary": "₹4.2 - 12 LPA",
      "companies": [
        "Tata Sons",
        "Reliance Industries",
        "Corporate Law Advisory Firms",
        "L&T"
      ]
    },
    {
      "name": "B.Com (Accounting & Finance)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Deep dive into financial accounting, investment portfolio analysis, cost auditing, financial markets, and wealth management.",
      "careers": [
        "Financial Analyst",
        "Accountant",
        "Investment Analyst",
        "Risk Management Executive"
      ],
      "skills": [
        "Financial Modeling",
        "Balance Sheet Analysis",
        "Advanced Excel",
        "Costing & Budgeting"
      ],
      "subjects": [
        "Advanced Financial Accounting",
        "Cost Accounting",
        "Financial Management",
        "Securities & Portfolio Management",
        "International Finance"
      ],
      "salary": "₹4.5 - 12 LPA",
      "companies": [
        "JP Morgan",
        "Goldman Sachs",
        "Morgan Stanley",
        "KPMG",
        "EY"
      ]
    },
    {
      "name": "B.Com (Banking & Insurance)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Curriculum tailored to retail banking, lending operations, credit risk assessment, insurance underwriting, and actuarial basics.",
      "careers": [
        "Bank Manager / Credit Officer",
        "Insurance Underwriter",
        "Relationship Manager",
        "Wealth Advisor"
      ],
      "skills": [
        "Credit Risk Analysis",
        "Banking Regulations (RBI)",
        "Insurance Underwriting",
        "Customer Relations"
      ],
      "subjects": [
        "Principles of Banking",
        "Insurance Laws & Practices",
        "Credit & Risk Management",
        "Financial Services",
        "Treasury & Forex Operations"
      ],
      "salary": "₹4.0 - 11 LPA",
      "companies": [
        "State Bank of India (SBI)",
        "HDFC Bank",
        "ICICI Prudential",
        "LIC of India",
        "Bajaj Allianz"
      ]
    },
    {
      "name": "B.Com (Computer Applications & FinTech)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Fuses commerce with software technology: computerized accounting, database SQL, electronic commerce, and digital payment gateways.",
      "careers": [
        "FinTech Analyst",
        "Computerized Accountant",
        "ERP Finance Specialist",
        "E-Commerce Coordinator"
      ],
      "skills": [
        "Tally ERP / SAP FICO",
        "SQL",
        "Excel",
        "FinTech Systems",
        "Digital Banking"
      ],
      "subjects": [
        "Financial Accounting",
        "Database Management Systems",
        "E-Commerce & Digital Payments",
        "ERP in Business (SAP)",
        "Computer Applications in Business"
      ],
      "salary": "₹4.2 - 12 LPA",
      "companies": [
        "Razorpay",
        "PhonePe",
        "Paytm",
        "Accenture",
        "TCS Finance",
        "Wipro"
      ]
    },
    {
      "name": "BBA (Bachelor of Business Administration)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Comprehensive management foundation covering marketing campaigns, organizational human resources, corporate finance, and operations.",
      "careers": [
        "Business Operations Analyst",
        "Marketing Executive",
        "HR Associate",
        "Management Trainee"
      ],
      "skills": [
        "Leadership",
        "Business Strategy",
        "Presentation Skills",
        "Project Management",
        "Marketing Analytics"
      ],
      "subjects": [
        "Principles of Management",
        "Marketing Management",
        "Human Resource Management",
        "Financial Management",
        "Organizational Behavior",
        "Strategic Management"
      ],
      "salary": "₹4.5 - 12 LPA",
      "companies": [
        "Amazon",
        "Flipkart",
        "Hindustan Unilever",
        "Deloitte",
        "Byju's",
        "ITC"
      ]
    },
    {
      "name": "BBA (Business Analytics & FinTech)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Contemporary management program training students in data-driven corporate decision making, Python analytics, and FinTech architectures.",
      "careers": [
        "Business Analytics Associate",
        "FinTech Product Associate",
        "Market Research Analyst"
      ],
      "skills": [
        "Python",
        "Power BI / Tableau",
        "Financial Modeling",
        "Business Intelligence",
        "SQL"
      ],
      "subjects": [
        "Business Statistics",
        "Predictive Analytics for Business",
        "FinTech & Digital Banking",
        "Data Visualization & Storytelling",
        "Strategic Business Analysis"
      ],
      "salary": "₹5.5 - 15 LPA",
      "companies": [
        "Accenture",
        "Deloitte",
        "McKinsey Digital",
        "Razorpay",
        "Mu Sigma"
      ]
    },
    {
      "name": "BBA (Logistics & Supply Chain Management)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Focuses on global supply chain networks, warehouse inventory management, freight forwarding, and international maritime shipping.",
      "careers": [
        "Supply Chain Coordinator",
        "Logistics Analyst",
        "Warehouse Operations Lead",
        "Freight Forwarder"
      ],
      "skills": [
        "Inventory Management (SAP)",
        "Supply Chain Optimization",
        "Freight Documentation",
        "Vendor Coordination"
      ],
      "subjects": [
        "Introduction to Logistics & SCM",
        "Warehouse & Inventory Management",
        "Freight Forwarding & Customs",
        "Global Supply Chain Strategy",
        "Procurement & Sourcing"
      ],
      "salary": "₹4.5 - 12 LPA",
      "companies": [
        "Delhivery",
        "Blue Dart",
        "Maersk",
        "Amazon Logistics",
        "DHL"
      ]
    },
    {
      "name": "BMS (Bachelor of Management Studies)",
      "duration": "3 Years",
      "category": "Commerce & Finance",
      "description": "Rigorous case-study based management degree focusing on corporate strategic leadership, brand equity, and business venture planning.",
      "careers": [
        "Strategy Associate",
        "Management Trainee",
        "Brand Manager Assistant",
        "Business Consultant"
      ],
      "skills": [
        "Strategic Planning",
        "Market Research",
        "Case Analysis",
        "Leadership"
      ],
      "subjects": [
        "Foundations of Human Skills",
        "Business Law",
        "Business Research Methods",
        "Strategic Operations",
        "International Marketing"
      ],
      "salary": "₹4.8 - 14 LPA",
      "companies": [
        "Bain Capability Network",
        "McKinsey",
        "Boston Consulting Group (BCG)",
        "EY"
      ]
    },
    {
      "name": "Integrated CA (Chartered Accountancy)",
      "duration": "4.5 Years",
      "category": "Commerce & Finance",
      "description": "Administered by the Institute of Chartered Accountants of India (ICAI). India's most prestigious credential for auditing, taxation, and financial advisory.",
      "careers": [
        "Chartered Accountant (CA)",
        "Chief Financial Officer (CFO)",
        "Statutory Auditor",
        "Tax Advisory Partner"
      ],
      "skills": [
        "Statutory Auditing",
        "Indian Accounting Standards (Ind AS)",
        "Direct & Indirect Taxation",
        "Corporate Finance"
      ],
      "subjects": [
        "Accounting & Corporate Laws",
        "Cost & Management Accounting",
        "Taxation (Income Tax & GST)",
        "Advanced Auditing & Ethics",
        "Strategic Financial Management"
      ],
      "salary": "₹9.0 - 30 LPA",
      "companies": [
        "Big 4 (EY, PwC, Deloitte, KPMG)",
        "Tata Sons",
        "Reliance",
        "HDFC Bank",
        "Private Practice"
      ]
    },
    {
      "name": "Integrated CMA (Cost & Management Accounting)",
      "duration": "4 Years",
      "category": "Commerce & Finance",
      "description": "Administered by the Institute of Cost Accountants of India (ICMAI). Specializes in cost audit, pricing strategies, and manufacturing financial controls.",
      "careers": [
        "Cost & Management Accountant",
        "Budgeting Director",
        "Pricing Analyst",
        "Internal Auditor"
      ],
      "skills": [
        "Cost Auditing",
        "Budgetary Control",
        "Operational Cost Reduction",
        "Financial Planning"
      ],
      "subjects": [
        "Cost Accounting Principles",
        "Direct & Indirect Taxation",
        "Cost Audit & Assurance",
        "Strategic Performance Management",
        "Corporate Laws & Compliance"
      ],
      "salary": "₹7.5 - 20 LPA",
      "companies": [
        "SAIL",
        "ONGC",
        "L&T",
        "NTPC",
        "BHEL",
        "Tata Steel"
      ]
    },
    {
      "name": "B.A English Literature",
      "duration": "3 Years",
      "category": "Arts & Humanities",
      "description": "Critical analysis of world literature, literary theory, syntax linguistics, creative writing, and cross-cultural discourse.",
      "careers": [
        "Content Strategist",
        "Editor / Publisher",
        "Copywriter",
        "Public Relations Specialist",
        "Civil Services Aspirant"
      ],
      "skills": [
        "Content Writing",
        "Copywriting",
        "Critical Thinking",
        "Editorial Proofreading",
        "Communication"
      ],
      "subjects": [
        "British Literature",
        "American Literature",
        "Indian Writing in English",
        "Literary Theory & Criticism",
        "Journalistic & Creative Writing",
        "Linguistics & Phonetics"
      ],
      "salary": "₹3.8 - 10 LPA",
      "companies": [
        "Penguin Random House",
        "Oxford University Press",
        "Times of India",
        "Zoho",
        "Advertising Agencies"
      ]
    },
    {
      "name": "B.A Economics & Public Policy",
      "duration": "3 Years",
      "category": "Arts & Humanities",
      "description": "Rigorous study of micro/macroeconomic equilibrium, fiscal monetary policy, econometric statistical modeling, and international trade.",
      "careers": [
        "Economic Analyst",
        "Policy Researcher",
        "Financial Journalist",
        "Think Tank Associate"
      ],
      "skills": [
        "Econometrics",
        "STATA / R",
        "Data Analysis",
        "Policy Evaluation",
        "Macroeconomic Modeling"
      ],
      "subjects": [
        "Microeconomic Theory",
        "Macroeconomic Analysis",
        "Mathematical Methods for Economics",
        "Statistical Methods & Econometrics",
        "Public Finance & Fiscal Policy",
        "International Trade"
      ],
      "salary": "₹5.0 - 15 LPA",
      "companies": [
        "NITI Aayog",
        "RBI",
        "World Bank / UN Consultancies",
        "Crisil",
        "Deloitte Policy"
      ]
    },
    {
      "name": "B.A Journalism & Mass Communication",
      "duration": "3 Years",
      "category": "Arts & Humanities",
      "description": "Covers investigative news reporting, digital broadcast media, video editing, photojournalism, and public relations campaigns.",
      "careers": [
        "Journalist / News Reporter",
        "Digital Content Producer",
        "PR Specialist",
        "Social Media Strategist"
      ],
      "skills": [
        "Investigative Reporting",
        "Video Production",
        "Copy Editing",
        "Interviewing",
        "Media Law Ethics"
      ],
      "subjects": [
        "Introduction to Mass Communication",
        "Reporting & Editing for Print & Web",
        "Broadcast Journalism (TV & Radio)",
        "Media Laws & Constitutional Ethics",
        "Public Relations & Advertising",
        "Digital Media & Web Journalism"
      ],
      "salary": "₹4.0 - 12 LPA",
      "companies": [
        "NDTV",
        "The Hindu",
        "India Today Group",
        "Times Network",
        "Edelman PR"
      ]
    },
    {
      "name": "B.A Political Science & Civil Services",
      "duration": "3 Years",
      "category": "Arts & Humanities",
      "description": "Explores constitutional structures, comparative politics, international relations diplomacy, and political philosophies. Ideal for UPSC preparation.",
      "careers": [
        "Civil Services Officer (IAS/IPS)",
        "Policy Analyst",
        "Political Consultant",
        "Legislative Assistant"
      ],
      "skills": [
        "Constitutional Analysis",
        "Geopolitical Research",
        "Debating & Articulation",
        "Policy Drafting"
      ],
      "subjects": [
        "Political Theory & Concepts",
        "Indian Government & Politics",
        "Comparative Political Systems",
        "International Relations & Geopolitics",
        "Public Administration",
        "Western & Indian Political Thought"
      ],
      "salary": "₹4.0 - 14 LPA (Prestigious Govt Cadres)",
      "companies": [
        "Government of India (UPSC)",
        "State Public Service Commissions",
        "Think Tanks (ORF, CPR)",
        "UN Bodies"
      ]
    },
    {
      "name": "B.A LL.B (5-Year Integrated Law)",
      "duration": "5 Years",
      "category": "Law",
      "description": "BCI approved dual degree combining arts humanities with comprehensive legal training in constitutional, criminal, civil, and corporate law.",
      "careers": [
        "Corporate Lawyer",
        "Advocate / Litigator",
        "Legal Advisor",
        "Judicial Officer (Judge)"
      ],
      "skills": [
        "Legal Research (SCC Online)",
        "Contract Drafting",
        "Courtroom Advocacy",
        "Moot Court Litigation"
      ],
      "subjects": [
        "Constitutional Law I & II",
        "Law of Contracts",
        "Indian Penal Code (Criminal Law)",
        "Civil Procedure Code",
        "Corporate & Securities Law",
        "Moot Court & Trial Advocacy"
      ],
      "salary": "₹6.5 - 20 LPA",
      "companies": [
        "Shardul Amarchand Mangaldas",
        "Cyril Amarchand",
        "Khaitan & Co",
        "Trilegal",
        "High Courts"
      ]
    },
    {
      "name": "B.B.A LL.B (5-Year Integrated Corporate Law)",
      "duration": "5 Years",
      "category": "Law",
      "description": "Combines business administration with legal jurisprudence. Designed specifically for corporate mergers & acquisitions, IP patents, and banking law.",
      "careers": [
        "Corporate In-House Counsel",
        "M&A Legal Associate",
        "IPR Patent Specialist",
        "Compliance Manager"
      ],
      "skills": [
        "M&A Due Diligence",
        "IPR Filing",
        "Corporate Contract Negotiation",
        "Regulatory Compliance"
      ],
      "subjects": [
        "Business Management & Economics",
        "Corporate & Commercial Laws",
        "Mergers & Acquisitions Law",
        "Intellectual Property Rights (IPR)",
        "Banking & Insurance Law",
        "Arbitration & Dispute Resolution"
      ],
      "salary": "₹7.0 - 22 LPA",
      "companies": [
        "AZB & Partners",
        "L&T Legal",
        "Reliance Legal",
        "Deloitte Legal",
        "Top NLUs"
      ]
    },
    {
      "name": "B.Des (UI/UX & Interactive Design)",
      "duration": "4 Years",
      "category": "Design",
      "description": "Premier design degree focused on user experience psychology, digital wireframing, interactive prototyping, and mobile/web interface layouts.",
      "careers": [
        "UI/UX Designer",
        "Product Designer",
        "User Researcher",
        "Design Systems Lead"
      ],
      "skills": [
        "Figma",
        "User Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Usability Testing"
      ],
      "subjects": [
        "Elements of Visual Design",
        "Design Thinking & User Empathy",
        "Information Architecture",
        "Interaction Design & Prototyping",
        "Usability Testing & Analytics",
        "Design Systems at Scale"
      ],
      "salary": "₹6.5 - 22 LPA",
      "companies": [
        "Google",
        "CRED",
        "Swiggy",
        "Zomato",
        "Zoho",
        "Microsoft"
      ]
    },
    {
      "name": "B.Des (Fashion & Apparel Design)",
      "duration": "4 Years",
      "category": "Design",
      "description": "Creative design curriculum covering fashion illustration, garment construction, textile science, trend forecasting, and luxury brand marketing.",
      "careers": [
        "Fashion Designer",
        "Apparel Merchandiser",
        "Textile Stylist",
        "Costume Designer"
      ],
      "skills": [
        "Pattern Making",
        "Fashion Illustration",
        "Textile Selection",
        "Draping",
        "CAD for Fashion"
      ],
      "subjects": [
        "History of Fashion",
        "Fashion Illustration & CAD",
        "Pattern Making & Garment Construction",
        "Textile Science & Processing",
        "Fashion Merchandising & Marketing",
        "Collection Showcase Project"
      ],
      "salary": "₹4.5 - 15 LPA",
      "companies": [
        "Aditya Birla Fashion",
        "Raymond",
        "Fabindia",
        "Sabyasachi Mukherjee",
        "Zara"
      ]
    },
    {
      "name": "B.Arch (Bachelor of Architecture)",
      "duration": "5 Years",
      "category": "Architecture",
      "description": "Council of Architecture (COA) approved degree covering spatial design, structural engineering, sustainable green architecture, and urban planning.",
      "careers": [
        "Architect",
        "Urban Designer",
        "Landscape Architect",
        "Interior Architect"
      ],
      "skills": [
        "AutoCAD / Revit",
        "3D SketchUp / Rhino",
        "Sustainable Architecture",
        "Structural Planning"
      ],
      "subjects": [
        "Architectural Design Studios I-X",
        "Building Construction & Materials",
        "History of Architecture",
        "Structural Mechanics in Architecture",
        "Sustainable Green Building Architecture",
        "Town & Urban Planning"
      ],
      "salary": "₹5.0 - 16 LPA",
      "companies": [
        "Hafeez Contractor Architects",
        "Morphogenesis",
        "CPWD",
        "DLF",
        "Sanjay Puri Architects"
      ]
    },
    {
      "name": "BHM (Bachelor of Hotel Management)",
      "duration": "4 Years",
      "category": "Hospitality",
      "description": "Prepares managers for international luxury hotels, culinary arts, food and beverage operations, front-office administration, and event banqueting.",
      "careers": [
        "Hotel General Manager",
        "Executive Chef (Culinary)",
        "F&B Manager",
        "Hospitality Operations Lead"
      ],
      "skills": [
        "Customer Service Excellence",
        "Food Production & Culinary",
        "Front Office Management",
        "Event Planning"
      ],
      "subjects": [
        "Food Production & Culinary Arts",
        "Food & Beverage Service Operations",
        "Front Office Management",
        "Housekeeping Operations",
        "Hospitality Marketing & Accounting",
        "Event & Banquet Management"
      ],
      "salary": "₹4.0 - 12 LPA",
      "companies": [
        "Taj Hotels (IHCL)",
        "Oberoi Group",
        "ITC Hotels",
        "Marriott International",
        "Hyatt"
      ]
    }
  ],
  "afterUG": [
    {
      "name": "MCA (Master of Computer Applications)",
      "duration": "2 Years",
      "category": "Post-Graduate Tech",
      "description": "Advanced post-graduate computer science program covering scalable cloud architectures, enterprise software design, full-stack frameworks, and cybersecurity.",
      "careers": [
        "Senior Software Engineer",
        "Full-Stack Architect",
        "DevOps Engineer",
        "Project Lead"
      ],
      "skills": [
        "Full Stack Development",
        "System Design",
        "Cloud Infrastructure",
        "Advanced Java / Python"
      ],
      "subjects": [
        "Advanced Data Structures & Algorithms",
        "Full Stack Web Development",
        "Cloud Architecture & Microservices",
        "Enterprise Database Technologies",
        "Mobile Application Development",
        "Software Project Management"
      ],
      "salary": "₹6.5 - 20 LPA",
      "companies": [
        "Zoho",
        "Amazon",
        "TCS Digital",
        "Cognizant",
        "Infosys",
        "Wipro"
      ]
    },
    {
      "name": "MBA in Business Analytics & Artificial Intelligence",
      "duration": "2 Years",
      "category": "Management (PG)",
      "description": "High-demand modern MBA program merging business decision-making with predictive machine learning analytics, big data, and data visualization.",
      "careers": [
        "Analytics Manager",
        "Management Consultant",
        "Business Intelligence Lead",
        "Product Manager"
      ],
      "skills": [
        "Business Analytics",
        "Python / R",
        "Power BI / Tableau",
        "Predictive Modeling",
        "Strategic Leadership"
      ],
      "subjects": [
        "Managerial Statistics",
        "Machine Learning for Business",
        "Big Data Analytics in Enterprises",
        "Data Visualization & Executive Dashboards",
        "Strategic Management",
        "FinTech & Digital Transformation"
      ],
      "salary": "₹10.0 - 28 LPA",
      "companies": [
        "McKinsey",
        "BCG",
        "Deloitte",
        "Amazon",
        "Accenture Strategy",
        "Tiger Analytics"
      ]
    },
    {
      "name": "MBA in Finance & Investment Banking",
      "duration": "2 Years",
      "category": "Management (PG)",
      "description": "Specialized post-grad finance program covering corporate valuations, merger & acquisition modeling, private equity, and portfolio risk management.",
      "careers": [
        "Investment Banker",
        "Equity Research Analyst",
        "Corporate Finance Manager",
        "Portfolio Manager"
      ],
      "skills": [
        "Financial Modeling (DCF/LBO)",
        "Valuations",
        "Risk Assessment",
        "Corporate Governance"
      ],
      "subjects": [
        "Corporate Valuation & M&A",
        "Investment Analysis & Portfolio Management",
        "Financial Derivatives & Risk",
        "Fixed Income Markets",
        "Commercial Banking",
        "Behavioral Finance"
      ],
      "salary": "₹12.0 - 32 LPA",
      "companies": [
        "Goldman Sachs",
        "Morgan Stanley",
        "JP Morgan",
        "Citigroup",
        "HDFC Bank"
      ]
    },
    {
      "name": "MBA in Marketing & Digital Growth",
      "duration": "2 Years",
      "category": "Management (PG)",
      "description": "Focuses on omnichannel brand management, digital performance marketing, customer psychology, consumer journey analytics, and growth hacking.",
      "careers": [
        "Brand Manager",
        "Growth Marketing Lead",
        "Product Marketing Specialist",
        "Digital Marketing Director"
      ],
      "skills": [
        "Brand Strategy",
        "Performance Marketing",
        "Consumer Insights",
        "Growth Hacking"
      ],
      "subjects": [
        "Strategic Brand Management",
        "Digital Marketing & Performance Analytics",
        "Consumer Behavior Dynamics",
        "Integrated Marketing Communications",
        "Sales & Distribution Strategy"
      ],
      "salary": "₹9.0 - 24 LPA",
      "companies": [
        "Hindustan Unilever",
        "Procter & Gamble",
        "Amazon",
        "Google",
        "ITC",
        "Flipkart"
      ]
    },
    {
      "name": "MBA in Human Resource Management (HR)",
      "duration": "2 Years",
      "category": "Management (PG)",
      "description": "Covers strategic talent acquisition, organizational culture, performance compensation modeling, labor dispute resolution, and HR tech analytics.",
      "careers": [
        "HR Business Partner (HRBP)",
        "Talent Acquisition Director",
        "Compensation & Benefits Manager"
      ],
      "skills": [
        "Talent Acquisition",
        "Labor Laws & Compliance",
        "HR Analytics",
        "Performance Appraisal"
      ],
      "subjects": [
        "Strategic Human Resource Management",
        "Talent Acquisition & Retention",
        "Compensation & Reward Management",
        "Industrial Relations & Labor Legislation",
        "HR Analytics & Metrics"
      ],
      "salary": "₹8.0 - 20 LPA",
      "companies": [
        "Tata Sons",
        "Reliance",
        "Accenture",
        "Infosys",
        "Deloitte",
        "Wipro"
      ]
    },
    {
      "name": "MBA in Logistics & Global Supply Chain",
      "duration": "2 Years",
      "category": "Management (PG)",
      "description": "Tailored for international freight logistics, global warehouse network design, maritime port logistics, and supply chain resiliency.",
      "careers": [
        "Supply Chain Director",
        "Global Logistics Lead",
        "Procurement Manager",
        "Operations Head"
      ],
      "skills": [
        "Supply Chain Optimization",
        "SAP SCM",
        "Procurement Strategy",
        "Warehouse Automation"
      ],
      "subjects": [
        "Global Supply Chain Strategy",
        "Warehouse Design & Automation",
        "Total Quality Management (Six Sigma)",
        "Procurement & Sourcing Management",
        "International Maritime Logistics"
      ],
      "salary": "₹9.0 - 22 LPA",
      "companies": [
        "Amazon Operations",
        "DHL Express",
        "Maersk",
        "Flipkart Logistics",
        "Unilever"
      ]
    },
    {
      "name": "M.Tech in Artificial Intelligence & Data Science",
      "duration": "2 Years",
      "category": "Post-Graduate Tech",
      "description": "Advanced engineering research degree targeting transformer neural architectures, generative AI models, computer vision, and distributed high-performance computing.",
      "careers": [
        "Lead AI Scientist",
        "Principal ML Architect",
        "Computer Vision Lead",
        "Deep Learning Researcher"
      ],
      "skills": [
        "PyTorch / TensorFlow",
        "Generative AI / LLMs",
        "Distributed Training",
        "CUDA / GPU Acceleration"
      ],
      "subjects": [
        "Advanced Machine Learning",
        "Deep Learning & Generative Models",
        "Reinforcement Learning",
        "Natural Language Processing with Transformers",
        "GPU Computing & Parallel Processing"
      ],
      "salary": "₹12.0 - 35 LPA",
      "companies": [
        "Google Research",
        "Microsoft Research",
        "NVIDIA",
        "Amazon AI",
        "Intel Labs"
      ]
    },
    {
      "name": "M.Tech in Computer Science & Engineering",
      "duration": "2 Years",
      "category": "Post-Graduate Tech",
      "description": "Post-graduate engineering in distributed database architectures, advanced cryptology, operating system design, and algorithmic complexity.",
      "careers": [
        "Principal Software Architect",
        "Systems Researcher",
        "Cloud Infrastructure Lead"
      ],
      "skills": [
        "Distributed Systems",
        "Advanced Algorithms",
        "System Performance Tuning",
        "Cloud Security"
      ],
      "subjects": [
        "Advanced Algorithms & Complexity",
        "Distributed Systems & Cloud Computing",
        "Advanced Database Systems",
        "Network Cryptography & Cyber Defense",
        "Software Architecture & Design"
      ],
      "salary": "₹10.0 - 28 LPA",
      "companies": [
        "Adobe",
        "Oracle",
        "Cisco",
        "IBM Research",
        "Qualcomm"
      ]
    },
    {
      "name": "M.Tech in VLSI & Embedded Systems",
      "duration": "2 Years",
      "category": "Post-Graduate Tech",
      "description": "Covers nanoscale microchip fabrication, FPGA synthesis, low-power CMOS circuit architectures, and real-time embedded RTOS design.",
      "careers": [
        "Senior VLSI Design Engineer",
        "SoC Verification Lead",
        "Silicon Architecture Specialist"
      ],
      "skills": [
        "SystemVerilog / UVM",
        "Cadence / Synopsys Tools",
        "FPGA Architecture",
        "Low Power VLSI"
      ],
      "subjects": [
        "Digital CMOS VLSI Design",
        "Analog & Mixed-Signal IC Design",
        "VLSI Verification & Testing (UVM)",
        "Embedded Real-Time Operating Systems (RTOS)",
        "Low-Power VLSI Architecture"
      ],
      "salary": "₹10.0 - 30 LPA",
      "companies": [
        "Qualcomm",
        "NVIDIA",
        "Intel",
        "AMD",
        "Broadcom",
        "Texas Instruments"
      ]
    },
    {
      "name": "M.Tech in Structural Engineering",
      "duration": "2 Years",
      "category": "Post-Graduate Tech",
      "description": "Specialized civil engineering post-grad in earthquake-resistant design, high-rise skyscrapers, bridge dynamics, and advanced finite element modeling.",
      "careers": [
        "Senior Structural Engineer",
        "Bridge Design Specialist",
        "Earthquake Engineering Consultant"
      ],
      "skills": [
        "ETABS / SAP2000",
        "Nonlinear Structural Analysis",
        "Earthquake Resistant Design",
        "Finite Element Analysis"
      ],
      "subjects": [
        "Advanced Structural Analysis",
        "Earthquake Resistant Design of Structures",
        "Design of Tall Buildings",
        "Finite Element Method in Civil Engineering",
        "Prestressed Concrete Structures"
      ],
      "salary": "₹7.0 - 18 LPA",
      "companies": [
        "L&T Infrastructure",
        "Arup",
        "WSP",
        "Tata Consulting Engineers",
        "Afcons"
      ]
    },
    {
      "name": "M.Sc in Data Science & Machine Learning",
      "duration": "2 Years",
      "category": "Post-Graduate Science",
      "description": "Pure science and analytics fusion: statistical inference theory, predictive algorithmic models, neural networks, and big data cloud pipelines.",
      "careers": [
        "Data Scientist",
        "Quantitative Researcher",
        "Machine Learning Specialist"
      ],
      "skills": [
        "Python / R",
        "Statistical Inference",
        "Machine Learning",
        "Data Mining",
        "Big Data"
      ],
      "subjects": [
        "Probability & Mathematical Statistics",
        "Machine Learning Techniques",
        "Deep Learning Architectures",
        "Big Data Technologies",
        "Statistical Data Mining"
      ],
      "salary": "₹8.0 - 22 LPA",
      "companies": [
        "Tiger Analytics",
        "Fractal Analytics",
        "American Express",
        "Mu Sigma",
        "Deloitte"
      ]
    },
    {
      "name": "M.Sc in Biotechnology & Bioinformatics",
      "duration": "2 Years",
      "category": "Post-Graduate Science",
      "description": "Advanced post-grad research into recombinant vaccines, CRISPR gene editing, macromolecular crystallographic simulation, and genomics algorithms.",
      "careers": [
        "Senior Biotechnologist",
        "Computational Biologist",
        "Genomics Researcher",
        "Bioprocess Scientist"
      ],
      "skills": [
        "CRISPR Protocols",
        "Next-Gen Sequencing (NGS)",
        "Python for Bioinformatics",
        "Structural Biology"
      ],
      "subjects": [
        "Recombinant DNA Technology & Gene Cloning",
        "Genomics & Proteomics",
        "Structural Bioinformatics & Drug Design",
        "Bioprocess Technology",
        "Immunology & Vaccine Development"
      ],
      "salary": "₹6.0 - 16 LPA",
      "companies": [
        "Biocon",
        "Syngene",
        "Serum Institute",
        "AstraZeneca India",
        "Bharat Biotech"
      ]
    },
    {
      "name": "M.Sc in Physics & Nanotechnology",
      "duration": "2 Years",
      "category": "Post-Graduate Science",
      "description": "Focuses on quantum mechanical devices, nanomaterial synthesis, condensed matter physics, and carbon nanotube applications.",
      "careers": [
        "Nanotech Research Scientist",
        "Materials Analyst",
        "Semiconductor Lab Specialist"
      ],
      "skills": [
        "Electron Microscopy (SEM/TEM)",
        "Nanofabrication",
        "Quantum Mechanics",
        "Spectroscopy"
      ],
      "subjects": [
        "Quantum Mechanics I & II",
        "Condensed Matter Physics",
        "Nanomaterials Synthesis & Characterization",
        "Nanoelectronics & Nanodevices",
        "Spectroscopic Material Analysis"
      ],
      "salary": "₹5.5 - 15 LPA",
      "companies": [
        "ISRO",
        "DRDO",
        "Applied Materials",
        "Tata Steel R&D",
        "CSIR Labs"
      ]
    },
    {
      "name": "M.Com in Advanced Accounting & Taxation",
      "duration": "2 Years",
      "category": "Post-Graduate Commerce",
      "description": "Advanced post-graduate commerce curriculum focusing on international transfer pricing, corporate financial reporting, forensic auditing, and tax planning.",
      "careers": [
        "Senior Financial Controller",
        "Tax Advisory Specialist",
        "Internal Audit Head",
        "Finance Professor"
      ],
      "skills": [
        "Corporate Financial Reporting",
        "GST & Direct Tax Compliance",
        "Forensic Auditing",
        "Financial Analytics"
      ],
      "subjects": [
        "Corporate Financial Reporting (Ind AS)",
        "Advanced Auditing & Assurance",
        "Direct Tax Planning & Management",
        "International Taxation & Transfer Pricing",
        "Financial Markets & Institutions"
      ],
      "salary": "₹5.5 - 14 LPA",
      "companies": [
        "EY",
        "PwC",
        "Deloitte",
        "KPMG",
        "Standard Chartered Bank"
      ]
    },
    {
      "name": "MD / MS (Doctor of Medicine / Master of Surgery)",
      "duration": "3 Years",
      "category": "Medical Specialization",
      "description": "Post-MBBS super-specialization degree covering General Medicine, Cardiology, Neurology, General Surgery, Orthopedics, or Radiology.",
      "careers": [
        "Consultant Specialist Doctor",
        "Specialist Surgeon",
        "Professor of Medicine",
        "Hospital Director"
      ],
      "skills": [
        "Specialized Surgical Procedures",
        "Advanced Clinical Diagnostics",
        "Intensive Critical Care"
      ],
      "subjects": [
        "Advanced Clinical Medicine / Surgery",
        "Specialty Pathology & Pharmacotherapy",
        "Surgical Techniques & Procedures",
        "Clinical Ward Rotations & Residency",
        "Clinical Thesis Defense"
      ],
      "salary": "₹15.0 - 45 LPA+",
      "companies": [
        "Apollo Hospitals",
        "Fortis Healthcare",
        "AIIMS",
        "Max Super Specialty",
        "Manipal Health"
      ]
    },
    {
      "name": "LL.M (Master of Laws - Corporate & Cyber Law)",
      "duration": "2 Years",
      "category": "Law Specialization",
      "description": "Advanced postgraduate legal research focusing on international commercial arbitration, intellectual property rights, data privacy regulations, and cyber crime jurisprudence.",
      "careers": [
        "Senior Legal Counsel",
        "Cyber Law Specialist",
        "Arbitration Counsel",
        "Law Professor"
      ],
      "skills": [
        "Corporate Legal Strategy",
        "Cyber Jurisprudence",
        "International Arbitration",
        "Legal Policy Analysis"
      ],
      "subjects": [
        "Judicial Process & Legal Philosophy",
        "Comparative Constitutional Law",
        "International Commercial Arbitration",
        "Cyber Laws & Information Technology Act",
        "Corporate Governance & Securities Law"
      ],
      "salary": "₹8.0 - 24 LPA",
      "companies": [
        "Top Law Firms (Khaitan, Trilegal, SAM)",
        "Tech Giants (Google, Meta India)",
        "National Law Universities"
      ]
    }
  ],
  "afterPG": [
    {
      "name": "PhD in Computer Science (Artificial Intelligence)",
      "duration": "3-5 Years",
      "category": "Doctoral Research",
      "description": "Doctoral research focused on inventing novel neural architectures, publishing peer-reviewed research papers in top conferences (NeurIPS, ICML), and advancing machine intelligence.",
      "careers": [
        "Principal AI Scientist",
        "R&D Director",
        "Distinguished Professor",
        "Chief Scientist"
      ],
      "skills": [
        "Scientific Research",
        "Academic Paper Publishing",
        "Novel Model Architecture",
        "Mathematics & Proofs"
      ],
      "subjects": [
        "Doctoral Research Methodology",
        "Advanced Machine Learning Theory",
        "Neural Architecture Innovation",
        "Academic Literature Review",
        "Dissertation Defense"
      ],
      "salary": "₹18.0 - 50 LPA+",
      "companies": [
        "Google DeepMind",
        "Microsoft Research",
        "Meta AI",
        "IISc Bangalore",
        "IIT Madras"
      ]
    },
    {
      "name": "PhD in Management & Business Strategy",
      "duration": "3-5 Years",
      "category": "Doctoral Research",
      "description": "Doctoral research in organizational behaviors, behavioral economics, corporate governance structures, and international market competition.",
      "careers": [
        "Strategy Director",
        "Senior Management Consultant",
        "IIM Professor",
        "Policy Advisor"
      ],
      "skills": [
        "Quantitative Research Methods",
        "Econometric Modeling",
        "Executive Strategy",
        "Academic Publishing"
      ],
      "subjects": [
        "Quantitative Research Methods in Management",
        "Behavioral Organizational Studies",
        "Corporate Governance Theory",
        "Advanced Economic Modeling",
        "Doctoral Dissertation Defense"
      ],
      "salary": "₹15.0 - 40 LPA+",
      "companies": [
        "IIM Ahmedabad",
        "IIM Bangalore",
        "ISB Hyderabad",
        "Bain & Company",
        "McKinsey Global"
      ]
    },
    {
      "name": "PhD in Biotechnology & Molecular Medicine",
      "duration": "3-5 Years",
      "category": "Doctoral Research",
      "description": "Doctoral research focusing on oncology cancer mechanisms, genetic target discovery, novel vaccine platforms, and clinical clinical pharmacology.",
      "careers": [
        "Principal Research Scientist",
        "Drug Discovery Lead",
        "Bio-Incubator Director",
        "R&D Head"
      ],
      "skills": [
        "Molecular Target Discovery",
        "Grant Proposal Writing",
        "Clinical Trial Design",
        "Peer Review"
      ],
      "subjects": [
        "Molecular Oncology & Gene Expression",
        "Advanced Drug Delivery Systems",
        "Experimental Bio-Instrumentation",
        "Doctoral Seminar Series",
        "Original Doctoral Dissertation"
      ],
      "salary": "₹14.0 - 38 LPA+",
      "companies": [
        "Biocon R&D",
        "Novartis",
        "AstraZeneca",
        "CSIR Labs",
        "ICMR"
      ]
    },
    {
      "name": "PhD in Advanced Engineering & Robotics",
      "duration": "3-5 Years",
      "category": "Doctoral Research",
      "description": "Doctoral research into autonomous robotic swarms, drone aerodynamics, human-robot interaction, and cyber-physical systems.",
      "careers": [
        "Robotics Research Director",
        "Principal Autonomous Systems Architect",
        "Professor of Engineering"
      ],
      "skills": [
        "Robotic Swarm Algorithms",
        "Control Theory",
        "Autonomous Navigation",
        "Experimental Prototyping"
      ],
      "subjects": [
        "Advanced Nonlinear Control Theory",
        "Autonomous Multi-Agent Robotics",
        "Perception & Spatial SLAM",
        "Advanced Robotics Prototyping",
        "Doctoral Dissertation Defense"
      ],
      "salary": "₹16.0 - 45 LPA+",
      "companies": [
        "ISRO",
        "DRDO",
        "Tesla Autonomous Systems",
        "IIT Bombay",
        "Addverb Technologies"
      ]
    }
  ]
};

// Skill sets suggestions catalog
const skillSuggestions = [
  // Tech Skills
  "Python", "JavaScript", "HTML/CSS", "React.js", "Node.js", "Java", "C++", "SQL", "Machine Learning", "TensorFlow/PyTorch", "AWS Cloud",
  // Engineering / Physical Skills
  "CAD Modeling", "AUTOCAD", "STAAD Pro", "Circuit Design", "Troubleshooting", "Physics Lab Work", "Site Surveying",
  // Business / Finance Skills
  "Accounting", "Financial Analysis", "Auditing", "GST Filings", "Tally ERP", "Excel", "Digital Marketing", "Project Management",
  // Medical / Science Skills
  "Microbiology", "PCR Lab Work", "Clinical Diagnosis", "Pharmacology",
  // General / Arts Skills
  "Communication", "Public Speaking", "Teaching", "Research", "Academic Writing", "Creative Writing", "Content Writing", "Leadership", "Teamwork"
];

// Expanded Careers Master Data representing multiple fields
const careersData = [
  // --- TECH FIELD ---
  {
    id: "software-engineer",
    title: "Software Engineer",
    category: "Tech",
    minQualification: "UG",
    requiredStream: ["Computer Science", "Information Technology", "Electronics", "Software Engineering"],
    requiredSkills: ["JavaScript", "React.js", "Node.js", "Java", "Python", "SQL", "Communication"],
    description: "Designs, develops, and installs software systems. Builds scalable backend microservices and modern responsive front-ends.",
    baseSalary: { min: 4.5, avg: 8.0, max: 18.0 },
    experience: "0-3 years",
    difficulty: "Hard",
    skillsToAcquire: ["Docker & Kubernetes", "AWS Cloud", "System Design"],
    companies: [] // Filled dynamically by procedural engine
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    category: "Tech",
    minQualification: "PG",
    requiredStream: ["Computer Science", "Data Science", "Artificial Intelligence", "Mathematics"],
    requiredSkills: ["Machine Learning", "TensorFlow/PyTorch", "Python", "SQL", "Data Analysis", "Research"],
    description: "Builds and deploys scalable machine learning algorithms, deep learning neural networks, and NLP pipelines.",
    baseSalary: { min: 7.0, avg: 12.0, max: 28.0 },
    experience: "0-4 years",
    difficulty: "Hard",
    skillsToAcquire: ["MLOps (MLflow, Kubeflow)", "Cloud AI Deployment", "CUDA C++"],
    companies: []
  },
  
  // --- CORE ENGINEERING ---
  {
    id: "mechanical-engineer",
    title: "Mechanical Design Engineer",
    category: "Engineering",
    minQualification: "UG",
    requiredStream: ["Mechanical", "Automobile", "Manufacturing", "Production"],
    requiredSkills: ["CAD Modeling", "Troubleshooting", "Mathematics", "Teamwork"],
    description: "Designs mechanical components, engine parts, and thermal systems using 3D modeling programs. Performs stress analysis.",
    baseSalary: { min: 3.5, avg: 5.5, max: 10.0 },
    experience: "0-3 years",
    difficulty: "Medium",
    skillsToAcquire: ["Ansys FEA", "SolidWorks Certification", "GD&T Standards"],
    companies: []
  },
  {
    id: "civil-site-engineer",
    title: "Civil Site Engineer",
    category: "Engineering",
    minQualification: "UG",
    requiredStream: ["Civil", "Structural", "Infrastructure"],
    requiredSkills: ["AUTOCAD", "Site Surveying", "Project Management", "Leadership", "Teamwork"],
    description: "Supervises construction works on-site, manages labor, ensures concrete casting quality, and measures work progress.",
    baseSalary: { min: 3.0, avg: 4.8, max: 9.0 },
    experience: "0-2 years",
    difficulty: "Medium",
    skillsToAcquire: ["STAAD Pro", "Primavera Scheduling", "Estimation & Valuation"],
    companies: []
  },

  // --- BUSINESS, FINANCE & CA ---
  {
    id: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    category: "Finance",
    minQualification: "UG",
    requiredStream: ["Commerce", "Accounting", "Business", "Economics"],
    requiredSkills: ["Accounting", "Auditing", "GST Filings", "Tally ERP", "Excel"],
    description: "Manages corporate taxation policies, audits financial books, files GST forms, and advises on financial restructuring.",
    baseSalary: { min: 8.0, avg: 11.5, max: 24.0 },
    experience: "0-2 years",
    difficulty: "Hard",
    skillsToAcquire: ["Corporate Tax Audits", "M&A Advisory", "SAP FICO Module"],
    companies: []
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    category: "Finance",
    minQualification: "UG",
    requiredStream: ["Commerce", "Finance", "Business Administration", "Economics", "Mathematics"],
    requiredSkills: ["Financial Analysis", "Excel", "Data Analysis", "Accounting", "Communication"],
    description: "Evaluates financial data to guide business investments. Conducts market study, equity research, and reports trends.",
    baseSalary: { min: 4.0, avg: 6.8, max: 14.0 },
    experience: "0-3 years",
    difficulty: "Medium",
    skillsToAcquire: ["CFA Level 1", "Python for Finance", "Valuation Modeling"],
    companies: []
  },

  // --- MEDICAL & SCIENCE ---
  {
    id: "clinical-researcher",
    title: "Clinical Research Associate",
    category: "Medical",
    minQualification: "UG",
    requiredStream: ["Biotechnology", "Pharmacy", "Medicine", "Microbiology", "Science"],
    requiredSkills: ["PCR Lab Work", "Microbiology", "Research", "Academic Writing", "Communication"],
    description: "Monitors and coordinates clinical drug trials. Verifies laboratory safety guidelines and records trial statistics.",
    baseSalary: { min: 3.5, avg: 5.2, max: 9.5 },
    experience: "0-3 years",
    difficulty: "Medium",
    skillsToAcquire: ["ICH-GCP Guidelines", "Clinical Data Management", "SAS Programming"],
    companies: []
  },
  {
    id: "r-d-scientist",
    title: "R&D Scientist",
    category: "Science",
    minQualification: "PhD",
    requiredStream: ["Physics", "Chemistry", "Nanotechnology", "Material Science", "Biotechnology"],
    requiredSkills: ["Research", "Physics Lab Work", "Academic Writing", "Critical Thinking", "Data Analysis"],
    description: "Leads research programs, conducts lab experiments, synthesizes novel chemical formulas/materials, and files patents.",
    baseSalary: { min: 10.0, avg: 16.0, max: 35.0 },
    experience: "0-3 years (Post-PhD)",
    difficulty: "Hard",
    skillsToAcquire: ["Patent Filing", "Grant Writing", "Project Leadership"],
    companies: []
  },

  // --- ARTS & MEDIA ---
  {
    id: "digital-journalist",
    title: "Digital Journalist",
    category: "Arts",
    minQualification: "UG",
    requiredStream: ["Journalism", "English Literature", "Visual Communication", "Political Science"],
    requiredSkills: ["Creative Writing", "Content Writing", "Communication", "Public Speaking", "Research"],
    description: "Investigates stories, conducts field interviews, reports breaking news, and drafts editorial articles for online news sites.",
    baseSalary: { min: 2.8, avg: 4.2, max: 8.5 },
    experience: "0-2 years",
    difficulty: "Medium",
    skillsToAcquire: ["Video Editing (Premiere Pro)", "SEO Writing", "Social Media Analytics"],
    companies: []
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    category: "Arts",
    minQualification: "12th Arts",
    requiredStream: ["*"],
    requiredSkills: ["Creative Writing", "HTML/CSS", "JavaScript", "Teamwork"],
    description: "Designs wireframes and visual layouts for mobile and web apps. Focuses on user psychology and responsive interface designs.",
    baseSalary: { min: 4.0, avg: 7.0, max: 15.0 },
    experience: "0-3 years",
    difficulty: "Medium",
    skillsToAcquire: ["Figma Design", "User Persona Research", "Adobe XD"],
    companies: []
  },

  
  // --- OPERATIONS / ENTRY LEVEL ---
  {
    id: "data-entry-operator",
    title: "Data Entry Operator",
    category: "Logistics",
    minQualification: "10th",
    requiredStream: ["*"],
    requiredSkills: ["Excel", "Communication", "Teamwork"],
    description: "Enters administrative data into corporate databases, formats report spreadsheets, and keeps records updated.",
    baseSalary: { min: 1.8, avg: 2.5, max: 3.5 },
    experience: "0-1 years",
    difficulty: "Easy",
    skillsToAcquire: ["Advanced Excel Formulas", "SQL Basics", "Typing Speed Cert"],
    companies: []
  },
  {
    id: "office-assistant",
    title: "Office / Admin Assistant",
    category: "Management",
    minQualification: "10th",
    requiredStream: ["*"],
    requiredSkills: ["Communication", "Excel", "Teamwork"],
    description: "Manages files, schedules office meetings, coordinates daily logistics, and routes guest queries.",
    baseSalary: { min: 1.5, avg: 2.2, max: 3.0 },
    experience: "0+",
    difficulty: "Easy",
    skillsToAcquire: ["Bookkeeping", "Customer Relationship Mgmt (CRM)", "Business Communication"],
    companies: []
  }
];

// Generator Dictionaries to procedurally synthesize 1000+ companies
const generatorDict = {
  companyPrefixes: [
    "TATA", "Reliance", "Infosys", "Wipro", "HDFC", "ICICI", "Apollo", "Biocon", "Zoho", "L&T", 
    "Mahindra", "ITC", "Godrej", "Dr. Reddy's", "TVS", "Bajaj", "Bharat", "Cognizant", "Freshworks", 
    "Adani", "Dalmia", "Standard", "Vertex", "Apex", "Summit", "SpaceX", "GMR", "NTPC", "ONGC", "HCL",
    "Ashok Leyland", "Murugappa", "Muthoot", "Sundaram", "Kothari", "Elgi", "MRF", "Jindal", "TCS"
  ],
  companySuffixes: [
    "Technologies", "Motors", "Industries", "Finance", "Healthcare", "Consultancy", "Digital", "Infotech", 
    "Solutions", "Labs", "Group", "Enterprises", "Ventures", "Systems", "Logistics", "Services", 
    "Pharmaceuticals", "Power", "Infrastructure", "Media", "Steel", "Electronics", "Communications"
  ],
  locations: [
    "Chennai, TN", "Coimbatore, TN", "Bangalore, KA", "Hyderabad, TS", "Mumbai, MH", "Pune, MH", 
    "Delhi, DL", "Gurugram, HR", "Kochi, KL", "Trichy, TN", "Madurai, TN", "Salem, TN"
  ],
  industryMapping: {
    "Tech": "Technology & Computing",
    "Engineering": "Core Engineering & Heavy Industries",
    "Finance": "Banking, Audit & Financial Services",
    "Medical": "Healthcare & Allied Sciences",
    "Science": "Scientific R&D & Institutes",
    "Arts": "Media, Design & Journalism",
    "Logistics": "Logistics & Supply Chain Operations",
    "Management": "Administration & Operations"
  }
};

// Sample Resumes for AI ATS Parser with real projects, GitHub links & experience
const mockResumes = {
  "Tamil_Selvan_FullStack_Resume.pdf": {
    name: "Tamil Selvan",
    qualification: "UG",
    stream: "Computer Science & Engineering",
    institution: "Thiagarajar College of Engineering, Madurai",
    mark: "8.85 / 10 CGPA",
    experience: "1 Year (Internship + Freelance)",
    atsScore: 92,
    skills: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "SQL", "Docker", "Git", "REST APIs", "Problem Solving"],
    projects: [
      {
        title: "E-Commerce Cloud Platform",
        tech: "React, Node.js, Stripe API, MongoDB",
        github: "https://github.com/tamilselvan/ecommerce-engine",
        desc: "Full-stack payment-integrated platform with JWT auth and sub-second checkout."
      },
      {
        title: "Real-time P2P Video Conferencing App",
        tech: "Socket.io, WebRTC, Express",
        github: "https://github.com/tamilselvan/webrtc-chat",
        desc: "Multi-user encrypted video conference engine with dynamic room management."
      }
    ],
    summary: "Full-Stack Engineer with strong expertise in modern JavaScript frameworks, distributed backend architectures, and API design."
  },
  "Tamil_Selvan_AI_DataScientist_Resume.pdf": {
    name: "Tamil Selvan",
    qualification: "UG",
    stream: "Artificial Intelligence & Data Science",
    institution: "PSG College of Technology, Coimbatore",
    mark: "8.95 / 10 CGPA",
    experience: "Final Year Capstone + Research Intern",
    atsScore: 94,
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "SQL", "Data Analysis", "Machine Learning"],
    projects: [
      {
        title: "Automated Chest X-Ray Disease Classifier",
        tech: "PyTorch, ResNet-50, OpenCV",
        github: "https://github.com/tamilselvan/med-vision-ai",
        desc: "Deep learning medical vision model achieving 96.4% AUC on CheXpert dataset."
      },
      {
        title: "Predictive Customer Churn Pipeline",
        tech: "Python, XGBoost, Streamlit",
        github: "https://github.com/tamilselvan/churn-predictor",
        desc: "Enterprise churn forecasting pipeline with SHAP explainability."
      }
    ],
    summary: "Data Science candidate with solid grasp in machine learning modeling, statistical analysis, and deep neural networks."
  },
  "Tamil_Selvan_Cloud_DevOps_Resume.pdf": {
    name: "Tamil Selvan",
    qualification: "UG",
    stream: "Information Technology",
    institution: "Coimbatore Institute of Technology",
    mark: "8.60 / 10 CGPA",
    experience: "Cloud Engineering Intern",
    atsScore: 90,
    skills: ["AWS Cloud", "Docker", "Kubernetes", "Linux", "CI/CD", "Terraform", "Python", "Git", "System Design"],
    projects: [
      {
        title: "Multi-Cluster Kubernetes Deployment",
        tech: "AWS EKS, Terraform, Helm, GitHub Actions",
        github: "https://github.com/tamilselvan/k8s-infra-iac",
        desc: "Zero-downtime rolling deployment pipeline with Prometheus and Grafana telemetry."
      }
    ],
    summary: "DevOps & Cloud Engineer proficient in infrastructure as code, containerization, and automated release engineering."
  },
  "Tamil_Selvan_Java_Backend_Resume.pdf": {
    name: "Tamil Selvan",
    qualification: "UG",
    stream: "Computer Science",
    institution: "Government College of Technology, Coimbatore",
    mark: "8.40 / 10 CGPA",
    experience: "Software Trainee",
    atsScore: 88,
    skills: ["Java", "Spring Boot", "Microservices", "Hibernate", "MySQL", "Kafka", "REST APIs", "Problem Solving"],
    projects: [
      {
        title: "Banking Microservices Transaction Core",
        tech: "Java 17, Spring Boot, Apache Kafka, MySQL",
        github: "https://github.com/tamilselvan/banking-microservice",
        desc: "High-throughput banking transactions API supporting idempotent saga patterns."
      }
    ],
    summary: "Backend developer specializing in Java Spring Boot ecosystem, relational database optimization, and REST API development."
  },
  "Tamil_Selvan_Fresher_CSE_Resume.pdf": {
    name: "Tamil Selvan",
    qualification: "UG",
    stream: "Computer Science",
    institution: "Anna University Campus",
    mark: "8.15 / 10 CGPA",
    experience: "Fresher (2026 Batch)",
    atsScore: 82,
    skills: ["C++", "Java", "HTML/CSS", "JavaScript", "SQL", "Problem Solving", "Communication", "Teamwork"],
    projects: [
      {
        title: "College Student Management Portal",
        tech: "HTML, CSS, JavaScript, PHP, MySQL",
        github: "https://github.com/tamilselvan/student-portal",
        desc: "Role-based academic management system with attendance calculations and report generation."
      }
    ],
    summary: "Engineering graduate with strong foundation in core computer science, Data Structures & Algorithms, and database management."
  },
  "Annamalai_Leadership_Executive_Resume.pdf": {
    name: "K. Annamalai",
    qualification: "PG",
    stream: "Mechanical Engineering & Management",
    institution: "PSG College of Technology & IIM Lucknow",
    mark: "UPSC IPS / IIM MBA",
    experience: "10+ Years Executive Leadership",
    atsScore: 98,
    skills: ["Leadership", "Public Speaking", "Crisis Management", "Public Administration", "Strategic Planning", "Financial Analysis", "Project Management"],
    projects: [
      {
        title: "Integrated Citizen Grievance & Cyber Crime Portal",
        tech: "Strategic Administration, GovTech, Realtime Analytics",
        github: "https://github.com/public-service/gov-initiatives",
        desc: "Headed statewide digital transformation improving response resolution time by 60%."
      }
    ],
    summary: "Senior administrative leader with extensive track record in strategic governance, crisis mitigation, and high-impact institutional management."
  }
};

// Real Company Placement & Interview Assessment Question Bank (Pool of 35 Real Company Questions)
const companyAssessmentQuestionBank = [
  {
    id: "q1",
    company: "Zoho",
    round: "Technical & Problem Solving Round",
    badgeColor: "#ef4444",
    domain: "Core Programming / Pointers",
    question: "What is the final printed output of this pointer manipulation code in C?",
    code: `int a = 5, b = 10;
int *p = &a, *q = &b;
*p = *p + *q;
*q = *p - *q;
*p = *p - *q;
printf("%d, %d", a, b);`,
    options: [
      "5, 10",
      "10, 5",
      "15, 10",
      "Compilation error due to pointer subtraction"
    ],
    correct: 1,
    explanation: "This is the classic arithmetic swap using pointers without a third temporary variable. At the end, a becomes 10 and b becomes 5."
  },
  {
    id: "q2",
    company: "Amazon",
    round: "SDE Online Assessment (OA)",
    badgeColor: "#f59e0b",
    domain: "Data Structures & Algorithms",
    question: "Given an unsorted array of N integers, which approach finds two elements that sum up to target K in optimal O(N) time complexity?",
    code: null,
    options: [
      "Sort array in-place with QuickSort, then use binary search (O(N log N) time, O(1) space)",
      "Hash Set/Map lookup storing visited complements (O(N) time, O(N) space)",
      "Two nested loops checking every possible pair (O(N^2) time, O(1) space)",
      "Bit manipulation array with XOR comparison (O(N) time, O(1) space)"
    ],
    correct: 1,
    explanation: "Using a Hash Map/Set to store seen numbers allows complement lookup in O(1) average time, giving overall O(N) linear time at the cost of O(N) space."
  },
  {
    id: "q3",
    company: "TCS",
    round: "TCS Digital / NQT Coding Round",
    badgeColor: "#10b981",
    domain: "Data Structures",
    question: "Which algorithm detects if a cycle exists in a Singly Linked List in O(N) time with strictly O(1) auxiliary space?",
    code: null,
    options: [
      "Floyd's Cycle Detection Algorithm (Slow & Fast Pointers)",
      "Breadth-First Search (BFS) using a Visited Hash Table",
      "Dijkstra's Shortest Path Algorithm",
      "Tarjan's Strongly Connected Components Algorithm"
    ],
    correct: 0,
    explanation: "Floyd's Tortoise and Hare algorithm moves a slow pointer by 1 step and a fast pointer by 2 steps. If a cycle exists, they meet in O(N) time using O(1) memory."
  },
  {
    id: "q4",
    company: "Infosys",
    round: "DSE Technical Round",
    badgeColor: "#06b6d4",
    domain: "Databases & SQL",
    question: "How do you retrieve the 2nd Highest Salary from an 'Employee' table in SQL without relying on vendor-specific window functions?",
    code: null,
    options: [
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
      "SELECT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 2;",
      "SELECT SECOND_HIGHEST(salary) FROM Employee;",
      "SELECT salary FROM Employee GROUP BY salary HAVING COUNT(*) = 2;"
    ],
    correct: 0,
    explanation: "Subquery `SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee)` finds the maximum salary that is strictly less than the overall maximum, which is standard SQL across all DBMS."
  },
  {
    id: "q5",
    company: "Google",
    round: "Technical Screen",
    badgeColor: "#4285f4",
    domain: "Operating Systems & Concurrency",
    question: "What are the four Coffman conditions simultaneously required for a Deadlock state to occur?",
    code: null,
    options: [
      "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
      "Race Condition, Starvation, Paging, Context Switching",
      "Mutex Lock, Counting Semaphore, Spinlock, Barrier",
      "Atomicity, Consistency, Isolation, Durability"
    ],
    correct: 0,
    explanation: "Deadlocks can only arise if all 4 Coffman conditions hold: 1) Mutual Exclusion, 2) Hold & Wait, 3) No Preemption, and 4) Circular Wait."
  },
  {
    id: "q6",
    company: "Zoho",
    round: "Advanced Problem Solving",
    badgeColor: "#ef4444",
    domain: "Algorithms / Logic",
    question: "What is the output of the following JavaScript snippet regarding the JavaScript Event Loop?",
    code: `console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");`,
    options: [
      "A, B, C, D",
      "A, D, C, B",
      "A, D, B, C",
      "D, A, C, B"
    ],
    correct: 1,
    explanation: "Synchronous code runs first ('A', 'D'). Then microtasks from Promise resolution run ('C'). Finally macrotasks like setTimeout callback execute ('B'). Hence: A, D, C, B."
  },
  {
    id: "q7",
    company: "Amazon",
    round: "SDE Technical Interview",
    badgeColor: "#f59e0b",
    domain: "Web & API Architecture",
    question: "Which HTTP request method is formally defined by RFC 7231 as being both Safe AND Idempotent?",
    code: null,
    options: [
      "POST",
      "GET",
      "PUT",
      "DELETE"
    ],
    correct: 1,
    explanation: "GET and HEAD are both safe (do not modify server state) and idempotent (multiple identical requests yield identical effects). PUT and DELETE are idempotent but not safe. POST is neither."
  },
  {
    id: "q8",
    company: "TCS",
    round: "TCS Digital Coding Round",
    badgeColor: "#10b981",
    domain: "Python & Data Science",
    question: "What is printed when this Python code executes?",
    code: `def append_item(x, collection=[]):
    collection.append(x)
    return collection

print(append_item(10))
print(append_item(20))`,
    options: [
      "[10] then [20]",
      "[10] then [10, 20]",
      "[10] then [20, 10]",
      "RuntimeError: default list is immutable"
    ],
    correct: 1,
    explanation: "In Python, default parameter values are evaluated once when the function is defined, not each time it is called. Therefore the same mutable list is retained and modified across calls."
  },
  {
    id: "q9",
    company: "Accenture",
    round: "Advanced Technical Round",
    badgeColor: "#a855f7",
    domain: "Cloud & DevOps Architecture",
    question: "What fundamental architectural difference distinguishes a Docker container from a traditional Virtual Machine (VM)?",
    code: null,
    options: [
      "Containers share the host operating system kernel and isolate at process level; VMs run a full guest OS on top of a hypervisor",
      "Containers cannot communicate across network ports whereas VMs can",
      "VMs execute in user-space while Docker containers run strictly inside kernel ring-0",
      "Containers require dedicated physical CPUs while VMs use simulated time slicing"
    ],
    correct: 0,
    explanation: "Containers share the host kernel and leverage namespaces & cgroups for lightweight isolation, whereas VMs virtualize physical hardware and boot a separate full guest operating system."
  },
  {
    id: "q10",
    company: "Cognizant",
    round: "GenC Next Technical",
    badgeColor: "#06b6d4",
    domain: "Software Engineering & SOLID Principles",
    question: "A program has a base class Rectangle. A subclass Square overrides setWidth() and setHeight() such that changing width alters height. Code expecting a Rectangle malfunctions when given Square. Which SOLID principle is violated?",
    code: null,
    options: [
      "Single Responsibility Principle (SRP)",
      "Open/Closed Principle (OCP)",
      "Liskov Substitution Principle (LSP)",
      "Interface Segregation Principle (ISP)"
    ],
    correct: 2,
    explanation: "Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of a subclass without breaking application correctness."
  },
  {
    id: "q11",
    company: "Zoho",
    round: "Technical Interview Round 2",
    badgeColor: "#ef4444",
    domain: "Strings & String Matching",
    question: "Given two strings S1 and S2 of equal length, how can you test whether S2 is a rotation of S1 using only a single call to a substring search function?",
    code: null,
    options: [
      "Check if S2 is a substring of (S1 + S1)",
      "Reverse S1 and compare directly with S2",
      "Sort both strings and check if they match character-by-character",
      "Compute MD5 hashes of both strings and compare modulo length"
    ],
    correct: 0,
    explanation: "All cyclic rotations of string S1 are contained inside the concatenation (S1 + S1). If S2 length equals S1 length and S2 is a substring of S1+S1, S2 is guaranteed to be a rotation."
  },
  {
    id: "q12",
    company: "Amazon",
    round: "Amazon SDE Bar Raiser",
    badgeColor: "#f59e0b",
    domain: "Algorithms / Queues",
    question: "What is the optimal time complexity to find the maximum element in every sliding window of size K across an array of size N?",
    code: null,
    options: [
      "O(N * K) time using brute-force scanning",
      "O(N log K) time using a Max-Heap / PriorityQueue",
      "O(N) linear time using a Monotonic Double-Ended Queue (Deque)",
      "O(N^2) time using dynamic programming tabulation"
    ],
    correct: 2,
    explanation: "A monotonic decreasing Deque stores indices of candidates. Each element is pushed and popped at most once, giving optimal O(N) total time complexity."
  },
  {
    id: "q13",
    company: "Google",
    round: "Algorithms & Trees",
    badgeColor: "#4285f4",
    domain: "Binary Search Trees",
    question: "In a Binary Search Tree (BST), if nodes p and q have values such that p.val < root.val < q.val, what is their Lowest Common Ancestor (LCA)?",
    code: null,
    options: [
      "p (since it is smaller than root)",
      "root (since p lies in left subtree and q lies in right subtree)",
      "q (since it is greater than root)",
      "The leaf node predecessor of root"
    ],
    correct: 1,
    explanation: "By BST properties, all elements in the left subtree are smaller than root, and all elements in the right subtree are greater. When p and q lie on opposite sides, root is their split point and therefore their LCA."
  },
  {
    id: "q14",
    company: "TCS",
    round: "TCS Digital Coding Assessment",
    badgeColor: "#10b981",
    domain: "Number Theory / Mathematics",
    question: "What is the asymptotic time complexity of the Sieve of Eratosthenes algorithm to find all prime numbers up to integer N?",
    code: null,
    options: [
      "O(N log log N)",
      "O(N * sqrt(N))",
      "O(N log N)",
      "O(N^2)"
    ],
    correct: 0,
    explanation: "The inner loop marks multiples of each prime p up to N. The sum of 1/p over all primes p <= N scales proportionally to log log N, giving O(N log log N)."
  },
  {
    id: "q15",
    company: "Infosys",
    round: "Power Programmer Coding Test",
    badgeColor: "#06b6d4",
    domain: "Dynamic Programming",
    question: "Why does the 0/1 Knapsack problem require Dynamic Programming rather than a greedy strategy, whereas the Fractional Knapsack problem can be solved greedily?",
    code: null,
    options: [
      "0/1 Knapsack requires floating point division while fractional only uses integers",
      "Items cannot be subdivided; selecting the highest value-to-weight ratio item may prevent optimal filling of remaining capacity",
      "0/1 Knapsack exhibits no optimal substructure",
      "Fractional Knapsack cannot be represented using a 2D matrix"
    ],
    correct: 1,
    explanation: "In 0/1 knapsack, an item must be chosen whole or left out. A greedy pick can leave empty capacity that could have been filled by a combination of smaller items yielding higher total value."
  },
  {
    id: "q16",
    company: "Microsoft",
    round: "Software Engineering Interview",
    badgeColor: "#00a4ef",
    domain: "Memory Management & Runtimes",
    question: "In languages with automatic Garbage Collection (like Java or JavaScript), how can an application still suffer from a Memory Leak?",
    code: null,
    options: [
      "Garbage collection cannot free memory allocated through recursion",
      "CPU registers cannot be cleared by garbage collection threads",
      "Objects that are no longer logically needed remain reachable through active roots (e.g. unremoved event listeners, static collections)",
      "Virtual memory paging prevents GC threads from accessing disk cache"
    ],
    correct: 2,
    explanation: "GC algorithms rely on reachability from roots (GC roots). If references to unused objects remain in static fields, singletons, or uncleaned event listeners, GC cannot reclaim them."
  },
  {
    id: "q17",
    company: "Zoho",
    round: "Level 1 Problem Solving",
    badgeColor: "#ef4444",
    domain: "Bit Manipulation",
    question: "Which single C/Java expression correctly evaluates to TRUE if and only if a positive integer N is an exact power of 2?",
    code: null,
    options: [
      "(N > 0) && ((N & (N - 1)) == 0)",
      "(N > 0) && ((N ^ (N + 1)) == 0)",
      "(N > 0) && ((N | (N - 1)) == 0)",
      "(N % 2 == 0)"
    ],
    correct: 0,
    explanation: "A power of 2 has exactly one bit set in binary (e.g. 8 is 1000). Subtracting 1 flips that bit and sets all lower bits (7 is 0111). Performing bitwise AND yields 0."
  },
  {
    id: "q18",
    company: "Amazon",
    round: "SDE System Design & Architecture",
    badgeColor: "#f59e0b",
    domain: "Distributed Systems (CAP Theorem)",
    question: "According to Eric Brewer's CAP Theorem, when an unavoidable network partition (P) occurs in a distributed data store, which trade-off must the system make?",
    code: null,
    options: [
      "Increase replication factor to preserve both Consistency and Availability",
      "Reboot all master nodes until latency drops below 10ms",
      "Switch from TCP to UDP protocols immediately",
      "Choose between Consistency (returning error/stalling to prevent stale reads) and Availability (answering immediately with potentially stale data)"
    ],
    correct: 3,
    explanation: "Because network partitions (P) are inevitable in real-world networks, a distributed system must choose either CP (Consistent under Partition) or AP (Available under Partition)."
  },
  {
    id: "q19",
    company: "Google",
    round: "Operating Systems Round",
    badgeColor: "#4285f4",
    domain: "Memory Management",
    question: "Belady's Anomaly—the counterintuitive phenomenon where allocating more physical page frames causes MORE page faults—occurs in which page replacement algorithm?",
    code: null,
    options: [
      "Least Recently Used (LRU)",
      "First-In, First-Out (FIFO)",
      "Optimal Page Replacement (OPT / MIN)",
      "Least Frequently Used (LFU) with aging"
    ],
    correct: 1,
    explanation: "Stack-based replacement algorithms (like LRU and OPT) never experience Belady's Anomaly because the set of pages in memory for N frames is always a subset of N+1 frames. FIFO is not a stack algorithm and can suffer from this anomaly."
  },
  {
    id: "q20",
    company: "Cognizant",
    round: "Frontend Engineering Specialist",
    badgeColor: "#06b6d4",
    domain: "Web Frameworks / React",
    question: "Traditional minimum edit distance comparison between two trees is O(N^3). How does React's Reconciliation engine reduce Virtual DOM diffing to linear O(N) complexity?",
    code: null,
    options: [
      "By storing the whole component tree in WebAssembly shared memory",
      "By assuming elements of different types produce different trees, and using stable 'key' props to track children across renders",
      "By querying the browser DOM directly through canvas APIs",
      "By enforcing that no UI component ever has more than 2 child elements"
    ],
    correct: 1,
    explanation: "React relies on two heuristics: 1) Two elements of different types generate different trees, and 2) Developers provide consistent 'key' props to identify stable items across re-renders."
  },
  {
    id: "q21",
    company: "TCS",
    round: "TCS Digital Coding Round",
    badgeColor: "#10b981",
    domain: "Data Structures & Parsing",
    question: "Which data structure is fundamentally utilized to validate if an expression containing parentheses '(', ')', '{', '}', '[', ']' is properly balanced?",
    code: null,
    options: [
      "Stack (LIFO - Last In, First Out)",
      "Queue (FIFO - First In, First Out)",
      "Min-Heap Priority Queue",
      "Adjacency List Matrix"
    ],
    correct: 0,
    explanation: "Every opening bracket is pushed onto the Stack; when a closing bracket arrives, it must match the top of the stack and be popped. At the end, an empty stack confirms balance."
  },
  {
    id: "q22",
    company: "Infosys",
    round: "Database Fundamentals",
    badgeColor: "#06b6d4",
    domain: "RDBMS & ACID Properties",
    question: "Which ACID property guarantees that if a money transfer transaction debits account A but crashes before crediting account B, all intermediate changes are rolled back completely?",
    code: null,
    options: [
      "Atomicity (All-or-Nothing)",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    correct: 0,
    explanation: "Atomicity ensures that all operations in a database transaction complete successfully, or the entire transaction is aborted and rolled back to leave data unmodified."
  },
  {
    id: "q23",
    company: "Accenture",
    round: "Version Control & DevOps",
    badgeColor: "#a855f7",
    domain: "Git & Source Code Management",
    question: "What is the primary operational difference between 'git merge feature' and 'git rebase main'?",
    code: null,
    options: [
      "git rebase completely erases the staging area permanently",
      "git merge creates a 3-way merge commit preserving history, whereas git rebase moves the feature branch base to the tip of main, producing a clean linear commit history",
      "git rebase can only be used on remote repositories, not locally",
      "git merge cannot resolve file conflicts automatically while rebase always can"
    ],
    correct: 1,
    explanation: "Rebase rewrites project history by creating brand new commits for each commit in the feature branch on top of the target branch tip, creating a single linear commit graph."
  },
  {
    id: "q24",
    company: "Zoho",
    round: "Technical Round 2 (Matrix & Arrays)",
    badgeColor: "#ef4444",
    domain: "2D Arrays / Logic",
    question: "What is the total time and auxiliary space complexity to print an M x N 2D matrix in spiral order (top, right, bottom, left boundaries shrinking)?",
    code: null,
    options: [
      "O(M + N) time, O(M * N) space",
      "O(M^2 * N^2) time, O(1) space",
      "O(M * N) time, O(1) auxiliary space (excluding output array)",
      "O(log(M * N)) time, O(M) space"
    ],
    correct: 2,
    explanation: "Every cell in the matrix is visited exactly once using 4 boundary pointers (top, bottom, left, right), giving O(M * N) time and O(1) additional memory."
  },
  {
    id: "q25",
    company: "Amazon",
    round: "SDE Technical Interview",
    badgeColor: "#f59e0b",
    domain: "Caching & Design",
    question: "To implement an LRU (Least Recently Used) cache with both get(key) and put(key, value) operating in strict O(1) time complexity, which pair of data structures must be combined?",
    code: null,
    options: [
      "Doubly Linked List (for O(1) node detachment/insertion) + Hash Map (for O(1) key-to-node pointer lookup)",
      "Binary Search Tree + Array",
      "Stack + Singly Linked List",
      "Splay Tree + Priority Queue"
    ],
    correct: 0,
    explanation: "The Hash Map maps keys directly to pointers/references of nodes in a Doubly Linked List. Moving a accessed node to the head or evicting the tail takes O(1) pointer updates."
  },
  {
    id: "q26",
    company: "Google",
    round: "Concurrency & Multithreading",
    badgeColor: "#4285f4",
    domain: "Operating Systems",
    question: "What is the crucial conceptual difference between a Mutex and a Counting Semaphore in multi-threaded programming?",
    code: null,
    options: [
      "Mutex can only be used on 64-bit operating systems",
      "A Mutex is a locking mechanism with ownership (only the thread that acquired the mutex can release it), while a Semaphore is a signaling mechanism with no ownership restriction",
      "A Semaphore can only hold binary values 0 or 1",
      "A Mutex requires busy-waiting spinlocks while semaphores never block"
    ],
    correct: 1,
    explanation: "A Mutex enforces strict ownership: thread A acquires it, so only thread A can unlock it. A semaphore maintains a count and can be signaled (incremented) by any thread, e.g. for producer-consumer coordination."
  },
  {
    id: "q27",
    company: "Microsoft",
    round: "Cloud & Microservices Architecture",
    badgeColor: "#00a4ef",
    domain: "System Design Patterns",
    question: "In distributed microservices, which resiliency pattern monitors for repeated service call failures and trips to immediately fail-fast rather than exhausting network thread pools?",
    code: null,
    options: [
      "Singleton Pattern",
      "Factory Method Pattern",
      "Circuit Breaker Pattern (Closed -> Open -> Half-Open states)",
      "Observer Pattern"
    ],
    correct: 2,
    explanation: "The Circuit Breaker pattern wraps calls to a remote dependency. When failures cross a threshold, it opens the circuit, failing fast and giving the failing service time to recover."
  },
  {
    id: "q28",
    company: "Wipro",
    round: "Wipro Turbo Technical Round",
    badgeColor: "#8b5cf6",
    domain: "Databases & SQL Queries",
    question: "In standard SQL, what is the fundamental difference between the WHERE clause and the HAVING clause?",
    code: null,
    options: [
      "WHERE filters individual rows before grouping; HAVING filters aggregated groups after GROUP BY",
      "WHERE can only be used on numeric columns while HAVING is only for text strings",
      "HAVING executes before WHERE in the SQL query evaluation pipeline",
      "WHERE cannot be used with SELECT statements"
    ],
    correct: 0,
    explanation: "SQL processing order evaluates FROM -> WHERE (row filtering) -> GROUP BY -> HAVING (group/aggregate filtering) -> SELECT -> ORDER BY."
  },
  {
    id: "q29",
    company: "Walmart",
    round: "Walmart Global Tech OA",
    badgeColor: "#0284c7",
    domain: "High-Throughput Messaging",
    question: "Why can Apache Kafka process millions of events per second on commodity hard drives compared to traditional JMS brokers?",
    code: null,
    options: [
      "Kafka bypasses all hard drives and keeps everything exclusively in CPU L1 cache",
      "Sequential disk append-only logs, OS page cache utilization, zero-copy network transfer (sendfile syscall), and partitioned consumer groups",
      "Kafka does not support data persistence to disk",
      "Kafka translates all messages directly into machine bytecode prior to network transmission"
    ],
    correct: 1,
    explanation: "Sequential disk I/O is nearly as fast as random RAM access. Kafka utilizes the Linux page cache and sendfile zero-copy to transfer packets directly from disk cache to the network NIC."
  },
  {
    id: "q30",
    company: "Zoho",
    round: "Basic Programming Round",
    badgeColor: "#ef4444",
    domain: "Recursion & Memory",
    question: "What specific runtime failure occurs if a recursive function lacks a terminating base case?",
    code: null,
    options: [
      "StackOverflowError / Segmentation Fault due to call stack memory limit exhaustion",
      "Deadlock condition between CPU cores",
      "NullPointerException on function return address",
      "Garbage collector halts the CPU permanently"
    ],
    correct: 0,
    explanation: "Each recursive invocation allocates a new activation record (stack frame) on the call stack containing parameters, local variables, and return addresses until the call stack limit is exceeded."
  },
  {
    id: "q31",
    company: "TCS",
    round: "TCS Digital Coding Round",
    badgeColor: "#10b981",
    domain: "Sorting Algorithms",
    question: "Under what input condition does QuickSort with a naive first-element pivot selection degrade to its worst-case O(N^2) time complexity?",
    code: null,
    options: [
      "When the array contains completely random unsorted integers",
      "When the array size is an exact power of 2",
      "When the input array is already sorted in ascending or descending order",
      "When all elements in the array are negative numbers"
    ],
    correct: 2,
    explanation: "If the array is already sorted and the first element is chosen as pivot, the partition produces highly unbalanced subproblems of size 0 and N-1 at every step, yielding sum(i=1 to N) = O(N^2)."
  },
  {
    id: "q32",
    company: "Amazon",
    round: "Backend Infrastructure",
    badgeColor: "#f59e0b",
    domain: "NoSQL / Redis In-Memory",
    question: "In Redis, when the maxmemory limit is reached, which eviction policy evicts the least recently used keys strictly among those that have an expiration (TTL) set?",
    code: null,
    options: [
      "noeviction",
      "volatile-lru",
      "allkeys-random",
      "volatile-ttl"
    ],
    correct: 1,
    explanation: "`volatile-lru` evicts keys using the LRU algorithm only among keys with an expiry set. `allkeys-lru` evicts keys using LRU across all keys regardless of expiry."
  },
  {
    id: "q33",
    company: "Infosys",
    round: "Web Services & REST APIs",
    badgeColor: "#06b6d4",
    domain: "HTTP Specifications",
    question: "What is the technical difference between HTTP Status Code 401 (Unauthorized) and HTTP Status Code 403 (Forbidden)?",
    code: null,
    options: [
      "401 means Authentication is missing or invalid (who are you?); 403 means the user is Authenticated, but lacks Authorization permissions to access the resource",
      "401 is for GET requests only, while 403 is for POST requests",
      "401 indicates server-side database failure; 403 indicates invalid JSON syntax",
      "There is no difference; they are interchangeable aliases in RFC 2616"
    ],
    correct: 0,
    explanation: "401 Unauthorized indicates unauthenticated user (client needs to provide valid credentials/token). 403 Forbidden indicates the server understood who the client is, but refuses authorization."
  },
  {
    id: "q34",
    company: "Google",
    round: "Advanced Data Structures",
    badgeColor: "#4285f4",
    domain: "Trie (Prefix Tree)",
    question: "In a dictionary with N total words where the maximum word length is L characters, what is the time complexity to search if a specific word of length K exists inside a Trie?",
    code: null,
    options: [
      "O(N * L)",
      "O(log N)",
      "O(K) time, completely independent of the total number of words N in the dictionary",
      "O(K^2)"
    ],
    correct: 2,
    explanation: "A Trie traverses character-by-character from the root downwards. Looking up a word of length K takes exactly K steps in the tree, giving O(K) lookup time regardless of whether N is 100 or 10,000,000."
  },
  {
    id: "q35",
    company: "Cognizant",
    round: "RDBMS Architecture",
    badgeColor: "#06b6d4",
    domain: "Database Normalization",
    question: "According to relational database normalization rules, a table is in Third Normal Form (3NF) if and only if it is in 2NF and:",
    code: null,
    options: [
      "Every non-prime attribute is non-transitively dependent on every candidate key (no transitive dependencies)",
      "All columns allow NULL values",
      "Every foreign key references a primary key in the same table",
      "The table has fewer than 10 total attributes"
    ],
    correct: 0,
    explanation: "3NF requires that the table is in 2NF and has no transitive functional dependencies between non-prime attributes (i.e. X -> Y and Y -> Z where Z is non-prime is disallowed)."
  }
];

// Helper to shuffle and return random N unique questions from the bank
function getRandomAssessmentQuestions(count = 10) {
  const bank = [...companyAssessmentQuestionBank];
  // Fisher-Yates modern shuffle algorithm
  for (let i = bank.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bank[i], bank[j]] = [bank[j], bank[i]];
  }
  return bank.slice(0, Math.min(count, bank.length));
}

// Active question set (shuffled randomly)
let activeAssessmentQuestions = getRandomAssessmentQuestions(10);
const companyAssessmentQuestions = activeAssessmentQuestions;

// For backward compatibility
const mockCertificates = {
  ...mockResumes
};

// Export to window/global scope for the app
window.qualificationsData = qualificationsData;
window.coursesCatalog = coursesCatalog;
window.skillSuggestions = skillSuggestions;
window.careersData = careersData;
window.generatorDict = generatorDict;
window.mockResumes = mockResumes;
window.mockCertificates = mockCertificates;
window.companyAssessmentQuestionBank = companyAssessmentQuestionBank;
window.getRandomAssessmentQuestions = getRandomAssessmentQuestions;
window.activeAssessmentQuestions = activeAssessmentQuestions;
window.companyAssessmentQuestions = activeAssessmentQuestions;

console.log("Updated AURA data loaded with 35 Real Company Assessment Question Bank (Random 10 shuffled per test).");

