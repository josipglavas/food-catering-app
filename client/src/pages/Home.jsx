import { useTranslation } from "react-i18next";
import CoverImage from "../components/Home/CoverImage";
import AboutOuiChef from "../components/Home/AboutOuiChef";
import OurStory from "../components/Home/OurStory";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <CoverImage />
      <AboutOuiChef />
      <OurStory />
    </>
  );
};

export default Home;
