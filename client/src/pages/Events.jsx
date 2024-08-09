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
    <div className="xl:px-20 px-0 xl:py-8 py-4">
      <h1 className="xl:text-7xl text-3xl xl:px-0 px-8">{t("Events_Title")}</h1>
      <p className="xl:text-3xl text-xl xl:px-0 px-8 xl:mt-8 mt-4 xl:w-2/3 w-full">
        {t("Events_Paragraph")}
      </p>
      <Button
        Class={"xl:mt-10 mt-5 xl:mx-0 mx-8"}
        Text={t("Events_Btn_ContactUs")}
        onClick={() => navigate("/contact")}
      />
      <ImagesList
        imageClass={"object-cover"}
        imageParentClass={"xl:w-96 w-52 h-11/12"}
        events={events}
      />
    </div>
  );
};

export default Events;
