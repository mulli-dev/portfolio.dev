import Image from "next/image";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Head from "next/head";

import Hero from "@/components/main/Hero";
export default function Home() {
  return (
    <main className="h-full w-full">
      <script
        id="chatway"
        async
        src="https://cdn.chatway.app/widget.js?id=grKyVYmXKMUD"
      ></script>

      <div className="flex flex-col  gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
