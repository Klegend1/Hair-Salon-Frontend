import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="home-page">
      {/* Hero Section with a background image */}
      <div
        className="hero bg-cover bg-center h-[400px] md:h-[500px] relative"
        style={{ backgroundImage: "url('')" }} // Add the image URL if needed
      >
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          {/* Removed the welcome text */}
        </div>
      </div>

      {/* Intro Section */}
      <section className="text-center mt-12 px-6 md:px-12">
        <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8">
          Your favorite place for haircuts, styling, and more!
        </p>

        {/* Book Appointment Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/book"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:scale-105 transform"
          >
            Book an Appointment
          </Link>
        </div>

        {/* Link to Hairstyles */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/hairstyles"
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-lg hover:scale-105 transform"
          >
            Explore Our Hairstyles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
