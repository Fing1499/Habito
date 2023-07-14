import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
// import { useState, useEffect } from 'react';



export default function MainLineChart({ chartData }) {
 

  const data = [
    {dates_completed: "04/07/2023", testing: 1, Gym: 1, color: '#ff8900'},      
    {dates_completed: "05/07/2023", testing: 1.01, Gym: 1.01, color: '#ff8900'},      
    {dates_completed: "06/07/2023", testing: 1.0201, Gym: 1.0201, color: '#ff8900'},      
    {dates_completed: "07/07/2023", testing: 1.030301, color: '#ff8900'},      
    {dates_completed: "08/07/2023", testing: 1.04060401, color: '#ff8900'},      
    {dates_completed: "09/07/2023", testing: 1.0510100501, color: '#ff8900'},      
    {dates_completed: "10/07/2023", testing: 1.061520150601, color: '#ff8900'},
    {dates_completed: "04/07/2023",  color: '#ff8900'},      
    {dates_completed: "05/07/2023",  color: '#ff8900'},      
    {dates_completed: "06/07/2023",  color: '#ff8900'}
  ]
  const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="testing" stroke="#ff8900" />
      <Line type="monotone" dataKey="Gym" stroke="blue" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="dates_completed" />
      <YAxis />
    </LineChart>
  );
  
  return(
    <>
      <h1>LineChart</h1>
      {renderLineChart}
    </>
  )
}