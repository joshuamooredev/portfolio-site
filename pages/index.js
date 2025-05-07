import Head from "next/head";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ThemeToggle/>
    </>
  );
}
