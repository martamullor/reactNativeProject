import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import i18n from 'i18n-js';
import { MyAppInput } from '../components/MyAppInput';
import { MyAppButton } from '../components/MyAppButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = (email) => this.setState({ email });

  onChangePassword = (password) => this.setState({ password });

  onSubmit = () => {
    console.log('onSubmitForm');
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
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
        />
        <MyAppButton onPress={this.onSubmit}>
          {i18n.t('LOGIN_LABEL_PASSWORD')}
        </MyAppButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginHorizontal: 30,
  },
});
