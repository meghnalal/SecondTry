import React, { useState } from "react";      
import { View, Button, StyleSheet, FlatList,Text ,TextInput,TouchableOpacity,Image,ScrollView} from "react-native";
//import profile from './data'
const profile = 
[
{
  id:1,
  img:require('../assets/bill.png'),
  heading:'bills',
  backgroundColor:'red'
},
{
  id:2,
  img:require('../assets/taxi.png'),
  heading:'driving',
  backgroundColor:'red'
},
{
  id:3,
  img:require('../assets/logistic.png'),
  heading:'logistic',
  backgroundColor:'red'
},
{
  id:4,
  img:require('../assets/logistic.png'),
  heading:'logistic',
  backgroundColor:'red'
}
]
const renderItem=({item,index})=>( //takes each item from profile
  <View style={styles.categories}>
    <TouchableOpacity>
    <Text> {item.heading}</Text>
    <Image
      style={{ height: 40, width: 40}}
      source={item.img}
      resizeMode="contain"
    />
    </TouchableOpacity>
  </View>
)
const categories=({onPress}) => {
    
    return(
        <View style={styles.input}>
        <Text>categories</Text>
          <ScrollView>
          <View >
            <FlatList
            horizontal
            data={profile}
            keyExtractor={(item)=>item.id.toString()}
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
  }
})
export default categories;