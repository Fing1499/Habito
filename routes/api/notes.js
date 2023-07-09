const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/get-all', notesCtrl.index);

router.post('/add-note', notesCtrl.addNote);


module.exports = router;