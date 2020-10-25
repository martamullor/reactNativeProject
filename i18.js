import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

i18n.translations = {
  en: require('./assets/i18n/en.json'),
  es: require('./assets/i18n/es.json'),
};
i18n.locale = Localization.locale;
// If I need to set up a language by default and the language is no English
i18n.locale = 'es';
i18n.fallbacks = true;

export default i18n;
