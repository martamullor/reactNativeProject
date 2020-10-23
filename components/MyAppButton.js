import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

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

export const textStyles = {
  fontFamily: 'Rubik_700Bold',
  fontSize: 17,
  padding: 15,
};

export const MyAppButton = ({ navigation, fullButton, style, ...props }) => {
  if (fullButton) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navigation);
        }}
        style={[buttonStyle, fullButtonStyle, style]}
      >
        <Text {...props} style={[textStyles, { color: 'white' }, style]} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navigation);
        }}
        style={[buttonStyle, overlineButtonStyle, style]}
      >
        <Text {...props} style={[textStyles, { color: '#e3142b' }, style]} />
      </TouchableOpacity>
    );
  }
};
