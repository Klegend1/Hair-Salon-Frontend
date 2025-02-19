import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <div
        className="hero bg-cover bg-center h-[400px] md:h-[500px] relative"
        style={{ backgroundImage: "url('')" }} 
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Intro Section */}
      <section className="text-center mt-12 px-6 md:px-12">
        <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8">
          Your favorite place for haircuts, styling, and more!
        </p>
      </section>
    </div>
  );
};

export default Home;
