import React from "react";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const Discord = () => {
  return (
    <div
      id="disc"
      className="w-full h-screen flex items-center justify-center text-center"
    >
      <h3 className="lg:text-7xl md:text-5xl text-3xl py-4">
        Join the Discord server
        <Link href="https://discord.gg/yUwFBJ6AZQ">
          <FaDiscord
            className="m-auto mt-8 cursor-pointer hover:text-blue-500"
            size={100}
          />
        </Link>
      </h3>
    </div>
  );
};

export default Discord;
