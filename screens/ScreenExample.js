import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  ca: { homeContent: 'Benvingut', screenExample: 'Fundació.cat català' },
};
i18n.locale = Localization.locale;
i18n.locale = 'ca';
i18n.fallbacks = true;

export default function ScreenExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t('screenExample')}</Text>
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
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
