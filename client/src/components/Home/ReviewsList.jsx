import { useRef } from "react";
import Review from "./Review";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";

const reviews = [
  {
    image: "https://picsum.photos/200/300",
    text: "This is the first review",
    name: "John Doe",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the second review",
    name: "Jane Doe",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the third review",
    name: "Sam Smith",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the fourth review",
    name: "Alex Johnson",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the fifth review",
    name: "Chris Lee",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the first review",
    name: "John Doe",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the second review",
    name: "Jane Doe",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the third review",
    name: "Sam Smith",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the fourth review",
    name: "Alex Johnson",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the fifth review",
    name: "Chris Lee",
  },
];

const ReviewsList = () => {
  const isMobileScreen = useMediaQuery("(max-width:999px)");

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? -240 : -650; // Adjust the value for mobile screens
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 240 : 650; // Adjust the value for mobile screens
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center w-100% h-auto lg:mx-10 mx-2 lg:pt-6 pt-0">
      <button
        className="z-10 px-2.5 mr-0.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        onClick={scrollLeft}
      >
        <FaArrowCircleLeft />
      </button>
      <div
        className={
          isMobileScreen
            ? "relative overflow-hidden w-10/12 mx-2"
            : "relative overflow-hidden w-10/12 mx-10"
        }
      >
        <div
          className="flex no-scrollbar"
          ref={scrollRef}
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            overflowX: "scroll",
            scrollbarWidth: "none" /* For Firefox */,
            msOverflowStyle: "none" /* For Internet Explorer and Edge */,
          }}
        >
          {reviews.map((review, index) => (
            <Review {...review} />
          ))}
        </div>
      </div>
      <button
        className="z-10 px-2.5 mr-0.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        onClick={scrollRight}
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default ReviewsList;
