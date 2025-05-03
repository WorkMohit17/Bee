const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      default: [0, 0],
    },
  },
  online: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Create a 2dsphere index for location-based queries
userSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('User', userSchema);
