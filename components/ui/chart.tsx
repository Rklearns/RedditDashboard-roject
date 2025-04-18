"use client"

import React from "react"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
}

export const ChartContainer = ({
  children,
  config,
  className,
}: {
  children: React.ReactNode
  config?: Record<string, { label: string; color: string }>
  className?: string
}) => {
  return (
    <div
      className={className}
      style={
        config ? Object.fromEntries(Object.entries(config).map(([key, value]) => [`--color-${key}`, value.color])) : {}
      }
    >
      {children}
    </div>
  )
}

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const ChartTooltipContent = ({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: any[]
  label?: string
}) => {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="font-medium">{label}</div>
        <div className="font-medium text-right">Value</div>
        {payload.map((entry, index) => (
          <React.Fragment key={`item-${index}`}>
            <div
              className="flex items-center gap-1"
              style={{
                color: entry.color,
              }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: entry.color,
                }}
              />
              <span>{entry.name}</span>
            </div>
            <div
              className="text-right"
              style={{
                color: entry.color,
              }}
            >
              {entry.value}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
