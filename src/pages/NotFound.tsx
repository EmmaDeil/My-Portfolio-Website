import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
   return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
         >
            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
               className="mb-8"
            >
               <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
               <div className="w-32 h-1 bg-pink-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="mb-8"
            >
               <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Oops! Page Not Found
               </h2>
               <p className="text-lg text-gray-600 max-w-md mx-auto">
                  The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.6 }}
               className="flex flex-col sm:flex-row gap-4 justify-center"
            >
               <Link
                  to="/"
                  className="inline-block py-3 px-8 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
               >
                  Go Home
               </Link>
               <Link
                  to="/contact"
                  className="inline-block py-3 px-8 text-lg font-semibold text-indigo-600 bg-transparent border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
               >
                  Contact Me
               </Link>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 0.6 }}
               className="mt-12"
            >
               <p className="text-sm text-gray-500">
                  If you think this is a mistake, please{" "}
                  <Link to="/contact" className="text-indigo-600 hover:text-indigo-800 underline">
                     let me know
                  </Link>
               </p>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
               animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
               }}
               transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
               }}
               className="absolute top-20 left-20 w-16 h-16 bg-pink-200 rounded-full opacity-20"
            />
            <motion.div
               animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1]
               }}
               transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
               }}
               className="absolute bottom-20 right-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20"
            />
            <motion.div
               animate={{
                  y: [0, -20, 0]
               }}
               transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
               }}
               className="absolute top-1/2 right-10 w-8 h-8 bg-purple-200 rounded-full opacity-30"
            />
         </motion.div>
      </div>
   );
};

export default NotFound;