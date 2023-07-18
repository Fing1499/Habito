import './Notes.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import NotesListItem from './NotesListItem';


export default function Notes() {

  const [notes, setNotes] = useState([])


  useEffect(function() {

    getNotes();
  }, [])

  async function getNotes() {
    console.log('get notes')
    const sendReq = await notesAPI.getAll();
    const notes = sendReq.map((note, idx) =>  <Link to={`/notes/${note._id}`}><NotesListItem note={note} key={idx} /></Link>)
    console.log(notes);
    setNotes(notes);
  }

  
  return(
    <>
    <main className="notes">
      <section className="heading">
        <h1 className='your-notes'>Your Notes</h1>
        <section className="notes-info">
          <h3 className="date">{new Date().toLocaleString('en-GB').split(',')[0]}</h3>
          <h3 className="notes-amount">{notes.length} Notes</h3>
          <Link to="/add-note" className='add-note'>Add note</Link>
        </section>
      </section>
      <ul className='notes-list'>
        {[notes]}
      </ul>
    </main>
    </>
  )
}