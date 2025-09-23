// pages/index.js

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Mock data for featured projects
const getFeaturedProjects = () => [
  {
    slug: "portfolio-website",
    title: "Personal Portfolio",
    shortDescription: "A modern, responsive portfolio website built with React and TypeScript.",
    status: "completed",
    category: "web-development",
    role: "Full-Stack Developer",
    teamSize: 1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/example/portfolio"
  },
  {
    slug: "ecommerce-app",
    title: "E-Commerce Platform",
    shortDescription: "Full-featured online store with payment integration and admin panel.",
    status: "in-progress",
    category: "web-development",
    role: "Lead Developer",
    teamSize: 3,
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    demoUrl: null,
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    slug: "task-manager",
    title: "Task Management App",
    shortDescription: "Collaborative project management tool with real-time updates.",
    status: "completed",
    category: "productivity",
    role: "Frontend Developer",
    teamSize: 2,
    technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    demoUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/example/taskmanager"
  }
];

// Framer Motion variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of the children components
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  // Tech icons data for orbiting animation
  const techIcons = [
    { name: "React", symbol: "⚛️", delay: 0 },
    { name: "JavaScript", symbol: "🟨", delay: 0.5 },
    { name: "Node.js", symbol: "🟢", delay: 1 },
    { name: "Python", symbol: "🐍", delay: 1.5 },
    { name: "TypeScript", symbol: "🔷", delay: 2 },
    { name: "Database", symbol: "🗄️", delay: 2.5 },
    { name: "Cloud", symbol: "☁️", delay: 3 },
    { name: "API", symbol: "🔌", delay: 3.5 },
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      {/* --- Animated Hero Section with Profile Picture and Orbiting Tech Icons --- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-20 py-20 relative"
      >
        {/* Orbiting Container */}
        <div className="relative inline-block">
          {/* Profile Picture Container */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative w-86 h-86 mx-auto mb-8"
          >
            {/* Profile Picture */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100">
              <img
                src="/profile-picture.png"
                alt="David's Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const fallback = target.nextElementSibling as HTMLDivElement;
                  target.style.display = "none";
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold"
                style={{ display: "none" }}
              >
                D
              </div>
            </div>

            {/* Orbiting Tech Icons */}
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="absolute w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-gray-200"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "50% 50%",
                }}
                initial={{
                  x: -24,
                  y: -24,
                  rotate: (360 / techIcons.length) * index,
                }}
                animate={{
                  x:
                    -24 +
                    Math.cos(
                      ((360 / techIcons.length) * index * Math.PI) / 180
                    ) *
                    180,
                  y:
                    -24 +
                    Math.sin(
                      ((360 / techIcons.length) * index * Math.PI) / 180
                    ) *
                    180,
                  rotate: [
                    (360 / techIcons.length) * index,
                    (360 / techIcons.length) * index + 360,
                  ],
                }}
                transition={{
                  delay: tech.delay,
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                }}
                title={tech.name}
              >
                <span className="text-2xl">{tech.symbol}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
            Hello, I&apos;m <span className="text-indigo-600">David</span> 👋
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            A Full-Stack Developer focused on building modern, performant web
            applications with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <Link
            to="/project"
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transform hover:scale-105 transition duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.section>

      {/* --- Projects Section with Staggered Card Animation --- */}
      <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-2">
        Featured Projects
      </h2>

      {/* Use the motion.div as the container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {featuredProjects.map((project) => (
          // Use the motion.div for each project card (item)
          <motion.div
            key={project.slug}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }} // Lift on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={`/projects/${project.slug}`} className="block">
              <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 h-full">
                {/* Project Status Badge */}
                <div className="flex justify-between items-start mb-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : project.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                  >
                    {project.status === "completed"
                      ? "Completed"
                      : project.status === "in-progress"
                        ? "In Progress"
                        : "Planned"}
                  </span>
                  <span className="text-xs text-gray-500 capitalize">
                    {project.category.replace("-", " ")}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.shortDescription}</p>

                {/* Project Role & Team Size */}
                <div className="text-sm text-gray-500 mb-3">
                  <span className="font-medium">{project.role}</span>
                  {project.teamSize > 1 && (
                    <span> • Team of {project.teamSize}</span>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* External Links */}
                <div className="flex space-x-3 mt-auto">
                  {project.demoUrl && (
                    <span className="text-xs text-indigo-600 font-medium">
                      Live Demo
                    </span>
                  )}
                  {project.githubUrl && (
                    <span className="text-xs text-gray-600 font-medium">
                      Source Code
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Link to Contact Page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <Link
          to="/contact"
          className="inline-block py-3 px-8 text-lg font-semibold text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Let&apos;s Talk!
        </Link>
      </motion.div>
    </div>
  );
}
