import Link from "next/link";
import React from "react";

function Networkbuilder() {
  return (
    <div className="mx-auto max-w-6xl mb-16 px-4">
      <div className="mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Network of builders helping <br className="hidden md:block" />
          startups scale
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="bg-white rounded-xl w-full lg:w-[48%] px-6 md:px-8 py-4 mb-8 lg:mb-0">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-bold">
            Work with Service incubators to expedite your time-to-market
          </h1>
          <div className="py-4">
            <p className="text-gray-700 pb-2">
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
        <div className="bg-white rounded-xl w-full lg:w-[48%] px-6 md:px-8 py-4">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-bold">
            Access funding after your MVP is validated
          </h1>
          <div className="py-4">
            <p className="text-gray-700 pb-2">
              Startups that have built and validated their product can take
              advantage of the financial resources of the Investors Network
              elevating their potential for success in the venture capital
              landscape.
            </p>
            <p className="font-medium pb-4">
              Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
              months.
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
