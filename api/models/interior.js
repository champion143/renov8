const mongoose = require('mongoose');

const interiorSchema =  mongoose.Schema({
    sector : {
        type : String,
        required :false
    },
    room_type : {
        type : String,
        required :false
    },
    bhk_type : {
        type : String,
        required :false
    },
    length : {
        type : String,
        required :false
    },
    breadth : {
        type : String,
        required :false
    },
    height : {
        type : String,
        required :false
    },
    user_id : {
        type : String,
        required :false
    }
})

module.exports = mongoose.model('Interior',interiorSchema)
