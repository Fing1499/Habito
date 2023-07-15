import { useState, useEffect } from 'react';
import SpecificHabitLineChart from './SpecifcHabitLineChart';

export default function MainLineChart({ chartData }) {
  console.log('chartData:', chartData);

  const [selectedGraph, setSelectedGraph] = useState(chartData[0]);
  console.log('selectedGraph:', selectedGraph);
  
  // useEffect(function() {
  //   setSelectedGraph(chartData[0])
  // }, [chartData])
  // console.log('selectedGraph2:', selectedGraph);

  function displayButtons(chartData) {
    return chartData.map((data, idx) => (
      <button onClick={() => handleChange(idx)} key={`${idx}-${data.habit}`} value={idx}>
        {data.habit}
      </button>
    ));
  }

  function handleChange(idx) {
    setSelectedGraph(chartData[idx]);
  }




  return (
    <>
      <h1>Your Progress</h1>
      {displayButtons(chartData)}
      <SpecificHabitLineChart chartData={selectedGraph} />
    </>
  );
}
