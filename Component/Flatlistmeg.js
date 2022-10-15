// just a button 

import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList,Text ,TextInput,ScrollView} from "react-native";
import AddTodoMeg from './AddTodoMeg'

const Flatlistmeg=() => {
  const[expense,setExpense]= useState([
    
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
      <AddTodoMeg submitHandler={submitHandler}/>
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
        alignContent:'flex-start',
        alignItems:'flex-start',
        marginTop:0,
        backgroundColor:'white'
        
      },
      item: {
        //flex: 1,
        borderWidth:1,
        borderRadius:20, //why is this not working 
        borderColor: "black",
        //marginHorizontal: 10,
        marginTop: 10,
        padding: 30,
        backgroundColor: 'lightblue',
        fontSize: 24,
        width: 250 //why if i put percenatage its weird 
      },
    
    })
    export default Flatlistmeg;