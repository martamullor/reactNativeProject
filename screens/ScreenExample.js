import * as React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import i18n from '../i18';
import { MyAppText } from '../components/MyAppText';
import { MyAppButton } from '../components/MyAppButton';
import { GeneralStyles } from '../style/AppStyles';

import firebase from '../services/firebase';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ScreenExample = ({ navigation }) => {
  const onLogoutSuccess = () => {
    navigation.navigate('LoginScreen');
  };
  const logout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(onLogoutSuccess)
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <View style={GeneralStyles.contentAligned}>
      <StatusBar barStyle="dark-content" />
      <MyAppText>{i18n.t('screenExample')}</MyAppText>
      <MyAppButton onPress={logout} style={styles.button}>
        {i18n.t('LOGOUT')}
      </MyAppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: hp('8%'),
  },
});

export default ScreenExample;
