

export default function NotesListItem({ note }) {
  console.log(note)

  return(

      <li className="note-list-item">
        <h2>{note.title}</h2>
        <h2>{note.date}</h2>
      </li>

  )
} 