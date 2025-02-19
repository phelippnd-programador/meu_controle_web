import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Produto A', value: 400 },
  { name: 'Produto B', value: 300 },
  { name: 'Produto C', value: 300 },
  { name: 'Produto D', value: 200 },
];

const TopProductsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie dataKey="value" data={data} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TopProductsChart;
