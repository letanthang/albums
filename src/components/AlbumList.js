//import lib
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// make component
class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        console.log('componentWillMount in albumlist');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({ albums: response.data }));
    }
    renderAlbums() {
        return this.state.albums.map((album) => 
                <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
        );
    }
}

// make it available
export default AlbumList;
