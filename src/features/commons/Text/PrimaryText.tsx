import {Text} from 'react-native';
import React, {memo} from 'react';
import TextProps from './types';

const PrimaryText = ({title, style}: TextProps) => {
  return <Text style={style}>{title}</Text>;
};

export default memo(PrimaryText);
