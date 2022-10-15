import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList,Text ,TextInput} from "react-native";

const AddInput=({submitHandler}) => {
    const[text,setText]= useState('');
    
    const changeHandler =(val) => {
        setText(val)
    }
    return(
        <View style={styles.input}>
            <View>
            <TextInput style={styles.input3}
            //style={styles.input}
             placeholder='Add'
             onChangeText={changeHandler}>
            </TextInput> 
            </View>
            <View style={styles.input2}>
             <Button 
             color='coral'
             title='Add'
             onPress={()=>submitHandler(text)}>
            </Button> 
            </View>
        </View>

    )}
const styles = StyleSheet.create({
    input:{
        flexDirection:'row',
        //borderWidth:1, //need this to add border 
        //borderRadius:25,
        //marginBottom:10,
        //paddingHorizontal:10,
        //paddingVertical:6,
        //borderBottomWidth:1,
        marginTop:100,
        borderBottomColor:'red',
        fontSize:30,
        width: "70%",
        justifyContent:'space-between',
        width:'100%'
      },
      input2:{
        
        borderWidth:1, //need this to add border 
        borderRadius:25,
        width:100,
        height:60
      },
      input3:{
        borderRadius:25,
        marginBottom:10,
        borderWidth:1, //need this to add border 
        width:300,
        height:60
        
      },
      
      button:{

        flexDirection:'row',
        width: "70%", //why is it changing input size ?
        position:"absolute",
        justifyContent:'flex-end'
        
        

      }
    })

export default AddInput;