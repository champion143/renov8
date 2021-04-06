const mongoose = require('mongoose');

const Reward = mongoose.Schema({
    reward_id: {
        type: Number,
        required: false
    },
    reward_points_won: {
        type: Float64Array,
        required: false
    },
    coupon_id: {
        type: Number,
        required: false
    },
    coupon_code: {
        type: Number,
        required: false
    },
    coupon_description: {
        type: String,
        required: false
    },
    validity_date: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('reward', Reward)
