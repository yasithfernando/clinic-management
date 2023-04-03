import axios from 'axios'
import authHeader from './authHeader'

const API_URL = "api/clinics"

//Get Clinics
const getAllClinics = () =>{
    return axios.get(API_URL, {headers : authHeader()})
}

//Create clinic
const createClinic = (clinicData)=>{
    return axios.post(API_URL,clinicData,{headers : authHeader()})
}

//Update Clinic
const updateClinic = (id,clinicData) =>{
    return axios.put(API_URL + `/:${id}`,clinicData,{headers : authHeader()})
}

//Delete clinic
const deleteClinic = (id) => {
    return axios.delete(API_URL + `/:${id}`, {headers : authHeader()} )
}

const ClinicService = {
    getAllClinics,
    createClinic,
    updateClinic,
    deleteClinic,
}

export default ClinicService

