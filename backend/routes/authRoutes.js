const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authControllers');

// User signup
router.post('/signup', registerUser);

// User login
router.post('/login', loginUser);

module.exports = router;
