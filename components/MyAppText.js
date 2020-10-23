import React from 'react';
import { Text } from 'react-native';

export const textStyles = {
  fontFamily: 'Montserrat_400Regular',
  fontSize: 26,
  color: 'black',
};

export const MyAppText = ({ style, ...props }) => {
  return <Text {...props} style={[textStyles, style]} />;
};
