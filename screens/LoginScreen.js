import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import i18n from '../i18';
import { MyAppInput } from '../components/MyAppInput';
import { MyAppButton } from '../components/MyAppButton';
import { MyAppTitle } from '../components/MyAppTitle';

import firebase from '../services/firebase';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GeneralStyles } from '../style/AppStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('Slash12345!');
  const [setErrorMessage] = useState('');

  const onLoginSuccess = () => {
    navigation.navigate('ScreenExample');
  };

  const loginWithEmail = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch((error) => {
        alert(error);
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          setErrorMessage('Weak Password!');
        } else {
          setErrorMessage(errorMessage);
        }
      });
  };

  return (
    <View style={GeneralStyles.contentAligned}>
      <StatusBar barStyle="dark-content" />
      <MyAppTitle style={styles.title}>{i18n.t('LOGIN_TITLE')}</MyAppTitle>
      <MyAppInput
        placeholder={i18n.t('LOGIN_PLACEHOLDER_EMAIL')}
        value={email}
        onChangeText={setEmail}
        label={i18n.t('LOGIN_LABEL_EMAIL')}
        style={styles.input}
      />
      <MyAppInput
        placeholder={i18n.t('LOGIN_PLACEHOLDER_PASSWORD')}
        value={password}
        onChangeText={setPassword}
        label={i18n.t('LOGIN_LABEL_PASSWORD')}
        secureTextEntry={true}
        style={styles.input}
      />
      <MyAppButton style={styles.button} onPress={loginWithEmail}>
        {i18n.t('LOGIN')}
      </MyAppButton>
      <MyAppButton
        linkButton
        style={styles.button}
        onPress={() => {
          navigation.navigate('RegisterScreen');
        }}
      >
        {i18n.t('LOGIN_BUTTON')}
      </MyAppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: hp('2%'),
  },
  input: {
    marginVertical: hp('0.3%'),
  },
  button: {
    marginVertical: hp('3%'),
  },
});

export default LoginScreen;
