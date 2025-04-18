"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for sentiment analysis
const sentimentData = [
  { name: "Positive", value: 45, color: "#4ade80" },
  { name: "Neutral", value: 35, color: "#94a3b8" },
  { name: "Negative", value: 20, color: "#f87171" },
]

const sentimentByPlatform = [
  { platform: "Reddit", positive: 42, neutral: 38, negative: 20 },
  { platform: "Twitter", positive: 35, neutral: 40, negative: 25 },
  { platform: "Facebook", positive: 50, neutral: 30, negative: 20 },
  { platform: "Instagram", positive: 60, neutral: 25, negative: 15 },
]

export function SentimentAnalysis() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="by-platform">By Platform</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-md bg-muted p-3">
            <h4 className="mb-2 font-medium">AI Insight</h4>
            <p className="text-sm text-muted-foreground">
              The sentiment analysis shows a predominantly positive reception with 45% of posts expressing positive
              sentiment. This is a 12% increase from the previous period. Negative sentiment has decreased by 5%,
              indicating improving perception.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="by-platform" className="space-y-4">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentByPlatform} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="positive" name="Positive" fill="#4ade80" />
                <Bar dataKey="neutral" name="Neutral" fill="#94a3b8" />
                <Bar dataKey="negative" name="Negative" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-md bg-muted p-3">
            <h4 className="mb-2 font-medium">AI Insight</h4>
            <p className="text-sm text-muted-foreground">
              Instagram shows the most positive sentiment at 60%, making it the most favorable platform for your
              content. Twitter has the highest negative sentiment at 25%, suggesting content may need adjustment for
              that audience.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
