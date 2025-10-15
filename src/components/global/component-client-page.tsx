'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Copy, Check } from 'lucide-react';

// Importe os componentes do shadcn/ui que você está a usar
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

// Define a "forma" das props que este componente espera receber
interface ComponentClientPageProps {
  title: string;
  description: string;
  dependencies: string[];
  code: string;
  // O tipo React.ComponentType significa "um componente React"
  PreviewComponent: React.ComponentType;
}

export function ComponentClientPage({
  title,
  description,
  dependencies,
  code,
  PreviewComponent
}: ComponentClientPageProps) {

  // --- Estados para interatividade ---
  const [isCopied, setIsCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDependency, setSelectedDependency] = useState('');
  const [isCommandCopied, setIsCommandCopied] = useState(false);

  // --- Funções Handler ---
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => console.error('Falha ao copiar o código: ', err));
  };

  const handleDependencyClick = (dependency: string) => {
    setSelectedDependency(dependency);
    setIsModalOpen(true);
  };

  const handleCopyDependencyCommand = () => {
    if (!selectedDependency) return;
    const command = `npm install ${selectedDependency}`;
    navigator.clipboard.writeText(command).then(() => {
      setIsCommandCopied(true);
      setTimeout(() => setIsCommandCopied(false), 2000);
    }).catch(err => console.error('Falha ao copiar o comando: ', err));
  };

  return (
    <>
      <div className="container p-4 sm:p-6 md:p-8 text-foreground">
        {/* Cabeçalho e Descrição com tipografia responsiva */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{title}</h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">{description}</p>

        {/* Dependências */}
        <h2 className="text-xl md:text-2xl font-semibold mb-4 pb-2 border-b border-border">
          Dependências
        </h2>
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
          {dependencies.map((dep) => (
            <Button
              variant={'outline'}
              size={'sm'} // Botões ligeiramente menores
              key={dep}
              onClick={() => handleDependencyClick(dep)}
            >
              {dep}
            </Button>
          ))}
        </div>

        {/* Preview */}
        <h2 className="text-xl md:text-2xl font-semibold mb-4 pb-2 border-b border-border">
          Preview
        </h2>
        <div className="border border-border rounded-lg mb-6 md:mb-8">
          <div className="flex min-h-[150px] sm:min-h-[200px] w-full items-center justify-center p-4 sm:p-8">
            <PreviewComponent />
          </div>
        </div>

        {/* Código Fonte */}
        <h2 className="text-xl md:text-2xl font-semibold mb-4 pb-2 border-b border-border">
          Código Fonte
        </h2>
        {/* Container do código com overflow horizontal */}
        <div className="relative">
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3 h-8 w-8 z-10" // z-10 para garantir que fica por cima
            onClick={handleCopyCode}
          >
            {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            showLineNumbers
            customStyle={{
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* Modal de Dependências */}
      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => {
          setIsModalOpen(open);
          if (!open) {
            setIsCommandCopied(false);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Instalar Dependência</DialogTitle>
            <DialogDescription>
              Copie o comando abaixo para instalar a dependência no seu projeto.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between gap-2 bg-muted p-3 rounded-md">
            {/* Código com quebra de linha para evitar overflow */}
            <code className="text-sm text-muted-foreground break-all">
              {`npm install ${selectedDependency}`}
            </code>
            <Button size="icon" variant="ghost" className="h-8 w-8 flex-shrink-0" onClick={handleCopyDependencyCommand}>
              {isCommandCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}