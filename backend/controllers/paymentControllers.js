const Payment = require('../models/payment');
const paymentService = require('../services/paymentSevices');

// Process payment
exports.processPayment = async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentResponse = await paymentService.initiatePayment(amount, currency);

    // Save payment details to database
    const payment = await Payment.create({
      user: req.user.id,
      amount: paymentResponse.amount / 100, // Convert back to original unit
      currency: paymentResponse.currency,
      orderId: paymentResponse.orderId,
    });

    res.status(200).json({
      payment,
      message: 'Payment processed successfully',
    });
  } catch (error) {
    res.status(500).json({ message: 'Payment processing failed', error: error.message });
  }
};