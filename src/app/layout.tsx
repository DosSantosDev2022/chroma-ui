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
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main>
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </Providers>
    </html>
  );
}
