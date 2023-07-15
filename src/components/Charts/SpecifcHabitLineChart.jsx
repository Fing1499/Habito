import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



export default function SpecificHabitLineChart({ chartData }) {

  console.log('specific', chartData)


  const data = chartData.dates_completed.map((date, index) => ({
    date,
    multiplier_day_by_day: chartData.multiplier_day_by_day[index],
  }));

  const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="multiplier_day_by_day" stroke={chartData.color} />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis dataKey="multiplier_day_by_day" />
    </LineChart>
  );

  return (
    <>
      {renderLineChart}
    </>
  )
}