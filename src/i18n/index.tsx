import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en.json";
import translationAl from "../locales/al.json";

const resources = {
  en: {
    translation: translationEN,
  },
  al: {
    translation: translationAl,
  },
};
!localStorage.getItem("lang") && localStorage.setItem("lang", "al")
const defaultLanguage : string = localStorage.getItem("lang") ?? "al";
i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
