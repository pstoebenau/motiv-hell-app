import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import LoginScreen from './src/pages/Login';
import SignupScreen from './src/pages/Signup';

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
});

const App = createAppContainer(AppStackNavigator);

export default App;
