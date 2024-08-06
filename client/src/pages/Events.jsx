import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import ImagesList from "../components/Events/ImagesList";

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
    textHR: "event",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fourth review",
    textHR: "event",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fifth review",
    textHR: "event",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fifth review",
    textHR: "event",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fifth review",
    textHR: "event",
  },
  {
    image: "https://picsum.photos/800/800",
    textEN: "This is the fifth review",
    textHR: "event",
  },
];

const Events = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="px-20 py-8">
      <h1 className="text-7xl">{t("Events_Title")}</h1>
      <p className="text-3xl mt-8 w-2/3">{t("Events_Paragraph")}</p>
      <Button
        Class={"mt-10"}
        Text={t("Events_Btn_ContactUs")}
        onClick={() => navigate("/contact")}
      />
      <ImagesList
        imageClass={"object-cover"}
        imageParentClass={"w-96 h-11/12 "}
        events={events}
      />
    </div>
  );
};

export default Events;
