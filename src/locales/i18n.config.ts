import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import languages from './constants/languages';
import enTranslations from './en';
import esTranslations from './sp';

export const changeLanguage = () => {
  i18n.language === 'en'
    ? i18n.changeLanguage(languages.spanish)
    : i18n.changeLanguage(languages.english);
};

i18n.use(initReactI18next).init({
  resources: {
    es: esTranslations,
    en: enTranslations,
  },
  lng: RNLocalize.getLocales()[0].languageCode,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
