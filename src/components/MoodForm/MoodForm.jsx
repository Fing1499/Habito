import './MoodForm.css'
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
    border: '1px solid blue'
  }

  return (
    <>
      <section className="mood-heading">
        <h3 className='mood-heading-text'>How Have You Felt Today?</h3>
      </section>
      <section className="buttons">
        <button className='mood-button' type="button" onClick={(evt) => handleSubmit(evt, 1)} style={selectedMood === 1 ? buttonStyle : null}><i class="fa-solid fa-face-angry fa-4x" style={{color: "#7E27E3"}}></i></button>
        <button className='mood-button' type="button" onClick={(evt) => handleSubmit(evt, 2)} style={selectedMood === 2 ? buttonStyle : null}><i class="fa-solid fa-face-frown fa-4x" style={{color: "#7E27E3"}}></i></button>
        <button className='mood-button' type="button" onClick={(evt) => handleSubmit(evt, 3)} style={selectedMood === 3 ? buttonStyle : null}><i class="fa-solid fa-face-meh fa-4x" style={{color: "#7E27E3"}}></i></button>
        <button className='mood-button' type="button" onClick={(evt) => handleSubmit(evt, 4)} style={selectedMood === 4 ? buttonStyle : null}><i class="fa-solid fa-face-smile fa-4x" style={{color: "#7E27E3"}}></i></button>
        <button className='mood-button' type="button" onClick={(evt) => handleSubmit(evt, 5)} style={selectedMood === 5 ? buttonStyle : null}><i class="fa-solid fa-face-grin-beam fa-4x" style={{color: "#7E27E3"}}></i></button>
      </section>
    </>
  );
}