// pages/projects/index.js

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects, getProjectCategories } from "../../lib/projects";

// Framer Motion variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const categories = getProjectCategories();

  // Filter projects based on selected filters
  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "all" || project.category === selectedCategory;
    const statusMatch =
      selectedStatus === "all" || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          My Projects
        </h1>
        <p className="text-xl text-gray-600">
          A collection of projects I&apos;ve worked on (
          {filteredProjects.length} projects)
        </p>
      </motion.header>

      {/* Filter Controls */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedCategory === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 capitalize ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedStatus("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedStatus === "all"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Status
          </button>
          {["completed", "in-progress", "planned"].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 capitalize ${
                selectedStatus === status
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {status.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.slug}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 h-full">
                {/* Project Status Badge */}
                <div className="flex justify-between items-start mb-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "completed"
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

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No projects found matching the selected filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedStatus("all");
            }}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Clear Filters
          </button>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <Link
          href="/contact"
          className="inline-block py-3 px-8 text-lg font-semibold text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Interested? Let&apos;s Talk!
        </Link>
      </motion.div>
    </div>
  );
}
