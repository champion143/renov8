const mongoose = require('mongoose');

const painterMeasurementSchema = mongoose.Schema({
    paint_type_id: {
        type: Number,
        required: false
    },
    paint_type: {
        type: String,
        required: false
    },
    paint_color_id: {
        type: Number,
        required: false
    },
    paint_color: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('painterMeasurement', painterMeasurementSchema)
