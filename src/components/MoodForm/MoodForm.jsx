import * as moodAPI from '../../utilities/mood-api';

export default function MoodForm() {
  function handleSubmit(evt, mood) {
    evt.preventDefault();
    const currentDate = new Date();

    const formData = {
      mood: mood,
      current_date: currentDate
    };

    moodAPI.addMood(formData);
  }

  return (
    <>
      <h3>How Have You Felt Today?</h3>
      <button type="button" onClick={(evt) => handleSubmit(evt, 1)}><i class="fa-solid fa-face-angry"></i></button>
      <button type="button" onClick={(evt) => handleSubmit(evt, 2)}><i class="fa-solid fa-face-frown"></i></button>
      <button type="button" onClick={(evt) => handleSubmit(evt, 3)}><i class="fa-solid fa-face-meh"></i></button>
      <button type="button" onClick={(evt) => handleSubmit(evt, 4)}><i class="fa-solid fa-face-smile"></i></button>
      <button type="button" onClick={(evt) => handleSubmit(evt, 5)}><i class="fa-solid fa-face-grin-beam"></i></button>
    </>
  );
}