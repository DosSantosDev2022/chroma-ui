// src/app/providers.tsx
"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={`${poppins.className}  antialiased scrollbar-custom`}
    >
      {/* <AuthProvider>
				<QueryProvider> */}
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem

      >
        {children}
      </NextThemesProvider>
      <Toaster position="top-center" richColors />
      {/* 	</QueryProvider>
			</AuthProvider> */}
    </body>
  );
}