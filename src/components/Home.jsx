import React from 'react';



const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with a background image */}
      <div className="hero bg-cover bg-center h-[400px] md:h-[500px] relative" style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-6 py-4">
            Welcome to Our Hair Salon
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="text-center mt-12 px-6 md:px-12">
        <p className="text-lg text-gray-700 mb-6 md:mb-8">
          Your favorite place for haircuts, styling, and more! We provide personalized hair services tailored to your needs.
        </p>

        {/* Book Appointment Button */}
        <div className="mt-8 flex justify-center">
          <button 
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            onClick={() => window.location.href='/book'} // Navigate to booking page
          >
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
