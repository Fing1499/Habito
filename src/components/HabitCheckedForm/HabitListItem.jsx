import * as habitAPI from '../../utilities/habit-api';
import { useState } from 'react';
//TODO: MAKE IT SO IT PERSISTS AFTER LOGGING OUT, SO MAKE A CALL TO DB AFTER HANDLE SUBMIT TO RETRIEVE THE NEW VALUE OF COMPLETED_TODAY

export default function HabitListItem({ habit }) {

  const habitStyle = {
    border: `1px solid ${habit.color}`
  }

  const [completedToday, setCompletedToday] = useState(habit.completed_today);

  function handleSubmit(evt) {
    evt.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-GB');
    const updatedCompletedToday = !completedToday;

    const formData = {
      dates_completed: currentDate,
      _id: habit._id,
      completed_today: updatedCompletedToday
    }
    console.log(habit._id);
    habitAPI.completeHabit(formData)
    setCompletedToday(updatedCompletedToday)
  }

  return(
    <>
    <li style={habitStyle}>
      <form>
        <h3>{habit.habit}</h3>
        { completedToday ?
          <button onClick={(evt) => handleSubmit(evt, true)} value="true">true</button>
        :
          <button onClick={(evt) => handleSubmit(evt, false)} value="false">false</button>
        }
      </form>
    </li>
    </>
  )
}