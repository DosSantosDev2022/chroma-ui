'use client'
import { Checkbox } from "../checkbox"
import { Label } from "./index"

export default function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Aceitar termos e condições</Label>
      </div>
    </div>
  )
}
