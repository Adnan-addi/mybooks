import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import BackButton from '../components/BackButton'
import { StatusBar } from "expo-status-bar";
import Background from '../components/Background'
import { Avatar } from 'react-native-paper';
import Logo from '../components/Logo'
import { useState } from 'react';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import {auth} from '../db/firebase_config'
import {db} from '../db/firebase_config'
import { FadeLoading } from 'react-native-fade-loading';
import { TouchableOpacity,Alert } from 'react-native'
import { Camera,CameraType } from "expo-camera";


export default function CameraStart({ navigation, route }) {
  const [startCamera,setStartCamera] = React.useState(false)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
  const [flashMode, setFlashMode] = React.useState('off')
  let camera = Camera.getAvailableCameraTypesAsync;
  
  const __startCamera = async () => {
//    const {status} = await Camera.requestPermissionsAsync()
    const {status} = await Camera.requestCameraPermissionsAsync()
 if(status === 'granted'){
   // do something
   setStartCamera(true)
   setCameraType('back')

 }else{
   Alert.alert("Access denied")
 }
}

const __takePicture = async () => {
  if (!camera) return
  const photo = await camera.takePictureAsync()

  console.log(photo)
  setPreviewVisible(true)
  setCapturedImage(photo)
 
}

const CameraPreview = ({photo}) => {
  console.log('sdsfds', photo)
  return (
    <Background>
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <Image
        source={{uri: photo && photo.uri}}
        style={{
          flex: 1
        }}
      />
       <View style={{ flex: 1, flexDirection: 'row',alignItems:'flex-end',marginBottom:90 }}>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: '200' }}
          onPress={() => __retakePicture()}>RE-TAKE</Text>
        </View>
        {/* <View style={{ flex: 1, paddingRight: 10 }}>
          <Text style={{ textAlign:'center' }}>CENTER</Text>
        </View> */}
        <View
          style={{ flex: 1, paddingRight: 30 }}>
        </View>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: '200' }}
          
          onPress={() => Alert.alert('Coming Soon')}
          >UPLOAD</Text>
        </View>
         
      </View>

 

    </View>
    </Background>
  )
}

const __retakePicture = () => {
  setCapturedImage(null)
  setPreviewVisible(false)
  __startCamera()
}

const __switchCamera = () => {
  if (cameraType === 'back') {
    setCameraType('front')
  } else {
    setCameraType('back')
  }
}

const __handleFlashMode = () => {
  if (flashMode === 'on') {
    setFlashMode('off')
  } else if (flashMode === 'off') {
    setFlashMode('on')
  } else {
    setFlashMode('auto')
  }

}


return (

<View
      style={{flex: 1,
        width: '100%',
      }}>


{startCamera ? (

previewVisible && capturedImage ? (
  <CameraPreview photo={capturedImage} />
) : (
  
        <Camera
        type={cameraType}
        flashMode={flashMode}
          style={{flex: 1,width:"100%"}}
          ref={(r) => {
            camera = r
          }}
        >
<BackButton 
 
goBack={navigation.goBack} />

<TouchableOpacity
            onPress={__handleFlashMode}
            style={{
            position: 'absolute',
            
            top: '12%',
            backgroundColor: flashMode === 'off' ? '#000' : '#fff',
            borderRadius: '50%',
            height: 25,
            width: 25
        }}
        >
            <Text
                style={{
                fontSize: 20
                }}
            >
            ⚡️
            </Text>
        </TouchableOpacity>

<View
        style={{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
        }}
      >
        <View
        style={{
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
        }}
        >
            <TouchableOpacity
            onPress={__takePicture}
            style={{
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: '#fff'
            }}
            />
    </View>
</View>

<TouchableOpacity
     onPress={__switchCamera}
    style={{

      position: 'absolute',  
      bottom:40,
      left:40,
      
      marginTop:40,
      marginRight:20,
     
      

    
    }}
   >
       <Text
           style={{
           fontSize: 20,
           color:"#ffffff"
           }}
           >
       {cameraType === 'front' ? 'Front' : 'Back'}
       </Text>
    </TouchableOpacity>



</Camera>
)
  
) : (
      
<Background>
  <View style={styles.container}>
    <View
          style={{
           // flex: 1,
            //backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
<Button
  style={{backgroundColor:"#f8a240" }}
  mode="contained"
  onPress={() => __startCamera()}>
    Take picture
  </Button>
  <Button
    mode="outlined"
    onPress={() => navigation.goBack()}>
    Go Back
  </Button>
    </View>
    <StatusBar style="auto" />
  </View>
</Background>
      
)}
</View>
)
}
  
  const styles = StyleSheet.create({
    container: {
     // flex: 1,
     // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })