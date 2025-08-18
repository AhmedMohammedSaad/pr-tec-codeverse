import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

// Import translation files
import enTranslations from './locales/en/common.json';
import arTranslations from './locales/ar/common.json';

const resources = {
  en: {
    common: enTranslations,
  },
  ar: {
    common: arTranslations,
  },
};

i18n
  // Load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // Learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // Detect user language
  // Learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  // For all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    // Ensure we map ar-EG, ar-SA, etc. to ar
    load: 'languageOnly',
    supportedLngs: ['en', 'ar'],
    nonExplicitSupportedLngs: true,

    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },

    // Default namespace
    defaultNS: 'common',
    ns: ['common'],

    // React specific options
    react: {
      useSuspense: false,
    },

    // Initialize synchronously since resources are bundled
    initImmediate: false,
  });

export default i18n;

// Helper function to get current language direction
export const getLanguageDirection = (language: string): 'ltr' | 'rtl' => {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  return rtlLanguages.includes(language) ? 'rtl' : 'ltr';
};

// Helper function to get language display name
export const getLanguageDisplayName = (language: string): string => {
  const languageNames: Record<string, string> = {
    en: 'English',
    ar: 'العربية',
  };
  return languageNames[language] || language;
};

// Available languages
export const availableLanguages = [
  { code: 'en', name: 'English', direction: 'ltr' },
  { code: 'ar', name: 'العربية', direction: 'rtl' },
];