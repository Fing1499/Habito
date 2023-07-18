import { useLocation } from 'react-router-dom';



export default function UpdateHabit() {

  const location = useLocation()
  const habit = location.state?.habit
  console.log(habit)
  return (
    <>
      <h1>hellp</h1>
    </>
  )
}