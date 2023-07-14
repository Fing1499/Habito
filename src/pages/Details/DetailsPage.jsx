import { useState, useEffect } from 'react';
import * as habitAPI from '../../utilities/habit-api'
import MainPieChart from '../../components/Charts/PieChart';
import MainBarChart from '../../components/Charts/BarChart';
import MainLineChart from '../../components/Charts/LineChart';
import MainRadarChart from '../../components/Charts/RadarChart';
import MainAreaChart from '../../components/Charts/AreaChart';


export default function DetailsPage() {
  const [activeChart, setActiveChart] = useState('line')

  function handleChange(evt) {
    setActiveChart(evt.target.value)
  }

  const [chartData, setChartData] = useState([])


  useEffect(function () {
    async function getChartData() {
      const response = await habitAPI.getChartData();
      const eachHabit = response.map((habit) => ({
        habit: habit.habit,
        multiplier: habit.multiplier,
        dates_completed: habit.dates_completed,
        color: habit.color,
        amount_completed: habit.amount_completed
      }));
      console.log('EACHHABIT', eachHabit);
      setChartData(eachHabit);
    }
    getChartData();
  }, []);


  return(
    <>
    <h1>Details Page</h1>
    <button value="line" onClick={handleChange}>Line Chart</button>
    <button value="bar" onClick={handleChange}>Bar Chart</button>
    <button value="pie" onClick={handleChange}>Pie Chart</button>
    <button value="radar" onClick={handleChange}>Radar Chart</button>
    <button value="area" onClick={handleChange}>Area Chart</button>
    { activeChart === 'bar' && (
      <MainBarChart chartData={chartData} />
    )}
    { activeChart === 'line' && (
      <MainLineChart chartData={chartData} />
    )}
    { activeChart === 'pie' && (
      <MainPieChart chartData={chartData} />
    )}
    { activeChart === 'radar' && (
      <MainRadarChart chartData={chartData} />
    )}
    { activeChart === 'area' && (
      <MainAreaChart chartData={chartData} />
    )}
    </>
  )
}