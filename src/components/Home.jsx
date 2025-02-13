// import React from 'react';

// const Home = () => {
//   return (
//     <div className="home-page">
//       <h1 className="text-4xl font-bold text-center mt-8">Welcome to Our Hair Salon</h1>
//       <p className="text-lg text-center mt-4">
//         Your favorite place for haircuts, styling, and more!
//       </p>
//       <div className="mt-8 flex justify-center">
//         <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
//           Book an Appointment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with a background image */}
      <div className="hero bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">Welcome to Our Hair Salon</h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="text-center mt-12 px-4">
        <p className="text-lg text-gray-700 mb-4">
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

      {/* Our Services Section */}
      <section className="mt-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Haircuts</h3>
            <p className="text-gray-600">Precision cuts tailored to your personal style.</p>
          </div>
          <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Styling</h3>
            <p className="text-gray-600">From everyday styles to special events.</p>
          </div>
          <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Coloring</h3>
            <p className="text-gray-600">Get the perfect color with professional coloring techniques.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 px-4 bg-gray-50 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="flex justify-center space-x-6">
          <div className="testimonial bg-white p-6 rounded-lg shadow-lg text-center w-1/3">
            <p className="italic text-gray-700 mb-4">"The best salon experience I've ever had! The team is amazing."</p>
            <p className="font-semibold text-gray-800">Sarah M.</p>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-lg text-center w-1/3">
            <p className="italic text-gray-700 mb-4">"Love my new look! Highly recommend to anyone looking for a fresh style."</p>
            <p className="font-semibold text-gray-800">James D.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


