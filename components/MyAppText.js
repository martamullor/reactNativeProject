import React from 'react';
import { Text } from 'react-native';

export const textStyles = {
  fontFamily: 'Rubik_300Light',
  fontSize: 16,
  lineHeight: 22.4,
  color: 'black',
};

export const MyAppText = ({ style, ...props }) => {
  return <Text {...props} style={[textStyles, style]} />;
};
