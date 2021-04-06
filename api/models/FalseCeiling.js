const mongoose = require('mongoose');

const falseCeilingSchema = mongoose.Schema({
    sector_id: {
        type: Number,
        required: false
    },
    sector_type: {
        type: String,
        required: false
    },
    room_id: {
        type: Number,
        required: false
    },
    room_type: {
        type: String,
        required: false
    },
    style_id: {
        type: Number,
        required: false
    },
    measurement: {
        type: Array,
        required: false
    }

})

module.exports = mongoose.model('falseCeiling', falseCeilingSchema)
