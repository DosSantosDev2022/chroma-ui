import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/sidebar/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Header } from "@/components/layout/header";
import { Providers } from "@/provider/providers";


export const metadata: Metadata = {
  title: "Chroma UI App",
  description: "Kit de componentes React Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <Providers>
        <SidebarProvider>
          {/* O container principal que define o layout da página */}
          <div className="flex h-screen w-full bg-background">
            <AppSidebar />

            {/* AQUI ESTÁ A SOLUÇÃO DEFINITIVA PARA O LAYOUT */}
            {/* 1. min-w-0: Permite que este container encolha, ignorando o tamanho do seu filho. */}
            {/* 2. flex flex-col: Organiza o Header e o Main verticalmente. */}
            <div className="flex flex-1 flex-col min-w-0">
              <Header />
              {/* 3. overflow-auto: O <main> agora é o único responsável por TODO o scroll. */}
              <main className="flex-1 overflow-auto scrollbar-custom">
                {children}
              </main>
            </div>

          </div>
        </SidebarProvider>
      </Providers>
    </html>
  );
}
