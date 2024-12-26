import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip,Legend } from 'recharts';

const Chart = () => {

 const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white shadow-lg p-2 rounded text-sm">
          <p style={{ color: payload[0].color }}>
            {`${payload[0].name}: ${payload[0].value}人`}
          </p>
        </div>
      );
    }
    return null;
  };


 const data = [
    { age: '10代未満', 男性: 100, 女性: 80, その他: 40 ,回答なし:20 },
    { age: '10代', 男性: 150, 女性: 120, その他: 60 ,回答なし:35},
    { age: '20代', 男性: 200, 女性: 180, その他: 90 ,回答なし:33},
    { age: '30代', 男性: 180, 女性: 160, その他: 80 ,回答なし:40},
    { age: '40代', 男性: 160, 女性: 140, その他: 70 ,回答なし:30},
    { age: '50代', 男性: 140, 女性: 120, その他: 60 ,回答なし:10},
    { age: '60代', 男性: 80, 女性: 60, その他: 30,回答なし:37 },
    { age: '70代', 男性: 40, 女性: 30, その他: 15 ,回答なし:30},
    { age: '80代', 男性: 20, 女性: 15, その他: 8,回答なし:25 },
  ];
  return (
      <div>
          <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="age" />
            <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
            <Bar dataKey="男性" stackId="a" fill="#FF9500" name="男性" />
            <Bar dataKey="女性" stackId="a" fill="#FFB854" name="女性" />
            <Bar dataKey="その他" stackId="a" fill="#FFCE8A" name="その他" />
            <Bar dataKey="回答なし" stackId="a" fill="#FFDEB0" name="回答なし" />
          </BarChart>
        </ResponsiveContainer>
      
    </div>
  )
}

export default Chart
