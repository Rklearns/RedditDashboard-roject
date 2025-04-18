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
} from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

// Sample data for the time series
const timeSeriesData = [
  { date: "Jan", query1: 165, query2: 120, query3: 90 },
  { date: "Feb", query1: 180, query2: 130, query3: 100 },
  { date: "Mar", query1: 190, query2: 140, query3: 110 },
  { date: "Apr", query1: 210, query2: 160, query3: 120 },
  { date: "May", query1: 230, query2: 170, query3: 130 },
  { date: "Jun", query1: 250, query2: 180, query3: 140 },
  { date: "Jul", query1: 270, query2: 190, query3: 150 },
  { date: "Aug", query1: 290, query2: 200, query3: 160 },
  { date: "Sep", query1: 310, query2: 210, query3: 170 },
  { date: "Oct", query1: 330, query2: 220, query3: 180 },
  { date: "Nov", query1: 350, query2: 230, query3: 190 },
  { date: "Dec", query1: 370, query2: 240, query3: 200 },
]

export function PostsTimeSeries() {
  const [chartType, setChartType] = useState("line")

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

        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="h-[350px] w-full">
        {chartType === "line" && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timeSeriesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="query1"
                name="Technology Posts"
                stroke="#766CDB"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="query2" name="Politics Posts" stroke="#DA847C" strokeWidth={2} />
              <Line type="monotone" dataKey="query3" name="Entertainment Posts" stroke="#D9CC8B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === "area" && (
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
                name="Technology Posts"
                stackId="1"
                stroke="#766CDB"
                fill="#766CDB"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="query2"
                name="Politics Posts"
                stackId="1"
                stroke="#DA847C"
                fill="#DA847C"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="query3"
                name="Entertainment Posts"
                stackId="1"
                stroke="#D9CC8B"
                fill="#D9CC8B"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}

        {chartType === "bar" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={timeSeriesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="query1" name="Technology Posts" fill="#766CDB" />
              <Bar dataKey="query2" name="Politics Posts" fill="#DA847C" />
              <Bar dataKey="query3" name="Entertainment Posts" fill="#D9CC8B" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="rounded-md bg-muted p-3">
        <h4 className="mb-2 font-medium">AI Summary</h4>
        <p className="text-sm text-muted-foreground">
          The data shows a consistent upward trend across all post categories over the past year. Technology posts have
          shown the strongest growth with a 124% increase, while Politics and Entertainment posts have grown by 100% and
          122% respectively. The most significant growth period was between July and September 2023.
        </p>
      </div>
    </div>
  )
}
