
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const notesSchema = new Schema({
  date: { type: String },
  title: { type: String },
  content: { type: String },
});

module.exports = mongoose.model('Note', notesSchema);