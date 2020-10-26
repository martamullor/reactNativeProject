import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import i18n from 'i18n-js';
import { MyAppInput } from '../components/MyAppInput';
import { MyAppButton } from '../components/MyAppButton';
import { MyAppTitle } from '../components/MyAppTitle';

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
        <MyAppButton onPress={this.onSubmit}>{i18n.t('LOGIN')}</MyAppButton>
        <MyAppButton
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
    marginHorizontal: 25,
    marginTop: 120,
  },
  title: {
    marginVertical: 30,
  },
});
