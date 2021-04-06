const mongoose = require('mongoose');

const FabricatorSchema = mongoose.Schema({
    fabricators_type_id: {
        type: Number,
        required: false
    },
    fabricators_type: {
        type: String,
        required: false
    },

})

module.exports = mongoose.model('fabricator', FabricatorSchema)
