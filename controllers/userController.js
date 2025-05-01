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
