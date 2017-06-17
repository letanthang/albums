/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import library
import React, { Component } from 'react';
import ReactNative, { AppRegistry, Text } from 'react-native';

//create component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

//render to device

AppRegistry.registerComponent('albums', () => App);