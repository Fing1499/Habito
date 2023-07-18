import './Details.css'
import { useState, useEffect } from 'react';
import * as habitAPI from '../../utilities/habit-api'
import MainPieChart from '../../components/Charts/PieChart';
import MainBarChart from '../../components/Charts/BarChart';
import MainLineChart from '../../components/Charts/LineChart';
import MainRadarChart from '../../components/Charts/RadarChart';
import MainAreaChart from '../../components/Charts/AreaChart';
import MoodChart from '../../components/Charts/MoodChart';


export default function DetailsPage() {
  const [activeChart, setActiveChart] = useState('bar')

  function handleChange(evt) {
    setActiveChart(evt.target.value)
  }

  const [chartData, setChartData] = useState([])


  useEffect(function () {
    async function getChartData() {
      const response = await habitAPI.getChartData();
      const eachHabit = await response.map((habit) => ({
        habit: habit.habit,
        multiplier: habit.multiplier,
        multiplier_day_by_day: habit.multiplier_day_by_day,
        dates_completed: habit.dates_completed,
        color: habit.color,
        amount_completed: habit.amount_completed
      }));
      console.log('EACHHABIT', eachHabit);
      await setChartData(eachHabit);
    }
    getChartData();
  }, []);

  console.log('chartData in DetailsPage:', chartData);
  return(
    <>
    <main className="details">
      <section className="details-heading-section">
        <h1 className='details-heading'>Your Data</h1>
        <section className="chart-buttons">
          <button className='chart-button' value="line" onClick={handleChange}><i className="fa-solid fa-chart-line fa-xl"></i></button>
          <button className='chart-button' value="bar" onClick={handleChange}><i className="fa-solid fa-chart-column fa-xl"></i></button>
          <button className='chart-button' value="pie" onClick={handleChange}><i className="fa-solid fa-chart-pie fa-xl"></i></button>
          <button className='chart-button' value="radar" onClick={handleChange}><i className="fa-solid fa-satellite-dish fa-xl"></i></button>
          <button className='chart-button' value="area" onClick={handleChange}><i className="fa-solid fa-chart-area fa-xl"></i></button>
          <button className='chart-button' value="mood" onClick={handleChange}><i className="fa-solid fa-face-smile-beam fa-xl"></i></button>
        </section>
      </section>
      { activeChart === 'line' && (
        <MainLineChart chartData={chartData} />
        )}
        { activeChart === 'bar' && (
          <MainBarChart chartData={chartData} />
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
      { activeChart === 'mood' && (
        <MoodChart chartData={chartData} />
      )}
    </main>
    </>
  )
}