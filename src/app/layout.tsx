import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import ink from "@/assets/ink-gray-2.png";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   preload: true,
//   display: "swap",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   preload: true,
//   display: "swap",
// });

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
        className={`  antialiased w-full h-full bg-white dark:bg-black overflow-x-hidden `}
      >
        <div className=" absolute justify-center md:right-[-10%] top-[-10%] sm:top-[-16%]  md:top-[-20%] flex  z-[0] ">
          <Image
            alt="beyaz mürekkep lekesi elpida yayınclık'ın estetik bakış açısı"
            src={ink}
            width={500}
            height={600}
            priority
            role="presentation"
            
          />
        </div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
