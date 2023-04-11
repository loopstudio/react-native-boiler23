import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabNames} from '../stackNavigator/screenNames';
import DetailsScreen from '../../screens/DetailsScreen/detailsScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

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
