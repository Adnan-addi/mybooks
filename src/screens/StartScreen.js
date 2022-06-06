import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {auth} from '../db/firebase_config'
import {myUser} from '../db/firebase_config'
import { TouchableOpacity, StyleSheet, View,Alert ,AsyncStorage} from 'react-native'

import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function StartScreen({ navigation }) {


  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user already loggen in')
    } else {
      console.log('user not logged in')
    }
  });


let isUserLoggedIn = AsyncStorage.getItem('isuserloggedin'); 
 console.log("--->",isUserLoggedIn);

// //  alert('There is an error-> ',auth.currentUser)
// console.log(myUser);

//   if (myUser !== null) {
//     // navigation.replace('Home');
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Dashboard' }],
//     })
//   } else {
//     // user is logged out
//    // alert('There is an error-> ',auth.currentUser)
    
//   }

 
  // auth.onAuthStateChanged((user) => {
  //   if (user) {
      
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     var uid = user.uid;
  //     // ...
  //     console.log(uid);
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: 'Dashboard' }],
  //     })
  //   } else {
  //     // User is signed out
  //     // ...
  //     console.log("Useris logged out");
  //   }
  // });



  return (
    <Background>
      <Logo />
      <Header>My Books</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
      style={{backgroundColor:"#f8a240" }}
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
      
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
