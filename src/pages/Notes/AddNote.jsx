import { useState } from "react"
import { useNavigate } from "react-router-dom";
import * as notesAPI from '../../utilities/notes-api'


export default function AddNote() {

  const navigate = useNavigate();

  const [noteForm, setNoteForm] = useState({
    title: '',
    body: ''
  })

  function handleChange(evt) {
    setNoteForm({ ...noteForm, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    console.log('submit')
    evt.preventDefault();
    const title = evt.target.title.value
    const body = evt.target.body.value;
    const currentDate = new Date();

    const formData = {
      title: title,
      body: body,
      date: currentDate
    }

    setNoteForm('')
    notesAPI.addHabit(formData)
    navigate('/notes');
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add a Note or Journal Entry For Today</h1>
        <input class="input is-link" type="text" placeholder="Title" name="title" onChange={handleChange}></input>
        <br/>
        <br/>
        <textarea class="textarea is-link" placeholder="Start writing..." name="body" onChange={handleChange}></textarea>
        <button type="submit" class="button is-link is-light">Add</button>
      </form>
    </>
  )
}