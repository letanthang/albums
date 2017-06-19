//import lib
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// make component
class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        console.log('componentWillMount in albumlist');
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
            // console.log(response);
            //this.setState({ albums: response.data });
        // });
    }
    renderAlbums() {
        this.state.albums.map((album) => {
            return (
                <View></View>
            );
        });
    }

    render() {
        return (
        <View>
            {this.renderAlbums()}
        </View>
        );
    }
}

// make it available
export default AlbumList;
