import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ image, text, name }) => {
  return (
    <div className="xl:w-256 w-72 xl:h-72 h-32 flex items-center justify-center xl:m-8 m-4 relative xl:px-10 px-2 ">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="xl:w-256 w-48 xl:h-56 h-24 rounded-2xl border-2 border-black relative z-10 flex items-center justify-center">
          <p className="text-black xl:text-lg text-xs mx-10">{text}</p>
          <h1 className="absolute bottom-3 right-5 text-black xl:text-xl text-xs">
            {name}
          </h1>
        </div>
        <img
          className="rounded-full xl:w-32 xl:h-32 w-12 h-12 object-cover z-20 absolute xl:-left-16 -left-5"
          src={image}
        />
        <div className="text-[#FFD700] flex xl:text-3xl text-lg justify-center absolute lg:top-4 top-2 z-30">
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
