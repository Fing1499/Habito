const express = require('express');
const router = express.Router();
const habitsCtrl = require('../../controllers/api/habits');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/add-habit', habitsCtrl.addHabit);

router.post('/complete-habit', habitsCtrl.completeHabit);

router.post('/', habitsCtrl.index);

router.get('/get-chart-data', habitsCtrl.getChartData);

module.exports = router;