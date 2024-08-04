import { useTranslation } from "react-i18next";
import CoverImage from "../components/Home/CoverImage";
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <CoverImage />
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-black text-3xl">{t("Home")}</h1>
      </div>
    </>
  );
};

export default Home;
