import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

import styles from '../styles/style';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    if(this.props.type.localeCompare("login") == 0){
      return (
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.input}
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
              placeholder="Username"
            />

            <TextInput
              style={styles.input}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
              placeholder="Password"
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.callback(this.state)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
      );
    }else if(this.props.type.localeCompare("signup") == 0){
      return (
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.input}
            placeholder="Username"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Re-type Password"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      );
    }else {
      return (
        <View>
          <Text>ERROR: Form.js has invalid type</Text>
        </View>
      );
    }
  }
}

const localStyles = StyleSheet.create({

});
