
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const notesSchema = new Schema({
  date: { type: Date },
  title: { type: String },
  content: { type: String },
});

module.exports = mongoose.model('Note', notesSchema);