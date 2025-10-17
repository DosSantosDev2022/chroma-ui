'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./index"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Pago",
    totalAmount: "R$250.00",
    paymentMethod: "Transferência Bancária",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pendente",
    totalAmount: "R$150.00",
    paymentMethod: "Pix",
  },
  {
    invoice: "INV003",
    paymentStatus: "Não pago",
    totalAmount: "R$350.00",
    paymentMethod: "Cartão de Crédito",
  },
  {
    invoice: "INV004",
    paymentStatus: "Pago",
    totalAmount: "R$450.00",
    paymentMethod: "Cartão de Crédito",
  },
  {
    invoice: "INV005",
    paymentStatus: "Pago",
    totalAmount: "R$550.00",
    paymentMethod: "Pix",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pendente",
    totalAmount: "R$200.00",
    paymentMethod: "Transferência Bancária",
  },
  {
    invoice: "INV007",
    paymentStatus: "Não pago",
    totalAmount: "R$300.00",
    paymentMethod: "Cartão de Crédito",
  },
]

export default function TablePreview() {
  return (
    <Table>
      <TableCaption>Uma lista de suas faturas recentes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Fatura</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Método</TableHead>
          <TableHead className="text-right">Quantia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">R$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
