import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllProjects } from "../data/projects";

const projects = getAllProjects();

const Projects: React.FC = () => {
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
               A showcase of my recent work and development projects
            </p>
         </motion.header>

         <div className="space-y-16">
            {projects.map((project, index) => (
               <motion.div
                  key={project.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                     } items-center gap-8 lg:gap-12`}
               >
                  <div className="w-full lg:w-1/2">
                     <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-lg overflow-hidden shadow-2xl"
                     >
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-64 lg:h-80 object-cover"
                        />
                     </motion.div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                     <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {project.title}
                     </h3>

                     <p className="text-lg text-gray-600 leading-relaxed">
                        {project.shortDescription}
                     </p>                     <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                           Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                           {project.technologies.map((tech) => (
                              <span
                                 key={tech}
                                 className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                           to={`/projects/${project.slug}`}
                           className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
                        >
                           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                           View Details
                        </Link>
                        {project.demoUrl && (
                           <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
                           >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                           </a>
                        )}
                        {project.githubUrl && (
                           <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition duration-300"
                           >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                              Source Code
                           </a>
                        )}
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-20 text-center"
         >
            <Link
               to="/contact"
               className="inline-block py-4 px-10 text-xl font-semibold text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
               Interested in working together? Let&apos;s talk!
            </Link>
         </motion.div>
      </div>
   );
};

export default Projects;