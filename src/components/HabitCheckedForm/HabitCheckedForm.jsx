import { useState, useEffect } from "react"
import * as habitAPI from '../../utilities/habit-api'
import HabitListItem from "./HabitListItem"


export default function HabitCheckedForm() {
  
  const [habits, setHabits] = useState([])

  useEffect(function() {
    async function getAll() {
      const sendReq = await habitAPI.getAll()
      const eachHabit = sendReq.map((habit, idx) => <HabitListItem habit={habit} key={idx} />)
      console.log(eachHabit)   
      setHabits(eachHabit)
    }
    getAll();
  }, [])

  


  return(
    <>
      <ul>
        {habits}
      </ul>
    </>
  )
}