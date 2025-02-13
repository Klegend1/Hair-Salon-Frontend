// import AppointmentDetails from './components/AppointmentDetails';

const AppointmentDetails = (props) => {
 
  if (!props.selected) {
    return (
      <div>
        <h1>Appointment not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{props.selected.name}</h1>
      <h2>Style: {props.selected.style}</h2>
      <h2>Date: {props.selected.date}</h2>
      <h2>Time: {props.selected.time}</h2>
      {/* New button to edit the appointment */}
      <div>
        <button onClick={() => props.handleFormView(props.selected)}>
          Edit Appointment
        </button>
        <button onClick={() => props.handleDeletePet(props.selected._id)}>
          Delete Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;










//   return (
//     <div className="appointment-details bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6">Appointment Details</h2>
      
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Customer Name:</h3>
//         <p>{props.selected.customerName}</p>
//       </div>
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Style:</h3>
//         <p>{props.selected.style}</p>
//       </div>
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Date:</h3>
//         <p>{props.selected.date}</p>
//       </div>
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Time:</h3>
//         <p>{props.selected.time}</p>
//       </div>

//       <div className="mt-6">
//         <a
//           href="/appointments"
//           className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 transition"
//         >
//           Back to Appointments
//         </a>
//       </div>
//     </div>
//   );
// };


