const mongoose = require('mongoose');

const adminSchema =  mongoose.Schema({
    name : {
        type : String,
        required :false
    },
    password : {
        type : String,
        required :true
    },
    email : {
        type : String,
        required :true
    },
    isDeleted : {
        type : Number,
        default :0
    },
    role : {
        type : Number,
        default :0
    }
})

module.exports = mongoose.model('superadmin',adminSchema)
