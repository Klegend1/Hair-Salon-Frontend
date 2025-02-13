import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/appointments/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-black shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        
        {/* Profile Section */}
        <div className="flex items-center flex-col md:flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0x9Lnd4ut0rd9RopQS8rZNVBT89kv7PfVXw&s" 
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-white transition-transform duration-300 transform hover:scale-110 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <h2 className="text-white mt-2 md:mt-0 md:ml-4 text-sm md:text-base font-semibold hover:text-yellow-400 hover:bg-gray-800 px-2 py-1 rounded-lg transition duration-300">
            Franny B
          </h2>
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
            <Link to="/services" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
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

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex items-center mt-4 md:mt-0 bg-gray-700 p-2 rounded-lg shadow-md w-full md:w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search..."
            className="p-2 border-none rounded-l-lg w-full text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
