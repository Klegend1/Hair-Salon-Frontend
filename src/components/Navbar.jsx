import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        
        {/* Profile Section */}
        <div className="flex items-center flex-col md:flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJiYs7fFcMFFlwKaEB88LvdMLdsXwtkTLkA&s" 
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-white transition-transform duration-300 transform hover:scale-110 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <h2 className="text-white mt-2 md:mt-0 md:ml-4 text-sm md:text-base font-semibold hover:text-yellow-400 hover:bg-gray-800 px-2 py-1 rounded-lg transition duration-300">
            Franny B
          </h2>
        </div>

        {/* Location Section */}
        <div className="text-white mt-2 md:mt-0">
          <p className="text-sm md:text-base font-medium">
            NYC, NY
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-6 text-white mt-8 md:mt-0 md:flex-row md:space-x-6 md:space-y-0">
          <li>
            <Link to="/" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/appointments" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/hairstyles" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Book Now Button */}
        <div className="mt-4 md:mt-0">
          <Link
            to="/book"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
