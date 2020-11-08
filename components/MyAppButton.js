import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AppStyles, TextStyles, ButtonStyles } from '../style/AppStyles';

export const MyAppButton = ({
  navigation,
  onPress,
  linkButton,
  style,
  ...props
}) => {
  if (linkButton) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[ButtonStyles.linkButton, style]}
      >
        <Text
          {...props}
          style={[TextStyles.buttonStyle, AppStyles.color.red]}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[ButtonStyles.overlineButton, style]}
      >
        <Text
          {...props}
          style={[TextStyles.buttonStyle, AppStyles.color.red]}
        />
      </TouchableOpacity>
    );
  }
};
