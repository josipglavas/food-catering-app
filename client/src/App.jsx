import Form from "./pages/Form.jsx";
import "./i18n.ts";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "./components/Footer.jsx";

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default App;
