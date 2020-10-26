import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import i18n from 'i18n-js';
import { MyAppInput } from '../components/MyAppInput';
import { MyAppButton } from '../components/MyAppButton';
import { MyAppTitle } from '../components/MyAppTitle';

import * as firebase from 'firebase';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = (email) => this.setState({ email });

  onChangePassword = (password) => this.setState({ password });

  onLoginSuccess() {
    //this.props.navigation.navigate('App');
    console.log('Login Success');
  }

  async onRegisterPress() {
    const { email, password } = this.state;
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          //this.onLoginFailure.bind(this)('Weak Password!');
        } else {
          //this.onLoginFailure.bind(this)(errorMessage);
        }
      });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <MyAppTitle style={styles.title}>{i18n.t('LOGIN_TITLE')}</MyAppTitle>
        <MyAppInput
          placeholder={i18n.t('LOGIN_PLACEHOLDER_EMAIL')}
          value={email}
          onChangeText={this.onChangeEmail}
          label={i18n.t('LOGIN_LABEL_EMAIL')}
        />
        <MyAppInput
          placeholder={i18n.t('LOGIN_PLACEHOLDER_PASSWORD')}
          value={password}
          onChangeText={this.onChangePassword}
          label={i18n.t('LOGIN_LABEL_PASSWORD')}
          secureTextEntry={true}
        />
        <MyAppButton onPress={this.onRegisterPress}>
          {i18n.t('REGISTER')}
        </MyAppButton>
        <MyAppButton
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        >
          {i18n.t('REGISTER_BUTTON')}
        </MyAppButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 120,
  },
  title: {
    marginVertical: 30,
  },
});
