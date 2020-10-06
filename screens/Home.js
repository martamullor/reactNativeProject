import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  ca: { homeContent: 'Benvingut' },
};
i18n.locale = Localization.locale;
i18n.locale = 'ca';
i18n.fallbacks = true;

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
