import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] 2xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        objectFit="cover"
        layout="fill"
        objectPosition="center"
      />
      <div className="absolute top-1/2 w-full text-center ">
        <p className="text-sm sm:text-lg ">Not Sure Where to go? Perfect!</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm Here!
        </button>
      </div>
    </div>
  );
};

export default Banner;