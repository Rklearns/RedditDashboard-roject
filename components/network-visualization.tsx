"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export function NetworkVisualization() {
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

    // Draw network visualization
    drawNetwork(ctx, canvas.width, canvas.height)

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = canvasRef.current.offsetWidth
      canvasRef.current.height = canvasRef.current.offsetHeight
      if (ctx) {
        drawNetwork(ctx, canvasRef.current.width, canvasRef.current.height)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Function to draw the network visualization
  const drawNetwork = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Center of the canvas
    const centerX = width / 2
    const centerY = height / 2

    // Draw nodes and connections
    const nodes = generateNodes()
    const connections = generateConnections(nodes)

    // Draw connections first (lines between nodes)
    ctx.strokeStyle = "rgba(150, 150, 150, 0.3)"
    ctx.lineWidth = 1

    connections.forEach((conn) => {
      const sourceNode = nodes.find((n) => n.id === conn.source)
      const targetNode = nodes.find((n) => n.id === conn.target)

      if (sourceNode && targetNode) {
        ctx.beginPath()
        ctx.moveTo(centerX + sourceNode.x, centerY + sourceNode.y)
        ctx.lineTo(centerX + targetNode.x, centerY + targetNode.y)
        ctx.stroke()
      }
    })

    // Draw nodes (circles)
    nodes.forEach((node) => {
      ctx.beginPath()
      ctx.arc(centerX + node.x, centerY + node.y, node.size, 0, Math.PI * 2)
      ctx.fillStyle = node.color
      ctx.fill()

      // Draw node labels
      ctx.fillStyle = "#333"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(node.label, centerX + node.x, centerY + (node.y + node.size + 5))
    })
  }

  // Generate sample nodes
  const generateNodes = () => {
    // This would normally come from your data
    return [
      { id: 1, label: "User1", x: -100, y: -80, size: 15, color: "#766CDB", category: "influencer" },
      { id: 2, label: "User2", x: 80, y: -90, size: 12, color: "#766CDB", category: "influencer" },
      { id: 3, label: "User3", x: 150, y: 20, size: 10, color: "#DA847C", category: "regular" },
      { id: 4, label: "User4", x: -50, y: 100, size: 8, color: "#DA847C", category: "regular" },
      { id: 5, label: "User5", x: -150, y: 50, size: 7, color: "#D9CC8B", category: "new" },
      { id: 6, label: "User6", x: 0, y: -150, size: 9, color: "#D9CC8B", category: "new" },
      { id: 7, label: "User7", x: 50, y: 150, size: 11, color: "#7CD9A5", category: "bot" },
      { id: 8, label: "User8", x: -180, y: -40, size: 6, color: "#7CD9A5", category: "bot" },
      { id: 9, label: "User9", x: 120, y: -150, size: 8, color: "#766CDB", category: "influencer" },
      { id: 10, label: "User10", x: -100, y: 180, size: 10, color: "#DA847C", category: "regular" },
    ]
  }

  // Generate connections between nodes
  const generateConnections = (nodes: any[]) => {
    // This would normally come from your data
    return [
      { source: 1, target: 2 },
      { source: 1, target: 3 },
      { source: 1, target: 5 },
      { source: 2, target: 4 },
      { source: 2, target: 6 },
      { source: 3, target: 7 },
      { source: 4, target: 8 },
      { source: 5, target: 9 },
      { source: 6, target: 10 },
      { source: 7, target: 9 },
      { source: 8, target: 10 },
      { source: 9, target: 10 },
    ]
  }

  const refreshNetwork = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    drawNetwork(ctx, canvas.width, canvas.height)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={refreshNetwork}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="relative h-[500px] w-full rounded-md border">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#766CDB" }} />
          <span className="text-xs">Influencers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#DA847C" }} />
          <span className="text-xs">Regular Users</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#D9CC8B" }} />
          <span className="text-xs">New Users</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#7CD9A5" }} />
          <span className="text-xs">Potential Bots</span>
        </div>
      </div>
    </div>
  )
}
