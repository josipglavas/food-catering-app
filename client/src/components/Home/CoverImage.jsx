import React from "react";
import { useTranslation } from "react-i18next";
import backgroundImage from "../../assets/home-screen-background.png";

const CoverImage = () => {
  const { t } = useTranslation();
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
            {t("Home_JoinUs")}
          </h1>
          <p className="text-2xl font-extralight text-black mt-2.5">
            {t("Home_ContactUs")}
          </p>
        </div>
        <button className="absolute top-3/4 mt-4 left-20 bg-slate-950 text-white py-3 px-20 text-2xl rounded-lg hover:scale-110">
          {t("Home_Btn_JoinUs")}
        </button>
      </div>
    </>
  );
};

export default CoverImage;
