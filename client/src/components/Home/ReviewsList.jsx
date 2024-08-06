import { useRef } from "react";
import Review from "./Review";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

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
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -650, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 650, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center w-100% h-auto mx-10 pt-6">
      <button
        className="z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        onClick={scrollLeft}
      >
        <FaArrowCircleLeft />
      </button>
      <div className="relative overflow-hidden w-10/12 mx-10">
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
        className="z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        onClick={scrollRight}
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default ReviewsList;
