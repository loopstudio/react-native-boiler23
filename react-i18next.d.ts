import 'react-i18next';
import commons from './src/locales/en/commons';
import home from './src/locales/en/screens/home';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'commons';
    // custom resources type
    resources: {
      commons: typeof commons;
      home: typeof home;
    };
  }
}
