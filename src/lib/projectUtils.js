// lib/projectUtils.js

/**
 * Project Management Utilities
 * Helper functions to easily add and manage projects
 */

import { projects } from "./projects";

/**
 * Generate a URL-friendly slug from a project title
 * @param {string} title - The project title
 * @returns {string} - URL-friendly slug
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
}

/**
 * Get the next available project ID
 * @returns {number} - Next available ID
 */
export function getNextProjectId() {
  return Math.max(...projects.map((p) => p.id)) + 1;
}

/**
 * Validate project data structure
 * @param {Object} project - Project object to validate
 * @returns {Object} - Validation result with isValid and errors
 */
export function validateProject(project) {
  const errors = [];

  // Required fields
  if (!project.title) errors.push("Title is required");
  if (!project.shortDescription) errors.push("Short description is required");
  if (!project.longDescription) errors.push("Long description is required");
  if (!project.technologies || project.technologies.length === 0) {
    errors.push("At least one technology is required");
  }
  if (!project.category) errors.push("Category is required");
  if (!project.status) errors.push("Status is required");
  if (!project.startDate) errors.push("Start date is required");
  if (!project.role) errors.push("Role is required");
  if (typeof project.teamSize !== "number" || project.teamSize < 1) {
    errors.push("Team size must be a number >= 1");
  }

  // Validate category
  const validCategories = [
    "web-app",
    "mobile-app",
    "desktop-app",
    "api",
    "library",
    "other",
  ];
  if (project.category && !validCategories.includes(project.category)) {
    errors.push(
      "Invalid category. Must be one of: " + validCategories.join(", ")
    );
  }

  // Validate status
  const validStatuses = ["completed", "in-progress", "planned"];
  if (project.status && !validStatuses.includes(project.status)) {
    errors.push("Invalid status. Must be one of: " + validStatuses.join(", "));
  }

  // Validate date format (YYYY-MM)
  const dateRegex = /^\d{4}-\d{2}$/;
  if (project.startDate && !dateRegex.test(project.startDate)) {
    errors.push("Start date must be in YYYY-MM format");
  }
  if (project.endDate && !dateRegex.test(project.endDate)) {
    errors.push("End date must be in YYYY-MM format");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Create a new project template with default values
 * @param {Object} overrides - Values to override defaults
 * @returns {Object} - New project template
 */
export function createProjectTemplate(overrides = {}) {
  const template = {
    id: getNextProjectId(),
    slug: "", // Will be generated from title
    title: "",
    shortDescription: "",
    longDescription: "",
    technologies: [],
    category: "web-app",
    status: "planned",
    featured: false,
    image: null,
    demoUrl: null,
    githubUrl: null,
    startDate: new Date().toISOString().slice(0, 7), // Current month in YYYY-MM format
    endDate: null,
    teamSize: 1,
    role: "Full-Stack Developer",
    highlights: [],
    challenges: [],
    ...overrides,
  };

  // Generate slug from title if provided
  if (template.title && !template.slug) {
    template.slug = generateSlug(template.title);
  }

  return template;
}

/**
 * Example usage documentation
 */
export const projectExamples = {
  webApp: {
    title: "My Awesome Web App",
    shortDescription: "A modern web application built with React and Node.js.",
    longDescription:
      "This web application demonstrates modern development practices including responsive design, user authentication, and real-time features. Built with performance and scalability in mind.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "web-app",
    status: "completed",
    featured: true,
    demoUrl: "https://my-app.vercel.app",
    githubUrl: "https://github.com/username/my-app",
    startDate: "2024-01",
    endDate: "2024-06",
    teamSize: 2,
    role: "Frontend Developer",
    highlights: [
      "Responsive design across all devices",
      "Real-time notifications",
      "User authentication system",
      "High performance with 95+ Lighthouse score",
    ],
    challenges: [
      "Implementing complex state management",
      "Optimizing for mobile performance",
    ],
  },

  api: {
    title: "REST API for E-commerce",
    shortDescription: "A RESTful API for managing e-commerce operations.",
    longDescription:
      "Comprehensive API built with Express.js and MongoDB, featuring authentication, payment processing, inventory management, and order tracking.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    category: "api",
    status: "completed",
    featured: false,
    githubUrl: "https://github.com/username/ecommerce-api",
    startDate: "2024-03",
    endDate: "2024-05",
    teamSize: 1,
    role: "Backend Developer",
    highlights: [
      "RESTful API with 25+ endpoints",
      "JWT authentication system",
      "Payment processing with Stripe",
      "95% test coverage",
    ],
  },
};

/**
 * Instructions for adding new projects
 */
export const addProjectInstructions = `
To add a new project:

1. Use createProjectTemplate() to generate a base template:
   const newProject = createProjectTemplate({
     title: 'Your Project Title',
     shortDescription: 'Brief description...',
     // ... other fields
   });

2. Validate the project:
   const validation = validateProject(newProject);
   if (!validation.isValid) {
     console.log('Errors:', validation.errors);
   }

3. Add the project to the projects array in lib/projects.ts

4. The slug will be automatically generated from the title

Required fields:
- title
- shortDescription  
- longDescription
- technologies (array)
- category
- status
- startDate (YYYY-MM format)
- role
- teamSize (number)

Optional fields:
- featured (boolean)
- image (string)
- demoUrl (string)
- githubUrl (string)
- endDate (YYYY-MM format)
- highlights (array)
- challenges (array)
`;
