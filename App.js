import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Bet extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.betTitle}>{this.props.title}</Text>
        <Text style={styles.words}>{this.props.description}</Text>
        <Text style={styles.words}>${this.props.amount}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Bet title="Do something" description="Just what even is this honestly" amount="200" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  words: {
    color: '#fff',
  },
  betTitle: {
    color: '#fff',
    fontSize: 24,
  },
});
