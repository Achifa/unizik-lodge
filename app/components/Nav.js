import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setMenuTo } from '../redux/reducers/menu'; 

//IMAGES
//import homeImage from '../assets/home-svgrepo-com.svg'

export default function Navigation({navigation}) {
  let dispatch = useDispatch();
  useEffect(() => {
    
    

  }, [navigation])
  
  return (
    <View style={styles.navigation}>

      <TouchableOpacity style={styles.btn}  data-screen='home' onPress={e => dispatch(setMenuTo('home'))}>
        <Image style={styles.icons} source={require('../assets/home.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} data-screen='card' onPress={e => dispatch(setMenuTo('card'))}>
        <Image style={styles.icons} source={require('../assets/credit-card.png')} />
      </TouchableOpacity>  

      <TouchableOpacity style={styles.btn}  data-screen='finance' onPress={e => dispatch(setMenuTo('finance'))}>
        <Image style={styles.icons} source={require('../assets/piggy-bank.png')} />
      </TouchableOpacity> 

      <TouchableOpacity style={styles.btn} data-screen='notification' onPress={e => dispatch(setMenuTo('notification'))}>
        <Image style={styles.icons} source={require('../assets/notification.png')} />
      </TouchableOpacity>      

      <TouchableOpacity style={styles.btn} data-screen='profile' onPress={e => dispatch(setMenuTo('profile'))}>
        <Image style={styles.icons} source={require('../assets/icons8-test-account-48.png')} />
      </TouchableOpacity>       
      
    </View>
  );
}

const styles = StyleSheet.create({

  navigation: {
    height: '7%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#eee',
    color: '#000',
    display: 'flex',
    flexDirection: 'row'
    
  },

  icons: {
    height: 25,
    width: 25,
    
  },

  btn: {
    position: 'relative',
    height: '100%',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',

    
  }

});
