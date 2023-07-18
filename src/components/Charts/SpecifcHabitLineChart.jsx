import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';



export default function SpecificHabitLineChart({ chartData }) {

  console.log('specific', chartData)


  const data = chartData.dates_completed.map((date, index) => ({
    date,
    multiplier_day_by_day: chartData.multiplier_day_by_day[index],
  }));

  const renderLineChart = (
    <ResponsiveContainer className='graph-container' width="90%" height={380}>
      <LineChart width={600} height={380} data={data}
        margin={{
          top: 30,
          right: 18,
          left: -15,
          bottom: 0,
        }}>
        <Line type="monotone" dataKey="multiplier_day_by_day" stroke={chartData.color} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" stroke='#7E27E3' />
        <YAxis dataKey="multiplier_day_by_day" domain={[1, 'dataMax']} stroke='#7E27E3' tickFormatter={(value) => value.toFixed(2)} />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <>
      {renderLineChart}
    </>
  )
}