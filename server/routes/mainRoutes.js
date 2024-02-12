const express = require('express');
const mainController = require('../controllers/mainController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', mainController.getHomePage); //TODO: DELETE
router.post('/api/signup', authController.signup)


module.exports = router;
