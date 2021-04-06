const mongoose = require('mongoose');

const Reward = mongoose.Schema({
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
    category_name: {
        type: String,
        required: false
    },
    post_id:{
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('reward', Reward)
