import Head from "next/head";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Projects from "@/sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua | Front-End Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Joshua Moore – a front-end developer crafting sleek, responsive web experiences with precision using React, Next.js, and modern design tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <ThemeToggle />
    </>
  );
}
