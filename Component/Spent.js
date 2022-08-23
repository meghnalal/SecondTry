import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity,StyleSheet,Button,FlatList} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

  const AddInput=({navigation}) => {
    const[expense,setExpense]= useState([
      {title: 'weed',key:'1'},
      {title: 'weed',key:'2'}
    ])
 
  return(
    
    <LinearGradient colors = {['white', 'teal']}
    style={styles.gradient}> 

    <TextInput 
            style={styles.TextInput}
            placeholderTextColor ='white'
            placeholder= 'Enter the expenses'
            onChangeText={(val) => setExpense(val) }>
    </TextInput>
     <View style={styles.screenContainer}>
      <Button title="Add" 
     onPress={() => 
     navigation.navigate('SignIn')}
     />
     
     <View>
     <FlatList 
     data={expense} 
     renderItem={({item})=> (
     <Text style={styles.item}>{item.title}</Text> )} //has to be function
     />
    </View>
   </View>
  </LinearGradient> 
       

   
  );
}
const styles = StyleSheet.create({
    gradient:{
        height:'100%',
    },
    screenContainer:{
      
      position:"absolute",
      bottom:750,
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignSelf: 'flex-end',  //alignself is what align the button in middle 
      backgroundColor: "#FF1493",
    },
    TextInput:{
      position:"absolute",
      alignSelf: 'flex-start',
      bottom:750,
      width: "100%",
      flexDirection:'row',
      justifyContent: 'space-between',
      width: "100%",
      alignSelf:'center',
      fontSize:23
    },
    item: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24,
    },
        })
export default AddInput;