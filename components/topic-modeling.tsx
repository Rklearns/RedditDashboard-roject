"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export function TopicModeling() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw topic modeling visualization
    drawTopicModeling(ctx, canvas.width, canvas.height)

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = canvasRef.current.offsetWidth
      canvasRef.current.height = canvasRef.current.offsetHeight
      if (ctx) {
        drawTopicModeling(ctx, canvasRef.current.width, canvasRef.current.height)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Function to draw the topic modeling visualization
  const drawTopicModeling = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Center of the canvas
    const centerX = width / 2
    const centerY = height / 2

    // Generate topic clusters
    const topics = [
      {
        name: "Technology",
        x: -100,
        y: -80,
        radius: 70,
        color: "rgba(118, 108, 219, 0.2)",
        borderColor: "rgba(118, 108, 219, 0.8)",
        words: ["AI", "software", "hardware", "programming", "computer"],
      },
      {
        name: "Politics",
        x: 100,
        y: -60,
        radius: 60,
        color: "rgba(218, 132, 124, 0.2)",
        borderColor: "rgba(218, 132, 124, 0.8)",
        words: ["election", "government", "policy", "vote", "democracy"],
      },
      {
        name: "Entertainment",
        x: 0,
        y: 100,
        radius: 65,
        color: "rgba(217, 204, 139, 0.2)",
        borderColor: "rgba(217, 204, 139, 0.8)",
        words: ["movie", "music", "celebrity", "streaming", "TV"],
      },
      {
        name: "Sports",
        x: -120,
        y: 60,
        radius: 55,
        color: "rgba(124, 217, 165, 0.2)",
        borderColor: "rgba(124, 217, 165, 0.8)",
        words: ["football", "basketball", "player", "team", "game"],
      },
    ]

    // Draw topic clusters
    topics.forEach((topic) => {
      // Draw cluster circle
      ctx.beginPath()
      ctx.arc(centerX + topic.x, centerY + topic.y, topic.radius, 0, Math.PI * 2)
      ctx.fillStyle = topic.color
      ctx.strokeStyle = topic.borderColor
      ctx.lineWidth = 2
      ctx.fill()
      ctx.stroke()

      // Draw topic name
      ctx.fillStyle = "#333"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(topic.name, centerX + topic.x, centerY + topic.y)

      // Draw topic words
      const wordRadius = topic.radius * 0.7
      topic.words.forEach((word, i) => {
        const angle = (i / topic.words.length) * Math.PI * 2
        const wordX = topic.x + Math.cos(angle) * wordRadius * 0.7
        const wordY = topic.y + Math.sin(angle) * wordRadius * 0.7

        ctx.font = "12px sans-serif"
        ctx.fillText(word, centerX + wordX, centerY + wordY)
      })
    })

    // Draw connections between related topics
    ctx.strokeStyle = "rgba(150, 150, 150, 0.3)"
    ctx.lineWidth = 1

    // Technology - Politics
    ctx.beginPath()
    ctx.moveTo(centerX + topics[0].x, centerY + topics[0].y)
    ctx.lineTo(centerX + topics[1].x, centerY + topics[1].y)
    ctx.stroke()

    // Technology - Entertainment
    ctx.beginPath()
    ctx.moveTo(centerX + topics[0].x, centerY + topics[0].y)
    ctx.lineTo(centerX + topics[2].x, centerY + topics[2].y)
    ctx.stroke()

    // Politics - Entertainment
    ctx.beginPath()
    ctx.moveTo(centerX + topics[1].x, centerY + topics[1].y)
    ctx.lineTo(centerX + topics[2].x, centerY + topics[2].y)
    ctx.stroke()

    // Sports - Entertainment
    ctx.beginPath()
    ctx.moveTo(centerX + topics[3].x, centerY + topics[3].y)
    ctx.lineTo(centerX + topics[2].x, centerY + topics[2].y)
    ctx.stroke()
  }

  const refreshTopics = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    drawTopicModeling(ctx, canvas.width, canvas.height)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={refreshTopics}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="relative h-[400px] w-full rounded-md border">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgba(118, 108, 219, 0.8)" }} />
          <span className="text-xs">Technology</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgba(218, 132, 124, 0.8)" }} />
          <span className="text-xs">Politics</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgba(217, 204, 139, 0.8)" }} />
          <span className="text-xs">Entertainment</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgba(124, 217, 165, 0.8)" }} />
          <span className="text-xs">Sports</span>
        </div>
      </div>
    </div>
  )
}
