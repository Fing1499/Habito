import { Link } from 'react-router-dom';
import MoodForm from '../../components/MoodForm/MoodForm';

export default function Dashboard() {


  return (
    <>
      <h1>dashboard</h1>
      <Link to="/add-habit">Add Habit</Link>
      <MoodForm />
    </>
  )
}