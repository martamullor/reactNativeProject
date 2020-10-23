import React from 'react';
import { Text } from 'react-native';

export const textStyles = {
  fontFamily: 'Rubik_700Bold',
  fontSize: 30,
  color: 'black',
};

export const MyAppTitle = ({ style, ...props }) => {
  return <Text {...props} style={[textStyles, style]} />;
};
