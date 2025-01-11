const express = require('express');
const router = express.Router();
const {
  getFields,
  createField,
  updateField,
  deleteField,
} = require('../controllers/fieldControllers');
const { protect } = require('../middleware/authMiddleware');

// Fetch all fields for a user
router.get('/', protect, getFields);

// Create a new field
router.post('/', protect, createField);

// Update an existing field
router.put('/:id', protect, updateField);

// Delete a field
router.delete('/:id', protect, deleteField);

module.exports = router;
