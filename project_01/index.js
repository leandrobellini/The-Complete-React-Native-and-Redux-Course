
//Import a library to help create a component
import React        from 'react';
import {Text, View, AppRegistry}  from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'
 
//Create a component
const App = () => (
    <View>
        <Text>Ola</Text>
    </View> 
);


//Render it to the device
AppRegistry.registerComponent('project_01', () => App);
 