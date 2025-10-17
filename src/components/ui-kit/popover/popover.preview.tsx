'use client'
import { Button } from "../button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./index"

export default function PopoverPreview() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Abrir popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensões</h4>
            <p className="text-muted-foreground text-sm">
              Defina as dimensões da camada.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
