//import lib
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// make component
class AlbumList extends Component {
    componentwillMount() {
        console.log('componentWillMount in albumlist');
    }

    render() {
        return (
        <View>
            <Text>Album List!!!</Text>
        </View>
        );
    }
}

// make it available
export default AlbumList;
