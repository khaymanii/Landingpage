"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

function Hero() {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full bg-white mb-16">
      <div className="max-w-7xl mx-auto ml-0 sm:ml-64 pt-10 mb-8 md:mb-0">
        <h1 className="text-3xl sm:text-6xl md:text-3xl font-bold pb-4 px-4">
          SINC Partners is a service incubation company
        </h1>
        <p className=" pb-4 px-4">
          Connecting Experts in product development and growth marketing willing
          to offer <br /> their services to amazing startups in exchange for
          minute equity (usually 0.5% to 2%).
        </p>
        <Button className="py-4 px-8 mx-4" onClick={handleClick}>
          SINC With Us
        </Button>
      </div>
      <div className="hidden md:block w-full md:w-1/2">
        <Image
          src="/hero.svg"
          alt="hero image"
          objectFit="cover"
          quality={100}
          height={50}
          width={50}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default Hero;
