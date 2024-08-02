import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        Home: "Welcome to the Vite React App",
      },
    },
    hr: {
      translation: {
        Home: "Dobrodošli na Vite React stranicu",
      },
    },
  },
});

export default i18n;
