import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface IoniconsProps {
  name: string;
  size: number;
  color: string;
}

const Ionicons = ({name, size, color}: IoniconsProps) => {
  return <Icon name={name} size={size} color={color} />;
};

export default memo(Ionicons);
