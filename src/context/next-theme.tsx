"use client";

import "@/app/[lang]/globals.css";
import { ThemeProvider } from "next-themes";

function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default NextThemeProvider;
