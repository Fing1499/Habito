const express = require('express');
const router = express.Router();
const moodCtrl = require('../../controllers/api/moods');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/add-mood', moodCtrl.addMood);

router.get('/get-mood-data', moodCtrl.getMoodData);


module.exports = router;