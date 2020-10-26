import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AppStyles, TextStyles } from '../AppStyles';

export const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '40%',
  borderColor: 'black',
  borderWidth: 1,
  marginTop: 30,
  borderRadius: 50,
};

export const MyAppButton = ({ navigation, onPress, style, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text {...props} style={[TextStyles.buttonStyle, AppStyles.color.red]} />
    </TouchableOpacity>
  );
};
