const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : [true,'Please enter a name'],
        },
        email: {
            type : String,
            required : [true,'Please enter an email'],
            unique: true,
        },
        password: {
            type : String,
            required : [true,'Please enter a password'],
        },
        role: {
            type : String,
            required: [true, 'Please add a role']
        }
    }
)


module.exports = mongoose.model('User', UserSchema)