import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselImages = ({ events, title, background }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div
      className={`${background} pt-12 pb-8 flex flex-col max-h-256 items-center text-start`}
    >
      <h1 className="text-5xl font-extralight px-16 w-screen">{title}</h1>
      <div className="xl:m-8 m-6 w-full h-256">
        <Carousel responsive={responsive}>
          {events.map((event, index) => (
            <>
              <img
                src={event.image}
                className={`xl:px-7 px-5 py-1 w-full h-full object-cover`}
                alt={`event ${index}`}
                key={`event ${index}`}
              />
              {event.textEN != null && (
                <p className="absolute bottom-10 left-0 right-0 bg-black bg-opacity-50 text-white xl:text-2xl text-xs px-4 xl:px-12 py-4">
                  {currentLanguage === "en" || currentLanguage === "en-US"
                    ? event.textEN
                    : event.textHR}
                </p>
              )}
            </>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselImages;
