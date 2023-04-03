import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Patient from "./Patient";
//import "./Patient.css";
const URL = 'http://localhost:5000/patients/viewAll';

const fetchHandler = async()=>{

    return await axios.get(URL).then((res)=> res.data)

}

const Patients = () => {
    
   const [patients,setPatients] = useState();

   useEffect(()=>{
    fetchHandler().then(data=>setPatients(data.patients));

   },[]);
   
   console.log(patients);
    return<div>

        <table border="5px">
            <th>
                <td>Database ID</td>
                <td>Name</td>
                <td>Registration Number</td>
                <td>Patient DOB</td>
                <td>Patient NIC</td>
                <td>Contact</td>
                <td>Address</td>
                <td>Clinic</td>
                <td>Guardian</td>
                <td>Relationship</td>
                <td>Gd. Contact</td>
                <td>AGA Division</td>
                <td>Update</td>
                
            </th>

            <tr>
                {patients && patients.map((patient,i)=>(
                        <Patient patient={patient}/>                
                ))}
            </tr>
        </table>
    </div>
}

export default Patients

//1:27:27