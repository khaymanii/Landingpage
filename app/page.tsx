"use client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Network from "./components/Network";
import Networkbuilder from "./components/Networkbuilder";
import AreaOfFocus from "./components/AreaOfFocus";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Network />
      <Networkbuilder />
      <AreaOfFocus />
    </div>
  );
}
