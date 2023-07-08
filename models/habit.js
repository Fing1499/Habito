
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const habitSchema = new Schema({
  habit: { type: String, required: true },
  created_at: { type: String },
  amount_completed: { type: Number, default: 0 },
  dates_completed: { type: Array, default: [] },
  current_date: { type: Date },
  multiplier: { type: Number, default: 1 },
  completed_today: { type: Boolean, default: false },
  color: { type: String, required: true },
  goal: { type: Number, required: true },
  starred: { type: Boolean, default: false },
});

module.exports = mongoose.model('Habit', habitSchema);
