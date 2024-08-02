import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-1 content-center justify-center">
      {currentLanguage === "en" ? (
        <button onClick={() => changeLanguage("hr")} className="flex gap-1">
          <ReactCountryFlag
            countryCode="HR"
            svg
            style={{
              fontSize: "1.5em",
              lineHeight: "1.5em",
            }}
          />
          <p>HR</p>
        </button>
      ) : (
        <button onClick={() => changeLanguage("en")} className="flex gap-1">
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              fontSize: "1.5em",
              lineHeight: "1.5em",
            }}
          />
          <p>EN</p>
        </button>
      )}
    </div>
  );
};

export default LanguageSelector;
