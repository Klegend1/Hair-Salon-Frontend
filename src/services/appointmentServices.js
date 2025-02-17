// // src/services/appointmentService.js

// const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/appointments`;

// // Fetch all appointments
// const index = async () => {
//   try {
//     const res = await fetch(BASE_URL);
//     if (!res.ok) throw new Error('Failed to fetch appointments');
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Create a new appointment
// const create = async (formData) => {
//   try {
//     const res = await fetch(BASE_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!res.ok) throw new Error('Failed to create appointment');
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Update an existing appointment
// const update = async (formData, appointmentId) => {
//   try {
//     const res = await fetch(`${BASE_URL}/${appointmentId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!res.ok) throw new Error('Failed to update appointment');
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Delete an appointment
// const deleteAppointment = async (appointmentId) => {
//     console.log("Deleting appointment with ID:", appointmentId); // Add this line for debugging
//     try {
//       const res = await fetch(`${BASE_URL}/${appointmentId}`, {
//         method: 'DELETE',
//       });
  
//       if (!res.ok) {
//         const errorMessage = await res.text();
//         throw new Error(`Failed to delete appointment: ${errorMessage || res.statusText}`);
//       }
  
//       return { success: true };
//     } catch (err) {
//       console.log(err);
//       return { success: false, error: err.message };
//     }
//   };
  

// export { index, create, update, deleteAppointment };


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/appointments`;

// Fetch all appointments
const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error(`Failed to fetch appointments. Status: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("Error in index:", err);
    return { success: false, error: err.message }; // Return consistent error structure
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

    if (!res.ok) throw new Error(`Failed to create appointment. Status: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("Error in create:", err);
    return { success: false, error: err.message }; // Return consistent error structure
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

    if (!res.ok) throw new Error(`Failed to update appointment. Status: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("Error in update:", err);
    return { success: false, error: err.message }; // Return consistent error structure
  }
};

// Delete an appointment
const deleteAppointment = async (appointmentId) => {
    console.log("Deleting appointment with ID:", appointmentId); // For debugging
    try {
      const res = await fetch(`${BASE_URL}/${appointmentId}`, {
        method: 'DELETE',
      });
  
      if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`Failed to delete appointment. Status: ${res.status}. ${errorMessage || res.statusText}`);
      }
  
      return { success: true };
    } catch (err) {
      console.error("Error in delete:", err);
      return { success: false, error: err.message }; // Return consistent error structure
    }
};

export { index, create, update, deleteAppointment };








