const express = require('express');
const router = express.Router();
const { processPayment } = require('../controllers/paymentControllers');
const { protect } = require('../middleware/authMiddleware');

// Process a payment
router.post('/process', protect, processPayment);

module.exports = router;
