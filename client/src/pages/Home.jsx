import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return <p>{t("Home")}</p>;
};

export default Home;
