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
    slug: "The Fund Analytics Board",
    title: "The Fund Analytics Board",
    shortDescription: "Fund analytics board is a comprehensive web-based fund request management dashboard with real-time analytics, PDF generation, and secure retirement workflows. It provides a complete administrative interface for monitoring, approving, and managing fund requests with integrated email notifications and document export capabilities.",
    longDescription: "Fund analytics board is a full-stack web application designed to streamline the fund request management process for organizations. Built as a self-contained dashboard, it serves as the central hub for administrators to oversee all fund request activities with powerful analytics and automation features. The application offers a user-friendly interface for submitting, tracking, and approving fund requests, complete with real-time data visualization through charts and graphs. Key functionalities include automated email notifications to keep stakeholders informed, PDF generation for official documentation, and a secure retirement workflow to ensure proper handling of funds. The dashboard is built using modern web technologies, ensuring scalability, security, and ease of use for administrators",
    technologies: ["MongoDB", "Express.js", "Node.js", "Mongoose", "Nodemailer", "PDFKit", "CORS", "Chart.js", "dotenv", "HTML5", "CSS3", "JavaScript", "RESTful API"],
    status: "completed",
    category: "web-development",
    role: "Full-Stack Developer",
    teamSize: 1,
    demoUrl: "https://myfunddashboard.onrender.com/",
    githubUrl: "https://github.com/EmmaDeil/My-Fund-Request-App.git",
    image: "/analytics_board.png",
    featured: true
  },
  {
    id: 2,
    slug: "Company's website",
    title: "Company's Website",
    shortDescription: "Responsive website for showcasing company services and portfolio.",
    longDescription: "A modern website built with Next.js and Tailwind CSS to showcase the company's services, portfolio, and client testimonials. The site features a clean and professional design, with smooth animations and a focus on user experience. Key sections include an about page, service descriptions, a portfolio gallery, and a contact form.",
    technologies: ["Next.js", "Tailwind CSS", "React", "React Hook Form", "Framer Motion"],
    status: "in-progress",
    category: "web-development",
    role: "Intern",
    teamSize: 3,
    demoUrl: "https://ladiel-innovations-ltd.onrender.com/",
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