import * as React from 'react';
import { View, StatusBar } from 'react-native';
import i18n from 'i18n-js';
import { MyAppText } from '../components/MyAppText';
import { GeneralStyles } from '../style/AppStyles';

export default function ScreenExample() {
  return (
    <View style={GeneralStyles.contentAligned}>
      <StatusBar barStyle="dark-content" />
      <MyAppText>{i18n.t('screenExample')}</MyAppText>
    </View>
  );
}
