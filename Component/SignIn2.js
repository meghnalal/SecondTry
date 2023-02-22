// ignore this

import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LinearGradient} from 'expo-linear-gradient'

const SignIn2 = (props,{navigate}) => {
  const[email,Setemail]= useState('');
  const [password,Setpassword]=useState('nothing');

  return (
    <LinearGradient colors = {['white', 'teal']}
    style={styles.gradient}>
    <View style={styles.email}>
        <Text> Enter email:</Text>      
             <TextInput style = {styles.Input}       
            placeholder= 'Enter your email'
            autoCapitalize='none'
            placeholderTextColor ='white'
            onChangeText={(val) => Setemail(val) }/> 

            <Text style = {styles.TextPassword}> Enter password:</Text>

            <TextInput style = {styles.password}
            placeholderTextColor ='white'
            placeholder= 'Enter your password'
            secureTextEntry={true}
            onChangeText={(val) => Setpassword(val) }/> 

             <Text style={styles.text}>
               email: {email} ,  {/* the SetEmail get stores in email  */}
               password:{password} {/* the SeerPassword get stores in password  */}
         </Text> 
      <View style={styles.screenContainer}>
            <Button title="Log In" 
             onPress={(data) => 
            {console.log(data)
            props.navigation.navigate('Home')}
          }//need to put the Name home rather then component also needed props because its a child - didnt need it it for button cuz it was main screen 
        />
      </View>
    </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  email :{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
  },
  Input: {
  borderWidth:1,
        borderColor: "black",
        borderRadius: 25,
        margin:10,
        width: 200,
        padding:8,
  },
  password: {
 borderWidth:1,
        borderColor: "black",
        borderRadius: 25,
        margin:10,
        width: 200,
        padding:8,
  },
  Text :{
   
        justifyContent: 'center',
        alignItems: 'center',
    backgroundColor: 'green',
  },
  TextPassword:{
    alignItems: 'flex-start', //check this later
    justifyContent: 'flex-start',
  },

  gradient: {
    flex: 1,
  },
  screenContainer: {
    position:"absolute",
    bottom:300,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",  //alignself is what align the button in middle 
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#FF1493",
  },
});
export default SignIn2;
