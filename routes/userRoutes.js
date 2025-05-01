const express = require('express');
const router = express.Router();
const { updateLocation } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.put('/location', protect, updateLocation);

module.exports = router;
