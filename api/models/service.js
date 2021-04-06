const mongoose = require('mongoose');

const serviceSchema =  mongoose.Schema({
    service_name : {
        type : String,
        required :false
    },
    service_description : {
        type : String,
        required :false
    },
    image : {
        type : String,
        required :false
    }
})

module.exports = mongoose.model('Service',serviceSchema)
