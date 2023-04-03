import React, { useEffect,useState } from 'react';
import './clinicView.css';
import ClinicService from '../../services/clinicService';



const ClinicView = () => {

  const [clinics, setClinics] = useState([])

  useEffect(()=>{
    ClinicService.getAllClinics().then(
      (response) => {
        setClinics(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  return (
    <div class="clinic-table-container">
        <table className="clinic-table">
      <thead>
        <tr>
          <th>Clinic</th>
          <th>Day</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Place</th>
        </tr>
      </thead>
      <tbody>
        {clinics.map((clinic) => (
          <tr key={clinic._id}>
            <td>{clinic.name}</td>
            <td>{clinic.day}</td>
            <td>{clinic.startTime}</td>
            <td>{clinic.endTime}</td>
            <td>{clinic.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default ClinicView;
