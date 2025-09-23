// pages/about.js
import { motion } from "framer-motion";
import CVDownloadButton from "../components/CVDownloadButton";

// Framer Motion variants for section animation
const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* --- Header Section Animation --- */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 border-b pb-2">
            A Little About Me
          </h1>
          <p className="text-xl text-indigo-600 font-light mb-10">
            Connecting my passion for code with real-world problems.
          </p>
        </motion.header>

        {/* --- Core Philosophy Section --- */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            My Journey & Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;m a <strong>Full-Stack Developer</strong> with a focus on{" "}
            <strong>React</strong> and the <strong>Next.js</strong> ecosystem.
            My coding journey started with a simple HTML page and quickly grew
            into a passion for architecting complex, scalable applications. I
            believe in writing code that is not just functional, but also
            maintainable, readable, and highly performant.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I&apos;m constantly exploring new tools, from serverless functions
            to modern CSS frameworks, ensuring I bring the most efficient and
            robust solutions to the table.
          </p>
        </motion.section>

        {/* --- Education Section --- */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Education
          </h2>

          {/* Education Timeline */}
          <div className="space-y-6">
            {/* University Education */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="text-sm font-medium text-gray-600 md:w-24 flex-shrink-0">
                2018 - 2021
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Gateway (ICT) Polytechnic, Saapade | Bachelor&apos;s Degree in Electrical and Electronics Engineering
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I pursued my passion for technology and obtained a solid
                  foundation in electrical and electronics engineering, enhancing my problem-solving.
                  {/* abilities and analytical skills. Specialized in software
                  engineering, data structures, and modern web development
                  frameworks. */}
                </p>
              </div>
            </div>

            {/* High School Education */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="text-sm font-medium text-gray-600 md:w-24 flex-shrink-0">
                2015 - 2017
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Gateway (ICT) Polytechnic, Saapade | Ordinary National Diploma
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I completed my Ordinary National Diploma education, where I discovered my
                  enthusiasm for technology and how they can be applied in our real world and I was also taught on some basic on
                  programming concepts. Focused on Electrical Engineering and Entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Skills & Expertise Section --- */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                I am proficient in various programming languages and frameworks,
                including Java, Python, JavaScript, and React. Additionally, I
                possess strong problem-solving capabilities and a keen eye for
                detail, allowing me to develop robust and user-friendly
                applications.
              </p>
            </div>

            {/* Technical Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="text-indigo-500 mr-2 text-xl">🚀</span>
                  Frontend
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>React & Next.js</li>
                  <li>JavaScript & TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 & CSS3</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="text-indigo-500 mr-2 text-xl">💾</span>
                  Backend
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Node.js & Express</li>
                  <li>Python & Java</li>
                  <li>Next.js API Routes</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="text-indigo-500 mr-2 text-xl">📦</span>
                  Database
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Prisma ORM</li>
                  <li>SQL & NoSQL</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="text-indigo-500 mr-2 text-xl">💡</span>
                  Tools & Others
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Vercel & AWS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Personal Touch Section --- */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0, duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Beyond the Code
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or sharing
            knowledge with the developer community. I believe in continuous
            learning and staying updated with the latest trends in web
            development.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I&apos;m always excited to collaborate on innovative projects and
            connect with fellow developers who share the same passion for
            creating amazing digital experiences.
          </p>

          {/* CV Download Button */}
        </motion.section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <CVDownloadButton
              variant="primary"
              size="lg"
              buttonText="Check Out My CV"
              className="mr-4"
            />
            {/* <CVDownloadButton
              variant="outline"
              size="md"
              buttonText="View Resume"
            /> */}
          </motion.div>
      </div>
    </div>
  );
}
