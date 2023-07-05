import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Navigation from './components/Navigation';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  

  return (

    <Provider store={store}>

      <Routes />

    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fef',
    borderColor: '#777',
    color: '#000'
  }

});
