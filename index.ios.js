/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import library
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//create component
const App = () => (
    <View>
      <Header headerText="Albums hehe" />
      <AlbumList />
    </View>
  );

//render to device

AppRegistry.registerComponent('albums', () => App);
