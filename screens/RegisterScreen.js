import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import i18n from '../i18';
import { MyAppInput } from '../components/MyAppInput';
import { MyAppButton } from '../components/MyAppButton';
import { MyAppTitle } from '../components/MyAppTitle';

import firebase from '../services/firebase';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GeneralStyles } from '../style/AppStyles';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

  async signInWithEmail() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
    const { navigation } = this.props;
    const { email, password } = this.state;
    return (
      <View style={GeneralStyles.contentAligned}>
        <StatusBar barStyle="dark-content" />
        <MyAppTitle style={styles.title}>{i18n.t('LOGIN_TITLE')}</MyAppTitle>
        <MyAppInput
          placeholder={i18n.t('LOGIN_PLACEHOLDER_EMAIL')}
          value={email}
          onChangeText={this.onChangeEmail}
          label={i18n.t('LOGIN_LABEL_EMAIL')}
          style={styles.input}
        />
        <MyAppInput
          placeholder={i18n.t('LOGIN_PLACEHOLDER_PASSWORD')}
          value={password}
          onChangeText={this.onChangePassword}
          label={i18n.t('LOGIN_LABEL_PASSWORD')}
          secureTextEntry={true}
          style={styles.input}
        />
        <MyAppButton
          style={styles.button}
          onPress={() => this.signInWithEmail()}
        >
          {i18n.t('REGISTER')}
        </MyAppButton>
        <MyAppButton
          linkButton
          style={styles.button}
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
