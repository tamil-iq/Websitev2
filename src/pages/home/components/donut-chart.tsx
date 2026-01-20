import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

const DonutChart: React.FC = () => {
  // Ocean blue color palette (5 colors) - daily values
  const data: DataItem[] = [
    { name: 'Studies booked', value: 124, color: '#00b4d8' },   // turquoise-surf
    { name: 'Acquired', value: 98, color: '#90e0ef' },          // frosted-blue
    { name: 'In-Reporting', value: 12, color: '#0077b6' },      // bright-teal-blue
    { name: 'Finalized', value: 86, color: '#caf0f8' },         // light-cyan
  ];

  return (
    <div className="w-full h-[450px] md:h-[220px] bg-none relative">
      {/* Legend - top right */}
      <div className="absolute top-0 right-0 flex flex-wrap gap-x-3 gap-y-1 text-[10px]">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-muted">{item.name}</span>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 20, right: 0, bottom: 0, left: 0 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={75}
            innerRadius={38}
            paddingAngle={5}
            cornerRadius={6}
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
              borderRadius: '6px',
              padding: '4px 8px',
              fontSize: '11px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
            itemStyle={{ color: '#fff', fontSize: '11px', padding: 0 }}
            labelStyle={{ fontWeight: '500', marginBottom: '2px', fontSize: '11px' }}
            separator=": "
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;