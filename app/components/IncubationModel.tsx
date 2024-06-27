import React from "react";
import Image from "next/image";

function IncubationModel() {
  return (
    <div className="mx-auto max-w-7xl mb-16">
      <div className="mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4">
          Our Service Incubation Model
        </h1>
        <p className="max-w-4xl mx-auto">
          The Service Incubation Model is an alternate funding model for startup
          that allows professionals to offer their services to the startup in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12-24 months as been first to invest.
        </p>
      </div>
      <div className="mb-12 mx-4">
        <h1 className="text-xl font-bold pb-2">Hypothesis</h1>
        <p>
          Just a few reasons we know its time for this model within the
          ecosystem
        </p>
      </div>
      <div className="flex items-center justify-between mx-4">
        <div className="w-[360px] h-60 bg-white rounded-xl py-4 px-4 flex flex-col justify-between">
          <Image
            src="/triangle.svg"
            alt="triangle image"
            width={40}
            height={40}
          />
          <p>
            Most early-stage companies and pre-product startups cannot afford
            professional services especially those who don’t have family and
            friends’ network that can support
          </p>
        </div>
        <div className="w-[360px] h-60 bg-white rounded-xl py-4 px-4 flex flex-col justify-between">
          <Image src="/quad.svg" alt="quad image" width={40} height={40} />
          <p>
            If startups can seed 5-10% in equity to incubators for $20k to $200k
            funding most times, they will be willing to seed 10% equity for a
            $25k service investment
          </p>
        </div>{" "}
        <div className="w-[360px] h-60 bg-white rounded-xl py-4 px-4 flex flex-col justify-between">
          <Image src="/pent.svg" alt="pent image" width={40} height={40} />
          <p>
            Young professionals who don’t have a lot of money to invest nor an
            accredited investors will have opportunities to take equity at the
            early stage of their career, usually been the first to invest and
            almost guaranteed of return
          </p>
        </div>
      </div>
    </div>
  );
}

export default IncubationModel;
