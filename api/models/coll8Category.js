const mongoose = require('mongoose');

const Coll8Category = mongoose.Schema({
    category_id: {
        type: Number,
        required: false
    },
    category_name: {
        type: String ,
        required: false
    },
    post_id: {
        type: Number,
        required: false
    },
    image_URL: {
        type: Array,
        required: false
    },
    video_URL: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('coll8_category', Coll8Category)
