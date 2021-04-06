const mongoose = require('mongoose');

const CarpenterSchema = mongoose.Schema({
    // material_type_id: {
    //     type: Number,
    //     required: false
    // },
    // material_type: {
    //     type: String,
    //     required: false
    // },
    // furniture_type_id: {
    //     type: Number,
    //     required: false
    // },
    // furniture_type: {
    //     type: String,
    //     required: false
    // },
    // measurements: {
    //     type: Array,
    //     required: false
    // }
    material_type: {
        type: String,
        required: false
    },
    furniture_type: {
        type: String,
        required: false
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
    },
    measurements: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('Carpenter', CarpenterSchema)
