// just a button 

import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList,Text ,TextInput,ScrollView} from "react-native";
import AddTodo from './AddTodo'

const AddInput=() => {
  const[expense,setExpense]= useState([
    {text: 'weed',key:'1'},
    {text: 'food',key:'2'},
    {text: 'drink',key:'3'}
  ]);
  
  const submitHandler =(text) =>{
    setExpense((prevExpense) => {
      return [
        { text: text, key: Math.random().toString()},
          ...prevExpense

      ]
    })
  }
  return(
    <View style={styles.container}>
      <AddTodo submitHandler={submitHandler}/>
      <ScrollView>
      <FlatList
      data={expense} 
      renderItem={({item})=> (
      <Text style={styles.item}>{item.text}</Text> )} //has to be function
      /> 
     </ScrollView>
    
     
  </View>
  )}
  const styles = StyleSheet.create({
    
      container: {
        flex: 1,
        borderColor: "black",
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        alignContent:"center",
        alignItems:"center",
        marginTop:100
      },
      item: {
        //flex: 1,
        borderWidth:1,
        borderRadius:20, //why is this not working 
        borderColor: "black",
        //marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
      },
      buttoncontainer:{
        position:"absolute",
      bottom:100,
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignSelf: 'flex-end',  //alignself is what align the button in middle 
      backgroundColor: "#FF1493",
      },
      TextInput:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        fontSize:30
        

      }
    
    })
    export default AddInput;