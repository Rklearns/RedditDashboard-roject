"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

// Sample data for sentiment overview
const sentimentOverTimeData = [
  { date: "2023-01", positive: 35, neutral: 45, negative: 20 },
  { date: "2023-02", positive: 38, neutral: 42, negative: 20 },
  { date: "2023-03", positive: 40, neutral: 40, negative: 20 },
  { date: "2023-04", positive: 42, neutral: 38, negative: 20 },
  { date: "2023-05", positive: 45, neutral: 35, negative: 20 },
  { date: "2023-06", positive: 48, neutral: 32, negative: 20 },
  { date: "2023-07", positive: 50, neutral: 30, negative: 20 },
  { date: "2023-08", positive: 52, neutral: 28, negative: 20 },
  { date: "2023-09", positive: 55, neutral: 25, negative: 20 },
  { date: "2023-10", positive: 58, neutral: 22, negative: 20 },
  { date: "2023-11", positive: 60, neutral: 20, negative: 20 },
  { date: "2023-12", positive: 62, neutral: 18, negative: 20 },
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
