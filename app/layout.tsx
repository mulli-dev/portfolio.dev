import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import StarCanvas from "@/components/main/StarCanvas";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mulli Portfolio",
  description: " This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        id="chatway"
        async
        src="https://cdn.chatway.app/widget.js?id=grKyVYmXKMUD"
      ></script>

      <body
        className={`${inter.className} bg-[#030014]  overflow-y-scroll overflow-x-hidden`}
      >
        <StarCanvas />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
