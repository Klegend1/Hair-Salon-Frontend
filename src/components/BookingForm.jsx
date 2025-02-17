
// import React, { useState, useEffect } from 'react';

// const BookingForm = (props) => {
//   const initialState = {
//     clientName: '',
//     service: '',
//     date: '',
//     time: '',
//   };

//   // Initialize the form data based on whether an appointment is selected
//   const [formData, setFormData] = useState(
//     props.selected
//       ? {
//           clientName: props.selected.clientName || '',
//           service: props.selected.service || '',
//           date: props.selected.date || '',
//           time: props.selected.time || '',
//         }
//       : initialState
//   );

//   // handleChange function to update formData state
//   const handleChange = (evt) => {
//     setFormData({ ...formData, [evt.target.name]: evt.target.value });
//   };

//   // handleSubmit function to process form data when the form is submitted
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     // If selected appointment exists, update it
//     if (props.selected) {
//       props.handleUpdateAppointment(formData, props.selected._id);
//     } else {
//       // If no selected appointment, create a new one
//       props.handleAddAppointment(formData);
//     }
//   };

//   // Form layout
//   return (
//     <div>
//       <h2>{props.selected ? 'Update Appointment' : 'Book Your Appointment'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="clientName">Client Name</label>
//           <input
//             id="clientName"
//             name="clientName"
//             type="text"
//             value={formData.clientName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="service">Service</label>
//           <input
//             id="service"
//             name="service"
//             type="text"
//             value={formData.service}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="date">Date</label>
//           <input
//             id="date"
//             name="date"
//             type="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="time">Time</label>
//           <input
//             id="time"
//             name="time"
//             type="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">{props.selected ? 'Update Appointment' : 'Book Appointment'}</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;


import React, { useState, useEffect } from 'react';

function BookingForm({ handleAddAppointment, selected, handleUpdateAppointment }) {
  const [formData, setFormData] = useState({
    style: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    if (selected) {
      setFormData({
        style: selected.style,
        date: selected.date,
        time: selected.time,
      });
    }
  }, [selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      handleUpdateAppointment(formData, selected.id);
    } else {
      handleAddAppointment(formData);
    }
  };

  return (
    <div>
      <h2>{selected ? 'Update Appointment' : 'Book New Appointment'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Style:</label>
          <input
            type="text"
            name="style"
            value={formData.style}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{selected ? 'Update Appointment' : 'Book Appointment'}</button>
      </form>
    </div>
  );
}

export default BookingForm;

