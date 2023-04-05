import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import * as RNLocalize from 'react-native-localize';
import {LanguageProps} from './constants/languages';
import enTranslations from './en';
import esTranslations from './es';

export const changeLanguage = (language: LanguageProps) => {
  i18n.changeLanguage(language);
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
