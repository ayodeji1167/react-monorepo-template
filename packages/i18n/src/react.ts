import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { i18nConfig, resources, defaultLanguage } from "./index";

// React/Vite specific configuration
export const initReactI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
      debug: process.env.NODE_ENV === "development",
    });

  return i18n;
};

// React Hook for language switching
export const useLanguageSwitch = () => {
  const { i18n } = require("react-i18next");

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    supportedLanguages: Object.keys(resources),
  };
};

// Provider component for React apps
export const createI18nProvider = () => {
  const { I18nextProvider } = require("react-i18next");
  const i18nInstance = initReactI18n();

  return ({ children }: { children: React.ReactNode }) => {
    return I18nextProvider({ i18n: i18nInstance, children });
  };
};

export { resources, defaultLanguage };
export * from "./index";
