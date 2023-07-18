import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



export default function MainRadarChart({ chartData }) {

  const data = chartData

  function improvement(chartData) {
    return chartData.map((data) => (
      <p key={data.habit}><strong>{data.habit}</strong>: You have improved {data.multiplier.toFixed(2)}x</p>
    ))
  }

  const renderRadarChart = (
    <ResponsiveContainer className='graph-container' width="90%" height={380}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} 
        margin={{
          top: 40,
          right: 20,
          left: -20,
          bottom: 0,
        }} >
        <PolarGrid />
        <PolarAngleAxis dataKey="habit" />
        <PolarRadiusAxis />
        <Radar dataKey="multiplier" stroke='#7E27E3' fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )

  return(
    <>
      <h1 className="graph-title">Your Improvement</h1>
      {renderRadarChart}
      <section className='radar-info-section'>
        <h1 className='radar-values'>Values</h1>
        {improvement(chartData)}
      </section>
    </>
  )
}