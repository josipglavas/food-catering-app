import React from "react";
import CarouselImages from "../components/Events/CarouselImages";

const events = [
  {
    image: "https://picsum.photos/600/600",
  },
  {
    image: "https://picsum.photos/600/600",
  },
  {
    image: "https://picsum.photos/600/600",
  },
  {
    image: "https://picsum.photos/600/600",
  },
  {
    image: "https://picsum.photos/600/600",
  },
  {
    image: "https://picsum.photos/600/600",
  },
  {
    image: "https://picsum.photos/600/600",
  },
  {
    image: "https://picsum.photos/600/600",
  },
];

const Portfolio = () => {
  return (
    <>
      <CarouselImages
        events={events}
        title={"Weddings"}
        background={"bg-neutral-200"}
      />
      <CarouselImages
        events={events}
        title={"Birthdays"}
        background={"bg-white"}
      />
      <CarouselImages
        events={events}
        title={"Theme Parties"}
        background={"bg-neutral-200"}
      />
      <CarouselImages
        events={events}
        title={"Graduation"}
        background={"bg-white"}
      />
    </>
  );
};

export default Portfolio;
