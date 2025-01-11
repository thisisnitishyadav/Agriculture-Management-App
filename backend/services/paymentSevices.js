const Razorpay = require('razorpay');
require('dotenv').config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Initiate Payment
exports.initiatePayment = async (amount, currency) => {
  try {
    const options = {
      amount: amount * 100, // Convert to smallest currency unit
      currency: currency,
    };

    const order = await razorpay.orders.create(options);
    return { orderId: order.id, amount: order.amount, currency: order.currency };
  } catch (error) {
    throw new Error('Failed to initiate payment');
  }
};

module.exports=razorpay;
