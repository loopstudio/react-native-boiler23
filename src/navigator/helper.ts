/* eslint-disable @typescript-eslint/no-explicit-any */
import {StackActions} from '@react-navigation/native';
import {createRef} from 'react';

// * ACLARATION: some any could't type because was not recognized by Route type in navigation

export const navigationRef: any = createRef();
export default function useNavigator() {
  return navigationRef?.current;
}
export function getRoute(state: any): any {
  const route = state.routes[state.index];
  if (route.state) {
    return getRoute(route.state);
  }
  return route;
}
export function getActiveRoute() {
  if (navigationRef?.current) {
    return getRoute(navigationRef?.current.getRootState());
  }
  return null;
}

export const NavigateToScreenReplace = (name: string, params?: object) => {
  const navigation = useNavigator();
  const navigationAction = StackActions.replace(name, params);
  navigation.dispatch(navigationAction);
};

export const NavigateToScreen = (name: string, params?: object) => {
  const navigation = useNavigator();
  const navigationAction = StackActions.push(name, params);
  navigation.dispatch(navigationAction);
};

export const NavigateGoBack = () => {
  const navigation = useNavigator();
  navigation.goBack();
};
