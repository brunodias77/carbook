import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type_second } from "@/functions/fonts";
import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer";
import { UserContextProvider } from "@/context/user-context";
import userGet from "@/actions/user-get";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Book",
  description: "Rede social para amantes de carros.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGet();

  return (
    <html lang="pt-BR">
      <body className={type_second.className}>
        <UserContextProvider user={user}>
          <div className="flex flex-col min-h-screen md:min-h-[calc(100vh + 10rem)]">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
