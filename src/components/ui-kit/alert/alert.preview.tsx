"use client"
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./index"

export default function AlertPreview() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Sucesso! Suas alterações foram salvas</AlertTitle>
        <AlertDescription>
          Este é um alerta com ícone, título e descrição. Foi salvo
        </AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>
          Este é um alerta com ícone, título e descrição. Foi salvo
        </AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Não foi possível processar seu pagamento.</AlertTitle>
        <AlertDescription>
          <p>Por favor, verifique suas informações de cobrança e tente novamente.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Verifique os detalhes do seu cartão</li>
            <li>Garanta fundos suficientes</li>
            <li>Verificar endereço de cobrança</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}
