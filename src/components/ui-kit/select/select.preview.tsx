'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./index"

export default function SelectPreview() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione uma fruta" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frutas</SelectLabel>
          <SelectItem value="apple">Maça</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Uvas</SelectItem>
          <SelectItem value="pineapple">Abacaxi</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
