"use client"

import { useState } from "react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for the time series
const timeSeriesData = [
  { date: "2023-01", query1: 165, query2: 120, query3: 90 },
  { date: "2023-02", query1: 180, query2: 130, query3: 100 },
  { date: "2023-03", query1: 190, query2: 140, query3: 110 },
  { date: "2023-04", query1: 210, query2: 160, query3: 120 },
  { date: "2023-05", query1: 230, query2: 170, query3: 130 },
  { date: "2023-06", query1: 250, query2: 180, query3: 140 },
  { date: "2023-07", query1: 270, query2: 190, query3: 150 },
  { date: "2023-08", query1: 290, query2: 200, query3: 160 },
  { date: "2023-09", query1: 310, query2: 210, query3: 170 },
  { date: "2023-10", query1: 330, query2: 220, query3: 180 },
  { date: "2023-11", query1: 350, query2: 230, query3: 190 },
  { date: "2023-12", query1: 370, query2: 240, query3: 200 },
]

export function PostsTimeSeries() {
  const [chartType, setChartType] = useState("line")
  const [timeRange, setTimeRange] = useState("1y")

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Tabs defaultValue="line" className="w-fit" onValueChange={setChartType}>
          <TabsList>
            <TabsTrigger value="line">Line</TabsTrigger>
            <TabsTrigger value="area">Area</TabsTrigger>
            <TabsTrigger value="bar">Bar</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <Select defaultValue="1y" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="1y">Last Year</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            Export
          </Button>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <TabsContent value="line" className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timeSeriesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="query1" stroke="hsl(var(--chart-primary))" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="query2" stroke="hsl(var(--chart-secondary))" />
              <Line type="monotone" dataKey="query3" stroke="hsl(var(--chart-tertiary))" />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="area" className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={timeSeriesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="query1"
                stackId="1"
                stroke="hsl(var(--chart-primary))"
                fill="hsl(var(--chart-primary))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="query2"
                stackId="1"
                stroke="hsl(var(--chart-secondary))"
                fill="hsl(var(--chart-secondary))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="query3"
                stackId="1"
                stroke="hsl(var(--chart-tertiary))"
                fill="hsl(var(--chart-tertiary))"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="bar" className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={timeSeriesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="query1" fill="hsl(var(--chart-primary))" />
              <Bar dataKey="query2" fill="hsl(var(--chart-secondary))" />
              <Bar dataKey="query3" fill="hsl(var(--chart-tertiary))" />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </div>

      <div className="rounded-md bg-muted p-3">
        <h4 className="mb-2 font-medium">AI Summary</h4>
        <p className="text-sm text-muted-foreground">
          The data shows a consistent upward trend across all search queries over the past year. Query1 has shown the
          strongest growth with a 124% increase, while Query2 and Query3 have grown by 100% and 122% respectively. The
          most significant growth period was between July and September 2023.
        </p>
      </div>
    </div>
  )
}
