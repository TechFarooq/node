const Coupon = require("../Model/usermodel");


const create_coupon = async (req, res, next) => {
    try {
        let coupon = new Coupon({
            offer_name: req.body.offer_name,
            coupon_name: req.body.coupon_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            discount_Percentage: req.body.discount_Percentage,
            discount_amount: req.body.discount_amount,
            isactive: req.body.isactive
        });
        
        await coupon.save();
        res.json({
            message: "Coupon created successfully!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creating coupon",
            error
        });
    }
};


const get_all_coupons = async (req, res, next) => {
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error fetching coupons",
            error
        });
    }
};


const update_coupon = async (req, res, next) => {
    try {
        const couponId = req.body.couponId;

        const updatedCoupon = {
            offer_name: req.body.offer_name,
            coupon_name: req.body.coupon_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            discount_Percentage: req.body.discount_Percentage,
            discount_amount: req.body.discount_amount,
            isactive: req.body.isactive
        };

        await Coupon.findByIdAndUpdate(couponId, { $set: updatedCoupon });
        res.json({ message: "Coupon updated successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error updating coupon",
            error
        });
    }
};


const delete_coupon = async (req, res, next) => {
    try {
        const couponId = req.params.couponId;
        await Coupon.findByIdAndDelete(couponId);
        res.json({ message: "Coupon deleted successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error deleting coupon",
            error
        });
    }
};
const get_1_coupons = async (req, res, next) => {
    try {
        const one_id=req.params.one_id;
        const coupons = await Coupon.findById(one_id);
        res.json(coupons);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error fetching coupons",
            error
        });
    }
};

module.exports = {
    create_coupon,
    get_all_coupons,
    update_coupon,
    delete_coupon,
    get_1_coupons 
};
