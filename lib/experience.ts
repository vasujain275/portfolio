export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: "work" | "project" | "education" | "certification";
}

export interface Skill {
  name: string;
  category: "backend" | "devops" | "ai" | "frontend" | "database" | "tools";
  proficiency: number; // 0-100
  icon?: string;
}

export const experience: Experience[] = [
  {
    id: "shelfwise",
    title: "Full Stack Developer (ShelfWise)",
    company: "DRDO DIPR Project",
    period: "2024 - Present",
    description: "Developing a secure, offline-first library management system. Implemented JWT authentication, RBAC, and comprehensive reporting. Built with Spring Boot and React.",
    technologies: ["Spring Boot", "React", "MySQL", "Java", "TypeScript", "Security"],
    type: "project",
  },
  {
    id: "task-genie",
    title: "AI Engineer (Task Genie)",
    company: "Personal Project",
    period: "2024",
    description: "Built an AI-powered Telegram bot for task management using LangGraph and OpenAI. Implemented natural language processing and smart scheduling.",
    technologies: ["Python", "FastAPI", "LangGraph", "LangChain", "MongoDB", "Redis"],
    type: "project",
  },
  {
    id: "talawa-contributor",
    title: "Open Source Contributor",
    company: "Palisadoes Foundation",
    period: "2024",
    description: "Active contributor to talawa-api and talawa-admin projects. Implemented Dockerization, CI/CD pipelines, and deployment best practices.",
    technologies: ["Docker", "CI/CD", "GitHub Actions", "Node.js", "React", "MongoDB"],
    type: "work",
  },
  {
    id: "cse-undergrad",
    title: "Computer Science Engineering",
    company: "University",
    period: "2022 - 2026",
    description: "Currently in third year of CSE undergraduate program. Maintaining rigorous self-study schedule: 2 hours DSA daily and 3 hours backend systems, cloud, and GenAI development.",
    technologies: ["Computer Science", "Data Structures", "Algorithms", "System Design"],
    type: "education",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner",
    company: "Amazon Web Services",
    period: "In Progress",
    description: "Preparing for AWS Cloud Practitioner certification to validate cloud computing knowledge and AWS services understanding.",
    technologies: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
    type: "certification",
  },
];

export const skills: Skill[] = [
  // Backend Skills
  { name: "Java", category: "backend", proficiency: 90 },
  { name: "Spring Boot", category: "backend", proficiency: 85 },
  { name: "Python", category: "backend", proficiency: 85 },
  { name: "FastAPI", category: "backend", proficiency: 80 },
  { name: "Node.js", category: "backend", proficiency: 75 },
  { name: "Go", category: "backend", proficiency: 70 },

  // DevOps Skills
  { name: "Docker", category: "devops", proficiency: 85 },
  { name: "Kubernetes", category: "devops", proficiency: 70 },
  { name: "AWS", category: "devops", proficiency: 75 },
  { name: "CI/CD", category: "devops", proficiency: 80 },
  { name: "GitHub Actions", category: "devops", proficiency: 75 },

  // AI/ML Skills
  { name: "LangChain", category: "ai", proficiency: 85 },
  { name: "LangGraph", category: "ai", proficiency: 80 },
  { name: "RAG", category: "ai", proficiency: 85 },
  { name: "Vector DBs", category: "ai", proficiency: 75 },
  { name: "OpenAI API", category: "ai", proficiency: 80 },

  // Frontend Skills
  { name: "React", category: "frontend", proficiency: 80 },
  { name: "TypeScript", category: "frontend", proficiency: 80 },
  { name: "shadcn/ui", category: "frontend", proficiency: 85 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 85 },

  // Database Skills
  { name: "MySQL", category: "database", proficiency: 80 },
  { name: "PostgreSQL", category: "database", proficiency: 75 },
  { name: "MongoDB", category: "database", proficiency: 75 },
  { name: "Redis", category: "database", proficiency: 70 },

  // Tools
  { name: "Git", category: "tools", proficiency: 85 },
  { name: "Linux", category: "tools", proficiency: 80 },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 8) => {
  return skills
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, limit);
};
