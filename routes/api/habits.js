const express = require('express');
const router = express.Router();
const habitsCtrl = require('../../controllers/api/habits');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/add-habit', habitsCtrl.addHabit);

router.post('/complete-habit', habitsCtrl.completeHabit);

router.post('/', habitsCtrl.index);

router.post('/delete-habit', habitsCtrl.deleteHabit);

router.get('/get-chart-data', habitsCtrl.getChartData);

router.get('/get-area-chart-data', habitsCtrl.getAreaChartData);

router.post('/send-chart-data', habitsCtrl.addChartData);

module.exports = router;