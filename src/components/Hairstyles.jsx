import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hairstyles = ({ handleSelectHairstyle }) => {
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

            {/* Add Select Hairstyle Button */}
            <button 
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
              onClick={() => handleSelectHairstyle(hairstyle)}
            >
              Select Hairstyle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hairstyles;
