
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{

    //initial state
    state = { albums: [] };

    //will run after render on the screen
    componentWillMount(){
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    } 

    renderAlbums(){
        //key é usada pelo map
        //map retorna um novo vetor com a funcao aplicada que ele chama pra cada item do array

        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
 
    render(){ 
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()} 
            </View>
        ); 
    }
}

export default AlbumList;