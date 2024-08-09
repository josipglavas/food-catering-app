import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ImagesList = ({ imageParentClass, imageClass, events }) => {
  const scrollRef = useRef(null);
  const [left, setLeft] = useState(true); // Disable left scroll initially
  const [right, setRight] = useState(false); // Enable right scroll initially
  const [isScrolling, setIsScrolling] = useState(false); // State to track if scrolling is in progress

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      // Check if scrolled to the left end
      if (scrollLeft <= 0) {
        setLeft(true);
      } else {
        setLeft(false);
      }

      // Check if scrolled to the right end
      if (scrollLeft + clientWidth >= scrollWidth) {
        setRight(true);
      } else {
        setRight(false);
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current && !isScrolling) {
      const scrollAmount = window.innerWidth < 768 ? -300 : -650;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 450); // 450ms delay
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && !isScrolling) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 650;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 450); // 450ms delay
    }
  };

  useEffect(() => {
    // Attach the scroll event listener to detect scroll position changes
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    // Call handleScroll initially to set the initial state of buttons
    handleScroll();

    // Cleanup the event listener on unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="flex justify-center items-center w-100% h-auto xl:mx-16 mx-2 xl:pt-6 pt-4">
      <button
        className={
          left
            ? "z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full invisible"
            : "z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        }
        onClick={scrollLeft}
        disabled={left}
      >
        <FaArrowCircleLeft />
      </button>
      <div className="relative overflow-hidden w-10/12 xl:mx-10 mx-4">
        <div
          className={
            events.length > 3
              ? "flex no-scrollbar overflow-x-scroll w-full xl:h-128 h-96"
              : "flex no-scrollbar overflow-x-scroll w-full xl:h-128 h-96 justify-center"
          }
          ref={scrollRef}
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            overflowX: "scroll",
            scrollbarWidth: "none" /* For Firefox */,
            msOverflowStyle: "none" /* For Internet Explorer and Edge */,
          }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex-none relative xl:m-8 m-6 ${imageParentClass}`}
            >
              <img
                src={event.image}
                className={`${imageClass} w-full h-full`}
                alt={`event ${index}`}
              />
              {event.textEN != null && (
                <p className="absolute bottom-10 left-0 right-0 bg-black bg-opacity-50 text-white xl:text-2xl text-xs px-4 xl:px-12 py-4">
                  {currentLanguage === "en" || currentLanguage === "en-US"
                    ? event.textEN
                    : event.textHR}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        className={
          right
            ? "z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full invisible"
            : "z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        }
        onClick={scrollRight}
        disabled={right}
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default ImagesList;
