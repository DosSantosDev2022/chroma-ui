"use client"

// 1. Importações necessárias
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "../button" // Assumindo que você tem um componente de botão
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./index"
import { Input } from "../input"
import { toast } from "sonner"

// 2. Definindo o esquema do formulário com Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "O nome de usuário deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
})

// 3. Componente do formulário
export default function FormPreview() {
  // Configurando o formulário com useForm e o resolver do Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  })

  // 4. Função para lidar com o envio dos dados
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Formulário enviado!")
    form.reset()
  }

  // 5. Estrutura do formulário em JSX
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Campo Nome de Usuário */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormDescription>Este é o seu nome de exibição público.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Campo E-mail */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="seu.email@exemplo.com" {...field} />
              </FormControl>
              <FormDescription>Usaremos este e-mail para entrar em contato.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Botão de Envio */}
        <Button className="w-full" type="submit">Enviar</Button>
      </form>
    </Form>
  )
}