import React, { useState, useEffect } from "react";
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
      <ul>
        {habits.map(habit => (
          <li key={habit._id} style={{ border: `1px solid ${habit.color}` }}>
            <form>
              <h3>{habit.habit} | {habit._id} | {habit.completed_today.toString()} | {habit.multiplier}</h3>
              { !habit.completed_today || !habit.dates_completed.includes(new Date().toLocaleDateString('en-GB')) ? (
                <button onClick={handleSubmit} value={habit._id}>Not Done</button>
              ) : (
                <button onClick={handleSubmit} value={habit._id}>Done</button>
              )}
              <button onClick={handleDelete} value={habit._id}>Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
