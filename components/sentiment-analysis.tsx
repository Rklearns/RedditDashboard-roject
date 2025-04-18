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
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

const sentimentByTopic = [
  { topic: "Technology", positive: 38, neutral: 42, negative: 20 },
  { topic: "Politics", positive: 30, neutral: 35, negative: 35 },
  { topic: "Entertainment", positive: 55, neutral: 30, negative: 15 },
  { topic: "Sports", positive: 65, neutral: 25, negative: 10 },
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function SentimentAnalysis() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="by-platform">By Platform</TabsTrigger>
          <TabsTrigger value="by-topic">By Topic</TabsTrigger>
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
                  label={renderCustomizedLabel}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
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

          <div className="grid gap-4 md:grid-cols-3">
            {sentimentData.map((item) => (
              <Card key={item.name}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <Badge
                      variant="outline"
                      className="text-lg"
                      style={{ backgroundColor: `${item.color}20`, color: item.color, borderColor: item.color }}
                    >
                      {item.value}%
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.name === "Positive"
                      ? "Content expressing approval, happiness, or satisfaction"
                      : item.name === "Neutral"
                        ? "Content with no clear emotional tone or bias"
                        : "Content expressing disapproval, anger, or dissatisfaction"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-md bg-muted p-3">
            <h4 className="mb-2 font-medium">AI Insight</h4>
            <p className="text-sm text-muted-foreground">
              The sentiment analysis shows a predominantly positive reception with 45% of posts expressing positive
              sentiment. This is a 12% increase from the previous period. Negative sentiment has decreased by 5%,
              indicating improving perception. The most positive content is related to product announcements and
              community events.
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sentimentByPlatform.map((platform) => (
              <Card key={platform.platform}>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold">{platform.platform}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Positive</span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400"
                      >
                        {platform.positive}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Neutral</span>
                      <Badge
                        variant="outline"
                        className="bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-400"
                      >
                        {platform.neutral}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Negative</span>
                      <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400">
                        {platform.negative}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-md bg-muted p-3">
            <h4 className="mb-2 font-medium">AI Insight</h4>
            <p className="text-sm text-muted-foreground">
              Instagram shows the most positive sentiment at 60%, making it the most favorable platform for your
              content. Twitter has the highest negative sentiment at 25%, suggesting content may need adjustment for
              that audience. Consider tailoring your messaging strategy differently for each platform based on these
              sentiment patterns.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="by-topic" className="space-y-4">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentByTopic} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="topic" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="positive" name="Positive" fill="#4ade80" />
                <Bar dataKey="neutral" name="Neutral" fill="#94a3b8" />
                <Bar dataKey="negative" name="Negative" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sentimentByTopic.map((topic) => (
              <Card key={topic.topic}>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold">{topic.topic}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Positive</span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400"
                      >
                        {topic.positive}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Neutral</span>
                      <Badge
                        variant="outline"
                        className="bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-400"
                      >
                        {topic.neutral}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Negative</span>
                      <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400">
                        {topic.negative}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-md bg-muted p-3">
            <h4 className="mb-2 font-medium">AI Insight</h4>
            <p className="text-sm text-muted-foreground">
              Sports content receives the most positive sentiment (65%), while Politics has the highest negative
              sentiment (35%). Technology topics show a balanced distribution but lean slightly negative compared to
              Entertainment. Consider increasing your focus on Sports and Entertainment content to leverage the more
              positive reception.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
