const mongoose = require('mongoose');

const bathroomceramicsTypeSchema = mongoose.Schema({
    fittlingsceramics_type_id: {
        type: Number,
        required: false
    },
    fittingsceramic_type: {
        type: String,
        required: false
    },

})

module.exports = mongoose.model('bathroomceramicsType', bathroomceramicsTypeSchema)
