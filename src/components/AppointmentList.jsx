import React from 'react';

const AppointmentList = (props) => {
  // Let's ensure we have data to work with before adding functionality!
  console.log(props);

  return (
    <div className="appointment-list">
      <h1 className="text-2xl font-bold mb-4">Appointment List</h1>
      {/* Display if there are no appointments */}
      <div>
        {!props.appointments.length ? (
          <h2 className="text-lg text-gray-500">No Appointments Yet!</h2>
        ) : (
          <ul>
            {props.appointments.map((appointment) => (
              <li
                key={appointment._id}
                className="appointment-item flex justify-between items-center mb-4 p-4 bg-gray-100 rounded-md"
                style={{ cursor: 'pointer' }} // Optional pointer cursor style
                onClick={() => props.handleSelect(appointment)} // Select appointment on click
              >
                <div>
                  <h3 className="text-lg font-semibold">{appointment.name}</h3>
                  <p>{appointment.style}</p>
                  <p>{appointment.date}</p>
                  <p>{appointment.time}</p>
                </div>
                
                {/* Buttons for "View", "Edit", and "Delete" */}
                <div className="buttons flex space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the onClick for the entire appointment
                      props.handleSelect(appointment); // Select the appointment to view
                    }}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                  >
                    View
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the onClick for the entire appointment
                      props.handleFormView(appointment); // Toggle form to edit
                    }}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the onClick for the entire appointment
                      props.handleDeleteAppointment(appointment._id); // Delete the appointment
                    }}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Button to toggle the form for creating a new appointment */}
      <div className="mt-8">
        <button
          onClick={props.handleFormView}
          className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
        >
          {props.isFormOpen ? 'Close Form' : 'New Appointment'}
        </button>
      </div>
    </div>
  );
};

export default AppointmentList;















