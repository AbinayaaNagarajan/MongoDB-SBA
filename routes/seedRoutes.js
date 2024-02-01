// SeedRoutes.js
const express = require('express');
const router = express.Router();
const seedController = require('../controllers/seedingController');

router.get('/', seedController.seedDatabase);

module.exports = router;
