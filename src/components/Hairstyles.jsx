// import React from 'react';
// import { Link } from 'react-router-dom';

// const hairstyles = [
//   {
//     title: "Blunt Cut",
//     description: "A sharp, straight cut that ends at the same length around the head. Bold and modern.",
//     image: "", 
//     timeDuration: "30-45 minutes",
//   },
//   {
//     title: "Bob Cut",
//     description: "A classic cut, usually jaw-length. Variations include the A-line bob, inverted bob, and asymmetrical bob.",
//     image: "", 
//     timeDuration: "45 minutes",
//   },
//   {
//     title: "Lob (Long Bob)",
//     description: "A longer version of the bob, typically around the collarbone or shoulders.",
//     image: "",
//     timeDuration: "45 minutes",
//   },
//   {
//     title: "Pixie Cut",
//     description: "A short and edgy style, cropped close to the head. Very chic and stylish.",
//     image: "", 
//     timeDuration: "30 minutes",
//   },
//   {
//     title: "Layered Hair",
//     description: "Hair is cut in layers for added volume and texture. This works well with both long and short hair.",
//     image: "", 
//     timeDuration: "45 minutes",
//   },
//   {
//     title: "Shag Cut",
//     description: "A textured cut with layers of varying lengths for a bold, lived-in look.",
//     image: "", 
//     timeDuration: "45 minutes",
//   },
//   {
//     title: "Curly Hair Styles",
//     description: "Styled to enhance natural curls, perfect for spiral curls, curly bobs, or layered curls.",
//     image: "", 
//     timeDuration: "45-60 minutes",
//   },
//   {
//     title: "Straight and Sleek",
//     description: "A smooth, straight look with minimal layers, often achieved with a flat iron or blowout.",
//     image: "", 
//     timeDuration: "45 minutes",
//   },
//   {
//     title: "Beach Waves",
//     description: "Loose, natural waves for a relaxed, effortless look. Created with a curling iron or salt spray.",
//     image: "", 
//     timeDuration: "30 minutes",
//   },
//   {
//     title: "Undercut",
//     description: "Sides or back shaved while the top remains longer. Often paired with a modern look.",
//     image: "", 
//     timeDuration: "45 minutes",
//   },
// ];

// const Hairstyles = () => {
//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Our Hairstyling Services</h2>
      
//       <ul className="space-y-6">
//         {hairstyles.map((style, index) => (
//           <li key={index} className="flex flex-col p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
//             <h3 className="text-xl font-semibold text-gray-700">{style.title}</h3>
//             <p className="text-gray-600">{style.description}</p>
//             <p className="text-gray-500">Duration: {style.timeDuration}</p>
//             <Link
//               to={`/book`} // You can link it to your booking page or add a new route for details
//               className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
//             >
//               Book Now
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Hairstyles;


import React from 'react';
import { Link } from 'react-router-dom';

const Hairstyles = () => {
  const hairstyles = [
    { id: 1, title: "Blunt Cut", description: "A sharp, straight cut that ends at the same length around the head. Bold and modern.", timeDuration: "30-45 minutes" },
    { id: 2, title: "Bob Cut", description: "A classic cut, usually jaw-length. Variations include the A-line bob, inverted bob, and asymmetrical bob.", timeDuration: "45 minutes" },
    { id: 3, title: "Lob (Long Bob)", description: "A longer version of the bob, typically around the collarbone or shoulders.", timeDuration: "45 minutes" },
    { id: 4, title: "Pixie Cut", description: "A short and edgy style, cropped close to the head. Very chic and stylish.", timeDuration: "30 minutes" },
    { id: 5, title: "Layered Hair", description: "Hair is cut in layers for added volume and texture. This works well with both long and short hair.", timeDuration: "45 minutes" },
    { id: 6, title: "Shag Cut", description: "A textured cut with layers of varying lengths for a bold, lived-in look.", timeDuration: "45 minutes" },
    { id: 7, title: "Curly Hair Styles", description: "Styled to enhance natural curls, perfect for spiral curls, curly bobs, or layered curls.", timeDuration: "45-60 minutes" },
    { id: 8, title: "Straight and Sleek", description: "A smooth, straight look with minimal layers, often achieved with a flat iron or blowout.", timeDuration: "45 minutes" },
    { id: 9, title: "Beach Waves", description: "Loose, natural waves for a relaxed, effortless look. Created with a curling iron or salt spray.", timeDuration: "30 minutes" },
    { id: 10, title: "Undercut", description: "Sides or back shaved while the top remains longer. Often paired with a modern, edgy look.", timeDuration: "45 minutes" },
    
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Hairstyles</h2>
      <ul className="space-y-6">
        {hairstyles.map((hairstyle) => (
          <li key={hairstyle.id} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <Link to={`/hairstyles/${hairstyle.id}`} className="block hover:text-blue-600 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{hairstyle.title}</h3>
              <p className="text-gray-600 mb-4">{hairstyle.description}</p>
              <p className="text-gray-500 font-medium"><strong>Duration:</strong> {hairstyle.timeDuration}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hairstyles;
