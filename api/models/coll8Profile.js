const mongoose = require('mongoose');

const Coll8Post = mongoose.Schema({
    user_id: {
        type: Number,
        required: false
    },
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    mobile: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    image_URL: {
        type: Array,
        required: false
    },
    video_URL: {
        type: Array,
        required: false
    },
    post_caption: {
        type: String,
        required: false
    },
    image_URL: {
        type: Array,
        required: false
    },
    video_URL: {
        type: Array,
        required: false
    },
})

module.exports = mongoose.model('coll8_post', Coll8Post)
