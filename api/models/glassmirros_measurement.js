const mongoose = require('mongoose');

const glassMirrorSchema = mongoose.Schema({
    glass_type_id: {
        type: Number,
        required: false
    },
    glass_type: {
        type: String,
        required: false
    },
    mirror_type_id: {
        type: Number,
        required: false
    },
    mirror_type: {
        type: String,
        required: false
    },
    measurements: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('glassMirror', glassMirrorSchema)
