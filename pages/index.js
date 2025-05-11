import Head from "next/head";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Projects from "@/sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Projects/>
      <ThemeToggle/>
    </>
  );
}
