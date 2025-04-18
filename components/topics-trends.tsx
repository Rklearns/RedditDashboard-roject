"use client"

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Sample data for topics trends
const topicsTrendsData = [
  { date: "2023-01", topic1: 65, topic2: 28, topic3: 45, topic4: 32 },
  { date: "2023-02", topic1: 59, topic2: 32, topic3: 48, topic4: 36 },
  { date: "2023-03", topic1: 80, topic2: 38, topic3: 52, topic4: 40 },
  { date: "2023-04", topic1: 81, topic2: 42, topic3: 55, topic4: 45 },
  { date: "2023-05", topic1: 56, topic2: 48, topic3: 58, topic4: 50 },
  { date: "2023-06", topic1: 55, topic2: 52, topic3: 62, topic4: 55 },
  { date: "2023-07", topic1: 40, topic2: 58, topic3: 65, topic4: 60 },
  { date: "2023-08", topic1: 45, topic2: 62, topic3: 68, topic4: 65 },
  { date: "2023-09", topic1: 50, topic2: 68, topic3: 72, topic4: 70 },
  { date: "2023-10", topic1: 55, topic2: 72, topic3: 75, topic4: 75 },
  { date: "2023-11", topic1: 60, topic2: 78, topic3: 78, topic4: 80 },
  { date: "2023-12", topic1: 65, topic2: 82, topic3: 82, topic4: 85 },
]

const topicLabels = {
  topic1: { name: "Technology", color: "primary" },
  topic2: { name: "Politics", color: "secondary" },
  topic3: { name: "Entertainment", color: "default" },
  topic4: { name: "Sports", color: "outline" },
}

export function TopicsTrends() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.entries(topicLabels).map(([key, { name, color }]) => (
          <Badge
            key={key}
            variant={color === "outline" ? "outline" : "default"}
            className={color !== "outline" ? `bg-chart-${color}` : ""}
          >
            {name}
          </Badge>
        ))}
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={topicsTrendsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="topic1" name="Technology" stroke="hsl(var(--chart-primary))" />
            <Line type="monotone" dataKey="topic2" name="Politics" stroke="hsl(var(--chart-secondary))" />
            <Line type="monotone" dataKey="topic3" name="Entertainment" stroke="hsl(var(--chart-tertiary))" />
            <Line type="monotone" dataKey="topic4" name="Sports" stroke="hsl(var(--chart-quaternary))" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h3 className="mb-2 font-semibold">Rising Topics</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Politics</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400">
                  +193%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Sports</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400">
                  +166%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Entertainment</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400">
                  +82%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="mb-2 font-semibold">Declining Topics</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Technology</span>
                <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400">
                  -38%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Cryptocurrency</span>
                <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400">
                  -24%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Remote Work</span>
                <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400">
                  -12%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
