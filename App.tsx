import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './src/navigator/helper';
import StackNavigator from './src/navigator/stackNavigator/stackNavigator';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
