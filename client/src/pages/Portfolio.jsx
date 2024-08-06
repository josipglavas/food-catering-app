import React from "react";
import ImagesList from "../components/Events/ImagesList";

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
    <div>
      <div className="bg-neutral-200 pt-12">
        <h1 className="text-5xl font-extralight px-16">Weddings</h1>
        <ImagesList
          imageParentClass={""}
          imageClass={"object-cover"}
          events={events}
        />
      </div>
      <div className="bg-white pt-12">
        <h1 className="text-5xl font-extralight px-16">Birthdays</h1>
        <ImagesList
          imageParentClass={""}
          imageClass={"object-cover"}
          events={events}
        />
      </div>
      <div className="bg-neutral-200 pt-12">
        <h1 className="text-5xl font-extralight px-16">Theme Parties</h1>
        <ImagesList
          imageParentClass={""}
          imageClass={"object-cover"}
          events={events}
        />
      </div>
      <div className="bg-white pt-12">
        <h1 className="text-5xl font-extralight px-16">Graduation</h1>
        <ImagesList
          imageParentClass={""}
          imageClass={"object-cover"}
          events={events}
        />
      </div>
    </div>
  );
};

export default Portfolio;
