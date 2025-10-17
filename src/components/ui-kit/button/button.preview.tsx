'use client'
import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
