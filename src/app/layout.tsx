import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import NextThemeProvider from "@/context/next-theme";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prithvi Raj Chauhan III - Biography, AI bot, and articles",
  description:
    "Prithviraj Chauhan | TitlesExplore the life and achievements of Prithvi Raj Chauhan III, the legendary ruler. Read his detailed biography and engage in interactive conversations with the Prithvi Raj Chauhan AI Bot using ChatGPT integration. Discover a collection of informative articles about his reign and historical significance. Can read in multiple languages.",
  keywords:
    "prithvi raj chauhan ai bot, raso, raso hindi, raso english, biography prithviraj,  prithviraj raso, author prithviraj bhatt, is prithviraj chauhan real, about prithviraj raso,  samrat prithviraj, was blind vijay pratap singh, google scholar prithviraj raso written by prithviraj 3, information",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
