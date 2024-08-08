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
    <div className={`${backgroundColor} py-16`}>
      {imagePosition.toLowerCase() === "left" ? (
        <div className="flex xl:flex-row flex-col items-center justify-between content-center px-4 xl:px-24">
          <img
            src={image}
            alt="Chef"
            className={`${extraImageClass} xl:w-1/2 xl:h-256 object-cover`}
          />
          <div className="xl:w-600 w-screen xl:ml-24 xl:px-0 p-10 xl:text-left text-center">
            <h1 className="xl:text-6xl text-3xl font-semibold xl:pb-16 pb-4">
              {title}
            </h1>
            <p className="mt-2 xl:text-3xl text-sm text-justify">{paragraph}</p>
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
            <p className="mt-2 xl:text-3xl text-sm text-justify">{paragraph}</p>
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
            className={`${extraImageClass} xl:w-1/2 xl:h-256 object-cover`}
          />
        </div>
      )}
      {extraParagraph !== "" ? (
        <h1 className="pt-12 mx-24 xl:text-3xl text-sm text-justify">
          {t("About_Story_Paragraph2")}
        </h1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageTextBlock;
