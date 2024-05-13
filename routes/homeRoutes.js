const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');
const dateMiddleware = require('../middlewares/date.middleware');


router.get('/home', dateMiddleware, homeController.show);

module.exports = router;