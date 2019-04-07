import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/style';

export default class Bet extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.formTitle}>{this.props.name}</Text>
      </View>
    );
  }
}
