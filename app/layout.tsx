import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Claude Code Quiz — Teste seu Conhecimento",
  description:
    "Quiz de Verdadeiro ou Falso sobre Claude Code. Do iniciante ao avançado. Descubra o quanto você sabe sobre a ferramenta de IA da Anthropic.",
  openGraph: {
    title: "Claude Code Quiz",
    description: "Teste seus conhecimentos sobre o Claude Code!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased bg-bg-primary text-txt min-h-screen">
        {children}
      </body>
    </html>
  );
}
