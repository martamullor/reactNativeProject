import React from 'react';
import { Text } from 'react-native';
import { useFonts, Rubik_700Bold } from '@expo-google-fonts/rubik';

export const textStyles = {
  fontFamily: 'Rubik_700Bold',
  fontSize: 30,
  color: 'black',
};

export const MyAppTitle = ({ style, ...props }) => {
  let [fontsLoaded] = useFonts({
    Rubik_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return <Text {...props} style={[textStyles, style]} />;
  }
};
