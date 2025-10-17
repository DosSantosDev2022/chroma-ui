"use client"

import { Checkbox } from "./index"

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <label htmlFor="terms">Aceitar termos e condições</label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <label htmlFor="terms-2">Aceitar termos e condições</label>
          <p className="text-muted-foreground text-sm">
            Ao marcar esta caixa, você concorda com os termos e condições.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="toggle" disabled />
        <label htmlFor="toggle">Ativar notificações</label>
      </div>
      <label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox
          id="toggle-2"
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Ativar notificações
          </p>
          <p className="text-muted-foreground text-sm">
            Você pode ativar ou desativar as notificações a qualquer momento.
          </p>
        </div>
      </label>
    </div>
  )
}
