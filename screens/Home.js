import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import i18n from '../i18';
import { MyAppText } from '../components/MyAppText';

export default function Home({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ScreenExample');
      }}
      style={styles.container}
    >
      <MyAppText style={styles.text}>{i18n.t('homeContent')}</MyAppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
