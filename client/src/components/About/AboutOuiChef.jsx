import React from "react";
import { useTranslation } from "react-i18next";

const AboutOuiChef = ({ ChefImage }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between content-center p-24">
      <img
        src={ChefImage}
        alt="Chef"
        className="w-1/2 h-256 rounded-3xl object-cover"
      />
      <div className="ml-24 w-600 items-right content-right">
        <h1 className="text-7xl font-semibold pb-16">
          {t("About_About_Title")}
        </h1>
        <p className="mt-2 text-4xl text-justify">
          {t("About_About_Paragraph")}
        </p>
      </div>
    </div>
  );
};

export default AboutOuiChef;
