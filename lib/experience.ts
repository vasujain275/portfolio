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
    id: "library-management-system",
    title: "Library Management System Developer",
    company: "DRDO DIPR Project",
    period: "2024 - Present",
    description: "Developing a secure, offline-first library management system for DRDO DIPR project using Spring Boot, MySQL, and React. Focus on security, offline functionality, and comprehensive library management capabilities.",
    technologies: ["Spring Boot", "React", "MySQL", "Java", "TypeScript", "Security"],
    type: "project",
  },
  {
    id: "ipl-chatbot",
    title: "IPL RAG Chatbot Developer",
    company: "Personal Project",
    period: "2024",
    description: "Built a sophisticated RAG chatbot for IPL statistics using FastAPI, LangChain, Qdrant, and React. Features semantic search, context-aware responses, and real-time data processing.",
    technologies: ["FastAPI", "LangChain", "Qdrant", "React", "Python", "Vector DB"],
    type: "project",
  },
  {
    id: "bookstore-api",
    title: "Bookstore API Developer",
    company: "Personal Project",
    period: "2024",
    description: "Developed a comprehensive REST API for bookstore management with authentication, validation, and database operations using FastAPI and Prisma.",
    technologies: ["FastAPI", "Prisma", "PostgreSQL", "Python", "JWT", "Swagger"],
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
    id: "student-management-system",
    title: "Student Management System Developer",
    company: "Personal Project",
    period: "2023",
    description: "Built a comprehensive student management system using Spring Boot with REST APIs, JWT authentication, and role-based access control.",
    technologies: ["Spring Boot", "Java", "MySQL", "JWT", "JPA", "Maven"],
    type: "project",
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
  {
    id: "aws-developer-associate",
    title: "AWS Developer Associate",
    company: "Amazon Web Services",
    period: "In Progress",
    description: "Preparing for AWS Developer Associate certification to demonstrate expertise in developing and maintaining applications on AWS.",
    technologies: ["AWS", "Serverless", "Lambda", "API Gateway", "DynamoDB"],
    type: "certification",
  },
];

export const skills: Skill[] = [
  // Backend Skills
  { name: "Java", category: "backend", proficiency: 90 },
  { name: "Spring Boot", category: "backend", proficiency: 85 },
  { name: "Go", category: "backend", proficiency: 80 },
  { name: "Python", category: "backend", proficiency: 85 },
  { name: "FastAPI", category: "backend", proficiency: 80 },
  { name: "TypeScript", category: "backend", proficiency: 75 },
  { name: "Node.js", category: "backend", proficiency: 70 },
  
  // DevOps Skills
  { name: "Docker", category: "devops", proficiency: 85 },
  { name: "Kubernetes", category: "devops", proficiency: 70 },
  { name: "AWS", category: "devops", proficiency: 75 },
  { name: "CI/CD", category: "devops", proficiency: 80 },
  { name: "GitHub Actions", category: "devops", proficiency: 75 },
  { name: "NGINX", category: "devops", proficiency: 65 },
  
  // AI/ML Skills
  { name: "LangChain", category: "ai", proficiency: 80 },
  { name: "RAG", category: "ai", proficiency: 85 },
  { name: "Vector DBs", category: "ai", proficiency: 75 },
  { name: "Qdrant", category: "ai", proficiency: 80 },
  { name: "LangGraph", category: "ai", proficiency: 70 },
  
  // Frontend Skills
  { name: "React", category: "frontend", proficiency: 75 },
  { name: "TypeScript", category: "frontend", proficiency: 70 },
  { name: "shadcn/ui", category: "frontend", proficiency: 80 },
  { name: "Zustand", category: "frontend", proficiency: 70 },
  { name: "Vite", category: "frontend", proficiency: 75 },
  
  // Database Skills
  { name: "PostgreSQL", category: "database", proficiency: 80 },
  { name: "MySQL", category: "database", proficiency: 75 },
  { name: "MongoDB", category: "database", proficiency: 70 },
  { name: "Redis", category: "database", proficiency: 65 },
  { name: "Prisma", category: "database", proficiency: 75 },
  { name: "GORM", category: "database", proficiency: 70 },
  
  // Tools & Others
  { name: "Git", category: "tools", proficiency: 85 },
  { name: "Shell", category: "tools", proficiency: 75 },
  { name: "Nix", category: "tools", proficiency: 60 },
  { name: "JWT", category: "tools", proficiency: 80 },
  { name: "Swagger", category: "tools", proficiency: 75 },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 8) => {
  return skills
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, limit);
}; 