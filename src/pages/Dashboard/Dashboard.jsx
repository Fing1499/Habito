import './Dashboard.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as habitAPI from '../../utilities/habit-api'
import MoodForm from '../../components/MoodForm/MoodForm';
import HabitCheckedForm from '../../components/HabitCheckedForm/HabitCheckedForm';
import logo from '../../assets/habito_logo_cricle.png'


export default function Dashboard({ user }) {

  const [habits, setHabits] = useState([])

  useEffect(function() {
    async function getAll() {
      const sendReq = await habitAPI.getAll();
      const starredHabits = sendReq.filter(habit => habit.starred === true);
      const eachHabit = starredHabits.map(habit => ({
        habit: habit.habit,
        amount_completed: habit.amount_completed,
        dates_completed: habit.dates_completed,
        multiplier: habit.multiplier,
        previous_multiplier: habit.previous_multiplier,
        starred: habit.starred,
        goal: habit.goal,
        _id: habit._id,
        completed_today: habit.completed_today,
        color: habit.color
      }))
        setHabits(eachHabit);
    }
    getAll();
  }, []);

  console.log(habits)

  return (
    <>
      <main className='dashboard'>
        <section className='heading'>
          <section className="heading-grid">
            <div className="logo">
              <img className='app-logo' src={logo} alt="logo" />
            </div>
            <div className="info">
              <h3 className='username'>Hello, {user.name}!</h3>
              <h3 className='habits'>{user.habit.length} habits</h3>
            </div>
          </section>
        </section>
        <section className='starred'>
          <h2 className='starred-title'>Starred</h2>
          <section className="starred-habits">
            {habits.map((habit) => (
              <div key={habit._id} className='inner' style={{
                background: `conic-gradient(from 0deg at 50% 50%, ${habit.color} 0%, ${habit.color} ${(habit.amount_completed / habit.goal) * 100}%, #FFFFFF ${(habit.amount_completed / habit.goal) * 100}%, #FFFFFF 100%)`,

              }}>
                <div key={habit._id} className='outer'>{habit.habit}</div>
              </div>
            ))}
          </section>
        </section>
        <section className="add-habit">
          <h1 className='completed-today'>Completed Today?</h1>
          <Link className='add-habit-button' to="/add-habit">Add Habit</Link>
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