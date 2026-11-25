export interface SkillItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "databases" | "cs" | "embedded";
  levelTag: "Advanced" | "Proficient" | "Core";
  badge?: string;
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: string;
  description: string;
  features: string[];
  contribution: string;
  achievement?: string;
  tech: string[];
  flagship: boolean;
  github: string;
  demo?: string;
  icon: string;
  image: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  status: string;
  website?: string;
  points: string[];
  skills?: string[];
}

export interface CompetitionItem {
  title: string;
  achievement: string;
  tier: "podium" | "selection" | "qualification" | "participant";
  badge: string;
}

export interface CertItem {
  name: string;
  org: string;
  tag: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export const D = {
  name: "SUDHARSAN",
  surname: "S.",
  fullName: "Sudharsan S.",
  initials: "SS",
  role: "Software Engineer | Full Stack Developer",
  careerTarget: "Software Engineer / SDE Intern",
  headline: "Building Ideas Into Scalable Digital Experiences.",
  motto: "Engineer by Education. Developer by Passion. Problem Solver by Practice.",
  rolesCycling: [
    "Software Engineer",
    "Full Stack Developer",
    "Java Programmer",
    "Problem Solver",
  ],
  tagline:
    "Electronics and Communication Engineering student at SKCET passionate about software engineering, problem-solving, and developing practical applications using Java, MERN stack, and emerging AI technologies.",

  aboutNarrative: [
    {
      title: "The Engineering Mindset",
      text: "I am a third-year Electronics and Communication Engineering student at Sri Krishna College of Engineering and Technology (SKCET), Coimbatore. My engineering background grounds me in first-principles thinking, systems design, and problem decomposition.",
    },
    {
      title: "Algorithmic Foundation",
      text: "With 450+ problems solved on LeetCode across Java and C++, I continuously refine my algorithmic efficiency, analytical thinking, and clean code principles.",
    },
    {
      title: "Full Stack Execution",
      text: "I love translating ideas into production-ready software using React.js, Node.js, Express.js, and MongoDB, backed by secure RESTful APIs and clean component architectures.",
    },
    {
      title: "Real-World Impact",
      text: "From OCR-driven regulatory compliance prototypes (NutriScan) selected in the top 20 for SIH 2026 to embedded radar detection systems, I engineer practical solutions that solve tangible challenges.",
    },
  ],

  email: "sudharsansuppaiah@gmail.com",
  linkedin: "https://www.linkedin.com/in/sudharsan778",
  github: "https://github.com/sudharsan-tech200",
  leetcode: "https://leetcode.com/u/Sudharsan-skcet/",
  location: "Coimbatore, Tamil Nadu, India",
  availability: "OPEN TO OPPORTUNITIES",
  profileImage: "/profile-transparent.png",

  // Highlight Stats for Hero & Counter Section
  stats: [
    {
      targetNumber: 450,
      suffix: "+",
      label: "LeetCode Problems Solved",
      sublabel: "Across Java & Algorithms",
      accent: "#FFA116",
    },
    {
      targetNumber: 3,
      suffix: "rd",
      label: "Full Stack Contest Place",
      sublabel: "Bannari Amman Inst. of Tech",
      accent: "#38BDF8",
    },
    {
      targetNumber: 20,
      prefix: "Top ",
      suffix: " / 450+",
      label: "SIH 2026 Internal Hackathon",
      sublabel: "SKCET Finalist Teams",
      accent: "#10B981",
    },
  ],

  leetcodeStats: {
    total: 450,
    easy: 210,
    easyPct: "46.7%",
    medium: 215,
    mediumPct: "47.8%",
    hard: 25,
    hardPct: "5.5%",
    rating: 1524,
    ranking: "Top 37.8%",
    streak: "33 Days",
    activeDays: "196 Days",
    url: "https://leetcode.com/u/Sudharsan-skcet/",
  },

  skills: [
    // Programming Languages
    { name: "Java", category: "languages", levelTag: "Advanced", badge: "Core Strength", icon: "☕" },
    { name: "Python", category: "languages", levelTag: "Advanced", badge: "Versatile Scripting", icon: "🐍" },
    { name: "C++", category: "languages", levelTag: "Proficient", badge: "DSA & Systems", icon: "⚡" },
    { name: "JavaScript", category: "languages", levelTag: "Advanced", badge: "Modern Web (ES6+)", icon: "🟨" },

    // Frontend Development
    { name: "HTML5", category: "frontend", levelTag: "Advanced", badge: "Semantic Web", icon: "🌐" },
    { name: "CSS3", category: "frontend", levelTag: "Advanced", badge: "Flexbox & Grid", icon: "🎨" },
    { name: "React.js", category: "frontend", levelTag: "Advanced", badge: "Hooks & Component Architecture", icon: "⚛️" },
    { name: "Responsive Web Design", category: "frontend", levelTag: "Advanced", badge: "Cross-Device Systems", icon: "📱" },

    // Backend Development
    { name: "Node.js", category: "backend", levelTag: "Advanced", badge: "Async Runtime", icon: "🟢" },
    { name: "Express.js", category: "backend", levelTag: "Advanced", badge: "REST Framework", icon: "🚀" },
    { name: "REST APIs", category: "backend", levelTag: "Advanced", badge: "Clean Architecture", icon: "🔌" },

    // Databases
    { name: "MongoDB", category: "databases", levelTag: "Advanced", badge: "NoSQL & Mongoose", icon: "🍃" },
    { name: "MySQL", category: "databases", levelTag: "Proficient", badge: "Relational Queries", icon: "🐬" },
    { name: "SQL", category: "databases", levelTag: "Proficient", badge: "Schema & Joins", icon: "📊" },

    // Computer Science Fundamentals
    { name: "Data Structures and Algorithms", category: "cs", levelTag: "Core", badge: "450+ Solved", icon: "🧠" },
    { name: "Object-Oriented Programming", category: "cs", levelTag: "Core", badge: "Design Patterns & OOP", icon: "📦" },
    { name: "Database Management Systems", category: "cs", levelTag: "Core", badge: "ACID & Normalization", icon: "🗄️" },
    { name: "Operating Systems", category: "cs", levelTag: "Core", badge: "Processes, Threads & Memory", icon: "💻" },
    { name: "Computer Networks", category: "cs", levelTag: "Core", badge: "TCP/IP & OSI Protocols", icon: "🌐" },

    // Embedded Systems and IoT
    { name: "Arduino UNO", category: "embedded", levelTag: "Proficient", badge: "Microcontrollers", icon: "🔌" },
    { name: "Embedded C/C++", category: "embedded", levelTag: "Proficient", badge: "Firmware Control", icon: "⚡" },
    { name: "HC-05 Bluetooth", category: "embedded", levelTag: "Proficient", badge: "Wireless Serial Telemetry", icon: "📶" },
    { name: "Ultrasonic Sensors", category: "embedded", levelTag: "Proficient", badge: "Acoustic Distance Sensing", icon: "📡" },
    { name: "Servo Motors", category: "embedded", levelTag: "Proficient", badge: "PWM Actuator Control", icon: "⚙️" },
  ] as SkillItem[],

  projects: [
    {
      id: "nutriscan",
      title: "NutriScan",
      subtitle: "Smart Legal Metrology Package Inspection System",
      badge: "SIH 2026 Top 20 Selection",
      category: "AI / OCR / Full Stack Prototype",
      description:
        "An intelligent package inspection system designed to automatically identify missing or incorrect mandatory declarations on packaged products using computer vision and OCR technology.",
      features: [
        "Extracts critical product information directly from package photos using custom OCR pipelines.",
        "Identifies and validates MRP, manufacturing date, expiration date, and manufacturer details.",
        "Automated package inspection tailored to Legal Metrology statutory compliance requirements.",
        "Generates compliance telemetry and discrepancy alerts for automated quality auditing.",
      ],
      contribution:
        "Engineered the OCR text extraction pipeline, regulatory validation logic, and full-stack integration connecting Python computer vision models to the React user interface.",
      achievement:
        "Selected among the top 20 teams out of 450+ participating teams in the SKCET Internal Hackathon for Smart India Hackathon (SIH 2026).",
      tech: ["Python", "OCR", "Computer Vision", "React.js", "Legal Metrology", "REST API"],
      flagship: true,
      github: "https://github.com/sudharsan-tech200",
      icon: "🔍",
      image: "/projects/nutriscan.svg",
    },
    {
      id: "skillora",
      title: "Skillora",
      subtitle: "Full Stack Learning Management System",
      badge: "Full Stack MERN Implementation",
      category: "Full Stack Web Platform",
      description:
        "A comprehensive, production-ready Learning Management System engineered to streamline educational workflows, role-based resource access, and student progress tracking.",
      features: [
        "Granular role-based access control (RBAC) customized for Admin, Instructor, and Student portals.",
        "Complete course authoring, syllabus management, user administration, and enrollment pipeline.",
        "Secure RESTful API architecture connecting modular Express endpoints with MongoDB.",
        "Responsive, dynamic UI engineered with React state hooks and reusable component patterns.",
      ],
      contribution:
        "Designed and implemented the complete frontend UI, authentication flow, database schemas, and RESTful CRUD endpoints.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"],
      flagship: true,
      github: "https://github.com/sudharsan-tech200",
      icon: "🎓",
      image: "/projects/skillora.svg",
    },
    {
      id: "radar",
      title: "Radar Detection System",
      subtitle: "Angular Scanning & Object Localization",
      badge: "Embedded Systems / IoT",
      category: "Hardware + Visual Telemetry",
      description:
        "An Arduino-driven radar simulation system that continuously scans physical surroundings across a 180° sweep to detect and map nearby objects in real-time.",
      features: [
        "Servo motor-driven angular 0°–180° spatial environment scanning.",
        "High-frequency ultrasonic wave echo computation for millimeter distance mapping.",
        "Real-time graphical visual radar telemetry plotting target distance and angle.",
      ],
      contribution:
        "Programmed the Embedded C++ microcontroller routines, sensor timing thresholds, and serial communication to the visual radar interface.",
      tech: ["Arduino UNO", "Embedded C++", "Ultrasonic Sensor", "Servo Motor", "Processing"],
      flagship: false,
      github: "https://github.com/sudharsan-tech200",
      icon: "📡",
      image: "/projects/radar.svg",
    },
    {
      id: "instagram-clone",
      title: "Instagram Frontpage Clone",
      subtitle: "Component-Based Reactive Social UI",
      badge: "Frontend Engineering",
      category: "React Web Application",
      description:
        "A responsive social media frontpage replica developed to master component-driven frontend architecture, dynamic props flow, and interactive state management in React.",
      features: [
        "Modern component-based design mirroring production social feeds.",
        "Dynamic feed item rendering, responsive stories reel, and interactive profile drawer.",
        "Stateful like, bookmark, and comment microinteractions powered by React Hooks.",
      ],
      contribution:
        "Built modular component hierarchy, custom CSS styling, and responsive layout adapters from scratch.",
      tech: ["React.js", "JavaScript (ES6+)", "CSS3", "Component Architecture"],
      flagship: false,
      github: "https://github.com/sudharsan-tech200",
      icon: "📸",
      image: "/projects/instagram-clone.svg",
    },
    {
      id: "obstacle-car",
      title: "Obstacle Avoiding Bluetooth Car",
      subtitle: "Autonomous Navigation & Wireless Control",
      badge: "Robotics & Embedded Systems",
      category: "Robotics / IoT",
      description:
        "An intelligent robotic vehicle combining autonomous ultrasonic collision avoidance logic with Bluetooth-based smartphone remote control.",
      features: [
        "Ultrasonic distance sensing with real-time obstacle trajectory evasion logic.",
        "Wireless mobile control interface communicating over HC-05 Bluetooth serial protocol.",
        "Dual H-Bridge motor driver integration with Arduino microcontroller logic.",
      ],
      contribution:
        "Assembled the electromechanical chassis, programmed autonomous path-finding algorithms in C++, and paired Bluetooth telemetry.",
      tech: ["Arduino UNO", "C++", "HC-05 Bluetooth", "Ultrasonic Sensor", "Motor Driver"],
      flagship: false,
      github: "https://github.com/sudharsan-tech200",
      icon: "🚗",
      image: "/projects/obstacle-car.svg",
    },
  ] as ProjectItem[],

  experience: [
    {
      role: "Intern",
      company: "Salzer Electronics Limited – Unit II",
      location: "Coimbatore, Tamil Nadu, India",
      period: "15 Days",
      status: "Internship Completed",
      website: "http://www.salzergroup.net",
      points: [
        "Completed a 15-day industrial internship at Salzer Electronics Limited, Unit - II in Coimbatore, Tamil Nadu.",
        "Gained direct industrial exposure to electronics manufacturing processes, industrial electrical systems, and assembly workflows.",
        "Observed quality control mechanisms, statutory standards compliance, and automated production testing procedures.",
      ],
      skills: ["Industrial Electronics", "Manufacturing Workflows", "Quality Standards", "Engineering Practices"],
    },
    {
      role: "IoT Intern",
      company: "KRISHTEC",
      location: "Coimbatore, Tamil Nadu, India",
      period: "Internship Completed",
      status: "Verified Internship",
      points: [
        "Gained direct industrial exposure to IoT system architectures, smart sensor telemetry, and connected network protocols.",
        "Explored applied research and development initiatives intersecting Artificial Intelligence/Machine Learning with edge IoT applications.",
        "Learned real-world applications of connected industrial systems and developed hands-on hardware-software integration expertise.",
        "Engineered sensor data acquisition routines and hardware communication benchmarks on microcontrollers.",
      ],
      skills: ["IoT Protocols", "Hardware-Software Integration", "Telemetry", "AI/ML Edge Exploration", "Embedded Systems"],
    },
  ] as ExperienceItem[],

  competitions: [
    {
      title: "Smart India Hackathon (SIH 2026) – Internal Hackathon",
      achievement: "Selected among the Top 20 teams out of 450+ participating teams",
      tier: "selection",
      badge: "Top 20 / 450+ Teams",
    },
    {
      title: "Full Stack Development Contest – Bannari Amman Institute (BIT)",
      achievement: "Secured 3rd Place for full-stack application development",
      tier: "podium",
      badge: "3rd Place 🥉",
    },
    {
      title: "HackVega 2.0 National Hackathon",
      achievement: "Selected for Round 3 National Finalist stage",
      tier: "qualification",
      badge: "Round 3 Finalist",
    },
    {
      title: "iamneo Codeathon",
      achievement: "Qualified Level 2 Competitive Coding Challenge",
      tier: "qualification",
      badge: "Level 2 Qualified",
    },
    {
      title: "Flipkart Campus Hiring Challenge",
      achievement: "Cleared initial screening and completed Round 2 Technical Assessment",
      tier: "qualification",
      badge: "Round 2 Assessment",
    },
    {
      title: "Salesforce Summer 2027 SDE Process",
      achievement: "Participated in selective software engineer internship evaluation",
      tier: "participant",
      badge: "Candidate Process",
    },
    {
      title: "ISRO Bharatiya Antariksh Hackathon 2026",
      achievement: "Participated in nationwide space technology hackathon challenge",
      tier: "participant",
      badge: "National Participant",
    },
    {
      title: "Tally CodeBrewers 2026",
      achievement: "Participated in the 'Brew Ideas' track proposing novel software architecture",
      tier: "participant",
      badge: "Ideation Track",
    },
  ] as CompetitionItem[],

  certs: [
    {
      name: "Foundations of Computer Networking",
      org: "Coursera · Packt",
      tag: "Computer Networks",
      icon: "🌐",
    },
    {
      name: "Operating Systems",
      org: "Coursera · BITS Pilani",
      tag: "Core OS & Architecture",
      icon: "💻",
    },
    {
      name: "Technical Support Fundamentals",
      org: "Coursera · Google",
      tag: "IT & Systems",
      icon: "🛡️",
    },
    {
      name: "Introduction to Networking",
      org: "Coursera",
      tag: "Network Protocols",
      icon: "🔌",
    },
    {
      name: "Networking Basics",
      org: "Cisco Networking Academy",
      tag: "Routing & Switching",
      icon: "📡",
    },
    {
      name: "Advanced HTML and CSS",
      org: "Infosys Springboard",
      tag: "Modern Frontend",
      icon: "🎨",
    },
    {
      name: "SQL Fundamentals & SQL Table Handling",
      org: "Infosys Springboard",
      tag: "Database Engineering",
      icon: "🗄️",
    },
    {
      name: "Programming Fundamentals & Software Development Learning Program",
      org: "LinkedIn Learning",
      tag: "Software Engineering",
      icon: "⚡",
    },
  ] as CertItem[],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) — Electronics and Communication Engineering",
      school: "Sri Krishna College of Engineering and Technology (SKCET)",
      location: "Coimbatore, Tamil Nadu, India",
      period: "2023 – 2027",
      status: "Currently Pursuing 3rd Year",
      highlights: [
        "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming, and Computer Networks.",
        "Deep exploration of hardware-software boundary: Microcontrollers, Embedded C++, and IoT sensing.",
        "Active member of campus developer and competitive programming forums.",
      ],
    },
  ] as EducationItem[],
};
