import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MyAppointments = () => {
  const { id } = useParams();
  const [patientAppointments, setPatientAppointments] = useState([]);

  useEffect(() => {
    const fetchPatientAppointments = async () => {
      try {
        const appointmentsResponse = await axios.get(`http://localhost:5007/api/appointments/patient/${id}`);
        setPatientAppointments(appointmentsResponse.data);
      } catch (error) {
        console.error('Error fetching patient appointments:', error);
      }
    };

    fetchPatientAppointments();
  }, [id]);

  return (
    <div>
      <h1>My Appointments</h1>
      {patientAppointments.map((appointment) => (
        <div key={appointment._id}>
          <p>Doctor Name: {appointment.doctorName}</p>
          <p>Date: {appointment.date}</p>
          {/* Display other appointment details as needed */}
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
