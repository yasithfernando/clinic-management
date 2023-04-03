import React, { useState } from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';
import AuthService from '../services/authService';

const Header = () => {
    const[value, setValue] = useState();
    const user = localStorage.getItem('user');

    const onLogout = ()=>{
        AuthService.logout()
    }
  return (
    <div>

        <AppBar
            sx={{backgroundColor:"#106111"}} position='sticky'>
            <Toolbar>
                <Typography>
                    Patient Management
                </Typography>
                <Tabs
                        sx={{ml:"auto"}}
                        textColor= "inherit" 
                        indicatorColor="secondary" 
                        value = {value} 
                        onChange={(e,val) => setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/addPatient" label='Add Patient'/>
                    <Tab LinkComponent={NavLink} to="/viewPatients" label="View All Patients"/>
                    <Tab LinkComponent={NavLink} to="/scanQr" label='Scan QR'/>
                    <Tab LinkComponent={NavLink} to="/New" label='new'/>
                    <Tab LinkComponent={NavLink} to="/clinics" label='Clinics'/>
                    {user ? (
                        <Tab onClick={onLogout} LinkComponent={NavLink} to="/login" label='Logout'/>) 
                    : (
                        <>
                        <Tab LinkComponent={NavLink} to="/login" label='Login'/>
                        <Tab LinkComponent={NavLink} to="/register" label='Register'/> 
                        </>
                    )}

                    
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header