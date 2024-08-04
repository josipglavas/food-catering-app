import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logoMain from "../assets/logo-main.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="flex gap-8 items-center bg-white">
        <Link to="/">
          <img
            src={logoMain}
            alt="Logo"
            className="h-20 object-contain ml-16 mr-4 m-1.5"
          />
        </Link>
        <li>
          <Link to="/events">{t("Nav_Events")}</Link>
        </li>
        <li>
          <Link to="/about">{t("Nav_About")}</Link>
        </li>
        <li>
          <Link to="/portfolio">{t("Nav_Portfolio")}</Link>
        </li>
        <li>
          <Link to="/contact">{t("Nav_Contact")}</Link>
        </li>
        <li>
          <LanguageSelector />
        </li>
        <li className="ml-auto mr-12">
          <button className="text-nowrap text-white bg-slate-950 px-4 py-2 rounded-lg hover:scale-110">
            {t("Nav_Btn_Contact")}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
