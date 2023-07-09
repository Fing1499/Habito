


export default function NotesListItem({ note }) {


  return(
      <li>
        <h2>{note.title}</h2>
        <h2>{note.date}</h2>
      </li>
  )
}