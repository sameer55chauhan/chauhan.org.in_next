import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import NextThemeProvider from "@/context/next-theme";
import { i18n } from "../../i18n-config";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Prithviraj Chauhan | Titles",
  description: "Prithviraj Chauhan | Titles",
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {lang : string}
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
