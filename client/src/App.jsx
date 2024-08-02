import Form from "./pages/Form.jsx";
import "./i18n.ts";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    // <div className="flex p-10">
    //   {/* <p>{t("ViteReact")}</p> */}
    //   {/* <Form /> */}
    // </div>
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
