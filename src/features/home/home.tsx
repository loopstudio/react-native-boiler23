import React from 'react';
import styles from './home.styles';
import PrimaryText from '../commons/Text/PrimaryText';
import {View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <PrimaryText title="Welcome to home screen" style={styles.title} />
    </View>
  );
};

export default Home;
