import React, { useState } from "react";      
import { View, Button, StyleSheet, FlatList,Text ,TextInput,TouchableOpacity,Image,ScrollView} from "react-native";
import {profile} from './data';
import { useFonts } from 'expo-font';


const renderItem=({item,index})=>( //takes each item from profile
  <View style={styles.categories}>
    <TouchableOpacity  >
    <Text> {item.heading}</Text>
    <Image
      style={{ height: 40, width: 40}}
      source={item.img}
      resizeMode="contain"
    />
    </TouchableOpacity>
  </View>
)


const categories1=() => {

const [count, setCount] = useState(0);
const onPress = () => setCount(prevCount => prevCount + 1);
console.log(count)

    return(
        <View style={styles.input}>
          <Text style={styles.text}> Add Expenses</Text>
          <TextInput 
          style={styles.Money }
          keyboardType="numeric"
          secureTextEntry={false}
          autoCorrect={false}
          placeholder={'£'}
          placeholderTextColor='black'
          />
          <ScrollView>
          <View style={styles.text} >
            <FlatList
            horizontal
            data={profile}
            keyExtractor={(item)=>item.id.toString()}//check this tommorrow 
            renderItem={renderItem}
            /> 
          </View>
          </ScrollView>
        
        </View>

    )}
const styles = StyleSheet.create({
input:{
    marginTop:100,
  },
  input2:{
    marginTop:100,
    borderWidth:1,
  },
 
   input3:{
    borderWidth:1,
  },
  categories:{
    width:120, 
    height: 150,
    borderRadius:15,
    marginRight:10,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightblue'
  },
  image:{
      width:40,
      height:40,
  },
  Money:{
    borderRadius:50,
    backgroundColor:'white',
    width:200,
    height:70,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:'5%',
    marginBottom:'5%',
    fontSize:'30'
  },
 text:{
  
  textAlign:'center',
  fontWeight:'500',
  fontStyle:'normal',
  fontSize:30,
  color:'teal',
  fontFamily: 'MontserratThin',
  
 }
  
})
export default categories1;