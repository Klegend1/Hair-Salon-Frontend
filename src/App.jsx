// import React, { useState, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import * as appointmentService from './services/appointmentServices';

// import AppointmentList from './components/AppointmentList';
// import AppointmentDetails from './components/AppointmentDetails';
// import BookingForm from './components/BookingForm';

// import Home from './components/Home'; 
// import Hero from './components/Hero';
// import Navbar from './components/Navbar'; 

// function App() {
//   const [appointments, setAppointments] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const fetchedAppointments = await appointmentService.index();

//         if (fetchedAppointments.error) {
//           throw new Error(fetchedAppointments.error);
//         }

//         setAppointments(fetchedAppointments);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAppointments();
//   }, []);

//   const handleSelect = (appointment) => {
//     setSelected(appointment);
//     setIsFormOpen(false); 
//   };

//   const handleFormView = (appointment) => {
//     if (!appointment._id) setSelected(null);
//     setIsFormOpen(!isFormOpen); 
//   };

//   const handleAddAppointment = async (formData) => {
//     try {
//       const newAppointment = await appointmentService.create(formData);

//       if (newAppointment.error) {
//         throw new Error(newAppointment.error);
//       }

//       setAppointments([newAppointment, ...appointments]);
//       setIsFormOpen(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleUpdateAppointment = async (formData, appointmentId) => {
//     try {
//       const updatedAppointment = await appointmentService.update(formData, appointmentId);

//       if (updatedAppointment.error) {
//         throw new Error(updatedAppointment.error);
//       }

//       const updatedAppointmentsList = appointments.map((appointment) =>
//         appointment._id !== updatedAppointment._id ? appointment : updatedAppointment
//       );

//       setAppointments(updatedAppointmentsList);
//       setSelected(updatedAppointment);
//       setIsFormOpen(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleDeleteAppointment = async (appointmentId) => {
//     try {
//       const response = await appointmentService.deleteAppointment(appointmentId);

//       if (response.error) {
//         throw new Error(response.error);
//       }

//       setAppointments(appointments.filter((appointment) => appointment._id !== appointmentId));
//       setSelected(null);
//       setIsFormOpen(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Home />

//       <AppointmentList
//         appointments={appointments}
//         handleSelect={handleSelect}
//         handleFormView={handleFormView}
//         handleDeleteAppointment={handleDeleteAppointment}
//         isFormOpen={isFormOpen}
//       />

//       {isFormOpen ? (
//         <BookingForm
//           handleAddAppointment={handleAddAppointment}
//           selected={selected}
//           handleUpdateAppointment={handleUpdateAppointment}
//         />
//       ) : (
//         <AppointmentDetails
//           selected={selected}
//           handleFormView={handleFormView}
//           handleDeleteAppointment={handleDeleteAppointment}
//         />
//       )}

//       <Routes>
//         <Route path="/" element={<Home handleDeleteAppointment={handleDeleteAppointment} />} />
//         <Route path="/appointment-list" element={<AppointmentList handleDeleteAppointment={handleDeleteAppointment} />} />
//         <Route path="/appointments/:id" element={<AppointmentDetails handleDeleteAppointment={handleDeleteAppointment} />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import * as appointmentService from './services/appointmentServices';

// import AppointmentList from './components/AppointmentList';
// import AppointmentDetails from './components/AppointmentDetails';
// import BookingForm from './components/BookingForm';
// import Hairstyles from './components/Hairstyles';
// import Home from './components/Home'; 
// import Hero from './components/Hero';
// import Navbar from './components/Navbar'; 

// function App() {
//   const [appointments, setAppointments] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const fetchedAppointments = await appointmentService.index();
//         if (fetchedAppointments.error) {
//           throw new Error(fetchedAppointments.error);
//         }
//         setAppointments(fetchedAppointments);
//       } catch (err) {
//         setError('Failed to load appointments.');
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAppointments();
//   }, []);

//   const handleSelect = (appointment) => {
//     setSelected(appointment);
//     setIsFormOpen(false); 
//   };

//   const handleFormView = () => {
//     setSelected(null); 
//     setIsFormOpen((prev) => !prev); 
//   };

//   const handleAddAppointment = async (formData) => {
//     setLoading(true);
//     try {
//       const newAppointment = await appointmentService.create(formData);
//       if (newAppointment.error) {
//         throw new Error(newAppointment.error);
//       }
//       setAppointments([newAppointment, ...appointments]);
//       setIsFormOpen(false);
//     } catch (err) {
//       setError('Failed to add appointment.');
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdateAppointment = async (formData, appointmentId) => {
//     setLoading(true);
//     try {
//       const updatedAppointment = await appointmentService.update(formData, appointmentId);
//       if (updatedAppointment.error) {
//         throw new Error(updatedAppointment.error);
//       }
//       const updatedAppointmentsList = appointments.map((appointment) =>
//         appointment.id !== updatedAppointment.id ? appointment : updatedAppointment
//       );
//       setAppointments(updatedAppointmentsList);
//       setSelected(updatedAppointment);
//       setIsFormOpen(false);
//     } catch (err) {
//       setError('Failed to update appointment.');
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteAppointment = async (appointmentId) => {
//     setLoading(true);
//     try {
//       const response = await appointmentService.deleteAppointment(appointmentId);
//       if (response.success) {
//         setAppointments(appointments.filter((appointment) => appointment.id !== appointmentId));
//         setSelected(null);
//         setIsFormOpen(false);
//       } else {
//         throw new Error('Failed to delete appointment.');
//       }
//     } catch (err) {
//       setError('Failed to delete appointment.');
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Home />

//       {loading && <div>Loading...</div>}
//       {error && <div>{error}</div>}

//       <AppointmentList
//         appointments={appointments}
//         handleSelect={handleSelect}
//         handleFormView={handleFormView}
//         handleDeleteAppointment={handleDeleteAppointment}
//         isFormOpen={isFormOpen}
//       />

//       {isFormOpen ? (
//         <BookingForm
//           handleAddAppointment={handleAddAppointment}
//           selected={selected}
//           handleUpdateAppointment={handleUpdateAppointment}
//         />
//       ) : (
//         <AppointmentDetails
//           selected={selected}
//           handleFormView={handleFormView}
//           handleDeleteAppointment={handleDeleteAppointment}
//         />
//       )}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/appointment-list" element={<AppointmentList handleDeleteAppointment={handleDeleteAppointment} />} />
//         <Route path="/appointments/:id" element={<AppointmentDetails handleDeleteAppointment={handleDeleteAppointment} />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

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
        console.log(err);
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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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

      {/* Routes for all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment-list" element={<AppointmentList handleDeleteAppointment={handleDeleteAppointment} />} />
        <Route path="/appointments/:id" element={<AppointmentDetails handleDeleteAppointment={handleDeleteAppointment} />} />
        <Route path="/hairstyles" element={<Hairstyles />} />
        <Route path="/hairstyles/:hairstyleId" element={<HairstyleDetails />} />{/* Add the new route */}
      </Routes>
    </>
  );
}

export default App;

