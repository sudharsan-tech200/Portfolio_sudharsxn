export interface Skill {
  name: string;
  level: number;
  cat: "frontend" | "backend" | "cloud";
}

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  points: string[];
}

export interface Cert {
  name: string;
  code: string;
  org: string;
  date: string;
  icon: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export const D = {
  name: "Prathmesh",
  surname: "Thorve",
  role: "Frontend Developer",
  tagline:
    "Crafting seamless digital experiences with React, TypeScript & .NET",
  email: "prathmeshthorve94@gmail.com",
  phone: "+91 86684 25508",
  linkedin: "https://linkedin.com/in/prathmesh-thorve-6408482b5",
  github: "https://github.com/prathmeshthorve",
  location: "Pune, India",

  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "3", label: "Certifications" },
    { value: "18", label: "Months to Promotion" },
  ],

  skills: [
    { name: "React.js", level: 92, cat: "frontend" },
    { name: "TypeScript", level: 88, cat: "frontend" },
    { name: "Redux", level: 85, cat: "frontend" },
    { name: "JavaScript", level: 90, cat: "frontend" },
    { name: "HTML / CSS", level: 90, cat: "frontend" },
    { name: "PrimeReact", level: 80, cat: "frontend" },
    { name: "C# / .NET Core", level: 70, cat: "backend" },
    { name: "ASP.NET Core", level: 68, cat: "backend" },
    { name: "REST APIs", level: 82, cat: "backend" },
    { name: "SQL Server", level: 72, cat: "backend" },
    { name: "PostgreSQL", level: 65, cat: "backend" },
    { name: "Azure Cloud", level: 70, cat: "cloud" },
    { name: "Azure Functions", level: 60, cat: "cloud" },
    { name: "Machine Learning", level: 55, cat: "cloud" },
    { name: "Prompt Engineering", level: 70, cat: "cloud" },
  ] as Skill[],

  experience: [
    {
      role: "Associate – Technology",
      company: "Arieotech Solutions",
      location: "Pune",
      period: "Apr 2026 – Present",
      current: true,
      points: [
        "Own the entire frontend of a client-facing product — React.js, TypeScript, Redux — shipping features end-to-end from UI to backend services.",
        "Architect reusable component systems and manage complex application state with Redux and PrimeReact across 20+ screens.",
        "Integrate and extend RESTful APIs, and contribute to ASP.NET Core backend when features require server-side changes.",
        "Lead full delivery cycles: client requirements → development → testing → deployment → ongoing support.",
      ],
    },
    {
      role: "Junior Associate – Technology",
      company: "Arieotech Solutions",
      location: "Pune",
      period: "Nov 2024 – Apr 2026",
      current: false,
      points: [
        "Built responsive, accessible UIs in React.js with Redux and PrimeReact, translating designs into production components.",
        "Implemented robust API integration patterns — data flow, validation, error handling between frontend and .NET backend.",
        "Promoted to Associate – Technology in recognition of impact across FY 2025-26.",
      ],
    },
    {
      role: "Intern – Technology",
      company: "Arieotech Solutions",
      location: "Pune",
      period: "Jul 2024 – Oct 2024",
      current: false,
      points: [
        "Trained on the React + .NET stack, contributing to live project modules under senior guidance.",
        "Converted to full-time within 4 months based on performance.",
      ],
    },
  ] as Job[],

  certs: [
    { name: "Azure AI Fundamentals", code: "AI-900", org: "Microsoft", date: "2026", icon: "🤖" },
    { name: "Azure Fundamentals", code: "AZ-900", org: "Microsoft", date: "2026", icon: "☁️" },
    { name: "Google AI Essentials", code: "", org: "Google", date: "2026", icon: "🧠" },
  ] as Cert[],

  education: [
    {
      degree: "B.E. Mechanical Engineering",
      school: "Savitribai Phule Pune University",
      period: "2016 – 2019",
    },
    {
      degree: "Diploma, Mechanical Engineering",
      school: "MSBTE",
      period: "2013 – 2016",
    },
  ] as Education[],
};
