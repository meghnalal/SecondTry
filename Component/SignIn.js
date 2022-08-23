// sign in page 
// input gets registered and validated
// for the email i used regex 
//for the password i used same regex rule way 
//i used the custom input to shorten the code a bit 
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LinearGradient} from 'expo-linear-gradient'
import {useForm,Controller} from 'react-hook-form'
import { required } from 'validate-form-in-expo-style/src/CustomValidationRules';
import CustomInput from './CustomInput'
import MainPage from './MainPage';

const email_Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
const SignIn2 = (props,{navigate}) => {
 
    const {
      control,
      handleSubmit,
      formState:{errors}
    } = useForm();
    
    const onSignInPressed= data => {
      console.log(data)
      props.navigation.navigate('MainPage') //its in a children
    }
  return (
    <LinearGradient colors = {['white', 'teal']}
    style={styles.gradient}>
    <View style={styles.email}>
        <Text> Enter email:</Text>      
          
            <Controller 
            control={control}
            name="email"
            render={({field:{value, onChange,onBlur}, fieldState :{error}})=>(
              <View style={[styles.Input,{borderColor: error ? 'red':'black'}]}>
              <TextInput 
              value={value}
              autoCorrect={false}
              onChangeText={onChange} 
              onBlur={onBlur} 
              placeholder={'email'}
              styles={[styles.Input,{borderColor: error ? 'red':'black' }]}
              />
              </View>
            )}
            rules={{required:true,pattern:email_Regex}}
            />
            <Text> Enter password:</Text> 
            <Controller 
            control={control}
            name="password"
            render={({field:{value, onChange,onBlur}, fieldState :{error}})=>(
              <View style={[styles.Input,,{borderColor: error ? 'red':'black' }]}>
              <TextInput 
              value={value}
              onChangeText={onChange} 
              onBlur={onBlur} 
              placeholder={'password'}
              secureTextEntry={true}
              autoCorrect={false}
              styles={[styles.Input,{borderColor: error ? 'red':'black' }]}
              />
               
              </View>
            )}
            rules={{required:true,pattern:{value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/}}} //value of password 
            />
            <Text> Enter Username:</Text> 
            <View>
            <CustomInput
            control={control}
            name="username"
            placeholder="Enter Username"
            secureTextEntry={false}
            rules={{required:true, minLength:{value : 4}}}
            />
            </View>
            
             <Text style={styles.text}>
               {/*email: {email} ,  {/* the SetEmail get stores in email  */}
               {/*password:{password} {/* the SeerPassword get stores in password  */}
              </Text> 

            <View style={styles.screenContainer}>
            <Button title="Log In" 
             onPress={ 
            handleSubmit(onSignInPressed)}
          //need to put the Name home rather then component also needed props because its a child - didnt need it it for button cuz it was main screen
          //make sure the fieldare valid with handle submit 
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
        borderRadius: 35,
        margin:10,
        width: 250,
        padding:20,
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
    bottom:250,
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
