import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import ImagesList from "../components/Events/ImagesList";

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
      <ImagesList />
    </div>
  );
};

export default Events;
