
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4 h-screen flex items-center justify-center">
//       <div className="flex flex-col items-center space-y-8">
//         {/* Brand Name */}
//         <div className="text-white text-5xl font-extrabold">
//           Looks By Franny B
//         </div>

//         {/* Navigation Links */}
//         <div className="space-x-6 flex">
//           <Link to="/" className="text-white hover:text-gray-400 text-xl">
//             Home
//           </Link>
//           <Link to="/appointments" className="text-white hover:text-gray-400 text-xl">
//             Appointments
//           </Link>
//           <Link to="/book" className="text-white hover:text-gray-400 text-xl">
//             Book Appointment
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-black shadow-lg p-4 h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <img
        src="https://images.squarespace-cdn.com/content/v1/5b4818cdd274cba3ecbed6f9/de90d39c-1fca-48ba-93a8-7e6fb07fdd70/Salon+hero.jpg" // Replace with your actual image
        alt="Franny B"
        className="absolute inset-0 w-full h-full object-cover opacity-50" // Make image semi-transparent
      />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 relative z-10">

        {/* Title Section */}
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide hover:text-yellow-400 px-4 py-2 rounded-lg transition duration-300">
          Looks By Franny B
        </h2>

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
            <Link to="/book" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              Book Appointment
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-lg sm:text-xl hover:text-blue-400 hover:underline transition-colors duration-300">
              Services
            </Link>
          </li>
        </ul>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex items-center mt-8 md:mt-0 bg-gray-700 p-2 rounded-lg shadow-md w-full md:w-1/3">
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

      {/* About Section */}
      <section className="about mt-20 text-center px-4 py-10 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-3xl text-white mb-6 font-semibold">About Us</h3>
        <img
          src="https://via.placeholder.com/600x400" // Replace with actual About image
          alt="About Us"
          className="mx-auto w-full max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
        />
        <p className="text-white mt-4 text-lg">We are a full-service salon dedicated to making you feel beautiful inside and out.</p>
      </section>

      {/* Gallery Section */}
      <section className="gallery mt-20 text-center px-4 py-10 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-3xl text-white mb-6 font-semibold">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://via.placeholder.com/300x200" // Replace with an actual gallery image
            alt="Gallery 1"
            className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://via.placeholder.com/300x200" // Replace with an actual gallery image
            alt="Gallery 2"
            className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://via.placeholder.com/300x200" // Replace with an actual gallery image
            alt="Gallery 3"
            className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services mt-20 text-center px-4 py-10 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-3xl text-white mb-6 font-semibold">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="service-item bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl text-white mb-2 font-semibold">Hair Styling</h4>
            <img
              src="https://via.placeholder.com/300x200" // Replace with a Hair Styling image
              alt="Hair Styling"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-white">We offer premium hair styling services tailored to your preferences.</p>
          </div>
          <div className="service-item bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl text-white mb-2 font-semibold">Facial Treatments</h4>
            <img
              src="https://via.placeholder.com/300x200" // Replace with a Facial Treatments image
              alt="Facial Treatments"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-white">Refresh your skin with our rejuvenating facial treatments.</p>
          </div>
          <div className="service-item bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl text-white mb-2 font-semibold">Manicure & Pedicure</h4>
            <img
              src="https://via.placeholder.com/300x200" // Replace with a Manicure Pedicure image
              alt="Manicure & Pedicure"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-white">Treat your hands and feet with our luxury manicure & pedicure services.</p>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

            