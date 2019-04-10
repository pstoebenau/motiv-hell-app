import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/style';

export default class Bet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.betTitle}>{this.props.title}</Text>
        <Text style={styles.words}>{this.props.description}</Text>
        <Text style={styles.words}>${this.props.amount}</Text>
      </View>
    );
  }
}
