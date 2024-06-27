"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

function Hero() {
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div className="max-w-[1440px] h-auto bg-white mx-auto mb-16 flex flex-col md:flex-row justify-between">
      <div className=" w-[354px] md:w-[490px] h-auto pl-6 md:pl-[120px] pt-8 md:pt-[87px]">
        <h1 className="text-xl sm:text-3xl md:text-3xl font-bold pb-4">
          SINC Partners is a service incubation company
        </h1>
        <p className="pb-4 text-base md:text-lg">
          Connecting experts in product development and growth marketing willing
          to offer their services to amazing startups in exchange for minute
          equity (usually 0.5% to 2%).
        </p>
        <Button
          className="px-6 md:px-8 py-2 md:py-4 mb-6"
          onClick={handleClick}
        >
          SINC With Us
        </Button>
      </div>
      <div className="hidden md:block">
        <Image src="/hero.svg" alt="hero image" width={700} height={600} />
      </div>
    </div>
  );
}

export default Hero;
