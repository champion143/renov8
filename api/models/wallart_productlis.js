const mongoose = require('mongoose');

const wallProductListSchema = mongoose.Schema({
    product_id: {
        type: Number,
        required: false
    },
    product_name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    sale_price: {
        type: Number,
        required: false
    },
    mrp: {
        type: Number,
        required: false
    },
    discount_amount: {
        type: Number,
        required: false
    },
    ratings: {
        type: Number,
        required: false
    },
    qty: {
        type: Number,
        required: false
    },
    no_of_stock: {
        type: Number,
        required: false
    },
    stock_presense: {
        type: boolean,
        required: false
    },
    is_added_to_cart: {
        type: boolean,
        required: false
    },
    review: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('wallProductList', wallProductListSchema)
