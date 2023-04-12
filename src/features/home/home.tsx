import React from 'react';
import {Button, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import Config from 'react-native-config';

import styles from './home.styles';
import PrimaryText from '../commons/Text/PrimaryText';
import {screenNames} from '../../navigator/stackNavigator/screenNames';
import {NavigateToScreen} from '../../navigator/helper';
import {changeLanguage} from '../../locales/i18n.config';
import languages from '../../locales/constants/languages';

const Home = () => {
  const {t} = useTranslation();

  const goToDetails = () => {
    NavigateToScreen(screenNames.details);
  };

  return (
    <View style={styles.container}>
      <PrimaryText title={t('home:welcome')} style={styles.title} />
      <Button title={t('home:goToDetails')} onPress={goToDetails} />
      <Button
        title={t('commons:changeLanguageEnglish')}
        onPress={() => changeLanguage(languages.english)}
      />
      <Button
        title={t('commons:changeLanguageSpanish')}
        onPress={() => changeLanguage(languages.spanish)}
      />
      <Text>Testing react-native-config .env var {Config.APP_BUILD}</Text>
    </View>
  );
};

export default Home;
