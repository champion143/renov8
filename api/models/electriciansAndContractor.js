const mongoose = require('mongoose');

const eletricianSchema = mongoose.Schema({
    servicetype_id: {
        type: Number,
        required: false
    },
    service_type: {
        type: String,
        required: false
    },
    wire_type_id: {
        type: Number,
        required: false
    },
    wire_type: {
        type: String,
        required: false
    },
    measurements: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('eletrician', eletricianSchema)
