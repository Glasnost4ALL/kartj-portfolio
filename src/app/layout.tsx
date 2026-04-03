import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageProtection from "@/components/ImageProtection";

export const metadata: Metadata = {
  title: "KARTj",
  description: "Photographie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <ImageProtection />
        {children}
        <Footer />
      </body>
    </html>
  );
}
