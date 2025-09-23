// ProjectDetail.tsx - Dynamic project detail page using React Router

import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getProjectBySlug } from "../../data/projects";
import type { Project } from "../../data/projects";

// The main page component
export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading project data
    if (slug) {
      const projectData = getProjectBySlug(slug);
      setProject(projectData);
    }
    setLoading(false);
  }, [slug]);

  // Handle loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center"
        >
          <div className="text-xl text-gray-600">Loading project details...</div>
        </motion.div>
      </div>
    );
  }

  // Handle project not found
  if (!project) {
    return <Navigate to="*" replace />;
  }


  // Render the project details
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12 min-h-screen"
    >
      {/* Back Navigation */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Link
          to="/projects"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-indigo-600 mb-6 font-light">
          {project.shortDescription}
        </p>

        {/* Status Badge */}
        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${project.status === 'completed'
          ? 'bg-green-100 text-green-800'
          : project.status === 'in-progress'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-gray-100 text-gray-800'
          }`}>
          {project.status === 'completed' ? 'Completed' :
            project.status === 'in-progress' ? 'In Progress' : 'Planned'}
        </span>
      </motion.header>

      {/* Project Image */}
      {project.image && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      )}

      {/* Project Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              {project.longDescription}
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-indigo-600"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Project Details Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-600">Status:</span>
                <span className="ml-2 capitalize">{project.status.replace('-', ' ')}</span>
              </div>
              <div>
                <span className="font-medium text-gray-600">Technologies:</span>
                <span className="ml-2">{project.technologies.length} tools</span>
              </div>
              {project.demoUrl && (
                <div>
                  <span className="font-medium text-gray-600">Live Demo:</span>
                  <span className="ml-2 text-green-600">Available</span>
                </div>
              )}
              {project.githubUrl && (
                <div>
                  <span className="font-medium text-gray-600">Source Code:</span>
                  <span className="ml-2 text-blue-600">Public</span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation to other projects */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More</h3>
            <Link
              to="/projects"
              className="block w-full text-center py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
