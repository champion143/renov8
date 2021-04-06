const mongoose = require('mongoose');

const homeautomation_Schema = mongoose.Schema({
    room_id: {
        type: Number,
        required: false
    },
    no_of_rooms: {
        type: String,
        required: false
    },
    appliance_id: {
        type: Number,
        required: false
    },
    appliance_type: {
        type: String,
        required: false
    },

})

module.exports = mongoose.model('homeautomation', homeautomation_Schema)
