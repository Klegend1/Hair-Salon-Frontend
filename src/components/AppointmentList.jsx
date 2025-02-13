
const AppointmentList = (props) => {
  // Let's ensure we have data to work with before adding functionality!
  console.log(props);


  return (
    <div>
      <h1>Appointment List</h1>
      <div>
        {!props.appointments.length ? (
          <h2>No Appointments Yet!</h2>
        ) : (
          <ul>
            {props.appointments.map((appointment) => (
              <li
                key={appointment._id}
                style={{ cursor: 'pointer' }} // Optionally add style for pointer cursor
                onClick={() => props.handleSelect(appointment)} // Call handleSelect on click, passing the appointment
              >
                {appointment.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Button to toggle form or view */}
      <button onClick={props.handleFormView}>
        {props.isFormOpen ? 'Close Form' : 'New Appointment'}
      </button>
    </div>
  );
};

export default AppointmentList;









