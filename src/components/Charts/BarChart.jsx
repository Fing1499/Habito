import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';



export default function MainBarChart({ chartData }) {

  const data = chartData


  const renderBarChart = (
    <ResponsiveContainer width="90%" height={400} >
    <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="habit" />
    <YAxis dataKey="amount_completed" domain={[0, dataMax => Math.ceil(dataMax) + 2]} />
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
      <h1>BarCHart</h1>
      {renderBarChart}
    </>
  )
}