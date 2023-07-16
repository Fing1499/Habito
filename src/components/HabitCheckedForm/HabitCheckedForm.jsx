import './HabitCheckedForm.css'
import { useState, useEffect } from "react";
import * as habitAPI from '../../utilities/habit-api';


export default function HabitCheckedForm() {
  const [habits, setHabits] = useState([]);

  useEffect(function() {
    async function getAll() {
      const sendReq = await habitAPI.getAll();
      const eachHabit = sendReq.map(habit => ({
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
      }));
      setHabits(eachHabit);
    }
    getAll();
  }, []);

  async function handleSubmit(evt) {
    try {
    evt.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-GB');
    const habitId = evt.target.value;
    const updatedHabits = habits.map(habit => {
      if (habit._id === evt.target.value) {
        return {
          ...habit,
          completed_today: !habit.completed_today,
          dates_completed: currentDate,
          multiplier: habit.multiplier
        };
      }
      return habit;
    });

    const clickedHabit = updatedHabits.find(habit => habit._id === habitId);
    const formData = {
      habit: clickedHabit,
    };

    await habitAPI.completeHabit(formData);
    await habitAPI.sendChartData(formData);
    setHabits(updatedHabits);
    } catch(err) {
      console.log(err)
    }
  }


  function handleDelete(evt) {
    evt.preventDefault()
    const habitId = evt.target.value;
    
    const formData = {
      habitId: habitId
    }

    habitAPI.deleteHabit(formData);
  }

  return (
    <>
      <ul className='habit-list'>
        {habits.map(habit => (
          <li  className='one-habit' key={habit._id} style={{ border: `2px solid ${habit.color}` }}>
              <div className='habit-left'>
                <button className='delete' onClick={handleDelete} value={habit._id}>Delete</button>
                <h3 className='habit-name'>{habit.habit}</h3>
              </div>
              { !habit.completed_today || !habit.dates_completed.includes(new Date().toLocaleDateString('en-GB')) ? (
                <button className='not-done' onClick={handleSubmit} value={habit._id}>✕</button>
              ) : (
                <button className='done' onClick={handleSubmit} value={habit._id}>✓</button>
              )}
          </li>
        ))}
      </ul>
    </>
  );
}
