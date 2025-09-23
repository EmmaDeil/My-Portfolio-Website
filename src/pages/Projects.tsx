import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Project {
   id: number;
   title: string;
   description: string;
   link?: string;
   githubUrl?: string;
   technologies: string[];
   image: string;
}

const projects: Project[] = [
   {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and TypeScript to showcase my projects and skills.',
      link: 'https://your-portfolio-link.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'https://via.placeholder.com/600x400/4F46E5/ffffff?text=Portfolio+Website',
   },
   {
      id: 2,
      title: 'Task Manager App',
      description: 'A web application to manage daily tasks with authentication and real-time updates.',
      link: 'https://your-taskmanager-link.com',
      githubUrl: 'https://github.com/yourusername/task-manager',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://via.placeholder.com/600x400/059669/ffffff?text=Task+Manager',
   },
];

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
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
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
                {project.description}
              </p>

              <div>
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
                  >
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