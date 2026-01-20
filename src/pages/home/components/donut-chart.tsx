import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

const DonutChart: React.FC = () => {
  const data: DataItem[] = [
    { name: 'Studies booked', value: 1240, color: '#8884d8' },
    { name: 'Acquired', value: 847, color: '#82ca9d' },
    { name: 'In-Reporting', value: 112, color: '#ffc658' },
    { name: 'Finalized', value: 735, color: '#ff8042' },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-[400px] bg-none rounded-lg p-4">
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            innerRadius={60}
            paddingAngle={5}
            cornerRadius={8}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, name: string) => [`${value}`, name]}
            contentStyle={{
              backgroundColor: '#0b0e10',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            itemStyle={{ color: '#fff' }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
            separator=" : "
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center" 
            iconType="circle"
            wrapperStyle={{
              borderRadius: '20px',
              padding: '10px',
              marginTop: '30px',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;