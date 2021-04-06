const mongoose = require('mongoose');

const Coll8PostList = mongoose.Schema({
    post_id: {
        type: Number,
        required: false
    },
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
    location: {
        type: String,
        required: false
    },
    likes: {
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
    },
    post_caption: {
        type: String,
        required: false
    },
    save_to_category_name: {
        type: String,
        required: false
    },
    comments: {
        type: Array,
        required: false
    },
    
})

module.exports = mongoose.model('coll8_postlist', Coll8PostList)
