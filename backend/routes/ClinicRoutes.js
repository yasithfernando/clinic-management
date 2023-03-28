const express = require('express')
const router = express.Router()
const {getClinics,addClinic,updateClinic,deleteClinic} = require('../controllers/ClinicController')

const protect = require('../middleware/authMiddleware')

const uriPath = '/'

router.route(uriPath).get(protect('admin'),getClinics).post(protect('admin'), addClinic)

router.route(uriPath+':id').put(updateClinic).delete(deleteClinic)


module.exports = router