import { useState } from 'react';
import * as moodAPI from '../../utilities/mood-api';

export default function MoodForm() {

  const [selectedMood, setSelectedMood] = useState('')

  function handleSubmit(evt, mood) {
    evt.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-GB');

    const formData = {
      mood: mood,
      current_date: currentDate
    };

    moodAPI.addMood(formData);
    setSelectedMood(mood)
  }

  const buttonStyle =  {
    border: '1px solid purple'
  }

  return (
    <>
      <h3>How Have You Felt Today?</h3>
      <button type="button" onClick={(evt) => handleSubmit(evt, 1)} style={selectedMood === 1 ? buttonStyle : null}><i class="fa-solid fa-face-angry"></i></button>
      <button type="button" onClick={(evt) => handleSubmit(evt, 2)} style={selectedMood === 2 ? buttonStyle : null}><i class="fa-solid fa-face-frown"></i></button>
      <button type="button" onClick={(evt) => handleSubmit(evt, 3)} style={selectedMood === 3 ? buttonStyle : null}><i class="fa-solid fa-face-meh"></i></button>
      <button type="button" onClick={(evt) => handleSubmit(evt, 4)} style={selectedMood === 4 ? buttonStyle : null}><i class="fa-solid fa-face-smile"></i></button>
      <button type="button" onClick={(evt) => handleSubmit(evt, 5)} style={selectedMood === 5 ? buttonStyle : null}><i class="fa-solid fa-face-grin-beam"></i></button>
    </>
  );
}