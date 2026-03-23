import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'DP', value: 45 },
  { name: 'Window', value: 30 }, // Shortened 'Sliding Window' to 'Window' so it fits better
  { name: 'Graphs', value: 15 },
  { name: 'Arrays', value: 10 },
];

const COLORS = ['#ee8c31', '#b25804', '#ffb74d', '#ffffff'];

// Custom label function to display text on the pie slices
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const RADIAN = Math.PI / 180;
  // Push the label slightly outside the pie
  const radius = outerRadius * 1.2; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize="10px"
      fontWeight="bold"
      letterSpacing="1px"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function StraightAnglePieChart({ isAnimationActive = true }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="85%" 
          outerRadius="80%" // Slightly reduced to make room for labels
          stroke="none"
          isAnimationActive={isAnimationActive}
          labelLine={false} // Hides the connecting line for a cleaner look
          label={renderCustomLabel} // Applies our custom text
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: '#ee8c31', borderRadius: '8px' }}
          itemStyle={{ color: '#ee8c31' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}