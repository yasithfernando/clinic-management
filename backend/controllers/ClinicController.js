const asyncHandler = require('express-async-handler')

const Clinic = require('../models/clinicModel')


// @desc Get Clinics
// @route GET /api/clinics
// @access Private
const getClinics = asyncHandler(async(req,res)=>{
    const clinics = await Clinic.find()


    res.status(200).json(clinics)
})

// @desc Add Clinic
// @route POST /api/clinics
// @access Private
const addClinic = asyncHandler(async(req,res)=>{
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const clinic = await Clinic.create({
        name: req.body.name,
        day: req.body.day,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location,
    })

    res.status(200).json(clinic)
})

// @desc Update Clinic
// @route PUT /api/clinics/:id
// @access Private
const updateClinic = asyncHandler(async(req,res)=>{
    const clinic = await Clinic.findById(req.params.id)

    if(!clinic){
        res.status(400)
        throw new Error('Clinic Not Found')
    }

    const updatedClinic = await Clinic.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    
    res.status(200).json(updatedClinic)
})

// @desc Delete Clinic
// @route DELETE /api/clinics/:id
// @access Private
const deleteClinic = asyncHandler(async(req,res)=>{
    const clinic = await Clinic.findById(req.params.id)

    if(!clinic){
        res.status(400)
        throw new Error('Clinic Not Found')
    }

    await Clinic.findByIdAndDelete(req.params.id)

    res.status(200).json({message : `Clinic ${req.params.id} Deleted`})
})


module.exports = {
    getClinics,
    addClinic,
    updateClinic,
    deleteClinic
}