import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslations from "./locales/en/translation.json";
import frTranslations from "./locales/fr/translation.json";

export const defaultNamespace = "common";
export const defaultLanguage = "en";
export const supportedLanguages = ["en", "fr"] as const;

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

// Function to create an i18n instance for a React app
export const createI18nInstance = (
  options: { useLanguageDetector?: boolean; appName?: string } = {},
) => {
  const { useLanguageDetector = true, appName = "app" } = options;
  const instance = i18next.createInstance();

  const initChain = instance.use(initReactI18next);
  if (useLanguageDetector) {
    initChain.use(LanguageDetector);
  }

  initChain.init({
    ...i18nConfig,
    ...(useLanguageDetector && {
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
        lookupLocalStorage: `${appName}_i18nextLng`, // Unique key per app to avoid conflicts
      },
    }),
    debug: process.env.NODE_ENV === "development",
  });

  return instance;
};

// Export types for TypeScript support
export type TranslationKeys = keyof typeof enTranslations;

// Utility functions
export const isValidLanguage = (lang: string): lang is SupportedLanguage =>
  supportedLanguages.includes(lang as SupportedLanguage);

export const getDefaultLanguage = (): SupportedLanguage => defaultLanguage;
export const getSupportedLanguages = (): readonly SupportedLanguage[] =>
  supportedLanguages;

// React Hook for language switching using context instance
export const useLanguageSwitch = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    if (isValidLanguage(language)) {
      i18n.changeLanguage(language);
    }
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    supportedLanguages: Object.keys(resources) as SupportedLanguage[],
  };
};

// Re-export react-i18next utilities
export * from "react-i18next";
