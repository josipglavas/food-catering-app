import { useTranslation } from "react-i18next";
import backgroundImage from "../assets/home-screen-background.png";
import "../index.css";
import ReviewList from "../components/Home/ReviewsList";

import ImageTextBlock from "../components/ImageTextBlock";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative h-700 w-full">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div>
            <h1 className="text-10xl font-medium text-white">
              {t("Home_Logo")}
            </h1>
            <p className="text-2xl font-normal text-white uppercase tracking-large">
              {t("Home_Slogan")}
            </p>
          </div>
          <div className="w-56 h-16 mt-16 flex justify-center items-center text-center">
            <button className="relative bg-black bg-opacity-35 text-white py-4 text-2xl hover:scale-110 uppercase btn-1">
              <span className="btn-span-1 py-4 px-7 relative z-10">
                {t("Home_Btn_JoinUs")}
              </span>
            </button>
          </div>
        </div>
      </div>
      <ReviewList />
      <ImageTextBlock
        title={t("Home_SectionOne_Title")}
        paragraph={t("Home_SectionOne_Paragraph")}
        backgroundColor={"bg-neutral-200"}
        image={backgroundImage}
        imagePosition={"right"}
      />
      <ImageTextBlock
        title={t("Home_SectionTwo_Title")}
        paragraph={t("Home_SectionTwo_Paragraph")}
        backgroundColor={"bg-white"}
        image={backgroundImage}
        imagePosition={"left"}
      />
      <ImageTextBlock
        title={t("Home_SectionThree_Title")}
        paragraph={t("Home_SectionThree_Paragraph")}
        backgroundColor={"bg-neutral-200"}
        image={backgroundImage}
        imagePosition={"right"}
      />
    </>
  );
};

export default Home;
