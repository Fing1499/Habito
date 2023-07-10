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
      <h1>{oneNote.title}</h1>
      <h4>{oneNote.date}</h4>
      <p>{oneNote.content}</p>
    </>
  )
}