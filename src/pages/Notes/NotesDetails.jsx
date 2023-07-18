import './Notes.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as notesAPI from '../../utilities/notes-api';

export default function NotesDetails() {

  const [oneNote, setOneNote] = useState({
    title: '',
    content: '',
    date: ''
  });

  const { id } = useParams()
  console.log(id)
  console.log(oneNote);

  useEffect(function() {
    async function getNote() {
      const sendReq = await notesAPI.getNoteById(id);
      setOneNote(sendReq)
    }
    getNote();
  }, [id])

  return(
    <>
      <main className="notes">
        <section className="heading">
          <h1 className='one-note-title'>{oneNote.title}</h1>
          <h4 className='date'>{oneNote.date}</h4>
        </section>
        <section className="one-note-content">
          <p className='one-note-p'>{oneNote.content}</p>
        </section>
      </main>
    </>
  )
}