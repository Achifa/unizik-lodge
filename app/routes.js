import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Components
import Home from './pages/Home';
import History from './pages/History';
import Notification from './pages/Notification';
import Navigation from './components/Navigation';
import Menus from './Menu';
import Airtime from './screens/Airtime';
import Data from './screens/Data';
import Transfer from './screens/Transfer';
import Withdraw from './screens/Withdraw';
import Deposit from './screens/Deposit';
import Network from './screens/Network';
import TV from './screens/Tv';
import GiftCard from './screens/GiftCard';
import Electricity from './screens/Electricity';
import ProfileData from './screens/ProfileData';
import ProfileHistory from './screens/ProfileHistory';
import ProfileSupport from './screens/ProfileSupport';
import ProfileRating from './screens/ProfileRating';
import ProfileReport from './screens/ProfileReport';
import Notice from './screens/Notice';

const Stack = createNativeStackNavigator();

export default function Routes() {
  

  return (
    <>

      

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=' ' component={Menus} />
          
          
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="Withdraw" component={Withdraw} />
          <Stack.Screen name="Deposit" component={Deposit} />

          <Stack.Screen name="Airtime" component={Airtime} /> 
          <Stack.Screen name="Data" component={Data} />   
          <Stack.Screen name="Network" component={Network} />   
          <Stack.Screen name="TV" component={TV} />   
          <Stack.Screen name="GiftCard" component={GiftCard} />   
          <Stack.Screen name="Electricity" component={Electricity} />

          <Stack.Screen name="profile-data" component={ProfileData} />   
          <Stack.Screen name="profile-history" component={ProfileHistory} />   
          <Stack.Screen name="profile-support" component={ProfileSupport} />   
          <Stack.Screen name="profile-rating" component={ProfileRating} />   
          <Stack.Screen name="profile-report" component={ProfileReport} />  

          <Stack.Screen name="notice" component={Notice} />   


        </Stack.Navigator>
      </NavigationContainer>
    
    </>
    
  );
}
