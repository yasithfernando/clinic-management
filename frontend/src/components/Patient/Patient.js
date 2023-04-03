import { Button } from '@mui/material';
import React from 'react';
//import "./Patient.css"

const Patient = (props) => {

    const{_id,registrationNumber,patientName,patientdob,patientNIC,patientContact,patientAddress,clinic,guardian,relationship,guardContact,division} = props.patient;

  return (
    <tr className='card'>
        <td>{_id}</td>
        <td>{patientName}</td>
        <td>{registrationNumber}</td>
        <td>{patientdob}</td>
        <td>{patientNIC}</td>
        <td>{patientContact}</td>
        <td>{patientAddress}</td>
        <td>{clinic}</td>
        <td>{guardian}</td>
        <td>{relationship}</td>
        <td>{guardContact} </td>
        <td>{division}</td> 
        <td><Button>Update</Button></td>
    </tr>
    
  )
}

export default Patient;