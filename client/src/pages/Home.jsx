import { useTranslation } from "react-i18next";
import backgroundImage from "../assets/home-screen-background.png";
import "../index.css";
import ReviewList from "../components/Home/ReviewsList";
import { useNavigate } from "react-router-dom";
import ImageTextBlock from "../components/ImageTextBlock";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isMobileScreen = useMediaQuery("(max-width:999px)");
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={
          isMobileScreen ? "relative h-72 w-full" : "relative h-700 w-full"
        }
      >
        <img
          src={backgroundImage}
          alt="Background"
          className={
            isMobileScreen
              ? "w-full h-72 object-fit filter grayscale"
              : "w-full h-full object-cover filter grayscale"
          }
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div>
            <h1
              className={
                isMobileScreen
                  ? "text-3xl font-medium text-white logo italic"
                  : "text-9xl font-medium text-white logo italic"
              }
            >
              {t("Home_Logo")}
            </h1>
            <p
              className={
                isMobileScreen
                  ? "text-lg font-normal text-white uppercase tracking-large pt-3"
                  : "text-2xl font-normal text-white uppercase tracking-large pt-3"
              }
            >
              {t("Home_Slogan")}
            </p>
          </div>
          <div
            className={
              isMobileScreen
                ? "w-56 h-16 mt-8 flex justify-center items-center text-center"
                : "w-56 h-16 mt-16 flex justify-center items-center text-center"
            }
          >
            <button
              onClick={() => navigate("/contact")}
              className="relative bg-black bg-opacity-35 text-white py-4 text-2xl hover:scale-110 uppercase btn-1"
            >
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
        buttonText={t("Home_Btn_BookNow")}
        buttonOnClick={() => navigate("/contact")}
      />
      <ImageTextBlock
        title={t("Home_SectionTwo_Title")}
        paragraph={t("Home_SectionTwo_Paragraph")}
        backgroundColor={"bg-white"}
        image={backgroundImage}
        imagePosition={"left"}
        buttonText={t("Home_Btn_BookNow")}
        buttonOnClick={() => navigate("/contact")}
      />
      <ImageTextBlock
        title={t("Home_SectionThree_Title")}
        paragraph={t("Home_SectionThree_Paragraph")}
        backgroundColor={"bg-neutral-200"}
        image={backgroundImage}
        imagePosition={"right"}
        buttonText={t("Home_Btn_BookNow")}
        buttonOnClick={() => navigate("/contact")}
      />
    </>
  );
};

export default Home;
