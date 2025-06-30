import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elpida Yayıncılık",
  description: "ELpida Yayınclık Websitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full bg-white dark:bg-black`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
