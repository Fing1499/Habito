import './Dashboard.css'
import { Link } from 'react-router-dom';
import MoodForm from '../../components/MoodForm/MoodForm';
import HabitCheckedForm from '../../components/HabitCheckedForm/HabitCheckedForm';
import logo from '../../assets/habito_logo_cricle.png'


export default function Dashboard({ user }) {


  return (
    <>
      <main className='dashboard'>
        <section className='heading'>
          <section className="heading-grid">
            <div className="logo">
              <img className='app-logo' src={logo} alt="logo" />
            </div>
            <div className="info">
              <h3 className='username'>{user.name}</h3>
              <h3 className='habits'>{user.habit.length} habits</h3>
              <h3 className='days'>days</h3>
            </div>
          </section>
        </section>
        <section className='starred'>
          <h2>Starred</h2>
          <div className='test'>
            <div className='test2'>Gym</div>
          </div>
        </section>
        <section className="add-habit">
          <h1 className='completed-today'>Completed Today?</h1>
          <Link to="/add-habit">Add Habit</Link>
        </section>
        <section className="check-habit-form">
          <HabitCheckedForm />
        </section>
        <section className="mood-form">
          <MoodForm />
        </section>
      </main>
    </>
  )
}