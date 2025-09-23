import { motion } from "framer-motion";

// !!! IMPORTANT: REPLACE THIS PLACEHOLDER WITH YOUR ACTUAL FORMSPREE ENDPOINT URL !!!
const FORMSPREE_ENDPOINT = "https://formspree.io/f/yourUniqueHashID";

// Animation variants
const containerVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.6,
         staggerChildren: 0.1
      }
   }
};

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6"
      >
         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl"
         >
            <motion.h1
               variants={itemVariants}
               className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2"
            >
               Get In Touch
            </motion.h1>

            {/* The Formspree integration is simple: 
          1. Use the unique endpoint URL in the 'action' attribute.
          2. Use 'POST' as the 'method'.
          3. Formspree handles the submission and redirects the user (by default).
        */}
            <motion.form
               variants={itemVariants}
               action={FORMSPREE_ENDPOINT}
               method="POST"
               className="space-y-6"
            >
               {/* Name Field */}
               <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                     Your Name
                  </label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     required
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                     placeholder="John Doe"
                  />
               </motion.div>

               {/* Email Field */}
               <motion.div variants={itemVariants}>
                  <label htmlFor="_replyto" className="block text-sm font-medium text-gray-700 mb-1">
                     Your Email
                  </label>
                  {/* Note: The 'name="_replyto"' field is a Formspree convention 
                 that ensures the reply email goes to the sender. */}
                  <input
                     type="email"
                     name="_replyto"
                     id="_replyto"
                     required
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                     placeholder="you@example.com"
                  />
               </motion.div>

               {/* Message Field */}
               <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                     Message
                  </label>
                  <textarea
                     name="message"
                     id="message"
                     rows={4}
                     required
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out resize-none"
                     placeholder="Tell me about your project..."
                  />
               </motion.div>

               {/* Submit Button with enhanced animations */}
               <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
               >
                  Send Message
               </motion.button>
            </motion.form>

         </motion.div>
      </motion.div>
   );
}