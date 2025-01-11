const Field = require('../models/field');

// Get all fields for a user
exports.getFields = async (req, res) => {
  try {
    const fields = await Field.find({ user: req.user.id });
    res.json(fields);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create a new field
exports.createField = async (req, res) => {
  const { name, location, cropType, areaSize } = req.body;

  try {
    const field = await Field.create({
      name,
      location,
      cropType,
      areaSize,
      user: req.user.id,
    });

    res.status(201).json(field);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a field
exports.updateField = async (req, res) => {
  const { id } = req.params;
  const { name, location, cropType, areaSize } = req.body;

  try {
    const field = await Field.findById(id);

    if (!field || field.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Field not found' });
    }

    field.name = name || field.name;
    field.location = location || field.location;
    field.cropType = cropType || field.cropType;
    field.areaSize = areaSize || field.areaSize;

    const updatedField = await field.save();
    res.json(updatedField);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a field
exports.deleteField = async (req, res) => {
  const { id } = req.params;

  try {
    const field = await Field.findById(id);

    if (!field || field.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Field not found' });
    }

    await field.remove();
    res.json({ message: 'Field removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
