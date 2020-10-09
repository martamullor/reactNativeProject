import React from 'react';
import { Text } from 'react-native';
import { useFonts, Rubik_300Light } from '@expo-google-fonts/rubik';

export const textStyles = {
  fontFamily: 'Rubik_300Light',
  fontSize: 16,
  lineHeight: 22.4,
  color: 'black',
};

export const MyAppText = ({ style, ...props }) => {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
  });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return <Text {...props} style={[textStyles, style]} />;
  }
};
