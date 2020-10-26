import React from 'react';
import { Text } from 'react-native';

export const textStyles = {
  fontFamily: 'Montserrat_800ExtraBold',
  fontSize: 28,
  color: 'black',
};

export const MyAppTitle = ({ style, ...props }) => {
  return <Text {...props} style={[textStyles, style]} />;
};
