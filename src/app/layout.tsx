import type { Metadata } from "next";
import "./globals.css";

import TextArea from "@/components/ui/TextArea";

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
        <main>
          {children}
          <TextArea />
        </main>
      </body>
    </html>
  );
}
