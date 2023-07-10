import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import NotesListItem from './NotesListItem';


export default function Notes() {

  const [notes, setNotes] = useState([])


  useEffect(function() {
    async function getNotes() {
      const sendReq = await notesAPI.getAll();
      const notes = sendReq.map((note, idx) =>  <Link to={`/notes/${note._id}`}><NotesListItem note={note} key={idx} /></Link>)
      console.log(notes);
      setNotes(notes);
    }
    getNotes();
  }, [])


  return(
    <>
      <h1>Notes</h1>
      <Link to="/add-note">Add note</Link>
      <ul>
        {[notes]}
      </ul>
    </>
  )
}