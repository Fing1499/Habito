import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import * as MoodAPI from '../../utilities/mood-api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry, faFaceFrown, faFaceMeh, faFaceSmile, faFaceGrinBeam } from '@fortawesome/free-solid-svg-icons';

export default function MoodChart() {
  const [moodData, setMoodData] = useState([]);


  function averageMood(moodData) {
    const amount = moodData.length
    let total = 0
    moodData.forEach((mood) => {
     total = total + mood.mood
    })
    const avg = total / amount
    return avg.toString().split('.')[1] >= 5 ? Math.ceil(avg) : Math.floor(avg)
  }

  useEffect(() => {
    async function getMD() {
      const response = await MoodAPI.getMoodData();
      setMoodData(response);
    }
    getMD();
  }, []);

  const data = moodData;

  const renderCustomAxisTick = ({ x, y, payload }) => {
    let icon = '';
    let color = '#8884d8';

    switch (payload.value) {
      case 1:
        icon = faFaceAngry;
        color = '#8884d8';
        break;
      case 2:
        icon = faFaceFrown;
        color = '#8884d8';
        break;
      case 3:
        icon = faFaceMeh;
        color = '#8884d8';
        break;
      case 4:
        icon = faFaceSmile;
        color = '#8884d8';
        break;
      case 5:
        icon = faFaceGrinBeam;
        color = '#8884d8';
        break;
      default:
        icon = null;
        color = '#8884d8';
        break;
    }

    return (
      <svg x={x - 25} y={y - 11.5} width={24} height={24} viewBox="0 0 1024 1024" fill="#8884d8">
        {<FontAwesomeIcon icon={icon} style={{ color }}/>}
      </svg>
    );
  };

  const renderMoodChart = (
    <ResponsiveContainer className='graph-container' width="90%" height={380}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          left: -20,
          bottom: 0,
        }} >
        <CartesianGrid />
        <XAxis dataKey="current_date" name="Date" stroke='#8884d8' />
        <YAxis dataKey="mood" name="Mood" domain={[1, 5]} tick={renderCustomAxisTick} stroke='#8884d8' />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} fill="#8884d8" line shape="circle" />
      </ScatterChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <h1 className='graph-title'>Your Mood Chart</h1>
      {renderMoodChart}
      <section className="mood-info">
        <section className="avg-mood-section">
          <h1 className='avg-mood'>Average Mood</h1>
          <h3 className='mood-num'>
            {averageMood(moodData) === 1 && (
              <i class="fa-solid fa-face-angry" style={{color: "#ffffff"}}></i>
            )}
            {averageMood(moodData) === 2 && (
              <i class="fa-solid fa-face-frown" style={{color: "#ffffff"}}></i>
            )}
            {averageMood(moodData) === 3 && (
              <i class="fa-solid fa-face-meh" style={{color: "#ffffff"}}></i>
            )}
            {averageMood(moodData) === 4 && (
              <i class="fa-solid fa-face-smile" style={{color: "#ffffff"}}></i>
            )}
            {averageMood(moodData) === 5 && (
              <i class="fa-solid fa-face-grin-beam" style={{color: "#ffffff"}}></i>
            )}
          </h3>
        </section>
      </section>
    </>
  );
}
