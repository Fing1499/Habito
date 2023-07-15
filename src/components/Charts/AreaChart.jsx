import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import * as habitAPI from '../../utilities/habit-api'

export default function MainAreaChart() {

  const [areaChartData, setAreaChartData] = useState([])

  function totalHabits(areaChartData) {
    let total = 0;
    areaChartData.forEach(data => {
      total = total + data.habits_completed
    });
    return total
  }

  useEffect(function() {
    async function getACD() {
      const response = await habitAPI.getAreaChartData()
      console.log(response)
      setAreaChartData(response)
    }
    getACD()
  }, [])

  const data = areaChartData

  const renderAreaChart = (
    <ResponsiveContainer width="100%" height={300}>
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" name="Date"/>
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="habits_completed" name="Habits Completed" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
  )

  return (
    <>
    <h1>hello</h1>
      {renderAreaChart}
      <section>
        <h1>You Have Completed</h1>
        <h1>{totalHabits(areaChartData)}</h1>
        <h1>Habits Over</h1>
        <h1>{areaChartData.length} Days!</h1>
      </section>
    </>
  )
}