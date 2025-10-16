"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./index"

const AccordionPreview = () => {
  return (
    <div className="w-full max-w-3xl p-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Perguntas Frequentes</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Isto é acessível?</AccordionTrigger>
          <AccordionContent>
            Sim. Adere a todas as especificações WAI-ARIA para um accordion.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>É possível estilizá-lo?</AccordionTrigger>
          <AccordionContent>
            Claro! Podes sobrescrever os estilos passando classes através da prop `className`.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Pode ser animado?</AccordionTrigger>
          <AccordionContent>
            Sim, já vem com uma animação de abertura e fecho por defeito, que pode ser personalizada.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AccordionPreview 