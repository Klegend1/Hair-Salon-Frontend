import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleSignIn = () => {
    setIsUserSignedIn((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pinimg.com/736x/44/e9/b5/44e9b5cb7c7d37857da5bb5685cf12cb.jpg" 
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white hover:border-yellow-400 transition-all duration-300 transform hover:scale-110 hover:shadow-xl object-contain"
          />
          <Link to="/" className="text-3xl font-bold text-white hover:text-yellow-400 transition duration-300">
            Styles By Kai
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/hairstyles"
            className="text-lg text-white hover:text-blue-400 transition duration-300"
          >
            Hairstyles
          </Link>
          <Link
            to="/appointments"
            className="text-lg text-white hover:text-blue-400 transition duration-300"
          >
            Appointments
          </Link>
        </div>

        {/* User Sign-In / Log Out */}
        <div className="flex items-center space-x-4">
          <Link
            to={isUserSignedIn ? "#" : "/signin"} 
            onClick={toggleSignIn}
            className="text-white hover:text-blue-400 transition duration-300"
          >
            {isUserSignedIn ? "Log Out" : "Sign In"}
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-blue-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white shadow-md space-y-2 py-4">
          <Link
            to="/hairstyles"
            className="block text-lg text-white hover:text-blue-400 text-center transition duration-300"
          >
            Hairstyles
          </Link>
          <Link
            to="/appointments"
            className="block text-lg text-white hover:text-blue-400 text-center transition duration-300"
          >
            Appointments
          </Link>
          <div className="text-center">
            <Link
              to={isUserSignedIn ? "#" : "/signin"}
              onClick={toggleSignIn}
              className="text-white hover:text-blue-400 transition duration-300"
            >
              {isUserSignedIn ? "Log Out" : "Sign In"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
