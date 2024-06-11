import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
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
      <Head>
        <script
          id="pixel-chaty"
          async
          src="https://cdn.chaty.app/pixel.js?id=GhXkF5oM"
        ></script>
      </Head>

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
