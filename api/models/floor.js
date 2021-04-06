const mongoose = require('mongoose');

const floorSchema = mongoose.Schema({
    room_type: {
        type: String,
        required: false
    },
    tile_type: {
        type: String,
        required: false
    },
    room_area: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: false
    },
    user_id: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Floor', floorSchema)
