const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const dateMiddleware = require('../middlewares/date.middleware');

router.get('/contact', dateMiddleware, contactController.showInfo)
router.post('/contact', contactController.getInfo)

module.exports = router;