import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ImagesList = ({ imageParentClass, imageClass, events }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="flex justify-center items-center w-100% h-auto mx-16 pt-6">
      <button
        className="z-10 px-2.5 h-10 bg-gray-700 flex text-white text-xl justify-center items-center text-center rounded-full"
        onClick={scrollLeft}
      >
        <FaArrowCircleLeft />
      </button>
      <div className="relative overflow-hidden w-10/12 mx-10">
        <div
          className={
            events.length > 3
              ? "flex no-scrollbar overflow-x-scroll w-full h-128"
              : "flex no-scrollbar overflow-x-scroll w-full h-128 justify-center"
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
              className={`flex-none relative m-8 ${imageParentClass}`}
            >
              <img
                src={event.image}
                className={`${imageClass} w-full h-full`}
                alt={`event ${index}`}
              />
              {event.textEN != null && (
                <p className="absolute bottom-10 left-0 right-0 bg-black bg-opacity-50 text-white text-2xl px-12 py-4">
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
