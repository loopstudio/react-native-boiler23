import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import {bottomTabNames} from '../stackNavigator/screenNames';
import DetailsScreen from '../../screens/DetailsScreen/detailsScreen';

const Tab = createBottomTabNavigator();

// TODO : When installing the react-native-vector-icons add an icon to the Tab.Screen

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={bottomTabNames.home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={bottomTabNames.details}
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
