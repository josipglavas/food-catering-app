import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const CoverImage = ({ backgroundImage }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="relative xl:h-108 h-72 w-full">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full xl:h-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div className="absolute xl:top-2/4 top-1/4 xl:left-20 left-8 text-left pl-4">
          <h1 className="xl:text-6xl text-3xl font-normal text-black">
            {t("About_JoinUs")}
          </h1>
          <p className="xl:text-2xl text-lg font-extralight text-black mt-2.5">
            {t("About_ContactUs")}
          </p>
        </div>
        <Button
          Class={"absolute xl:top-3/4 top-2/3 mt-4 xl:left-20 left-8 ml-4"}
          Text={t("About_Btn_JoinUs")}
          onClick={() => navigate("/contact")}
        />
      </div>
    </>
  );
};

export default CoverImage;
