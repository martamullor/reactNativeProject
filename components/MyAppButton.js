import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AppStyles, TextStyles } from '../AppStyles';

export const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '40%',
};

export const fullButtonStyle = {
  backgroundColor: '#e3142b',
};

export const overlineButtonStyle = {
  borderWidth: 3,
  borderColor: '#e3142b',
};

export const MyAppButton = ({ navigation, onPress, style, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, overlineButtonStyle, style]}
    >
      <Text {...props} style={[TextStyles.buttonStyle, AppStyles.color.red]} />
    </TouchableOpacity>
  );
};
