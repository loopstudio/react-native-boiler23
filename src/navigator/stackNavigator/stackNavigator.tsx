import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';
import DetailsScreen from '../../screens/DetailsScreen/detailsScreen';
import DrawerNavigator from '../drawerNavigator/drawerNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.home}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.details}
        component={DetailsScreen}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
