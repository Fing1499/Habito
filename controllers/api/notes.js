const User = require('../../models/user');
const Note = require('../../models/note');

module.exports = {
  addNote
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