import React from "react";
import logo from "../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaInstagram,
  FaSteam,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-full justify-center items-center text-center"
    >
      <div className="flex justify-center py-12">
        <Link href="/" alt="top">
          <div className="animate-pulse rounded-full bg-white shadow-lg shadow-white p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#002b36]" size={30} />
          </div>
        </Link>
      </div>
      <Link href="/">
        <Image
          className="cursor-pointer mt-10"
          src={logo}
          width={73}
          height={65}
          alt="logo"
        />
      </Link>

      <div className="flex justify-center items-center h-20 p-[10px] gap-4">
        <a
          href="https://discord.gg/yUwFBJ6AZQ"
          rel="noreferrer"
          target="_blank"
        >
          <FaDiscord fontSize={30} color="white" />
        </a>
        <a
          href="https://www.instagram.com/screeeda"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagram fontSize={30} color="white" />
        </a>
        <a
          href="https://steamcommunity.com/id/screeeda"
          rel="noreferrer"
          target="_blank"
        >
          <FaSteam fontSize={30} color="white" />
        </a>
        <a href="https://twitch.tv/screeeda" rel="noreferrer" target="_blank">
          <FaTwitch fontSize={30} color="white" />
        </a>
        <a href="https://twitter.com/screeeda" rel="noreferrer" target="_blank">
          <FaTwitter fontSize={30} color="white" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCpgjhU5AIL_FpTgpjuYr-Ow"
          rel="noreferrer"
          target="_blank"
        >
          <FaYoutube fontSize={30} color="white" />
        </a>
      </div>

      <div className="p-[10px]">
        &copy; {new Date().getFullYear()} screeeda{" "}
      </div>
    </div>
  );
};

export default Contact;
