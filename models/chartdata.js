const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chartDataSchema = new Schema({
  date: { type: String }, 
  habits_completed: { type: Number, default: 0 }
})

module.exports = mongoose.model('Chartdata', chartDataSchema);