const express = require('express');
const router = express.Router();
const moodCtrl = require('../../controllers/api/moods');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/add-mood', moodCtrl.addMood);


module.exports = router;