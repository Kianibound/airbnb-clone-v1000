import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-poinert hover:scale-105 transform transition duration-300 ease-in-out">
      <div className="relative h-80 w-80 ">
        <Image src={img} alt="card" layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-2l mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
