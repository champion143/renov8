const mongoose = require('mongoose');

const manaerSchema =  mongoose.Schema({

    firstname : {
        type : String,
        required :false
    },
    lastname : {
        type : String,
        required :false
    },
    username : {
        type : String,
        required :false
    },
    email : {
        type : String,
        unique:true,
        required :false
    },
    password : {
        type : String,
        required :false
    },

    isDeleted : {
        type : Number,
        default :0
    },
    role : {
        type : Number,
        default :0
    },
    country : {
        type : String,
        required :false
    },
    device_type : {
        type : String,
        required :false
    },
    device_token : {
        type : String,
        required :false
    },
    provider : {
        type : String,
        required :false
    },

})

module.exports = mongoose.model('EventManager',manaerSchema)
