"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PostsTimeSeries } from "@/components/posts-time-series"
import { CommunityDistribution } from "@/components/community-distribution"
import { SentimentOverview } from "@/components/sentiment-overview"
import { TopSubreddits } from "@/components/top-subreddits"

export function Overview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Posts Activity</CardTitle>
          <CardDescription>Post volume over time with engagement metrics</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <PostsTimeSeries />
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Community Distribution</CardTitle>
          <CardDescription>Key communities contributing to results</CardDescription>
        </CardHeader>
        <CardContent>
          <CommunityDistribution />
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Top Subreddits</CardTitle>
          <CardDescription>Most active subreddits by post count</CardDescription>
        </CardHeader>
        <CardContent>
          <TopSubreddits />
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Sentiment Analysis</CardTitle>
          <CardDescription>Sentiment distribution across posts</CardDescription>
        </CardHeader>
        <CardContent>
          <SentimentOverview />
        </CardContent>
      </Card>
    </div>
  )
}
