import React,{ useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { Passing } from './Context';



const Task1 = (props) => {

  
  return (
   
    <View style={styles.item}>
  
      <Text style ={styles.itemText}>£ </Text>
        <Text style={styles.itemText}>  {props.name} {props.type}</Text> 
         
        
     
         
    </View>
  
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFCE87',
    opacity:0.9,
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width:'50%',
    height:50
  },
  pound:{
    width: 30,
    height: 24,
    //backgroundColor: '#55BCF6',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#55BCF6',
 
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
    fontSize:20,
    fontFamily: 'MontserratThin',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task1;