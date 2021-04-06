const mongoose = require('mongoose');

const Order = mongoose.Schema({
    order_id: {
        type: Number,
        required: false
    },
    product_id: {
        type: Number,
        required: false
    },
    product_name: {
        type: String,
        required: false
    },
    sale_price: {
        type: String,
        required: false
    },
    mrp: {
        type: String,
        required: false
    },
    qty: {
        type: Number,
        required: false
    },
    no_of_stok: {
        type: Boolean,
        required: false
    },
    stock_presense: {
        type: Boolean,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    discount_amount: {
        type: Float64Array,
        required: false
    },
    delivery_status: {
        type: String,
        required: false
    },
    ordered_date_time: {
        type: Date,
        required: false
    },
    delivery_date: {
        type: Date,
        required: false
    },
    shipment_agency_id: {
        type: Number,
        required: false
    },
    shipment_agency_name: {
        type: String,
        required: false
    },
    shipment_agency_mobile: {
        type: Number,
        required: false
    },
    delivery_boy_mobile: {
        type: Number,
        required: false
    },
    delivery_address: {
        type: String,
        required: false
    },
    customer_id: {
        type: Number,
        required: false
    },
    customer_name: {
        type: String,
        required: false
    },
    customer_mobile: {
        type: Number,
        required: false
    },
})

module.exports = mongoose.model('order', Order)
