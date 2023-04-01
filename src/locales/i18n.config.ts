import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import resources from './resources';

export const changeLanguage = () => {
  i18n.language === 'en'
    ? i18n.changeLanguage('es')
    : i18n.changeLanguage('en');
};

i18n.use(initReactI18next).init({
  resources,
  lng: RNLocalize.getLocales()[0].languageCode,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
