import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martins Solicitors | Eccles, Greater Manchester",
  description:
    "Martins Solicitors in Eccles, Greater Manchester — providing professional legal services in Conveyancing, Commercial Property, Wills & Probate, Lasting Powers of Attorney, and Family Law for over 30 years. Authorised and regulated by the SRA.",
  keywords: [
    "solicitors Eccles",
    "solicitors Greater Manchester",
    "conveyancing Eccles",
    "family law Manchester",
    "wills probate Eccles",
    "lasting powers of attorney",
    "commercial property solicitors",
    "Martins Solicitors",
    "Martins Lawyers",
  ],
  authors: [{ name: "Martins Solicitors" }],
  metadataBase: new URL("https://www.martinslawyers.co.uk"),
  openGraph: {
    title: "Martins Solicitors | Eccles, Greater Manchester",
    description:
      "Professional legal services in Eccles for over 30 years. Conveyancing, Family Law, Wills & Probate, Commercial Property and more.",
    type: "website",
    locale: "en_GB",
    siteName: "Martins Solicitors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martins Solicitors | Eccles, Greater Manchester",
    description:
      "Professional legal services in Eccles for over 30 years. Conveyancing, Family Law, Wills & Probate, Commercial Property and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
