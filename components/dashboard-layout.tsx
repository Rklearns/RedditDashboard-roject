"use client"

import type React from "react"

import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger />
          <div className="relative flex-1 md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ModeToggle />
            <Button variant="outline" size="sm">
              Help
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </SidebarInset>
    </div>
  )
}
