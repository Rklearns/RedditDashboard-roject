"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"

// Sample data for top subreddits
const topSubredditsData = [
  { name: "r/technology", posts: 3500, color: "#766CDB" },
  { name: "r/politics", posts: 3200, color: "#DA847C" },
  { name: "r/news", posts: 2800, color: "#D9CC8B" },
  { name: "r/worldnews", posts: 2500, color: "#7CD9A5" },
  { name: "r/science", posts: 2200, color: "#877877" },
  { name: "r/askreddit", posts: 2000, color: "#52515E" },
  { name: "r/gaming", posts: 1800, color: "#766CDB" },
  { name: "r/movies", posts: 1600, color: "#DA847C" },
  { name: "r/television", posts: 1400, color: "#D9CC8B" },
  { name: "r/music", posts: 1200, color: "#7CD9A5" },
]

export function TopSubreddits() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={topSubredditsData} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="posts" name="Posts" fill="#766CDB">
            {topSubredditsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
