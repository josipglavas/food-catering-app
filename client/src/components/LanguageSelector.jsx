import { useTranslation } from "react-i18next";
import Flag from "react-flagpack";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-1">
      <button onClick={() => changeLanguage("en")} className="flex gap-1">
        <Flag code="USA" gradient="real-linear" size="l" hasDropShadow />
        <p>EN</p>
      </button>
      <button onClick={() => changeLanguage("hr")} className="flex gap-1">
        <Flag code="HRV" size="l" hasDropShadow />
        <p>HR</p>
      </button>
    </div>
  );
};

export default LanguageSelector;
