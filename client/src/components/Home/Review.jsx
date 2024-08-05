import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ image, text, name }) => {
  return (
    <div className="w-256 h-72 flex items-center justify-center m-8 relative px-10">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-128 h-56 rounded-2xl border-2 border-black relative z-10 flex items-center justify-center">
          <p className="text-black text-lg">{text}</p>
          <h1 className="absolute bottom-2 right-4 text-black text-xl">
            {name}
          </h1>
        </div>
        <img
          className="rounded-full w-32 h-32 object-cover z-20 absolute -left-16"
          src={image}
        />
        <div className="text-[#FFD700] flex text-3xl justify-center absolute top-4 z-30">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default Review;
