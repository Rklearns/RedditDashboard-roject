"use client"

import { useEffect, useRef, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, RefreshCw } from "lucide-react"

export function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [filter, setFilter] = useState("all")
  const [zoom, setZoom] = useState([50])

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
    drawNetwork(ctx, canvas.width, canvas.height, filter, zoom[0])

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = canvasRef.current.offsetWidth
      canvasRef.current.height = canvasRef.current.offsetHeight
      if (ctx) {
        drawNetwork(ctx, canvasRef.current.width, canvasRef.current.height, filter, zoom[0])
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [filter, zoom])

  // Function to draw the network visualization
  const drawNetwork = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    filter: string,
    zoomLevel: number,
  ) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Calculate scale based on zoom level (50 is default)
    const scale = zoomLevel / 50

    // Center of the canvas
    const centerX = width / 2
    const centerY = height / 2

    // Draw nodes and connections
    const nodes = generateNodes(filter)
    const connections = generateConnections(nodes)

    // Draw connections first (lines between nodes)
    ctx.strokeStyle = "rgba(150, 150, 150, 0.3)"
    ctx.lineWidth = 1

    connections.forEach((conn) => {
      const sourceNode = nodes.find((n) => n.id === conn.source)
      const targetNode = nodes.find((n) => n.id === conn.target)

      if (sourceNode && targetNode) {
        ctx.beginPath()
        ctx.moveTo(centerX + sourceNode.x * scale, centerY + sourceNode.y * scale)
        ctx.lineTo(centerX + targetNode.x * scale, centerY + targetNode.y * scale)
        ctx.stroke()
      }
    })

    // Draw nodes (circles)
    nodes.forEach((node) => {
      ctx.beginPath()
      ctx.arc(centerX + node.x * scale, centerY + node.y * scale, node.size * scale, 0, Math.PI * 2)
      ctx.fillStyle = node.color
      ctx.fill()

      // Draw node labels
      ctx.fillStyle = "#333"
      ctx.font = `${Math.max(10, 12 * scale)}px sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(node.label, centerX + node.x * scale, centerY + (node.y + node.size + 5) * scale)
    })
  }

  // Generate sample nodes based on filter
  const generateNodes = (filter: string) => {
    // This would normally come from your data
    const baseNodes = [
      { id: 1, label: "User1", x: -100, y: -80, size: 15, color: "hsl(var(--chart-primary))", category: "influencer" },
      { id: 2, label: "User2", x: 80, y: -90, size: 12, color: "hsl(var(--chart-primary))", category: "influencer" },
      { id: 3, label: "User3", x: 150, y: 20, size: 10, color: "hsl(var(--chart-secondary))", category: "regular" },
      { id: 4, label: "User4", x: -50, y: 100, size: 8, color: "hsl(var(--chart-secondary))", category: "regular" },
      { id: 5, label: "User5", x: -150, y: 50, size: 7, color: "hsl(var(--chart-tertiary))", category: "new" },
      { id: 6, label: "User6", x: 0, y: -150, size: 9, color: "hsl(var(--chart-tertiary))", category: "new" },
      { id: 7, label: "User7", x: 50, y: 150, size: 11, color: "hsl(var(--chart-quaternary))", category: "bot" },
      { id: 8, label: "User8", x: -180, y: -40, size: 6, color: "hsl(var(--chart-quaternary))", category: "bot" },
      { id: 9, label: "User9", x: 120, y: -150, size: 8, color: "hsl(var(--chart-quinary))", category: "influencer" },
      { id: 10, label: "User10", x: -100, y: 180, size: 10, color: "hsl(var(--chart-quinary))", category: "regular" },
    ]

    if (filter === "all") return baseNodes
    return baseNodes.filter((node) => node.category === filter)
  }

  // Generate connections between nodes
  const generateConnections = (nodes: any[]) => {
    // This would normally come from your data
    const connections = [
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

    // Filter connections to only include nodes that are in the current view
    const nodeIds = nodes.map((n) => n.id)
    return connections.filter((conn) => nodeIds.includes(conn.source) && nodeIds.includes(conn.target))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Select defaultValue="all" onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Users</SelectItem>
            <SelectItem value="influencer">Influencers</SelectItem>
            <SelectItem value="regular">Regular Users</SelectItem>
            <SelectItem value="new">New Users</SelectItem>
            <SelectItem value="bot">Potential Bots</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setZoom([Math.max(10, zoom[0] - 10)])}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Slider className="w-[100px]" value={zoom} min={10} max={100} step={1} onValueChange={setZoom} />
          <Button variant="outline" size="icon" onClick={() => setZoom([Math.min(100, zoom[0] + 10)])}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setZoom([50])}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative h-[500px] w-full rounded-md border">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-primary" />
          <span className="text-xs">Influencers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-secondary" />
          <span className="text-xs">Regular Users</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-tertiary" />
          <span className="text-xs">New Users</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-quaternary" />
          <span className="text-xs">Potential Bots</span>
        </div>
      </div>
    </div>
  )
}
