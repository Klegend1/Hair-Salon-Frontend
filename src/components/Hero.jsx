import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{ backgroundImage: "url('')" }} 
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {}
      
      <div className="relative max-w-7xl mx-auto text-center p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Looks By Franny B
        </h1>
        <p className="text-lg sm:text-xl mb-8 px-4">
          NYC Based professional hairstylist & makeup artist
        </p>
        <a
          href="#book-section"  
          className="inline-block bg-white text-blue-500 py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Hero;

  