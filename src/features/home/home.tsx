import React from 'react';
import styles from './home.styles';
import PrimaryText from '../commons/Text/PrimaryText';
import {Button, View} from 'react-native';
import {screenNames} from '../../navigator/stackNavigator/screenNames';
import {NavigateToScreen} from '../../navigator/helper';

const Home = () => {
  const goToDetails = () => {
    NavigateToScreen(screenNames.details);
  };

  return (
    <View style={styles.container}>
      <PrimaryText title="Welcome to home screen" style={styles.title} />
      <Button title="Go to details" onPress={goToDetails} />
    </View>
  );
};

export default Home;
