import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from '../bottomNavigator/bottomNavigator';
import {drawerNames} from '../stackNavigator/screenNames';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={drawerNames.home}>
      <Drawer.Screen name={drawerNames.home} component={BottomNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
