

// import React from 'react';

// function AppointmentList({
//   appointments,
//   handleSelect,
//   handleFormView,
//   handleDeleteAppointment,
//   isFormOpen,
// }) {
//   return (
//     <div>
//       <h2>Appointment List</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments available</p>
//       ) : (
//         <ul>
//           {appointments.map((appointment) => (
//             <li key={appointment.id}>
//               <div>
//                 <span>{appointment.style}</span> - <span>{appointment.date}</span> at{' '}
//                 <span>{appointment.time}</span>
//               </div>
//               <button onClick={() => handleSelect(appointment)}>View</button>
//               <button onClick={() => handleFormView(appointment)}>
//                 {isFormOpen ? 'Cancel Edit' : 'Edit'}
//               </button>
//               <button onClick={() => handleDeleteAppointment(appointment.id)}>
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={() => handleFormView(null)}>Add New Appointment</button>
//     </div>
//   );
// }

// export default AppointmentList;


import React from 'react';

function AppointmentList({
  appointments,
  handleSelect,
  handleFormView,
  handleDeleteAppointment,
  isFormOpen,
}) {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Appointment List</h2>
      
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments available</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-lg text-gray-700">
                <span className="font-medium">{appointment.style}</span> -{' '}
                <span>{appointment.date}</span> at <span>{appointment.time}</span>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => handleSelect(appointment)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                  View
                </button>
                <button
                  onClick={() => handleFormView(appointment)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
                >
                  {isFormOpen ? 'Cancel Edit' : 'Edit'}
                </button>
                <button
                  onClick={() => handleDeleteAppointment(appointment.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
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
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
      >
        Add New Appointment
      </button>
    </div>
  );
}

export default AppointmentList;




