import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Foundation from '@expo/vector-icons/Foundation';
import axios from 'axios';
import { Avatar } from 'react-native-paper';
import Background from '../components/Background';
import BackButton from '../components/BackButton';


export default function AxioScreen({ navigation }) {
    // const { userEmail } = route.params;
    const { userEmail } = "i am adnan"
    const [users, setUsers] = React.useState([]);
  
    axios.get('https://api.github.com/users').then((response) => {
      // if the api call returned some data check and save it
      if (response.data) {
        setUsers(response.data);
      }
    });
  
    return (
      <Background>
            <BackButton goBack = {navigation.goBack} />
      <View>
      
      <View style={{marginTop:60}}>
        <Text>{userEmail}</Text>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => {
                navigation.navigate('ProfileScreen', { userDetails: item });
              }}
            >
              <Avatar.Image size={50} source={{ uri: item.avatar_url }} />
              <Text style={{color:"#fff"}}>{item.login}</Text>
            </TouchableOpacity>
          )}
        />
        </View>
        
      </View>
      </Background>
    );
  }
  
 
  
  const styles = StyleSheet.create({
    itemContainer: {
      
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: 'gray',
      margin: 5,
    },
  });