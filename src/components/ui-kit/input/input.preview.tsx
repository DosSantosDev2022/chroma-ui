'use client'
import { Input } from "./index"; // Importa o componente REAL

export default function InputPreview() {
  return <Input type="email" placeholder="Email" className="w-full max-w-sm" />;
}