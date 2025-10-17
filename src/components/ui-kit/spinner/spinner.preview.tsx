"use client"
import { Spinner } from "./index"

export default function SpinnerPreview() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Spinner />
    </div>
  )
}
