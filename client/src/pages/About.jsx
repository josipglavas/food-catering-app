import { useTranslation } from "react-i18next";
import CoverImage from "../components/About/CoverImage";
import backgroundImage from "../assets/about-screen-background.png";
import ChefImage from "../assets/about-screen-chef.jpg";
import CookingImage from "../assets/about-screen-cooking.png";
import ImageTextBlock from "../components/ImageTextBlock";
const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <CoverImage backgroundImage={backgroundImage} />
      {/* <AboutOuiChef ChefImage={ChefImage} /> */}
      <ImageTextBlock
        title={t("About_About_Title")}
        paragraph={t("About_About_Paragraph")}
        backgroundColor={"bg-white"}
        image={ChefImage}
        imagePosition={"left"}
        extraImageClass={"rounded-3xl"}
        button={false}
      />
      <ImageTextBlock
        title={t("About_Story_Title")}
        paragraph={t("About_Story_Paragraph1")}
        backgroundColor={"bg-neutral-200"}
        image={CookingImage}
        imagePosition={"right"}
        extraImageClass={"rounded-3xl"}
        button={false}
        extraParagraph={t("About_Story_Paragraph2")}
      />
      {/* <OurStory CookingImage={CookingImage} /> */}
    </>
  );
};

export default About;
