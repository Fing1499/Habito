import './Notes.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as notesAPI from '../../utilities/notes-api'


export default function AddNote() {

  const navigate = useNavigate();

  const [noteForm, setNoteForm] = useState({
    title: '',
    content: ''
  })

  function handleChange(evt) {
    setNoteForm({ ...noteForm, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    console.log('submit')
    evt.preventDefault();
    const title = evt.target.title.value
    const content = evt.target.content.value;
    const currentDate = new Date().toLocaleDateString('en-GB');

    const formData = {
      title: title,
      content: content,
      date: currentDate
    }

    setNoteForm('')
    notesAPI.addHabit(formData)
    navigate('/notes');
  }

  return(
    <>
    <main className="notes">
      <section className="heading">
      <h1 className='note-add-heading-text'>Add a Note or Journal Entry For Today</h1>
      <section className="add-note-date">
        <h3 className="date">{new Date().toLocaleString('en-GB').split(',')[0]}</h3>
      </section>
      </section>
      <form className="add-note-form" onSubmit={handleSubmit}>
        <input className="input is-link" type="text" placeholder="Title" name="title" onChange={handleChange}></input>
        <br/>
        <br/>
        <section className="ta">
        <textarea className="textarea is-link" placeholder="Start writing..." name="content" onChange={handleChange}></textarea>
        </section>
        <br/>
        <button type="submit" class="button is-link is-light">Add</button>
      </form>
      </main>
    </>
  )
}