import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { TextStyles } from '../AppStyles';

export const MyAppInput = ({
  style,
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <Text style={[TextStyles.labelStyle, style]}>{label}</Text>
      <TextInput
        style={[TextStyles.inputBoldTextStyle, style]}
        placeholder={placeholder}
        placeholderTextColor="#3d3935"
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};