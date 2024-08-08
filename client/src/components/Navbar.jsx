// import { Link } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";
// import logoMain from "../assets/logo-main.png";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
// import { useMediaQuery } from "@mui/material";

// const Navbar = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const isMobileScreen = useMediaQuery("(max-width:999px)");

//   return (
//     <nav>
//       <ul
//         className={
//           isMobileScreen
//             ? "flex gap-8 items-center bg-white"
//             : "flex gap-8 items-center bg-white"
//         }
//       >
//         <Link to="/">
//           <img
//             src={logoMain}
//             alt="Logo"
//             className="h-20 object-contain ml-16 mr-4 m-1.5"
//           />
//         </Link>
//         <li>
//           <Link to="/events">{t("Nav_Events")}</Link>
//         </li>
//         <li>
//           <Link to="/about">{t("Nav_About")}</Link>
//         </li>
//         <li>
//           <Link to="/portfolio">{t("Nav_Portfolio")}</Link>
//         </li>
//         <li>
//           <Link to="/contact">{t("Nav_Contact")}</Link>
//         </li>
//         <li>
//           <LanguageSelector />
//         </li>
//         <li className="ml-auto mr-12">
//           <button
//             className="text-nowrap text-white bg-slate-950 px-4 py-2 rounded-lg hover:scale-110"
//             onClick={() => navigate("/contact")}
//           >
//             {t("Nav_Btn_Contact")}
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logoMain from "../assets/logo-main.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery("(max-width:999px)");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative">
      <div
        className={
          isMobileScreen
            ? "flex items-center justify-between bg-white p-2"
            : "flex items-center justify-between bg-white p-4"
        }
      >
        <Link to="/">
          <img
            src={logoMain}
            alt="Logo"
            className={
              isMobileScreen
                ? "h-12 object-contain ml-2 mr-4"
                : "h-20 object-contain ml-16 mr-4"
            }
          />
        </Link>
        {isMobileScreen ? (
          <button onClick={toggleMenu} className="text-3xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        ) : (
          <ul className="flex gap-8 items-center">
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
            <li className="ml-auto">
              <button
                className="text-nowrap text-white bg-slate-950 px-4 py-2 rounded-lg hover:scale-110"
                onClick={() => navigate("/contact")}
              >
                {t("Nav_Btn_Contact")}
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile menu drawer */}
      {isMobileScreen && menuOpen && (
        <ul className="absolute right-0 top-16 bg-white shadow-lg flex flex-col gap-4 p-6 z-10">
          <li>
            <Link to="/events" onClick={toggleMenu}>
              {t("Nav_Events")}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              {t("Nav_About")}
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={toggleMenu}>
              {t("Nav_Portfolio")}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              {t("Nav_Contact")}
            </Link>
          </li>
          <li>
            <LanguageSelector />
          </li>
          <li>
            <button
              className="text-nowrap text-white bg-slate-950 px-4 py-2 rounded-lg"
              onClick={() => {
                navigate("/contact");
                toggleMenu();
              }}
            >
              {t("Nav_Btn_Contact")}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
