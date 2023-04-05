import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/locales/i18n.config';
import {navigationRef} from './src/navigator/helper';
import StackNavigator from './src/navigator/stackNavigator/stackNavigator';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </I18nextProvider>
  );
};

export default App;
