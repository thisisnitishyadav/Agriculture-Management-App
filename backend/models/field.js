const mongoose = require('mongoose');

const fieldSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a field name'],
    },
    location: {
      type: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
      },
      required: true,
    },
    cropType: {
      type: String,
      required: [true, 'Please add a crop type'],
    },
    areaSize: {
      type: Number,
      required: [true, 'Please add the area size'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Field', fieldSchema);