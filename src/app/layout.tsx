import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

// Load the Exo font
const exo = Exo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Aleson Estevam",
  description: "Aleson Estevam Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased ${exo.className} bg-[#262626]`}
      >
        <div className="flex flex-col min-h-screen xxl:px-40">
          <Header />
            <main className="flex-grow">
              {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
