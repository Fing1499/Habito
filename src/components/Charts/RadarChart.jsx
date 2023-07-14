import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



export default function MainRadarChart({ chartData }) {

  const data = chartData

  const renderRadarChart = (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="habit" />
        <PolarRadiusAxis />
        <Radar dataKey="multiplier" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )

  return(
    <>
      {renderRadarChart}
    </>
  )
}