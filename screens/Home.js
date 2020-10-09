import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import i18n from '../i18';

export default function Home({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ScreenExample');
      }}
      style={styles.container}
    >
      <Text style={styles.text}>{i18n.t('homeContent')}</Text>
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
