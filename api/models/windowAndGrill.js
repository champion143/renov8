const mongoose = require('mongoose');

const WindowSchema = mongoose.Schema({
    window_style_id: {
        type: Number,
        required: false
    },
    window_style: {
        type: String,
        required: false
    },
    grill_style_id: {
        type: Number,
        required: false
    },
    grill_style: {
        type: String,
        required: false
    },
    measurements: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('WindowAndGrill', WindowSchema)
