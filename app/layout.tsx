import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUREO | Personal Training",
  description: "Treinamento pessoal de alta performance, criado como demonstração de portfólio.",
  openGraph: {
    title: "AUREO | Personal Training",
    description: "Construa um corpo à altura da sua rotina.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AUREO | Personal Training",
    description: "Construa um corpo à altura da sua rotina.",
    images: ["/og.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
