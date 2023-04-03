import React from "react";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AddPatient from "./components/Patient/AddPatient";
import Patients from "./components/Patient/Patients";
import New from "./components/Phamacy/New";
import Clinic from "./components/Clinics/ClinicView";
import Login from "./components/Login";
import Register from "./components/Register";
//import PatientDetails from "./components/Patient/PatientDetails";

function App() {
 return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>
      <Routes>

        
        <Route path = "/" element={<Home/>} exact/>
        <Route path = "/addPatient" element={<AddPatient/>} exact/>
        <Route path = "/viewPatients" element={<Patients/>} exact/>
        <Route path = "/scanQr" exact/>
        <Route path="/New" element={<New/>} exact/>
        <Route path ="/clinics" element={<Clinic/>} exact/>
        <Route path = "/login" element = {<Login/>} exact/>
        <Route path = "/register" element = {<Register/>} exact/>


      </Routes>

    </main>
    </React.Fragment>;
}

export default App;
//<Route path = "/viewPatient/:id" element = {<PatientDetails/>} exact/>