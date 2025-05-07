import Head from "next/head";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
    </>
  );
}
