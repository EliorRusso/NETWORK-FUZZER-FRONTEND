import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './StatisticsText.css';

const StatisticsText = () => {

  const [data, setData] = useState([]);

  const handleClickCalculate = () => {
    fetch("/jsonData")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  const chartData = data.map((point, index) => {
    return { name: index + 1, value: point };
  });

  const maxY = Math.max(...data);
  const minY = Math.min(...data);
  const yTickInterval = Math.ceil((maxY - minY) / 10);
  
  return (
    <div className="white-box">
      <h1 className="statistics-text">Statistics</h1>
      <button onClick={handleClickCalculate}
        className="calculate-button"
      >
        Calculate
      </button>
      <div className="chart-container">
        <LineChart width={800} height={400} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" label={{ value: '', position: 'insideTop', offset: -10 }} />
          <YAxis label={{ value: 'Corruption %', angle: -90, position: 'insideLeft' }} tick={{ fontSize: 12 }} tickInterval={yTickInterval} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#3f51b5" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </div>
    </div>
  );
}

export default StatisticsText;
