import { motion } from "framer-motion";

interface CVDownloadButtonProps {
   /** The file path or URL to the CV file */
   cvUrl?: string;
   /** The filename for the downloaded file */
   fileName?: string;
   /** Custom button text */
   buttonText?: string;
   /** Additional CSS classes */
   className?: string;
   /** Button variant - primary, secondary, or outline */
   variant?: 'primary' | 'secondary' | 'outline';
   /** Button size */
   size?: 'sm' | 'md' | 'lg';
}

const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({
   cvUrl = "/MyCv- David Emmanuel Facility Manager.pdf", // Default CV path in public folder
   fileName = "David_Emmanuel_CV.pdf",
   buttonText = "Download CV",
   className = "",
   variant = 'primary',
   size = 'md',
}) => {

   const handleDownload = () => {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = fileName;
      link.target = '_blank'; // Open in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

   // Variant styles
   const variantStyles = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 border-gray-600",
      outline: "bg-transparent text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"
   };

   // Size styles
   const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
   };

   const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg border-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl";

   return (
      <motion.button
         onClick={handleDownload}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
         title={`Download ${fileName}`}
      >
         {/* Download Icon */}
         <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
         </svg>
         {buttonText}
      </motion.button>
   );
};

export default CVDownloadButton;