import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles/style';
import Bet from './components/Bet';
import Form from './components/Form';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
    );
  }
}
