// learn how to display your input as a list - the money that people spend  
// get the input of daily expenses and list them below
// do calculation with those expenses and categorize them 


import React, { Component } from 'react';
import {useState} from 'react';
import { View,StyleSheet,Text,Image,TextInput,FlatList} from 'react-native';
import style from 'react-native-datepicker/style';


const Input = (props,{navigate}) => {
  const[money,Setmoney]= useState('');

    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.main}>
        <Text style = {styles.Text}> Enter the expenses:</Text>
         <TextInput style = {styles.money}       
            placeholder= 'Enter your expenses'
            autoCapitalize='none'
            keyboardType='numeric'
            placeholderTextColor ='gray'
            onChangeText={(val) => Setmoney(val) }/> 
            <Text style={styles.Text}>
               expenses : {money} 
               </Text>
               <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
        
    );
  };

 
const styles = StyleSheet.create({
  main:{
        flex: 1,
        flexDirection: 'row', //column or row 
        flexWrap: 'wrap', // puts space around the content 
        alignItems:'center', //alignes horizontally 
        justifyContent: 'space-around',
        marginTop:100,
       
  },
  Text:{
    borderWidth:1.5,
    borderColor: "black",
    color:'teal',
    padding:20,
    borderRadius: 15,
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:15,

  },
  money:{
    borderWidth:1.5,
    borderColor: "black",
    borderRadius: 15,
    margin:10,
    width: 200,
    padding:20,
    justifyContent: 'flex-start',
    alignSelf:'flex-end',
  },
  firstbox:{
        width:250,
        height:250,
        backgroundColor:'teal',
        flexDirection: 'column',
        alignSelf:'flex-end',
        justifyContent: '',

  },
  buttoncontainer:{
    borderWidth:1,
        borderColor: "black",
        borderRadius: 35,
        margin:10,
        width: 250,
        padding:20,
        alignSelf:'center',
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: 'contain'

  }
});

export default Input;