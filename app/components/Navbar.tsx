import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick() {
    console.log("Function not implemented.");
  }

  return (
    <nav className="z-20 bg-gray-200 sticky top-0 py-2">
      <div className=" mx-auto max-w-7xl px-4 sm:px-2 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4 pr-8">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <Image src="/logo.svg" alt="logo" width={70} height={70} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-left flex-1 gap-6 text-sm">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a href="#"> About </a>
              </li>
              <li>
                <a href="#"> SIP </a>
              </li>
              <li>
                <a href="#"> Studio</a>
              </li>
              <li>
                <a href="#"> SEEQ </a>
              </li>
              <li>
                <a href="#"> Platforms </a>
              </li>
              <li>
                <a href="#"> Initiatives </a>
              </li>
              <li>
                <a href="#"> More </a>
              </li>
            </ul>
          </div>

          {/* Other Links and Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="px-8 py-4 bg-cyan-700 hover:bg-black"
              onClick={handleClick}
            >
              SINC With Us
            </Button>
            <Button className="px-8 py-4" onClick={handleClick}>
              Apply to SIP 1.0
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block text-black p-2 transition hover:text--700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            {mobileMenuOpen && (
              <div className="absolute top-16 right-0 left-0 shadow-lg rounded-lg py-4 px-4 text-sm bg-gray-200">
                <ul className="flex flex-col items-center gap-4 py-2 border-b-2">
                  <li>
                    <a href="#"> About </a>
                  </li>
                  <li>
                    <a href="#"> SIP </a>
                  </li>
                  <li>
                    <a href="#"> Studio </a>
                  </li>
                  <li>
                    <a href="#"> SEEQ </a>
                  </li>
                  <li>
                    <a href="#"> Platforms </a>
                  </li>
                  <li>
                    <a href="#"> Initiatives </a>
                  </li>
                  <li>
                    <a href="#"> More </a>
                  </li>
                </ul>
                <div className="flex flex-col items-center mt-4">
                  <div className="mt-2">
                    <Button className="px-8 bg-cyan-700" onClick={handleClick}>
                      SINC With Us
                    </Button>
                  </div>
                  <div className="mt-2">
                    <Button className="px-8" onClick={handleClick}>
                      Apply to SIP 1.0
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
