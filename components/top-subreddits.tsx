"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

// Sample data for top subreddits
const topSubredditsData = [
  { name: "r/technology", posts: 3500 },
  { name: "r/politics", posts: 3200 },
  { name: "r/news", posts: 2800 },
  { name: "r/worldnews", posts: 2500 },
  { name: "r/science", posts: 2200 },
  { name: "r/askreddit", posts: 2000 },
  { name: "r/gaming", posts: 1800 },
  { name: "r/movies", posts: 1600 },
  { name: "r/television", posts: 1400 },
  { name: "r/music", posts: 1200 },
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
          <Bar dataKey="posts" fill="hsl(var(--chart-primary))" name="Posts" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
