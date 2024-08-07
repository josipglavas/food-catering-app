import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useMediaQuery } from "@mui/material";

const ImageTextBlock = ({
  title,
  paragraph,
  backgroundColor,
  image,
  imagePosition,
  extraImageClass,
  button = true,
  buttonText,
  buttonOnClick,
  extraParagraph = "",
}) => {
  const { t } = useTranslation();
  const isMobileScreen = useMediaQuery("(max-width:999px)");

  return (
    <div className={`${backgroundColor} py-16`}>
      {imagePosition.toLowerCase() === "left" ? (
        <div
          className={
            isMobileScreen
              ? "flex items-center justify-between content-center px-4"
              : "flex items-center justify-between content-center px-24"
          }
        >
          <img
            src={image}
            alt="Chef"
            className={`${extraImageClass} w-1/2 h-256 object-cover`}
          />
          <div className={isMobileScreen ? "w-screen ml-4" : "w-600 ml-24"}>
            <h1
              className={
                isMobileScreen
                  ? "text-3xl font-semibold pb-16"
                  : "text-6xl font-semibold pb-16"
              }
            >
              {title}
            </h1>
            <p
              className={
                isMobileScreen
                  ? "mt-2 text-xl text-justify"
                  : "mt-2 text-3xl text-justify"
              }
            >
              {paragraph}
            </p>
            {button && (
              <Button
                Class={"uppercase mt-10"}
                Text={buttonText}
                onClick={buttonOnClick}
              />
            )}
          </div>
        </div>
      ) : (
        <div
          className={
            isMobileScreen
              ? "flex items-center justify-between content-center px-4"
              : "flex items-center justify-between content-center px-24"
          }
        >
          <div className={isMobileScreen ? "w-screen mr-4" : "w-600 mr-24"}>
            <h1
              className={
                isMobileScreen
                  ? "text-3xl font-semibold pb-16"
                  : "text-6xl font-semibold pb-16"
              }
            >
              {title}
            </h1>
            <p
              className={
                isMobileScreen
                  ? "mt-2 text-xl text-justify"
                  : "mt-2 text-3xl text-justify"
              }
            >
              {paragraph}
            </p>
            {button && (
              <Button
                Class={"uppercase mt-10"}
                Text={buttonText}
                onClick={buttonOnClick}
              />
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
        <h1 className="pt-12 mx-24 text-3xl text-justify">
          {t("About_Story_Paragraph2")}
        </h1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageTextBlock;
