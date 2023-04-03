import React from 'react';
import {Button, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './home.styles';
import PrimaryText from '../commons/Text/PrimaryText';
import {screenNames} from '../../navigator/stackNavigator/screenNames';
import {NavigateToScreen} from '../../navigator/helper';
import {changeLanguage} from '../../locales/i18n.config';
import languages from '../../locales/constants/languages';
import Ionicons from '../commons/Icons/Ionicons';

const Home = () => {
  const {t} = useTranslation();

  const goToDetails = () => {
    NavigateToScreen(screenNames.details);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={30} color="red" />
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
    </View>
  );
};

export default Home;
