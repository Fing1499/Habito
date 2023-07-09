const User = require('../../models/user');
const Note = require('../../models/note');
const CircularJSON = require('circular-json');

module.exports = {
  addNote,
  index,
}

async function addNote(req, res) {
  try {
    console.log(req.user._id)
    const user = await User.findById(req.user._id).populate('note');
    const newNote = new Note(req.body);
    user.note.push(newNote);
    await Promise.all([newNote.save(), user.save()]);
  } catch(err) {
    console.log(err);
  }
}

async function index(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const noteIds = user.note.map(note => note._id);
    const allNotes = await Promise.all(noteIds.map(n => Note.findById(n)))
    console.log(allNotes);
    res.json(allNotes); 
  } catch (err) {
    console.log(err);
  }
}