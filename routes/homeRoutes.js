const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/home.controller');

router.get('/home', homeController.show)