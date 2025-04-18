"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

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
      content: "Hello! I can help you analyze social media data. Ask me about trends, topics, or specific metrics.",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAiResponse(input)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  const generateAiResponse = (query: string): string => {
    // This would be replaced with actual AI integration
    const responses = [
      "Based on the data, there's been a 24% increase in posts about this topic over the last month.",
      "The sentiment analysis shows predominantly positive reactions to this trend, with 68% positive mentions.",
      "Looking at the community distribution, r/technology and r/politics are the most active in discussing this topic.",
      "The data indicates a correlation between this topic and increased user engagement, particularly on weekends.",
      "I've analyzed the time series data, and this topic shows seasonal patterns with peaks in January and July.",
      "When comparing different platforms, Twitter shows 3x more activity on this topic than Reddit.",
      "The network analysis reveals that influencer accounts are driving most of the conversation around this topic.",
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  return (
    <div className="flex h-[400px] flex-col">
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
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex items-center gap-2 border-t p-4">
        <Input
          ref={inputRef}
          placeholder="Ask about social media trends..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}
        />
        <Button size="icon" onClick={handleSend}>
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  )
}
