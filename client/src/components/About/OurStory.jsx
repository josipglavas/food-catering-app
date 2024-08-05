import React from "react";
import { useTranslation } from "react-i18next";

const OurStory = ({ CookingImage }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-between content-center px-24 ">
        <div className="w-600">
          <h1 className="text-7xl font-semibold pb-16">
            {t("About_Story_Title")}
          </h1>
          <p className="mt-2 text-4xl text-justify">
            {t("About_Story_Paragraph1")}
          </p>
        </div>
        <img
          src={CookingImage}
          alt="Food"
          className="w-1/2 h-256 rounded-3xl object-cover"
        />
      </div>
      <h1 className="pt-12 mx-24 text-4xl text-justify">
        {t("About_Story_Paragraph2")}
      </h1>
    </>
  );
};

export default OurStory;
