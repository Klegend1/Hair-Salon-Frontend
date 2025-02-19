import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as appointmentService from './services/appointmentServices';

import AppointmentList from './components/AppointmentList';
import AppointmentDetails from './components/AppointmentDetails';
import BookingForm from './components/BookingForm';

import HairstyleDetails from './components/HairstyleDetails';
import Hairstyles from './components/hairstyles';
import Home from './components/Home'; 
import Hero from './components/Hero';
import Navbar from './components/Navbar'; 

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedAppointments = await appointmentService.index();
        if (fetchedAppointments.error) {
          throw new Error(fetchedAppointments.error);
        }
        setAppointments(fetchedAppointments);
      } catch (err) {
        setError('Failed to load appointments.');
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const handleSelect = (appointment) => {
    setSelected(appointment);
    setIsFormOpen(false); 
  };

  const handleFormView = () => {
    setSelected(null); 
    setIsFormOpen((prev) => !prev); 
  };

  const handleAddAppointment = async (formData) => {
    setLoading(true);
    try {
      const newAppointment = await appointmentService.create(formData);
      if (newAppointment.error) {
        throw new Error(newAppointment.error);
      }
      setAppointments([newAppointment, ...appointments]);
      setIsFormOpen(false);
    } catch (err) {
      setError('Failed to add appointment.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateAppointment = async (formData, appointmentId) => {
    setLoading(true);
    try {
      const updatedAppointment = await appointmentService.update(formData, appointmentId);
      if (updatedAppointment.error) {
        throw new Error(updatedAppointment.error);
      }
      const updatedAppointmentsList = appointments.map((appointment) =>
        appointment.id !== updatedAppointment.id ? appointment : updatedAppointment
      );
      setAppointments(updatedAppointmentsList);
      setSelected(updatedAppointment);
      setIsFormOpen(false);
    } catch (err) {
      setError('Failed to update appointment.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    setLoading(true);
    try {
      const response = await appointmentService.deleteAppointment(appointmentId);
      if (response.success) {
        setAppointments(appointments.filter((appointment) => appointment.id !== appointmentId));
        setSelected(null);
        setIsFormOpen(false);
      } else {
        throw new Error('Failed to delete appointment.');
      }
    } catch (err) {
      setError('Failed to delete appointment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Home />

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

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
        <Route path="/" element={<Home />} />
        <Route path="/appointment-list" element={<AppointmentList handleDeleteAppointment={handleDeleteAppointment} />} />
        <Route path="/appointments/:id" element={<AppointmentDetails handleDeleteAppointment={handleDeleteAppointment} />} />
        <Route path="/hairstyles" element={<Hairstyles />} />
        <Route path="/hairstyles/:hairstyleId" element={<HairstyleDetails />} />
      </Routes>
    </>
  );
}

export default App;

