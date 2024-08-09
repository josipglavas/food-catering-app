import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { useEffect } from "react";

const LanguageSelector = ({ toggleMenu }) => {
  const { i18n } = useTranslation();

  const getStoredLanguage = () => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "en";
  };

  useEffect(() => {
    const storedLanguage = getStoredLanguage();

    const timeoutId = setTimeout(() => {
      if (i18n.language !== storedLanguage) {
        i18n.changeLanguage(storedLanguage);
      }
    }, 20);

    return () => clearTimeout(timeoutId);
  }, [i18n]);

  const currentLanguage = i18n.language;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="flex gap-1 content-center justify-center">
      {currentLanguage === "en" || currentLanguage === "en-US" ? (
        <button
          onClick={() => {
            changeLanguage("hr");
            toggleMenu();
          }}
          className="flex gap-1"
        >
          <ReactCountryFlag
            countryCode="HR"
            svg
            style={{
              fontSize: "1.5em",
              lineHeight: "1.5em",
            }}
          />
          <p className="pl-1.5">HR</p>
        </button>
      ) : (
        <button
          onClick={() => {
            changeLanguage("en");
            toggleMenu();
          }}
          className="flex gap-1"
        >
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              fontSize: "1.5em",
              lineHeight: "1.5em",
            }}
          />
          <p className="pl-1.5">EN</p>
        </button>
      )}
    </div>
  );
};

export default LanguageSelector;
