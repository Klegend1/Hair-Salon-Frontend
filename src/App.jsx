import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as appointmentService from './services/appointmentServices';

import AppointmentList from './components/AppointmentList';
import AppointmentDetails from './components/AppointmentDetails';
import BookingForm from './components/BookingForm';

 import Home from './components/Home'; 
 import Hero from './components/Hero';
 import Navbar from './components/Navbar'; 

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const fetchedAppointments = await appointmentService.index();

        if (fetchedAppointments.err) {
          throw new Error(fetchedAppointments.err);
        }

        setAppointments(fetchedAppointments);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAppointments();
  }, []);

  const handleSelect = (appointment) => {
    setSelected(appointment);
    setIsFormOpen(false); 
  };

  const handleFormView = (appointment) => {
    if (!appointment._id) setSelected(null);
    setIsFormOpen(!isFormOpen); 
  };

  const handleAddAppointment = async (formData) => {
    try {
      const newAppointment = await appointmentService.create(formData);

      if (newAppointment.err) {
        throw new Error(newAppointment.err);
      }

      setAppointments([newAppointment, ...appointments]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateAppointment = async (formData, appointmentId) => {
    try {
      const updatedAppointment = await appointmentService.update(formData, appointmentId);

      if (updatedAppointment.err) {
        throw new Error(updatedAppointment.err);
      }

      const updatedAppointmentsList = appointments.map((appointment) =>
        appointment._id !== updatedAppointment._id ? appointment : updatedAppointment
      );

      setAppointments(updatedAppointmentsList);
      setSelected(updatedAppointment);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const deletedAppointment = await appointmentService.deleteAppointment(appointmentId);

      if (deletedAppointment.err) {
        throw new Error(deletedAppointment.err);
      }

      setAppointments(appointments.filter((appointment) => appointment._id !== deletedAppointment._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Navbar />
    <Hero />
    <Home/>

    
      <AppointmentList
        appointments={appointments}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        handleDeleteAppointment={handleDeleteAppointment}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <BookingForm
          handleAddAppointment={handleAddAppointment}
          selected={selected}
          handleUpdateAppointment={handleUpdateAppointment}
        />
      ) : (
        <AppointmentDetails
          selected={selected}
          handleFormView={handleFormView}
          handleDeleteAppointment={handleDeleteAppointment}
        />
        
        
      )}
       <Routes>
            <Route path="/" element={<Home handleDeleteAppointment ={handleDeleteAppointment} />} />/
            <Route path="/appointment-list" element={< AppointmentList handleDeleteAppointment={handleDeleteAppointment} />} />
            <Route path="/appoitnments/:id" element={< AppointmentList handleDeleteAppointment ={handleDeleteAppointment} />} />
          </Routes>
    </>
  );
}

export default App;
