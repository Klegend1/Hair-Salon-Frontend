// src/services/appointmentService.js

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/appointments`;

// Fetch all appointments
const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch appointments');
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// Create a new appointment
const create = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error('Failed to create appointment');
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// Update an existing appointment
const update = async (formData, appointmentId) => {
  try {
    const res = await fetch(`${BASE_URL}/${appointmentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error('Failed to update appointment');
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// Delete an appointment
const deleteAppointment = async (appointmentId) => {
  try {
    const res = await fetch(`${BASE_URL}/${appointmentId}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Failed to delete appointment');
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { index, create, update, deleteAppointment };












// // src/services/petService.js

// const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/appointments`;

// // src/services/appointmentService.js

// const index = async () => {
//     try {
//       const res = await fetch(BASE_URL);
//       return res.json();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   export {
//     index,
//   };
//   console.log(await index());


//   const create = async (formData) => {
//     try {
//       const res = await fetch(BASE_URL, {
//         // We specify that this is a 'POST' request
//         method: 'POST',
//         // We're sending JSON data, so we attach a Content-Type header
//         // and specify that the data being sent is type 'application/json'
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // The formData, converted to JSON, is sent as the body
//         // This will be received on the back-end as req.body
//         body: JSON.stringify(formData),
//       });
//       return res.json();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleUpdateAppointment = async (formData, appointmentId) => {
//     try {
//       const updatedAppointment = await appointmentService.update(formData, appointmentId);
  
//       // handle potential errors
//       if (updatedAppointment.err) {
//         throw new Error(updatedAppointment.err);
//       }
  
//       const updatedAppointmentList = appointments.map((appointment) => (
        
//         appointment._id !== updatedAppointment._id ? appointment : updatedAppointment
//       ));
      
//       setAppointments(updatedAppointmentList);
      
//       setSelected(updatedAppointment);
//       setIsFormOpen(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };



//   const update = async (formData, appointmentId) => {
//     try {
//       const res = await fetch(`${BASE_URL}/${appointmentId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       return res.json();
//     } catch (err) {
//       console.log(err);
//     }
//   };


//   const deleteAppointment = async (appointmentId) => {
//     try {
//       const res = await fetch(`${BASE_URL}/${appointmentId}`, {
//         method: 'DELETE',
//       });
//       return res.json();
//     } catch (err) {
//       console.log(err);
//     }
//   };



//   export default create;



