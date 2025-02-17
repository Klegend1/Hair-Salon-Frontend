// src/components/HairstyleDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const HairstyleDetails = () => {
  const { hairstyleId } = useParams();  // Get the id from the URL
  const hairstyles = [
    { id: 1, title: "Blunt Cut", description: "A sharp, straight cut...", timeDuration: "30-45 minutes" },
    { id: 2, title: "Bob Cut", description: "A classic cut, jaw-length...", timeDuration: "45 minutes" },
    // Add all other hairstyles here
  ];

  const hairstyle = hairstyles.find(h => h.id === parseInt(hairstyleId));

  if (!hairstyle) {
    return <div>Hairstyle not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">{hairstyle.title}</h2>
      <p className="mb-4">{hairstyle.description}</p>
      <p><strong>Duration:</strong> {hairstyle.timeDuration}</p>
    </div>
  );
};

export default HairstyleDetails;
