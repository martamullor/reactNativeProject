import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { AppStyles, TextStyles } from '../style/AppStyles';

export const MyAppInput = ({
  style,
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text style={[TextStyles.labelStyle, style]}>{label}</Text>
      <TextInput
        style={[TextStyles.inputBoldTextStyle, style]}
        placeholder={placeholder}
        placeholderTextColor={AppStyles.color.grey}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
