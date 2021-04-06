const mongoose = require('mongoose');

const architectreviewSchema =  mongoose.Schema({
    user_id : {
        type : String,
        required :false
    },
    ratings : {
        type : Double,
        required :false
    },
    title : {
        type : String,
        required :false
    },
    review : {
        type : String,
        required :false
    }
})

module.exports = mongoose.model('Architectreview',architectreviewSchema)
