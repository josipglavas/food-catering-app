import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const ImageTextBlock = ({
  title,
  paragraph,
  backgroundColor,
  image,
  imagePosition,
  extraImageClass,
  button = true,
  extraParagraph = "",
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${backgroundColor} py-16`}>
      {imagePosition.toLowerCase() === "left" ? (
        <div className="flex items-center justify-between content-center px-24">
          <img
            src={image}
            alt="Chef"
            className={`${extraImageClass} w-1/2 h-256 object-cover`}
          />
          <div className="ml-24 w-600 items-right content-right">
            <h1 className="text-7xl font-semibold pb-16">{title}</h1>
            <p className="mt-2 text-4xl text-justify">{paragraph}</p>
            {button && (
              <Button Class={"uppercase mt-10"} Text={t("Home_Btn_BookNow")} />
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between content-center px-24">
          <div className="w-600">
            <h1 className="text-7xl font-semibold pb-16">{title}</h1>
            <p className="mt-2 text-4xl text-justify">{paragraph}</p>
            {button && (
              <Button Class={"uppercase mt-10"} Text={t("Home_Btn_BookNow")} />
            )}
          </div>
          <img
            src={image}
            alt="Food"
            className={`${extraImageClass} w-1/2 h-256 object-cover`}
          />
        </div>
      )}
      {extraParagraph !== "" ? (
        <h1 className="pt-12 mx-24 text-4xl text-justify">
          {t("About_Story_Paragraph2")}
        </h1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageTextBlock;
