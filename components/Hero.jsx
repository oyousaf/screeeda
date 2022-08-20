import React from "react";
import Link from "next/link";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute h-screen top-0 left-0 right-0 bottom-0 bg-[#002b36]/70 z-[2]" />
      <div className="p-5 z-[2] justify-center text-center">
        <h2 className="lg:text-7xl text-5xl font-bold py-4">
          {heading}
        </h2>
        <p className="py-5 lg:text-5xl text-3xl">{message}</p>
        <Link href="/#banner">
          <button className="lg:text-3xl text-2xl px-8 py-2 shadow-xl shadow-[#002b36]/70 rounded-xl hover:font-bold bg-[#002b36]">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
