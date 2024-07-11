import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  Line,
  LineChart,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function BarGraph({revenueData}) {
  return (
    <div className="bg-[#fff2e6] rounded-lg shadow-lg p-6 my-5">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart width={200} height={180} data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            label={{
              value: "Revenue ($)",
              angle: -90,
              position: "insideLeft",
              dy: 30,
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#ff9936" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarGraph