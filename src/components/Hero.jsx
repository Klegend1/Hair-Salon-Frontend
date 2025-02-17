import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[800px] sm:h-[600px] md:h-[900px] w-full" 
      style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/06/04/35/80/360_F_604358069_yVuu2zQ6w9EpMANISlXUgMuA9kAr5X5C.jpg)' }} // Hero background image
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto text-center text-white flex flex-col justify-center items-center h-full">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" 
          aria-label="Welcome to Styles by Franny"
        >
          Styles By Franny
        </h2>

        <p 
          className="text-lg sm:text-xl md:text-2xl mb-6 hover:text-blue-400 transition duration-300"
        >
          NYC Based Professional Hairstylist & Makeup Artist
        </p>
      </div>
    </section>
  );
}

export default Hero;
