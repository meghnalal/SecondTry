import React, {useState} from 'react';
import  { Component } from 'react';
import { View,StyleSheet,Text,Image,TextInput,FlatList,Button,StatusBar,ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'



const AddTransection2 = (props) => {
    //usestate
    const[user,Setuser]= useState('');
    const[Adduser,SetAdduser]=useState();

    //on change text event
  
    return ( // after view its rendering
        <LinearGradient colors = {['white', 'teal']}
            style={styles.gradient}>
        <View style= {styles.inputwrapper}> 
        
        <TextInput
          value={user} //assigning my value to be the state one
          style= {styles.input}
          onChangeText={(val) => Setuser(val) }
          placeholderTextColor={'#fff'} //on change text i will run the function 
        />
        <Button 
        title='Add Expense'
        onPress={() => {props.addItem(user)
        }}
        /> 
        <ScrollView>
        {      user.map((user,index) => {
                return (
                <View> key = {index} 
                </View>
            )
        }
        )
        } 
        </ScrollView>
        </View>
        </LinearGradient>
        )
      }
  

  const styles = StyleSheet.create({
    inputwrapper:{

        width:'100%',
        
        marginTop:100
    },
     input:{
              width:'100%',
              backgroundColor: '#D3D3D3',
              marginTop:0,
              fontSize:20,
              padding:15
            },  
    users:{
        height:100,
        fontSize:30,
        borderWidth:1,
        borderColor:'gray',
        padding:7,
        marginBottom:20,
        },
    gradient:{
        flex:1,
    } 
          
          
});
  export default AddTransection2;