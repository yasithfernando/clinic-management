const asyncHandler = require('express-async-handler')


// @desc Get Clinics
// @route GET /api/clinics
// @access Private
const getClinics = asyncHandler(async(req,res)=>{
    res.status(200).json({message : "Get Clinics"})
})

// @desc Add Clinic
// @route POST /api/clinics
// @access Private
const addClinic = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message : "Clinic Added"})
})

// @desc Update Clinic
// @route PUT /api/clinics/:id
// @access Private
const updateClinic = asyncHandler(async(req,res)=>{
    res.status(200).json({message : `Clinic ${req.params.id} Updated`})
})

// @desc Delete Clinic
// @route DELETE /api/clinics/:id
// @access Private
const deleteClinic = asyncHandler(async(req,res)=>{
    res.status(200).json({message : `Clinic ${req.params.id} Deleted`})
})


module.exports = {
    getClinics,
    addClinic,
    updateClinic,
    deleteClinic
}