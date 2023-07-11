const express = require('express');
const router = express.Router();
const habitsCtrl = require('../../controllers/api/habits');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/add-habit', habitsCtrl.addHabit);

router.post('/complete-habit', habitsCtrl.completeHabit);


router.get('/', habitsCtrl.index);

module.exports = router;