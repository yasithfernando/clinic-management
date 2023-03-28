const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')


// @desc Get Users
// @route GET /api/users
// @access Private
const getUsers = asyncHandler(async(req,res)=>{
    const users = await User.find()


    res.status(200).json(users)
})

// @desc Add User
// @route POST /api/users
// @access Private
const addUser = asyncHandler(async(req,res)=>{
    const {name,email,password,role} = req.body

    if(!name || !email || !password || !role){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }

    //Has the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
    })

    if(user){
        res.status(201).json({
            _id : user.id,
            name: user.name,
            email: user.email
        })
    } else{
        res.status(400)
        throw new Error('Invalid User Data')
    }
})


// @desc Login
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req,res)=>{
    const {email, password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error('Please add email and password')
    }

    //Check user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id : user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            message : 'Login Succesful!'
        })

    } else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})



// @desc Update User
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User Not Found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    
    res.status(200).json(updatedUser)
})

// @desc Delete User
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User Not Found')
    }

    await User.findByIdAndDelete(req.params.id)

    res.status(200).json({message : `User ${req.params.id} Deleted`})
})


//Generate JWT
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : '30d',
    })
}


module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    loginUser
}