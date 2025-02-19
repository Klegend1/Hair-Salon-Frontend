import React from 'react';

function AppointmentList({
  appointments,
  handleSelect,
  handleFormView,
  handleDeleteAppointment,
  isFormOpen,
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full p-6 bg-white shadow-2xl rounded-lg space-y-6 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800">Appointment List</h2>
        
        {appointments.length === 0 ? (
          <p className="text-xl text-gray-500">No appointments available</p>
        ) : (
          <ul className="space-y-6">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="flex justify-between items-center p-6 bg-gray-50 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-lg text-gray-700">
                  <span className="font-semibold">{appointment.style}</span> -{' '}
                  <span className="font-medium">{appointment.date}</span> at <span>{appointment.time}</span>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleSelect(appointment)}
                    className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleFormView(appointment)}
                    className="px-5 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-200 transition duration-200"
                  >
                    {isFormOpen ? 'Cancel Edit' : 'Edit'}
                  </button>
                  <button
                    onClick={() => handleDeleteAppointment(appointment.id)}
                    className="px-5 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => handleFormView(null)}
          className="mt-8 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:ring-4 focus:ring-green-200 transition duration-200"
        >
          Add New Appointment
        </button>
      </div>
    </div>
  );
}

export default AppointmentList;

