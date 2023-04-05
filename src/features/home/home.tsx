import React from 'react';
import styles from './home.styles';
import PrimaryText from '../commons/Text/PrimaryText';
import {Button, View} from 'react-native';
import {screenNames} from '../../navigator/stackNavigator/screenNames';
import {NavigateToScreen} from '../../navigator/helper';
import {useTranslation} from 'react-i18next';
import {changeLanguage} from '../../locales/i18n.config';

const Home = () => {
  const {t} = useTranslation();

  const goToDetails = () => {
    NavigateToScreen(screenNames.details);
  };

  return (
    <View style={styles.container}>
      <PrimaryText title={t('home:welcome')} style={styles.title} />
      <Button title={t('home:goToDetails')} onPress={goToDetails} />
      <Button title={t('commons:changeLanguage')} onPress={changeLanguage} />
    </View>
  );
};

export default Home;
