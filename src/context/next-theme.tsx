"use client";

import "@/app/globals.css";
import { ThemeProvider } from "next-themes";

function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default NextThemeProvider;
