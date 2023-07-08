import { Link } from 'react-router-dom';

export default function Dashboard() {


  return (
    <>
      <h1>dashboard</h1>
      <Link to="/add-habit">Add Habit</Link>
    </>
  )
}