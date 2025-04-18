"use client"

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Sample data for sentiment overview
const sentimentOverTimeData = [
  { date: "Jan", positive: 35, neutral: 45, negative: 20 },
  { date: "Feb", positive: 38, neutral: 42, negative: 20 },
  { date: "Mar", positive: 40, neutral: 40, negative: 20 },
  { date: "Apr", positive: 42, neutral: 38, negative: 20 },
  { date: "May", positive: 45, neutral: 35, negative: 20 },
  { date: "Jun", positive: 48, neutral: 32, negative: 20 },
  { date: "Jul", positive: 50, neutral: 30, negative: 20 },
  { date: "Aug", positive: 52, neutral: 28, negative: 20 },
  { date: "Sep", positive: 55, neutral: 25, negative: 20 },
  { date: "Oct", positive: 58, neutral: 22, negative: 20 },
  { date: "Nov", positive: 60, neutral: 20, negative: 20 },
  { date: "Dec", positive: 62, neutral: 18, negative: 20 },
]

export function SentimentOverview() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={sentimentOverTimeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="positive"
            stackId="1"
            stroke="#4ade80"
            fill="#4ade80"
            fillOpacity={0.6}
            name="Positive"
          />
          <Area
            type="monotone"
            dataKey="neutral"
            stackId="1"
            stroke="#94a3b8"
            fill="#94a3b8"
            fillOpacity={0.6}
            name="Neutral"
          />
          <Area
            type="monotone"
            dataKey="negative"
            stackId="1"
            stroke="#f87171"
            fill="#f87171"
            fillOpacity={0.6}
            name="Negative"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
