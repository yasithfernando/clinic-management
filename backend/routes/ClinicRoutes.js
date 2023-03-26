const express = require('express')
const router = express.Router()
const {getClinics,addClinic,updateClinic,deleteClinic} = require('../controllers/ClinicController')

const uriPath = '/'

router.route(uriPath).get(getClinics).post(addClinic)

router.route(uriPath+':id').put(updateClinic).delete(deleteClinic)


module.exports = router