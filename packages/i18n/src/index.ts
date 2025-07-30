import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslations from "./locales/en/translation.json";
import frTranslations from "./locales/fr/translation.json";

export const defaultNamespace = "common";
export const defaultLanguage = "en";
export const supportedLanguages = ["en", "fr"] as any;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const resources = {
  en: {
    common: enTranslations,
  },
  fr: {
    common: frTranslations,
  },
} as const;

// Base i18n configuration
export const i18nConfig = {
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  defaultNS: defaultNamespace,
  ns: [defaultNamespace],
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  react: {
    useSuspense: false,
  },
};

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

// Initialize GENERAL i18next instance
export const createI18nInstance = () => {
  const instance = i18n.createInstance();
  instance.use(initReactI18next).init(i18nConfig);
  return instance;
};
// Initialize i18next instance
export const createI18nInstanceForReact = () => {
  const instance = initReactI18n().createInstance();
  instance.use(initReactI18next).init(i18nConfig);
  return instance;
};

// Export types for TypeScript support
export type TranslationKeys = keyof typeof enTranslations;

// Utility functions
export const isValidLanguage = (lang: string): lang is SupportedLanguage => {
  return supportedLanguages.includes(lang as SupportedLanguage);
};

export const getDefaultLanguage = (): SupportedLanguage => defaultLanguage;
export const getSupportedLanguages = (): readonly SupportedLanguage[] =>
  supportedLanguages;

//Hooks
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
// Export everything from react-i18next for convenience
export * from "react-i18next";
