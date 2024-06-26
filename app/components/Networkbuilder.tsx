import Link from "next/link";
import React from "react";

function Networkbuilder() {
  return (
    <div className=" mx-auto max-w-6xl mb-16">
      <div className="mx-auto text-center mb-10">
        {" "}
        <h1 className="text-5xl font-bold">
          Network of builders helping <br />
          startup scale
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-white rounded-xl w-[550px] px-8 py-4 mb-16">
          <h1 className="md:text-xl lg:text-2xl font-bold">
            Work with Service incubators to expedite your time-to-market
          </h1>
          <div className="py-4">
            <p className="text-gray-700 pb-2">
              {" "}
              Collaborators with our meticulously chosen service partners, each
              with a vested interest, ensuring a shared commitment to success in
              the game of venture building.
            </p>
            <p className="font-medium pb-4">
              For 7.5% equity, you get a product manager, product designer,
              frontend engineer, software engineer and growth marketer to build
              the MVP of your app or web application and validate it.
            </p>
            <Link className="font-bold underline" href="#">
              Learn More
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-xl w-[550px] px-8 py-4 mb-16">
          <h1 className="md:text-xl lg:text-2xl font-bold">
            Work with Service incubators to expedite your time-to-market
          </h1>
          <div className="py-4">
            <p className="text-gray-700 pb-2">
              {" "}
              Collaborators with our meticulously chosen service partners, each
              with a vested interest, ensuring a shared commitment to success in
              the game of venture building.
            </p>
            <p className="font-medium pb-4">
              For 7.5% equity, you get a product manager, product designer,
              frontend engineer, software engineer and growth marketer to build
              the MVP of your app or web application and validate it.
            </p>
            <Link className="font-bold underline" href="#">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Networkbuilder;
