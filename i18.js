import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

i18n.translations = {
  ca: require('./assets/i18n/ca.json'),
};
i18n.locale = Localization.locale;
i18n.locale = 'ca';
i18n.fallbacks = true;

export default i18n;
