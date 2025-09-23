// components/Navbar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Name from "./Name";

// Define the navigation links
const navLinks = [
   { href: "/about", label: "About" },
   { href: "/project", label: "Projects" },
   { href: "/contact", label: "Contact" },
];

// The Navbar Component
const Navbar: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className="sticky top-0 z-50 bg-white shadow-md">
         <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
               {/* Logo/Name */}
               <Link to="/" className="hover:scale-105 transition duration-300">
                  <Name isClickable={true} />
               </Link>

               {/* Desktop Navigation Links */}
               <div className="hidden md:flex space-x-6">
                  {navLinks.map((link) => (
                     <Link
                        key={link.href}
                        to={link.href}
                        className="text-gray-600 hover:text-indigo-600 font-medium transition duration-200 border-b-2 border-transparent hover:border-indigo-600 pb-1"
                     >
                        {link.label}
                     </Link>
                  ))}
               </div>

               {/* Mobile Hamburger Button */}
               <button
                  onClick={toggleMenu}
                  className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                  aria-label="Toggle menu"
               >
                  <span
                     className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                  ></span>
                  <span
                     className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                        }`}
                  ></span>
                  <span
                     className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                  ></span>
               </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
               className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${isMenuOpen
                     ? "max-h-64 opacity-100"
                     : "max-h-0 opacity-0 overflow-hidden"
                  }`}
            >
               <div className="flex flex-col space-y-3 pb-4">
                  {navLinks.map((link) => (
                     <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-600 hover:text-indigo-600 font-medium transition duration-200 py-2 px-4 rounded-md hover:bg-gray-50"
                     >
                        {link.label}
                     </Link>
                  ))}
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;