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
  buttonText,
  buttonOnClick,
  extraParagraph = "",
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${backgroundColor} xl:py-16 py-0 xl:pb-16 pb-8`}>
      {imagePosition.toLowerCase() === "left" ? (
        <div className="flex xl:flex-row flex-col items-center justify-between content-center xl:px-24 px-4">
          <img
            src={image}
            alt="Chef"
            className={`${extraImageClass} xl:w-1/2 xl:h-256 w-full h-72 xl:mt-0 mt-8 object-cover`}
          />
          <div className="xl:w-600 w-screen xl:ml-24 xl:px-0 p-10 xl:text-left text-center">
            <h1 className="xl:text-6xl text-3xl font-semibold xl:pb-16 pb-4">
              {title}
            </h1>
            <p className="mt-2 xl:text-3xl text-sm text-justify xl:mx-0 -mx-4">
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
        <div className="flex xl:flex-row flex-col items-center justify-between content-center xl:px-24 px-4">
          <div className="xl:w-600 w-screen xl:mr-24 xl:px-0 p-10 xl:text-left text-center">
            <h1 className="xl:text-6xl text-3xl font-semibold xl:pb-16 pb-4">
              {title}
            </h1>
            <p className="mt-2 xl:text-3xl text-sm text-justify xl:mx-0 -mx-4">
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
            className={`${extraImageClass} xl:w-1/2 xl:h-256 w-full h-72 object-cover`}
          />
        </div>
      )}
      {extraParagraph !== "" ? (
        <h1 className="xl:pt-12 pt-8 xl:mx-24 mx-6 xl:text-3xl text-sm text-justify">
          {t("About_Story_Paragraph2")}
        </h1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageTextBlock;
