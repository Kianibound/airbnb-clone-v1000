import React from "react";
import Image from "next/image";
import { BsSearch, BsGlobe } from "react-icons/bs";
import { BiUserCircle, BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <header className="sticky grid grid-cols-3 top-0 z-50  bg-white shadow-md p-5 md:px-10">
      {/* left Div */}
      <div className="relative  flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          objectPosition={"left"}
          layout="fill"
          alt="banner"
        />
      </div>
      {/* Middle div */}
      <div className="flex items-center border-2 md:shadow-sm rounded-full py-2 ">
        <input
          type="text"
          placeholder="start your journey"
          className="pl-4 bg-transparent outline-none flex-grow placeholder-gray-400 text-gray-600"
        />
        <BsSearch className=" hidden md:inline-flex md:mx-2 bg-red-400 text-3xl font-bold cursor-pointer p-2 rounded-full text-white" />
      </div>
      {/* right Div */}
      <div className="flex space-x-4 items-center justify-end text-gray-700 ">
        <p className="hidden font-bold md:inline cursor-pointer">
          Become a host
        </p>
        <BsGlobe className="text-2xl cursor-pointer" />
        <div className="flex border-2 rounded-full p-4 gap-2 items-center cursor-pointer">
          <BiMenu className="text-2xl" />
          <BiUserCircle className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
