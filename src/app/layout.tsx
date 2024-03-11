import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type_second } from "@/functions/fonts";
import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer";

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
        <div className="flex flex-col min-h-screen md:min-h-[calc(100vh + 10rem)]">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
