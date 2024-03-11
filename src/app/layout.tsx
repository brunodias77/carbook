import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type_second } from "@/functions/fonts";
import "./globals.css";
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Book",
  description: "Rede social para amantes de carros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
