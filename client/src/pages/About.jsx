import { useTranslation } from "react-i18next";
import CoverImage from "../components/About/CoverImage";
import AboutOuiChef from "../components/About/AboutOuiChef";
import OurStory from "../components/About/OurStory";
import backgroundImage from "../assets/about-screen-background.png";
import ChefImage from "../assets/about-screen-chef.jpg";
import CookingImage from "../assets/about-screen-cooking.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <CoverImage backgroundImage={backgroundImage} />
      <AboutOuiChef ChefImage={ChefImage} />
      <OurStory CookingImage={CookingImage} />
    </>
  );
};

export default About;
