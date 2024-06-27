"use client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Network from "./components/Network";
import Networkbuilder from "./components/Networkbuilder";
import AreaOfFocus from "./components/AreaOfFocus";
import Concept from "./components/Concept";
import IncubationModel from "./components/IncubationModel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Network />
      <Networkbuilder />
      <AreaOfFocus />
      <Concept />
      <IncubationModel />
    </div>
  );
}
