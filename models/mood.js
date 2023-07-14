const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const moodSchema = new Schema({
  mood: { type: Number },
  current_date: { type: String },
});

module.exports = mongoose.model('Mood', moodSchema);