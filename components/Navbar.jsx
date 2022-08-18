import React, { useEffect, useState } from "react";
import logo from "../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [colour, setColour] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 90) {
        setColour("#002b36");
      } else {
        setColour("transparent");
      }
    };
    window.addEventListener("scroll", changeColour);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${colour}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <Link href="/">
          <Image className="cursor-pointer" src={logo} alt="logo" width={73} height={65} />
        </Link>
        <ul className="hidden sm:flex text-xl">
          <li className="p-4 text-gray-300 hover:text-gray-100">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-gray-300 hover:text-gray-100">
            <Link href="/#disc">Discord</Link>
          </li>
          <li className="p-4 text-gray-300 hover:text-gray-100">
            <Link href="/#insta">Instagram</Link>
          </li>
          <li className="p-4 text-gray-300 hover:text-gray-100">
            <Link href="/#twitch">Twitch</Link>
          </li>
          <li className="p-4 text-gray-300 hover:text-gray-100">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#31444a] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#31444a] text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={() => setNav(false)} className="p-4 text-4xl text-gray-300 hover:text-gray-100">
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setNav(false)} className="p-4 text-4xl text-gray-300 hover:text-gray-100">
              <Link href="/#disc">Discord</Link>
            </li>
            <li onClick={() => setNav(false)} className="p-4 text-4xl text-gray-300 hover:text-gray-100">
              <Link href="/#insta">Instagram</Link>
            </li>
            <li onClick={() => setNav(false)} className="p-4 text-4xl text-gray-300 hover:text-gray-100">
              <Link href="/#twitch">Twitch</Link>
            </li>
            <li onClick={() => setNav(false)} className="p-4 text-4xl text-gray-300 hover:text-gray-100">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
