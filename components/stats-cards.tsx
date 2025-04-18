"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, MessageSquare, TrendingUp, Users } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          <BarChart3 className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,543</div>
          <p className="text-xs text-muted-foreground">+15% from last month</p>
        </CardContent>
      </Card>

      <Card className="border-l-4" style={{ borderLeftColor: "#DA847C" }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
          <TrendingUp className="h-4 w-4" style={{ color: "#DA847C" }} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.6%</div>
          <p className="text-xs text-muted-foreground">+2.1% from last month</p>
        </CardContent>
      </Card>

      <Card className="border-l-4" style={{ borderLeftColor: "#D9CC8B" }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Communities</CardTitle>
          <Users className="h-4 w-4" style={{ color: "#D9CC8B" }} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">342</div>
          <p className="text-xs text-muted-foreground">+24 new communities</p>
        </CardContent>
      </Card>

      <Card className="border-l-4" style={{ borderLeftColor: "#7CD9A5" }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Comments</CardTitle>
          <MessageSquare className="h-4 w-4" style={{ color: "#7CD9A5" }} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">87,429</div>
          <p className="text-xs text-muted-foreground">+9.2% from last month</p>
        </CardContent>
      </Card>
    </div>
  )
}
