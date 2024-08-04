import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to load translations
    },
  });

export default i18n;
