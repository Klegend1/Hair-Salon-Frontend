import React from 'react';

function AppointmentDetails({ selected, handleFormView, handleDeleteAppointment }) {
  if (!selected) return null;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
      {/* Displaying Client Name */}
      <p><strong>Name:</strong> {selected.name}</p> {/* Assuming the name is part of the selected object */}
      <p><strong>Style:</strong> {selected.style}</p>
      <p><strong>Date:</strong> {selected.date}</p>
      <p><strong>Time:</strong> {selected.time}</p>

      <div className="mt-4">
        <button
          onClick={() => handleFormView(selected)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Edit Appointment
        </button>
        <button
          onClick={() => handleDeleteAppointment(selected.id)}
          className="ml-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete Appointment
        </button>
      </div>
    </div>
  );
}

export default AppointmentDetails;

