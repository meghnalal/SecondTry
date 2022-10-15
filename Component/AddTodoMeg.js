import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, FlatList,Text ,TextInput} from "react-native";
import style from "react-native-datepicker/style";
import { ScrollView } from "react-native-gesture-handler";
import Task from './Task';

const AddTodoMeg = () =>{
    const[text,setText]=useState('')
    const[taskItems,setTaskItems]=useState([]);
    
    const changeHandler = (val) => {
      setText(val)
      console.log(text)   //console log every time change value 
      
    
    }
    const submitHandler = (text) => {
      console.log(taskItems) //console.log last value
      setTaskItems([...taskItems,text])
      // console.log(TaskItems)
      //setText(null);

    }

   
    return(
        <View style={styles.input}>
          <TextInput
          style={styles.textinput}
          placeholder={'enter'}
          placeholderTextColor='black'
          keyboardType="numeric"
          value={text}
          onChangeText={changeHandler}
          />
          <Button //ASK BANWO put the button row but rest column
          title="Press me"
          onPress={()=>submitHandler(text)} //calls the function submitHandler 
          />
          <ScrollView >
        
          {
            taskItems.map((item,index) => 
              // item ?  <Text key={index}>{item}</Text>  : null 
              <Task key={index} text={item}/>
            )
          }
          </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
  input:{
      //width:'100%',
      height:'100%',
      marginTop:100,
      backgroundColor:'lightpink',
      flexDirection:'column',
    },
    textinput:{
    borderColor:'black',
    borderRadius:25,
    marginTop:10,
    justifyContent:'center',
    alignSelf:'flex-start',
    borderWidth:1,
    width:'70%',
    height:'5%',
    backgroundColor:'lightblue'
    
    },
    button:{
      width:'25%',
      alignSelf:'flex-end',
      height:'5%',
      
    },
    task:{
      //justifyContent:'center',
     //alignSelf:'flex-start',
     position:'absolute',
     marginTop:10,
      width:'30%',
      height:'50%',
      flexDirection:'column-reverse',
      
      
    },
    scrollView:{
     
      backgroundColor: 'white',
      alignSelf:'flex-start',

    }
  })
export default AddTodoMeg;
