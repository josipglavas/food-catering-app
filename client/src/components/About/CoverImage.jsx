import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const CoverImage = ({ backgroundImage }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="relative h-108 w-full">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div className="absolute top-2/4 left-20 text-left">
          <h1 className="text-6xl font-normal text-black">
            {t("About_JoinUs")}
          </h1>
          <p className="text-2xl font-extralight text-black mt-2.5">
            {t("About_ContactUs")}
          </p>
        </div>
        <Button
          Class={"absolute top-3/4 mt-4 left-20"}
          Text={t("About_Btn_JoinUs")}
          onClick={() => navigate("/contact")}
        />
      </div>
    </>
  );
};

export default CoverImage;
