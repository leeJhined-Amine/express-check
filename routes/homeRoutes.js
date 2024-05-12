const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');

router.get('/', (req, res) => {
    res.send("hello")
})

module.exports = router;