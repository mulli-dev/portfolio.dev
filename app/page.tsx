import Image from "next/image";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Head from "next/head";

import Hero from "@/components/main/Hero";
export default function Home() {
  return (
    <main className="h-full w-full">
      <Head>
        <script
          id="pixel-chaty"
          async
          src="https://cdn.chaty.app/pixel.js?id=GhXkF5oM"
        ></script>
      </Head>

      <div className="flex flex-col  gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
