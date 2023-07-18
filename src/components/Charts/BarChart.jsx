import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';



export default function MainBarChart({ chartData }) {

  const data = chartData


  const renderBarChart = (
    <ResponsiveContainer className='graph-container' width="90%" height={380} >
    <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 30,
      right: 20,
      left: -30,
      bottom: 0
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="habit" stroke='#7E27E3'/>
    <YAxis dataKey="amount_completed" domain={[0, dataMax => Math.ceil(dataMax) + 2]}stroke='#7E27E3' />
    <Bar key="habit" dataKey="amount_completed">
    {data.map((habit, index) => (
          <Cell key={index} fill={habit.color} />
        ))}
    </Bar>
  </BarChart>
  </ResponsiveContainer>
);

  return(
    <>
      <h1 className='graph-title'>Your Habit Completion</h1>
      {renderBarChart}
    </>
  )
}