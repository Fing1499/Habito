import { Link } from 'react-router-dom';


export default function Notes() {


  return(
    <>
      <h1>Notes</h1>
      <Link to="/add-note">Add note</Link>
    </>
  )
}