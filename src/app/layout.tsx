import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import NextThemeProvider from "@/context/next-theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prithviraj Chauhan | Titles",
  description: "Prithviraj Chauhan | Titles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
