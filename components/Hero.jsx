import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute h-screen top-0 left-0 right-0 bottom-0 bg-[#002b36]/70 z-[2]" />

      <div className="p-5 z-[2] justify-center text-center">
        <h2 className="lg:text-7xl text-5xl font-bold py-4">{heading}</h2>
        <p className="py-5 lg:text-5xl text-3xl">{message}</p>

        <div className="flex justify-center py-16">
          <Link href="/#banner">
            <div className="animate-bounce rounded-full bg-white p-4 cursor-pointer">
              <HiOutlineChevronDoubleDown className="text-[#002b36]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
