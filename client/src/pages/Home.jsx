import { useTranslation } from "react-i18next";
import backgroundImage from "../assets/home-screen-background.png";
import "../index.css";
import Review from "../components/Home/Review";
import { useRef } from "react";
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
];

const Home = () => {
  const { t } = useTranslation();

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative h-700 w-full">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div>
            <h1 className="text-10xl font-medium text-white">
              {t("Home_Logo")}
            </h1>
            <p className="text-2xl font-normal text-white uppercase tracking-large">
              {t("Home_Slogan")}
            </p>
          </div>
          <div className="w-56 h-16 mt-16 flex justify-center items-center text-center">
            <button className="relative bg-black bg-opacity-35 text-white py-4 text-2xl hover:scale-110 uppercase btn-1">
              <span className="btn-span-1 py-4 px-7 relative z-10">
                {t("Home_Btn_JoinUs")}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-100% h-auto">
        <button
          className="z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
          onClick={scrollLeft}
        >
          <FaArrowCircleLeft />
        </button>
        <div className="relative overflow-hidden w-10/12 mx-20">
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
              <Review key={index} {...review} />
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
    </>
  );
};

export default Home;
