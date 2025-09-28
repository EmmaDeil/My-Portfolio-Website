// Centralized project data for the entire application

export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
  role?: string;
  teamSize?: number;
  demoUrl?: string | null;
  githubUrl?: string | null;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "The Fuud Analytics Board",
    title: "The Fuud Analytics Board",
    shortDescription: "A modern analytics dashboard for fund request management.",
    longDescription: "This project showcases my skills in modern web development using React, TypeScript, and Tailwind CSS. It features smooth animations, responsive design, and optimized performance. The dashboard includes sections for real-time analytics, user management, and order tracking, all built with accessibility and user experience in mind.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    status: "completed",
    category: "web-development",
    role: "Full-Stack Developer",
    teamSize: 1,
    demoUrl: "https://david-emmanuel-portfolio.onrender.com",
    // githubUrl: "https://github.com/EmmaDeil/My-Portfolio-Website.git",
    image: "/analytics_board.png",
    featured: true
  },
  {
    id: 2,
    slug: "ecommerce-app",
    title: "E-Commerce Platform",
    shortDescription: "Full-featured online store with payment integration and admin panel.",
    longDescription: "A comprehensive e-commerce solution built with Next.js and Node.js. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard. The application is designed to handle high traffic and provides a smooth shopping experience.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    status: "in-progress",
    category: "web-development",
    role: "Lead Developer",
    teamSize: 3,
    demoUrl: null,
    githubUrl: "https://github.com/EmmaDeil/ecommerce-platform",
    image: "/ladeilapp.png",
    featured: false
  },
  {
    id: 3,
    slug: "task-manager",
    title: "Task Management App",
    shortDescription: "Collaborative project management tool with real-time updates.",
    longDescription: "A collaborative task management application that enables teams to organize projects, assign tasks, and track progress in real-time. Built with React and Socket.io for real-time communication, featuring drag-and-drop interfaces, file attachments, comments, and notification systems.",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Material-UI"],
    status: "completed",
    category: "productivity",
    role: "Frontend Developer",
    teamSize: 2,
    demoUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/EmmaDeil/task-manager-app",
    image: "https://via.placeholder.com/800x600/DC2626/ffffff?text=Task+Manager",
    featured: true
  },
  {
    id: 4,
    slug: "weather-app",
    title: "Weather Dashboard",
    shortDescription: "Real-time weather application with location-based forecasts.",
    longDescription: "A responsive weather application that provides current weather conditions and 7-day forecasts. Features include geolocation support, city search functionality, interactive weather maps, and detailed weather metrics. Built with modern JavaScript and integrated with multiple weather APIs for accurate data.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
    status: "completed",
    category: "web-development",
    role: "Frontend Developer",
    teamSize: 1,
    demoUrl: "https://weather-dashboard.example.com",
    githubUrl: "https://github.com/EmmaDeil/weather-dashboard",
    image: "https://via.placeholder.com/800x600/0EA5E9/ffffff?text=Weather+App",
    featured: false
  },
  {
    id: 5,
    slug: "blog-platform",
    title: "Blog Publishing Platform",
    shortDescription: "Modern blogging platform with markdown support and user management.",
    longDescription: "A full-featured blogging platform built with modern web technologies. Includes user authentication, markdown editor with live preview, comment system, tag-based categorization, and SEO optimization. Features responsive design and admin dashboard for content management.",
    technologies: ["React", "Node.js", "MongoDB", "Markdown", "JWT"],
    status: "in-progress",
    category: "web-development",
    role: "Full-Stack Developer",
    teamSize: 1,
    demoUrl: null,
    githubUrl: "https://github.com/EmmaDeil/blog-platform",
    image: "https://via.placeholder.com/800x600/7C3AED/ffffff?text=Blog+Platform",
    featured: false
  },
  {
   id: 6,
   slug: "Nigerian frenchgirl",
   title: "The Nigerian frenchgirl",
   shortDescription: "This is a project that has to do with the learning of french in the nigerian market",
   longDescription: "This is where we want people to come teach and learn french",
   technologies: ["React", "MongoDB"],
   status: "in-progress",
   category: "web-development",
   role: "Intern",
   teamSize: 2,
   demoUrl: "",
   githubUrl: "",
   image: "",
   featured: false
  },
  {
   id: 7,
   slug: "my-funds-request-app",
   title: "My Funds Request App",
   shortDescription: "A comprehensive enterprise-grade web application for managing fund requests with automated email notifications, PDF generation, and approval workflows.",
   longDescription: "The Fund Request Application is an enterprise-grade web application designed to streamline and automate the corporate fund request and approval process. This full-stack solution eliminates manual paperwork and provides a digital workflow that ensures transparency, accountability, and efficiency in financial request management. Users can submit detailed fund requests, which are then routed through a multi-level approval process. The application features automated email notifications to keep all stakeholders informed at each stage of the request lifecycle. Additionally, it includes functionality for generating professional PDF documents of fund requests for record-keeping and auditing purposes.",
   technologies: ["React.js", "Node.js", "Express.js", "Nodemailer", "PDFKit", "CSS3", "HTML5", "JavaScript", "Mongoose", "axios"],
   status: "completed",
   category: "web-development",
   role: "Intern",
   teamSize: 1,
   demoUrl: "https://my-fund-request-app.onrender.com/",
   githubUrl: "https://github.com/EmmaDeil/My-Fund-Request-App.git",
   image: "/fundrequest.png",
   featured: true
  }
];

// Helper functions
export const getProjectBySlug = (slug: string): Project | null => {
  return projects.find(project => project.slug === slug) || null;
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getAllProjects = (): Project[] => {
  return projects;
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};