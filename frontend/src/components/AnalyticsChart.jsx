// AnalyticsChart.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

// Fixed data array (replace with actual data)
const data = [
  { month: 'Jan', matches: 40 },
  { month: 'Feb', matches: 65 },
  { month: 'Mar', matches: 85 },
  { month: 'Apr', matches: 55 },
  { month: 'May', matches: 75 }
];

export default function AnalyticsChart() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis 
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <Tooltip />
          <Bar 
            dataKey="matches"
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
            animationBegin={100}
            animationDuration={2000}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}