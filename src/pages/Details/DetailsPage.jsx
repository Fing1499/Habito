import { useState } from 'react';

import MainPieChart from '../../components/Charts/PieChart';
import BarChart from '../../components/Charts/BarChart';
import MainLineChart from '../../components/Charts/LineChart';


export default function DetailsPage() {
  const [activeChart, setActiveChart] = useState('line')

  function handleChange(evt) {
    setActiveChart(evt.target.value)
  }




  return(
    <>
    <h1>Details Page</h1>
    <button value="line" onClick={handleChange}>Line Chart</button>
    <button value="bar" onClick={handleChange}>Bar Chart</button>
    <button value="pie" onClick={handleChange}>Pie Chart</button>
    { activeChart === 'bar' && (
      <BarChart />
    )}
    { activeChart === 'line' && (
      <MainLineChart />
    )}
    { activeChart === 'pie' && (
      <MainPieChart />
    )}
    </>
  )
}