const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services.controller');
const dateMiddleware = require('../middlewares/date.middleware');


router.get('/services', dateMiddleware, servicesController.service);

module.exports = router;