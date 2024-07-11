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

function LineGraph({data}) {
  return (
    <div className="bg-[#e5f9ff] rounded-lg shadow-lg p-8 my-5">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 8, fontWeight: "bold", fill: "#555" }}
          />
          <YAxis
            tick={{ fontSize: 10, fontWeight: "bold", fill: "#8884d8" }}
            label={{
              value: "Call answered rate",
              angle: -90,
              position: "insideLeft",
              dy: 50,
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph