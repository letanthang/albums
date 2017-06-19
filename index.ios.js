/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//create component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );
};

//render to device

AppRegistry.registerComponent('albums', () => App);
