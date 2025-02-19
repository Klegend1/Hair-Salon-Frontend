import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-black w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white flex flex-col justify-center items-center h-full space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Styles By Kai
        </h2>
      </div>

      {/* Background Image */}
      <img
        src=""
        alt="Hairstylist working"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
    </section>
  );
};

export default Hero;
