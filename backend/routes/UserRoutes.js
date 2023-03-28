const express = require('express')

const router = express.Router()

const {getUsers,addUser,updateUser,deleteUser, loginUser} = require('../controllers/UserController.js')

const uriPath = '/'

router.route(uriPath).get(getUsers).post(addUser)

router.route(uriPath+':id').put(updateUser).delete(deleteUser)

router.route('/login').post(loginUser)


module.exports = router