import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const events = [
  {
    image: "https://picsum.photos/800/800",
    textEN: "Celebrate with Style: Memorable Birthday Catering",
    textHR: "Proslavite sa stilom: Catering za rođendane za pamćenje",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "Dream Weddings: Exquisite Catering for Your Special Day",
    textHR: "Vjenčanja iz snova: izuzetan catering za vaš poseban dan",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the third review",
    textHR: "",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fourth review",
    textHR: "",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fifth review",
    textHR: "",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fifth review",
    textHR: "",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fifth review",
    textHR: "",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fifth review",
    textHR: "",
  },
];

const ImagesList = () => {
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
          className="flex no-scrollbar overflow-x-scroll w-full h-128"
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
            <div key={index} className="w-96 flex-none h-11/12 relative m-8">
              <img
                src={event.image}
                className="w-full h-full object-cover"
                alt={`event ${index}`}
              />
              <p className="absolute bottom-10 left-0 right-0 bg-black bg-opacity-50 text-white text-2xl px-12 py-4">
                {currentLanguage === "en" || currentLanguage === "en-US"
                  ? event.textEN
                  : event.textHR}
              </p>
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
