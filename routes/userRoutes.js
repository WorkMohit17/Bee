const express = require('express');
const router = express.Router();
const { updateLocation, getNearbyUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.put('/location', protect, updateLocation);
router.get('/nearby', protect, getNearbyUsers);

module.exports = router;
