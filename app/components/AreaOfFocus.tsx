import React from "react";

function AreaOfFocus() {
  return (
    <div className="mx-auto max-w-7xl mb-16">
      <div className="mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4">
          Our Area of Focus
        </h1>
        <p className="">
          In our quest to help make success available to everyone, we have{" "}
          initial strategic direction <br /> to focus on these five key areas at
          the lab
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mx-4">
        <div className="w-full bg-black text-white flex flex-col justify-between px-6 py-6">
          <p className="text-lg font-bold pb-0 sm:pb-16">01</p>
          <p className="text-lg">Business Support & Incubation</p>
        </div>
        <div className="w-full bg-orange-500 text-white flex flex-col justify-between px-6 py-6 ">
          <p className="text-lg font-bold">02</p>
          <p className="text-lg">On-Demand and As-A-Service</p>
        </div>
        <div className="w-full bg-pink-500 text-white flex flex-col justify-between px-6 py-6">
          <p className="text-lg font-bold">03</p>
          <p className="text-lg">Marketplace & Crowdsourcing</p>
        </div>
        <div className="w-full bg-cyan-500 text-white flex flex-col justify-between px-6 py-6">
          <p className="text-lg font-bold">04</p>
          <p className="text-lg">Aggregation & Shared Economy</p>
        </div>
        <div className="w-full bg-pink-500 text-white flex flex-col justify-between px-6 py-6">
          <p className="text-lg font-bold">05</p>
          <p className="text-lg">Decentralized Economy & Digital Assets</p>
        </div>
      </div>
    </div>
  );
}

export default AreaOfFocus;
