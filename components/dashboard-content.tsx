"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { PostsTimeSeries } from "@/components/posts-time-series"
import { TopicsTrends } from "@/components/topics-trends"
import { CommunityDistribution } from "@/components/community-distribution"
import { NetworkVisualization } from "@/components/network-visualization"
import { TopicModeling } from "@/components/topic-modeling"
import { AiChatbot } from "@/components/ai-chatbot"
import { SentimentAnalysis } from "@/components/sentiment-analysis"
import { StatsCards } from "@/components/stats-cards"

export function DashboardContent() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Social Media Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive analytics and insights for your social media data</p>
      </div>

      <StatsCards />

      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="time-series">Time Series</TabsTrigger>
          <TabsTrigger value="topics">Topics & Trends</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="ai-features">AI Features</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Overview />
        </TabsContent>

        <TabsContent value="time-series" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Posts Time Series</CardTitle>
              <CardDescription>Time series of the number of posts matching search queries</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <PostsTimeSeries />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="topics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Topics & Trends</CardTitle>
              <CardDescription>Time series of key topics, themes, and trends in the content</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <TopicsTrends />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Topic Modeling</CardTitle>
              <CardDescription>Semantic map of posts using topic modeling</CardDescription>
            </CardHeader>
            <CardContent>
              <TopicModeling />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Distribution</CardTitle>
              <CardDescription>Pie chart of communities that are key contributors to results</CardDescription>
            </CardHeader>
            <CardContent>
              <CommunityDistribution />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Visualization</CardTitle>
              <CardDescription>
                Network of accounts that have shared particular keywords, hashtags, or URLs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NetworkVisualization />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-features" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>AI Chatbot</CardTitle>
                <CardDescription>Query the data and answer questions about trends</CardDescription>
              </CardHeader>
              <CardContent>
                <AiChatbot />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sentiment Analysis</CardTitle>
                <CardDescription>AI-powered sentiment analysis of social media content</CardDescription>
              </CardHeader>
              <CardContent>
                <SentimentAnalysis />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
