"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Sample data for topics trends
const topicsTrendsData = [
  { date: "Jan", topic1: 65, topic2: 28, topic3: 45, topic4: 32 },
  { date: "Feb", topic1: 59, topic2: 32, topic3: 48, topic4: 36 },
  { date: "Mar", topic1: 80, topic2: 38, topic3: 52, topic4: 40 },
  { date: "Apr", topic1: 81, topic2: 42, topic3: 55, topic4: 45 },
  { date: "May", topic1: 56, topic2: 48, topic3: 58, topic4: 50 },
  { date: "Jun", topic1: 55, topic2: 52, topic3: 62, topic4: 55 },
  { date: "Jul", topic1: 40, topic2: 58, topic3: 65, topic4: 60 },
  { date: "Aug", topic1: 45, topic2: 62, topic3: 68, topic4: 65 },
  { date: "Sep", topic1: 50, topic2: 68, topic3: 72, topic4: 70 },
  { date: "Oct", topic1: 55, topic2: 72, topic3: 75, topic4: 75 },
  { date: "Nov", topic1: 60, topic2: 78, topic3: 78, topic4: 80 },
  { date: "Dec", topic1: 65, topic2: 82, topic3: 82, topic4: 85 },
]

const topicLabels = [
  { id: "topic1", name: "Technology", color: "#766CDB" },
  { id: "topic2", name: "Politics", color: "#DA847C" },
  { id: "topic3", name: "Entertainment", color: "#D9CC8B" },
  { id: "topic4", name: "Sports", color: "#7CD9A5" },
]

export function TopicsTrends() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {topicLabels.map((topic) => (
          <Badge
            key={topic.id}
            variant="outline"
            className="border-2 px-3 py-1"
            style={{ borderColor: topic.color, color: topic.color }}
          >
            {topic.name}
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
            <Line type="monotone" dataKey="topic1" name="Technology" stroke="#766CDB" strokeWidth={2} />
            <Line type="monotone" dataKey="topic2" name="Politics" stroke="#DA847C" strokeWidth={2} />
            <Line type="monotone" dataKey="topic3" name="Entertainment" stroke="#D9CC8B" strokeWidth={2} />
            <Line type="monotone" dataKey="topic4" name="Sports" stroke="#7CD9A5" strokeWidth={2} />
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
