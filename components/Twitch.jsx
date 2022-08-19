import React from "react";
import { FaTwitch } from "react-icons/fa";
import Link from "next/link";


const Twitch = () => {
  return (
    <div
      id="twitch"
      className="w-full h-screen flex items-center justify-center text-center"
    >
      <h3 className="lg:text-7xl md:text-5xl text-3xl py-4">
        Check me out on Twitch
        <Link href="https://twitch.tv/screeeda">
          <FaTwitch
            className="m-auto mt-8 cursor-pointer hover:text-purple-600"
            size={100}
          />
        </Link>
      </h3>
    </div>
  );
};

export default Twitch;
