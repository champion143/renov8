const mongoose = require('mongoose');

const plumberSchema =  mongoose.Schema({
    sector_type : {
        type : String,
        required :false
    },
    room_type : {
        type : String,
        required :false
    },
    measurements : {
        type : Array,
        required :false
    }
})

module.exports = mongoose.model('Plumber',plumberSchema)
