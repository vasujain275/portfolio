export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  category: "backend" | "fullstack" | "ai" | "devops" | "open-source";
  github?: string;
  live?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "ipl-rag-chatbot",
    title: "IPL RAG Chatbot",
    description: "A blazing-fast RAG chatbot for IPL statistics and information using FastAPI, LangChain, and Qdrant.",
    longDescription: "Built a sophisticated RAG (Retrieval-Augmented Generation) chatbot that provides detailed IPL statistics and information. The system uses FastAPI for the backend API, LangChain for orchestration, Qdrant as the vector database, and React for the frontend. Features include semantic search, context-aware responses, and real-time data processing.",
    technologies: ["FastAPI", "LangChain", "Qdrant", "React", "TypeScript", "Python", "Vector DB"],
    category: "ai",
    github: "https://github.com/vasujain275/ipl-chatbot",
    live: "https://ipl-chatbot.vasujain.me",
    featured: true,
    year: 2024,
  },
  {
    id: "bookstore-api",
    title: "Bookstore API",
    description: "A comprehensive REST API for bookstore management with authentication, validation, and database operations.",
    longDescription: "Developed a full-featured REST API for bookstore management using FastAPI and Prisma ORM. Includes user authentication, role-based access control, comprehensive validation, and efficient database operations. Features include book catalog management, user management, order processing, and detailed API documentation with Swagger/OpenAPI.",
    technologies: ["FastAPI", "Prisma", "PostgreSQL", "Python", "JWT", "Swagger"],
    category: "backend",
    github: "https://github.com/vasujain275/bookstore-api",
    live: "https://bookstore-api.vasujain.me",
    featured: true,
    year: 2024,
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description: "A complete student management system built with Spring Boot, featuring REST APIs and comprehensive CRUD operations.",
    longDescription: "Built a comprehensive student management system using Spring Boot with features like student registration, course management, grade tracking, and administrative functions. Includes RESTful APIs, JWT authentication, role-based access control, and comprehensive validation. The system demonstrates microservices architecture principles and follows Spring Boot best practices.",
    technologies: ["Spring Boot", "Java", "MySQL", "JWT", "JPA", "Maven"],
    category: "backend",
    github: "https://github.com/vasujain275/student-management-system",
    featured: true,
    year: 2023,
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    description: "A secure, offline-first library management system for DRDO DIPR project using Spring Boot and React.",
    longDescription: "Currently developing a secure, offline-first library management system for DRDO DIPR project. The system features advanced security measures, offline functionality, and comprehensive library management capabilities. Built with Spring Boot for the backend API and React for the frontend, with a focus on data security and user experience.",
    technologies: ["Spring Boot", "React", "MySQL", "Java", "TypeScript", "Security"],
    category: "fullstack",
    github: "https://github.com/vasujain275/library-management-system",
    featured: false,
    year: 2024,
  },
  {
    id: "talawa-api",
    title: "Talawa API (Open Source)",
    description: "Contributed to Palisadoes Foundation's talawa-api project, implementing Dockerization and CI/CD best practices.",
    longDescription: "Active contributor to the Palisadoes Foundation's talawa-api project, an open-source API for event management. Implemented Dockerization strategies, CI/CD pipelines using GitHub Actions, and deployment best practices. Contributed to improving the project's infrastructure and deployment workflows.",
    technologies: ["Docker", "CI/CD", "GitHub Actions", "Node.js", "MongoDB"],
    category: "open-source",
    github: "https://github.com/PalisadoesFoundation/talawa-api",
    featured: false,
    year: 2024,
  },
  {
    id: "talawa-admin",
    title: "Talawa Admin (Open Source)",
    description: "Contributed to talawa-admin project, implementing deployment automation and best practices.",
    longDescription: "Contributed to the talawa-admin project, the administrative interface for the Talawa platform. Focused on deployment automation, CI/CD implementation, and best practices for React-based applications. Helped improve the project's deployment workflows and developer experience.",
    technologies: ["React", "Docker", "CI/CD", "TypeScript", "GitHub Actions"],
    category: "open-source",
    github: "https://github.com/PalisadoesFoundation/talawa-admin",
    featured: false,
    year: 2024,
  },
  {
    id: "go-microservice",
    title: "Go Microservice",
    description: "A high-performance microservice built with Go, Gin, and GORM for scalable backend architecture.",
    longDescription: "Developed a high-performance microservice using Go, Gin framework, and GORM for database operations. The service demonstrates Go's concurrency features, efficient routing, and database optimization. Includes comprehensive testing, logging, and monitoring capabilities.",
    technologies: ["Go", "Gin", "GORM", "PostgreSQL", "Docker"],
    category: "backend",
    github: "https://github.com/vasujain275/go-microservice",
    featured: false,
    year: 2023,
  },
  {
    id: "react-dashboard",
    title: "React Dashboard",
    description: "A modern React dashboard with TypeScript, Zustand state management, and shadcn/ui components.",
    longDescription: "Built a modern, responsive dashboard using React, TypeScript, and Zustand for state management. Features shadcn/ui components for a consistent design system, real-time data visualization, and smooth user interactions. Demonstrates frontend best practices and modern React patterns.",
    technologies: ["React", "TypeScript", "Zustand", "shadcn/ui", "Vite"],
    category: "fullstack",
    github: "https://github.com/vasujain275/react-dashboard",
    featured: false,
    year: 2023,
  },
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getAllProjects = () => {
  return projects.sort((a, b) => b.year - a.year);
}; 