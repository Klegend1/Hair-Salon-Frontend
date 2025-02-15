import React from 'react';

const AppointmentDetails = (props) => {
  // If no appointment is selected, show a message
  if (!props.selected) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-500">Appointment not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{props.selected.name}</h1>
      
      <div className="mb-4">
        <h2 className="text-lg text-gray-700">Style: <span className="font-semibold">{props.selected.style}</span></h2>
        <h2 className="text-lg text-gray-700">Date: <span className="font-semibold">{props.selected.date}</span></h2>
        <h2 className="text-lg text-gray-700">Time: <span className="font-semibold">{props.selected.time}</span></h2>
      </div>

      {/* Buttons for Editing and Deleting */}
      <div className="flex space-x-4">
        <button
          onClick={() => props.handleFormView(props.selected)}
          className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Edit Appointment
        </button>
        
        <button
          onClick={() => props.handleDeleteAppointment(props.selected._id)} // 
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;

