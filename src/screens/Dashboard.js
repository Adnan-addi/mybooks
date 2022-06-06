import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import {auth} from '../db/firebase_config'
import {db} from '../db/firebase_config'
import { FadeLoading } from 'react-native-fade-loading';
import { TouchableOpacity, Text,StyleSheet, View,Alert } from 'react-native'
export default function Dashboard({ navigation }) {
const [person,setPerson] = useState();
const [loading,setLoading] = useState(true);


  // console.log("uid: ",auth.currentUser.uid);
  // console.log("email: ",auth.currentUser.email);
  // console.log("displayname: ",auth.currentUser.displayName);
  // console.log("photourl: ",auth.currentUser.photoURL);
  // console.log("phonenumber: ",auth.currentUser.phoneNumber);

  const userId = auth.currentUser.uid;

  // const ref = db.app
  // .firestore()
  // .collection('users')
  // .doc(userId)
  // .get()
  // .then((response) => {
  //   console.log(response.data());
  //   setPerson(response.data());
  //   setLoading(false);
  // })
  // .catch((error) => {
  //   console.log('Error',error.message);
  //   setLoading(false);
  // })




  return (

//<React.Fragment>

//{//loading === true ? (

//<Background>
//<Logo />
//<Header>Please Wait...</Header>
//</Background>

//):(

  <Background>
  <Logo />
  <Header>Let’s start</Header>
  <Paragraph>
    Here Are Topics Learned in E RozGaar Training Program and I am trying to put them all in 1 place.
  </Paragraph>

  <Button
  style={{backgroundColor:"#f8a240" }}
  mode="contained"
  onPress={() => navigation.navigate('CameraStart')}>
    Start Camera
  </Button>


  <Button
  style={{backgroundColor:"#f8a240" }}
  mode="contained"
  onPress={() => navigation.navigate('AxioScreen')}>
    Axios
  </Button>

  <Button
    mode="outlined"
    onPress={() => navigation.navigate('ProfileScreen')}>
    Profile Screen
  </Button>

  <Button
    mode="outlined"
    onPress={() =>
      auth.signOut().then(Response =>{
        navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
              })
      }).catch(error=>{
        alert('There is an error-> ', error.message)
      })

      // auth.onAuthStateChanged(user => {
        
      //   if (user) {
      //       //navigate('Home');
      //       console.log(user);
      //   } else {
      //     navigation.reset({
      //       index: 0,
      //       routes: [{ name: 'StartScreen' }],
      //     })
      //   }
      // })
    }
  >
    Logout
  </Button>
  </Background>

//)}

//</React.Fragment>
  )
}
