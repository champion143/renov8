const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    first_name : {
        type : String,
        required :false
    },
    last_name : {
        type : String,
        required :false
    },
    password : {
        type : String,
        required :false
    },
    email : {
        type : String,
        unique:true,
        required :false
    },
    mobile : {
        type : String,
        required :false
    },
    address : {
        type : String,
        required :false
    },
    image : {
        type : String,
        required :false
    }
})

module.exports = mongoose.model('User',userSchema)
