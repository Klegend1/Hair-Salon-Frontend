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
    <div className="container mx-auto p-8 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 rounded-2xl shadow-xl">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        {selected ? 'Update Appointment' : 'Book New Appointment'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Style Input */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Style:</label>
          <input
            type="text"
            name="style"
            value={formData.style}
            onChange={handleChange}
            required
            className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out"
            placeholder="Enter desired hairstyle"
          />
        </div>

        {/* Date Input */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out"
          />
        </div>

        {/* Time Input */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {selected ? 'Update Appointment' : 'Book Appointment'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
