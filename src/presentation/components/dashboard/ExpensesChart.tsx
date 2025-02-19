import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', expenses: 2400 },
  { name: 'Feb', expenses: 1398 },
  { name: 'Mar', expenses: 9800 },
  { name: 'Apr', expenses: 3908 },
  { name: 'May', expenses: 4800 },
  { name: 'Jun', expenses: 3800 },
  { name: 'Jul', expenses: 4300 },
];

const ExpensesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="expenses" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpensesChart;
