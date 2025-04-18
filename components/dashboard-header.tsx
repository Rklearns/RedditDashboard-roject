"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 lg:px-8">
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-lg text-primary">SocialAnalytics</span>
      </div>
      <div className="flex items-center gap-2">
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
  )
}
