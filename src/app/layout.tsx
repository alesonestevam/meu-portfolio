import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

// Load the Exo font
const exo = Exo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: "Aleson Estevam | %s",
    absolute: "Aleson Estevam",
    default: "Aleson Estevam",
  },
  description: "Aleson Estevam Designer",
  applicationName: "Aleson Estevam Portfolio",
  alternates: {
    canonical: "https://alesonestevam.com",
    languages: {
      "pt-BR": "https://alesonestevam.com",
    },
  },
  authors: {
    name: "Aleson Estevam",
    url: "https://alesonestevam.com",
  },
  generator: "Next.js",
  keywords: ["Aleson Estevam Designer"],
  referrer: "origin",
  creator: "Aleson Estevam Designer",
  publisher: "Aleson Estevam Designer",
  robots: {
    index: false,
    follow: false,
  },
  icons: [
    { rel: "icon", url: "favicon.ico" },
    {
      rel: "icon",
      url: "favicons/logo_softlime_aleson_16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "favicons/logo_softlime_aleson_32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "favicons/logo_softlime_aleson_180.png",
      type: "image/png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "favicons/logo_softlime_aleson_256.png",
      type: "image/png",
      sizes: "256x256",
    },
    {
      rel: "icon",
      url: "favicons/logo_softlime_aleson_512.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],
  formatDetection: {
    telephone: false,
  },
  archives: null,
  assets: [],
  bookmarks: "/bookmarks",
  category: "Portfolio",
  classification: "Portfolio público",
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
