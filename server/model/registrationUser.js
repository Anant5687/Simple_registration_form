const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },

}, {
    timestamps: true
})

const Registration = new mongoose.model('Registration', registrationSchema)

module.exports = Registration