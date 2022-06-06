import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import {  MaterialIcons ,Entypo} from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import BackButton from '../components/BackButton'
import { StatusBar } from "expo-status-bar";
import Background from '../components/Background'
import { Avatar } from 'react-native-paper';
import Logo from '../components/Logo'
import { useState,useEffect } from 'react';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'

import {auth} from '../db/firebase_config'
import {db} from '../db/firebase_config'
import { FadeLoading } from 'react-native-fade-loading';
import { TouchableOpacity,Alert } from 'react-native'
import { Camera,CameraType } from "expo-camera";
export default function ProfileScreen({ navigation, route }) {
    const [person,setPerson] = useState();
    const [loading,setLoading] = useState(true);
    
    // const Footer = () =>{
    //     return(
             
    //             <Text style={{ alignItems: "center" }}>Hi i am Footer </Text>
                
    //     )};

    // navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Dashboard' }],
    //   })
    const userId = auth.currentUser.uid;


    useEffect(() => {
    const ref = db.app
  .firestore()
  .collection('users')
  .doc(userId)
  .get()
  .then((response) => {
    console.log(response.data());
    setPerson(response.data());
    setLoading(false);
  })
  .catch((error) => {

    console.log('Error',error.message);
    setLoading(false);
  })

}, []); // <- add empty brackets here

// const [count, setCount] = useState(0);
// const [show, setShow] = useState(false);
// //   const { userDetails } =  useState("");
//  const { userDetails } =  route.params ;//=== ""?"":route.params;
//   //userDetails = route.params === ""?"":route.params;


    return (

<React.Fragment>

{loading === true ? (

<Background>
<Logo />
<Header>Please Wait...</Header>
</Background>

):(
      
  <Background>
      
        {/* <SafeAreaView style={styles.container}> */}
{/* <StatusBar style="auto" backgroundColor="blue"/> */}

            <ScrollView showsVerticalScrollIndicator={false}> 
           
                <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#000000"></Ionicons>
                    <Ionicons name="warning-outline" size={24} color="#52575D"></Ionicons>
                    
                </View>

              
                
                
                {/* <Login></Login> */}
                {/* <Footer></Footer> */}




                <View>

                      <BackButton goBack = {navigation.goBack} />

                <View style={{ alignSelf: "center" , marginTop:50}}>


                    <View style = {styles.profileImage}>

                    <Avatar.Image size = {200} 
                    style={styles.image} resizeMode="center"
                    //source={{ uri: userDetails.avatar_url }}
                     />


                        {/* <Image source={require("../assets/profile-pic2.jpeg")} style={styles.image} resizeMode="center"></Image> */}
                        

 


                    </View>


                    <View style={styles.dm}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                    </View>
                    <View style={styles.active}></View>
                    <View style={styles.add}>
                        <Ionicons name="camera-outline" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                        {/* console.log({person.firstname}) */}
                        {person.first_name} {person.last_name}
                        </Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
                        Programmer
                        {/* {userDetails.type} */}
                        </Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[styles.text, styles.subText]}>Posts</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                        <Text style={[styles.text, styles.subText]}>Following</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/media1.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/media2.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/media3.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                    </ScrollView>
                    <View style={styles.mediaCount}>
                        <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>70</Text>
                        <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Media</Text>
                    </View>
                </View>



                <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#CABFAB", fontWeight: "300" }]}>
                                Started following <Text style={{ fontWeight: "400" }}>Bikers Club</Text> and <Text style={{ fontWeight: "400" }}>Mark Marquise</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#CABFAB", fontWeight: "300" }]}>
                                Started following <Text style={{ fontWeight: "400" }}>Rizwan Atta</Text>
                            </Text>
                        </View>
                    </View>
                </View>

                </View>

            </ScrollView>
            {/* </SafeAreaView> */}
            </Background>
)}
</React.Fragment>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#FFFFFF"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#FFFFFF",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});