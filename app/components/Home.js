import { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Motion, AnimatePresence } from "@legendapp/motion"


import { useDispatch, useSelector } from 'react-redux';
import Lodge from '../pages/Lodge';
import Cart from '../pages/Cart';
import Notice from '../pages/Notice';
import Payment from '../pages/Payment';
import Profile from '../pages/Profile';

export default function Menus({navigation}) {

    let {selected_menu} = useSelector(s => s.selected_menu)
    let [page, setPage] = useState();

    useEffect(() => {
        if(selected_menu === 'lodge'){
             setPage(<Lodge navigation={navigation} key={1} />)
        }else if(selected_menu === 'cart'){
             setPage(<Cart navigation={navigation} key={2} />)
        }else if(selected_menu === 'chat'){
            setPage(<Chat navigation={navigation} key={3} />)
       }else if(selected_menu === 'notice'){
             setPage(<Notice navigation={navigation} key={4} />)
        }else if(selected_menu === 'payment'){
            setPage(<Payment navigation={navigation} key={5} />)
        }else if(selected_menu === 'profile'){
             setPage(<Profile navigation={navigation} key={6} /> )
        }
    }, [selected_menu])

    /*
    var initial={ opacity: 0.1, x: 0 }
    var animate={ opacity: 1, x: 100 }
    var exit={ opacity: 0.2, x: 0 }
    var transition={
        default: {
            type: 'spring',
        },
        opacity: {
            type: 'timing',
        },
    }

    */

  return (
    <>

        {
            page
        }

        <Nav navigation={selected_menu}  />
    </>
    
  );
}
