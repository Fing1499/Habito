import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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
    <ResponsiveContainer className='graph-container' width="90%" height={380}>
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 30,
        right: 20,
        left: -20,
        bottom: 0,
      }}
    >
      <XAxis dataKey="date" name="Date" stroke='#7E27E3'/>
      <YAxis stroke='#7E27E3' />
      <Tooltip />
      <Area type="monotone" dataKey="habits_completed" name="Habits Completed" stroke="#7E27E3" fill="#873adf91" />
    </AreaChart>
  </ResponsiveContainer>
  )

  return (
    <>
    <h1 className='graph-title'>Your Daily Completion</h1>
      {renderAreaChart}
      <section className='area-info-section'>
        <h1>You Have Completed</h1>
        <h1>{totalHabits(areaChartData)}</h1>
        <h1>Habits Over</h1>
        <h1>{areaChartData.length} Days!</h1>
      </section>
    </>
  )
}