import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import i18n from 'i18n-js';
import { MyAppText } from '../components/MyAppText';

export default function ScreenExample() {
  return (
    <View style={styles.container}>
      <MyAppText style={styles.text}>{i18n.t('screenExample')}</MyAppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
});
