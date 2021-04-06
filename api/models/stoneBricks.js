const mongoose = require('mongoose');

const stoneBricksSchema = mongoose.Schema({
    brick_type_id: {
        type: Number,
        required: false
    },
    brick_type: {
        type: String,
        required: false
    },
    stone_type_id: {
        type: Number,
        required: false
    },
    stone_type: {
        type: String,
        required: false
    },
    measurements: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('stoneBricks', stoneBricksSchema)
