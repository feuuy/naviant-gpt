import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import TextArea from "@/components/layout/TextArea";
import MobileMenu from "@/components/layout/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naviant",
  description: "A small LLM with enterprise capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>
          <MobileMenu />
          <Navbar />
          {children}
          <TextArea />
        </main>
      </body>
    </html>
  );
}
