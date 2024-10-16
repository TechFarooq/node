const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const couponSchema = new Schema({
    offer_name: {
        type: String,
        required: true
    },
    coupon_name: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    discount_Percentage: {
        type: Number,
        required: true
    },
    discount_amount: {
        type: Number,
        required: true
    },
    isactive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
