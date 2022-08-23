import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList,Text ,TextInput} from "react-native";

const AddInput=({submitHandler}) => {
    const[text,setText]= useState('');
    
    const changeHandler =(val) =>{
        setText(val)
    }
    
    return(
        <View style={styles.input}>
            <TextInput
            //style={styles.input}
             placeholder='Add'
             onChangeText={changeHandler}>
            </TextInput>
            <View style={styles.input}>
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
        borderWidth:1, //need this to add border 
        borderRadius:25,
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:6,
        //borderBottomWidth:1,
        borderBottomColor:'red',
        fontSize:30
        

      }
    })

export default AddInput;