import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function MainPieChart({ chartData }) {
  const data = chartData;
  const renderPieChart = (
    <ResponsiveContainer className='graph-container' width="90%" height={380}>
      <PieChart margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 10,
      }} >
        <Pie
          data={data}
          outerRadius={150}
          fill="#8884d8"
          dataKey="amount_completed"
        >
          {data.map((habit, index) => (
            <Cell key={index} fill={habit.color} text={habit.habit} stroke='#7E27E3' />

          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )


  return (
    <>
      <h1 className='graph-title'>Pie Chart</h1>
      {renderPieChart}
      <section className="pie-key">
        <h1 className='key-title'>Key</h1>
        {
          chartData.map((data) => (
              <section className='one-key-item'>
                <div key={data._id} className='key-color' style={{backgroundColor: data.color}} />
                <h3 key={data._id}> - {data.habit}: </h3>
                <h3 key={data._id}>{data.amount_completed}</h3>
              </section>
            ))
        }
      </section>
    </>
  );
}
