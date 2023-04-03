import { Button, FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
//import FormLabel from '@mui/material/FormLabel';



const AddPatient = () => {
  const history = useNavigate();
  const[inputs,setInputs] = useState({
        registrationNumber:"",
        patientName:"",
        patientdob:"",
        patientNIC:"",
        patientContact:"",
        patientAddress:"",
        clinic:"",
        guardian:"",
        relationship:"",
        guardContact:"",
        division:""
  });


  
  //const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setInputs((prevState) => ({

      ...prevState,
      [event.target.name] : event.target.value

    }))
  };

  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/patients/addPatients", {
        registrationNumber: String(inputs.registrationNumber),
        patientName:String(inputs.patientName),
        patientdob:Date(inputs.patientdob),
        patientNIC:Number(inputs.patientNIC),
        patientContact:Number(inputs.patientContact),
        patientAddress:String(inputs.patientAddress),
        clinic:String(inputs.clinic),
        guardian:String(inputs.guardian),
        relationship:String(inputs.relationship),
        guardContact:String(inputs.patientContact),
        division:String(inputs.division)
    }).then(res=>res.data);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/patients'));
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box 
          display="flex" 
          flexDirection = "column" 
          justifyContent={'center'} 
          maxWidth={700} 
          alignContent={'center'} 
          marginLeft={"auto"} 
          marginRight={"auto"} 
          marginTop={10}
          color="black">
        
      <FormLabel>Patient Registration Number:</FormLabel>
        <TextField value={inputs.registrationNumber} onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="registrationNumber"/>

        <FormLabel>Name:</FormLabel>
        <TextField value={inputs.patientName} onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="patientName"/>

        <FormLabel>Date of Birth:</FormLabel>
        <LocalizationProvider value={inputs.patientdob} dateAdapter={AdapterDayjs} name="patientdob">
          <DatePicker />
        </LocalizationProvider>

        <FormLabel>NIC number:</FormLabel>
        <TextField value={inputs.patientNIC} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="patientNIC"/><br/>

        <FormLabel>Contact Number:</FormLabel>
        <TextField value={inputs.patientContact} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="patientContact"/><br/>

        <FormLabel>Address:</FormLabel>
        <TextField value={inputs.patientAddressaddress} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="patientAddress"/><br/>

        <FormLabel>Clinic:</FormLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={inputs.clinic} onChange={handleChange} name="clinic">
          
          <MenuItem value="Surgical">Surgical</MenuItem>
          <MenuItem value="Medical">Medical</MenuItem>
          <MenuItem value="Gynecology">Gynecology</MenuItem>
          <MenuItem value="Maternity">Maternity</MenuItem>
          <MenuItem value="Children">Children</MenuItem>
          <MenuItem value="Suva-Daru">Suva-Daru</MenuItem>
          <MenuItem value="Cardiology">Cardiology</MenuItem>
          <MenuItem value="ENT">ENT</MenuItem>
          <MenuItem value="Skin">Skin</MenuItem>
          <MenuItem value="Psychology">Psychology</MenuItem>
          <MenuItem value="Urogenital">Urogenital</MenuItem>
          <MenuItem value="Kidney">Kidney</MenuItem>
          <MenuItem value="Neurology">Neurology</MenuItem>
          <MenuItem value="Hormonal">Hormonal</MenuItem>
          <MenuItem value="Family">Family</MenuItem>
          <MenuItem value="Eye">Eye</MenuItem>
          <MenuItem value="Respiratory">Respiratory</MenuItem>
          <MenuItem value="Chest">Chest</MenuItem>
          <MenuItem value="Ingout">Ingout</MenuItem>
          <MenuItem value="Cancer">Cancer</MenuItem>
          <MenuItem value="Orthopedics">Orthopedics</MenuItem>
          <MenuItem value="OMF">OMF</MenuItem>
          <MenuItem value="Dental">Dental</MenuItem>

        </Select>

        <FormLabel>Guardian:</FormLabel>
        <TextField value={inputs.guardian} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="guardian"/><br/>

        <FormLabel>Realationship with Guardian:</FormLabel>
        <TextField value={inputs.relationship} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="relationship"/><br/>

        <FormLabel>Guardian's Contact:</FormLabel>
        <TextField value={inputs.guardContact} onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="guardContact"/>

        <FormLabel>AGA Division:</FormLabel>
        <TextField value={inputs.division} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="division"/><br/>

        <Button variant='contained' type="submit"> Submit</Button>
        
      </Box>
      
    </form>
  )
}

//<LocalizationProvider value={inputs.patientdob} dateAdapter={AdapterDayjs} name="patientdob">
//<DatePicker />
//</LocalizationProvider>



export default AddPatient