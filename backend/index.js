const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000;

connectDB()

const app = express()

const clinicsPath = '/api/clinics'
const usersPath = '/api/users'

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(clinicsPath, require('./routes/ClinicRoutes'))
app.use(usersPath, require('./routes/UserRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`));