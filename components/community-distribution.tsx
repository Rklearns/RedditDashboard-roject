"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for community distribution
const communityData = [
  { name: "r/technology", value: 35, color: "hsl(var(--chart-primary))" },
  { name: "r/politics", value: 25, color: "hsl(var(--chart-secondary))" },
  { name: "r/entertainment", value: 20, color: "hsl(var(--chart-tertiary))" },
  { name: "r/sports", value: 15, color: "hsl(var(--chart-quaternary))" },
  { name: "r/other", value: 5, color: "hsl(var(--chart-quinary))" },
]

export function CommunityDistribution() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={communityData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {communityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Community</TableHead>
                <TableHead className="text-right">Posts</TableHead>
                <TableHead className="text-right">%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {communityData.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">{Math.round(item.value * 125.43)}</TableCell>
                  <TableCell className="text-right">{item.value}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
