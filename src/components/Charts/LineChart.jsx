import { useState } from 'react';
import SpecificHabitLineChart from './SpecifcHabitLineChart';

export default function MainLineChart({ chartData }) {
  console.log('chartData:', chartData);

  const [selectedGraph, setSelectedGraph] = useState(chartData[0]);
  console.log('selectedGraph:', selectedGraph);
  

  function displayButtons(chartData) {
    return chartData.map((data, idx) => (
      <button className='habit-buttons' onClick={() => handleChange(idx)} key={`${idx}-${data.habit}`} value={idx}>
        {data.habit}
      </button>
    ));
  }

  function handleChange(idx) {
    setSelectedGraph(chartData[idx]);
  }




  return (
    <>
      <h1 className='graph-title'>Your Progress</h1>
      <section className="title-buttons-section">
        {displayButtons(chartData)}
      </section>
      <SpecificHabitLineChart chartData={selectedGraph} />
    </>
  );
}
