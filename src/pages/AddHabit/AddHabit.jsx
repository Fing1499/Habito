import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import * as habitAPI from '../../utilities/habit-api'
import { useNavigate } from "react-router-dom";

export default function AddHabit() {


  const [color, setColor] = useState('#aabbcc')
  const [form, setForm] = useState({
    habit: '',
    goal: '',
    color: ''
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }


  function handleSubmit(evt) {
    console.log('submit')
    evt.preventDefault();
    const habit = evt.target.habit.value
    const goal = evt.target.goal.value;
    const currentDate = new Date();

    const formData = {
      habit: habit,
      goal: goal,
      color: color,
      created_at: currentDate
    }

    setForm('')
    habitAPI.addHabit(formData)
    navigate('/dashboard');
  }


  return(
    <>
      <h1>add Habit Page</h1>
        <form onSubmit={handleSubmit}>
        <div class="field">
          <label class="label">Habit</label>
          <div class="control has-icons-left">
            <input class="input is-0xB64CE2" type="text" placeholder="Add Habit!" name="habit" onChange={handleChange}></input>
            <span class="icon is-small is-left">
              <i class="fas fa-plus"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Target</label>
          <div class="control has-icons-left">
            <input class="input is-0xB64CE2" type="number" placeholder="Add Target!" name="goal" onChange={handleChange}></input>
            <span class="icon is-small is-left">
              <i class="fas fa-bullseye"></i>
            </span>
          </div>
            <p class="help is-0xB64CE2">The Amount of Days You're Aiming For!</p>
        </div>
        <HexColorPicker color={color} onChange={setColor} name="color" />
        <button type="submit" class="button is-link is-light">Add</button>
      </form>
    </>
  )
}