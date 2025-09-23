// lib/projects.ts

// Define a TypeScript Interface for type safety
export interface Project {
  id: number;
  slug: string; // Used for the URL (e.g., /projects/project-one)
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  category: 'web-app' | 'mobile-app' | 'desktop-app' | 'api' | 'library' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean; // Whether to show on home page
  image?: string; // Optional project image
  demoUrl?: string; // Live demo URL
  githubUrl?: string; // GitHub repository URL
  startDate: string; // YYYY-MM format
  endDate?: string; // YYYY-MM format (optional for ongoing projects)
  teamSize: number;
  role: string; // Your role in the project
  highlights: string[]; // Key achievements or features
  challenges?: string[]; // Technical challenges faced (optional)
}

// Our enhanced project data
export const projects: Project[] = [
  {
    id: 1,
    slug: 'modern-ecommerce-platform',
    title: 'Modern E-commerce Platform',
    shortDescription: 'A full-stack e-commerce site built with Next.js and Stripe.',
    longDescription: 'This project demonstrates complex state management, dynamic routing, secure payment processing, and comprehensive user authentication. It features a modern, responsive design and lightning-fast performance thanks to server-side rendering.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    category: 'web-app',
    status: 'completed',
    featured: true,
    image: '/images/ecommerce-platform.jpg',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    startDate: '2024-01',
    endDate: '2024-06',
    teamSize: 1,
    role: 'Full-Stack Developer',
    highlights: [
      'Implemented secure payment processing with Stripe',
      'Built responsive design supporting mobile and desktop',
      'Achieved 95+ Lighthouse performance score',
      'Integrated real-time inventory management'
    ],
    challenges: [
      'Optimizing database queries for large product catalogs',
      'Implementing complex cart logic with multiple discounts'
    ]
  },
  {
    id: 2,
    slug: 'realtime-chat-application',
    title: 'Real-Time Chat Application',
    shortDescription: 'A real-time communication platform using WebSockets.',
    longDescription: 'Built to handle concurrent connections and instant message delivery. Key features include user presence indicators, group chat capabilities, and end-to-end encryption demonstration. The frontend is fully componentized with React.',
    technologies: ['React', 'Node.js', 'Socket.io', 'Express.js', 'MongoDB', 'JWT'],
    category: 'web-app',
    status: 'completed',
    featured: true,
    image: '/images/chat-app.jpg',
    demoUrl: 'https://chat-app-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/chat-app',
    startDate: '2023-08',
    endDate: '2023-12',
    teamSize: 2,
    role: 'Frontend Lead Developer',
    highlights: [
      'Real-time messaging with 99.9% uptime',
      'Support for 1000+ concurrent users',
      'End-to-end message encryption',
      'Mobile-responsive design'
    ],
    challenges: [
      'Handling connection drops and reconnection logic',
      'Implementing efficient message caching strategy'
    ]
  },
  {
    id: 3,
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription: 'A responsive portfolio built with React and Framer Motion.',
    longDescription: 'This very portfolio website showcases modern web development practices including responsive design, smooth animations, and optimized performance. Built with React and Vite for excellent developer experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'web-app',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/emmadeil/portfolio',
    startDate: '2024-09',
    endDate: '2024-09',
    teamSize: 1,
    role: 'Full-Stack Developer',
    highlights: [
      'Fully responsive design across all devices',
      'Smooth animations and transitions',
      'TypeScript for better code quality',
      'Modern React patterns and hooks'
    ]
  }
];

// Helper function to find a project by its slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Get featured projects for home page
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

// Get projects by category
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}

// Get projects by status
export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(project => project.status === status);
}

// Get all unique categories
export function getProjectCategories(): Project['category'][] {
  const categories = projects.map(project => project.category);
  return Array.from(new Set(categories));
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}