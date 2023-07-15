import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState, useEffect } from 'react';



export default function MainLineChart({ chartData }) {

  const [selectedGraph, setSelectedGraph] = useState([chartData[0]])

  function displayButtons(chartData) {
    return chartData.map((data, idx) => (
      <button onClick={handleChange(idx)} key={`${idx}-${data.habit}`} value={idx}>{data.habit}</button>
    ))
  }

  function handleChange(idx) {
    setSelectedGraph([chartData[idx]])
  }


  
  return(
    <>
      <h1>Your Progress</h1>
      {displayButtons(chartData)}
      {chartData.map((data) => (
        <
      ))

      }
    </>
  )
}