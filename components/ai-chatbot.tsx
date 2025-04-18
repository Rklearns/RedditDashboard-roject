"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot } from "lucide-react"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function AiChatbot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI assistant for social media analytics. Ask me about trends, topics, sentiment analysis, or any insights you need from your social data.",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response with typing indicator
    setTimeout(() => {
      const aiResponse = generateAiResponse(input.toLowerCase())
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAiResponse = (query: string): string => {
    // More detailed and varied responses based on query content
    if (query.includes("trend") || query.includes("trending")) {
      return "Based on the latest data, the top trending topics are politics (up 193%), sports (up 166%), and entertainment (up 82%). Technology topics have seen a decline of 38% over the past month. Would you like me to generate a detailed report on any of these trends?"
    }

    if (query.includes("sentiment") || query.includes("opinion")) {
      return "The sentiment analysis shows predominantly positive reactions across platforms (45% positive, 35% neutral, 20% negative). Instagram has the most positive sentiment at 60%, while Twitter shows the highest negative sentiment at 25%. This suggests you might want to tailor your content strategy differently for Twitter compared to other platforms."
    }

    if (query.includes("community") || query.includes("subreddit") || query.includes("group")) {
      return "The most active communities discussing your topics are r/technology (35%), r/politics (25%), and r/entertainment (20%). r/technology has seen a 15% decrease in activity over the past month, while r/politics has grown by 22%. Would you like to see a breakdown of post types within these communities?"
    }

    if (query.includes("engagement") || query.includes("interaction")) {
      return "Engagement metrics show that posts about politics receive 42% more comments than average, while technology posts get 37% more upvotes. The optimal posting time appears to be between 8-10am EST, which shows a 28% higher engagement rate compared to other times. Video content receives 3.2x more engagement than text-only posts."
    }

    if (query.includes("compare") || query.includes("versus") || query.includes("vs")) {
      return "Comparing the platforms: Reddit shows the highest engagement rate (4.6%), followed by Twitter (3.8%), Facebook (2.9%), and Instagram (2.7%). However, Instagram content has the most positive sentiment (60% positive), while Twitter has the most negative (25% negative). Reddit generates the most in-depth discussions with an average of 24 comments per post."
    }

    if (query.includes("recommend") || query.includes("suggestion") || query.includes("advice")) {
      return "Based on your data, I recommend focusing more resources on Instagram and Reddit, which show the highest positive sentiment and engagement respectively. Consider posting more video content, which receives 3.2x more engagement. For Twitter, focus on more positive messaging to counter the higher negative sentiment. The optimal posting schedule would be 3-4 times per week between 8-10am EST."
    }

    if (query.includes("predict") || query.includes("forecast") || query.includes("future")) {
      return "My predictive analysis suggests that politics and sports topics will continue to grow in popularity over the next quarter, while technology topics may continue to decline. Based on seasonal patterns, expect a 15-20% increase in overall engagement during the upcoming holiday season. The emerging topic of 'sustainable living' shows early signs of becoming a major trend in the next 2-3 months."
    }

    if (query.includes("summary") || query.includes("overview")) {
      return "Here's a summary of your social media performance: Total posts: 12,543 (up 15% MoM), Engagement rate: 4.6% (up 2.1% MoM), Active communities: 342 (24 new), Total comments: 87,429 (up 9.2% MoM). Your content performs best on Reddit and Instagram, with politics and sports showing the strongest growth. Sentiment is predominantly positive (45%) and improving month-over-month."
    }

    if (query.includes("help") || query.includes("can you") || query.includes("how to")) {
      return "I can help you analyze your social media data in several ways: 1) Track trends and topic performance over time, 2) Analyze sentiment across platforms, 3) Identify key communities and influencers, 4) Compare performance across different platforms, 5) Provide content recommendations based on engagement data, 6) Generate predictive insights for future planning. What specific area would you like to explore?"
    }

    // Default responses for other queries
    const defaultResponses = [
      "Based on the data, there's been a 24% increase in posts about this topic over the last month. The engagement rate has also improved by 3.2%, suggesting growing interest from your audience.",
      "Looking at the community distribution, r/technology and r/politics are the most active in discussing this topic, accounting for 35% and 25% of all posts respectively. Would you like me to analyze the sentiment within these communities?",
      "The data indicates a strong correlation between this topic and increased user engagement, particularly on weekends. Posts published on Saturday and Sunday receive 37% more comments and 42% more upvotes compared to weekday posts.",
      "I've analyzed the time series data, and this topic shows seasonal patterns with peaks in January and July. There's also a weekly pattern with higher engagement on Wednesdays and Sundays. Would you like me to generate an optimal posting schedule?",
      "When comparing different platforms, Reddit shows 3x more activity on this topic than Twitter, but Twitter posts receive 28% more shares. Instagram has the most positive sentiment at 60%, while Twitter has the highest negative sentiment at 25%.",
      "The network analysis reveals that influencer accounts are driving most of the conversation around this topic. The top 5 influencers account for 42% of all engagement. Would you like me to identify potential partnership opportunities with these influencers?",
      "Based on your historical data, I predict this topic will see a 15-20% growth in engagement over the next quarter. The sentiment is likely to remain predominantly positive, with a potential increase in neutral opinions as the topic becomes more mainstream.",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  return (
    <div className="flex h-[500px] flex-col rounded-lg border">
      <div className="flex items-center gap-2 border-b p-3">
        <Bot className="h-5 w-5 text-primary" />
        <span className="font-medium">Social Media Analytics Assistant</span>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef as any}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex max-w-[80%] items-start gap-3 rounded-lg p-3 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div className="flex-1">
                  <p className="text-sm">{message.content}</p>
                  <p className="mt-1 text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex max-w-[80%] items-start gap-3 rounded-lg bg-muted p-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-primary"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-primary"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="flex items-center gap-2 border-t p-3">
        <Input
          ref={inputRef}
          placeholder="Ask about social media trends, sentiment, or communities..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}
          className="flex-1"
        />
        <Button size="icon" onClick={handleSend} disabled={isTyping}>
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  )
}
