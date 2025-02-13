import React, { useState } from 'react';

const BookingForm = (props) => {
  
    const initialState = {
    clientName: '',
    service: '',
    date: '',
    time: '',
  }
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  )
    
  

  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  // handleSubmit function to process form data when the form is submitted.
  const handleSubmit = (evt) => {
    evt.preventDefault(); 
    if (props.selected) {
    props.handleAddAppointmentet(formData, props.selected._id);
} else {
    console.log('Form Submitted with data: ', formData);
    
  }
};

  // And finally, the form itself.
  return (
    <div>
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="clientName">Client Name</label>
        <input
          id="clientName"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          required
        />

        <label htmlFor="service">Service</label>
        <input
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Time</label>
        <input
          id="time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookingForm;
