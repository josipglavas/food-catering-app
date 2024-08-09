import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ImagesList = ({ imageParentClass, imageClass, events }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? -255.5 : -450; // Adjust the value for mobile screens
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 255.5 : 450; // Adjust the value for mobile screens
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="flex justify-center items-center w-100% h-auto xl:mx-16 mx-2 xl:pt-6 pt-4">
      <button
        className="z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        onClick={scrollLeft}
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
        className="z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        onClick={scrollRight}
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default ImagesList;
