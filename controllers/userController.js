const User = require('../models/User');

// PUT /api/users/location
exports.updateLocation = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        location: {
          type: 'Point',
          coordinates: [longitude, latitude],
        },
      },
      { new: true }
    );

    res.status(200).json({ message: 'Location updated', location: user.location });
  } catch (err) {
    next(err);
  }
};

// GET /api/users/nearby?lat=..&lng=..&radius=5
exports.getNearbyUsers = async (req, res, next) => {
    try {
      const { lat, lng, radius } = req.query;
  
      if (!lat || !lng || !radius) {
        return res.status(400).json({ message: 'lat, lng, and radius are required' });
      }
  
      const users = await User.find({
        location: {
          $near: {
            $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
            $maxDistance: parseFloat(radius) * 1000, // radius in km -> meters
          },
        },
        online: true,
        _id: { $ne: req.user.id },
      }).select('name email location');
  
      res.status(200).json({ count: users.length, users });
    } catch (err) {
      next(err);
    }
  };