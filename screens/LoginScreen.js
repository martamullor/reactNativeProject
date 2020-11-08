import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import i18n from 'i18n-js';
import { MyAppInput } from '../components/MyAppInput';
import { MyAppButton } from '../components/MyAppButton';
import { MyAppTitle } from '../components/MyAppTitle';

import firebase from '../services/firebase';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@gmail.com',
      password: 'Slash12345!',
      errorMessage: '',
      loading: false,
    };
  }

  onLoginSuccess() {
    const { navigation } = this.props;
    navigation.navigate('ScreenExample');
  }
  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false });
  }

  onChangeEmail = (email) => this.setState({ email });

  onChangePassword = (password) => this.setState({ password });

  async loginWithEmail() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch((error) => {
        console.log(error);
        alert(error);
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          this.onLoginFailure.bind(this)('Weak Password!');
        } else {
          this.onLoginFailure.bind(this)(errorMessage);
        }
      });
  }

  render() {
    const { email, password } = this.state;
    const { navigation } = this.props;
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
        <MyAppButton
          style={styles.button}
          onPress={() => this.loginWithEmail()}
        >
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    marginHorizontal: 40,
  },
  title: {
    marginVertical: 30,
  },
  button: {
    marginTop: 30,
  },
});
