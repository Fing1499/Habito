import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState, useEffect } from 'react';
import * as habitAPI from '../../utilities/habit-api'


export default function MainLineChart() {
 
  // {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  const [chartData, setChartData] = useState([])


  useEffect(function () {
    async function getChartData() {
      const response = await habitAPI.getChartData();
      const eachHabit = response.map((habit) => ({
        habit: habit.habit,
        multiplier: habit.multiplier,
        dates_completed: habit.dates_completed,
        color: habit.color,
      }));
      console.log('EACHHABIT', eachHabit);
      setChartData(eachHabit);
    }
    getChartData();
  }, []);
  const data = chartData


  const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
    <CartesianGrid stroke="" />
    <XAxis dataKey="date" />
    <YAxis domain={[0, 'auto']} />

    {data.map((habit) => (
      <Line
        key={habit.habit}
        type="monotone"
        data={habit.dates_completed.map((date) => ({
          name: habit.habit,
          multiplier: habit.multiplier,
          date: date,
          color: habit.color,
        }))}
        dataKey="multiplier"
        stroke={habit.color}
      />
    ))}
  </LineChart>
  );



  return(
    <>
      <h1>LineChart</h1>
      {renderLineChart}
    </>
  )
}