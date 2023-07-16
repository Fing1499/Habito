const User = require('../../models/user');
const Note = require('../../models/note');
const mongoose = require('mongoose')

module.exports = {
  addNote,
  index,
  getOne
}

async function addNote(req, res) {
  try {
    console.log(req.user._id)
    const user = await User.findById(req.user._id)
    const newNote = new Note(req.body)
    await newNote.save()
    user.note.push(newNote)
    user.save()
    res.json('note added')
  } catch(err) {
    console.log(err);
  }
}

async function index(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const allNotes = user.note
    res.json(allNotes)
  } catch (err) {
    console.log(err);
  }
}

async function getOne(req, res) {
  try {
    const noteId = mongoose.Types.ObjectId(req.params.id);
    const note = await Note.findById(noteId)
    console.log('NOTE', note)
    console.log(req.params.id)
    res.json(note)
  } catch (err) {
    console.log(err)
  }
}