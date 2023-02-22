import React, { useState } from 'react';
import { StyleSheet,Image, Text, View, FlatList , TextInput,TouchableOpacity,Item,Button } from 'react-native';
import Task1 from './Task1';
import {LinearGradient} from 'expo-linear-gradient';
import { profile } from './data';
import { useContext, createContext } from 'react';


export const store =createContext()

const FlatlistTutorial=() => {
  const[text,setText]=useState('')
  const [people, setPeople] = useState([ ]);
  const [count,setCount]= useState(0)
  const [heading,setHeading]= useState(false)
  const [store,setstore]=useState('')



  const submitHandler = (text) => {
    console.log(people) //console.log last value
    setPeople([...people,text])
  }

  const changeHandler = (val) => {
    setText(val)
    console.log(text)   //console log every time change value 
  
  }
 
  const value = ({item}) => {
    {
    <Text style={styles.text}>{item.heading}</Text>
    console.log(item.heading)
  }
  }
  const imgrender = ({item}) => 
    (
    <View>
      <TouchableOpacity style={styles.categories} 
      onPress={()=>{<Text style={styles.text}>{item.heading}</Text>
      setstore(item.heading)
      console.log(store)
      setHeading(true)}}>
        <View >
            <Image source={item.img} style={styles.img}/>
        </View>
        <Text style={styles.text}>{item.heading}</Text>
    </TouchableOpacity>
    
    {heading ? <Text style={styles.text}>{store}</Text> : null}
    </View>
  )
   
  return (
    <store.Provider value = {{ store , setstore}}>
    <LinearGradient colors = {['white', 'teal']} style={styles.container} >
      <TextInput
      placeholder={'enter'}
      value={text}
      onChangeText={changeHandler}/> 
      <Button 
      title="Press me"
      onPress={()=>submitHandler(text)}/> 
      <FlatList
      horizontal={true}
      data={profile}
      renderItem={imgrender}/>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item, index}) => ( 
        <Task1 key={index} text={item}/>
        )}
      />
      <View style={styles.itelselected}>
      {heading ? <Text style={styles.text}>{store}</Text> : null}
    
      </View>
    </LinearGradient>
   </store.Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop:100,
  
  },
   input:{
      //width:'100%',
      height:'100%',
      marginTop:100,
      backgroundColor:'lightpink',
      flexDirection:'column',
      
    },
    
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'gray',
    fontSize: 24,
    width:300,
    height:40,
    borderTopLeftRadius:40,  
  },
  img:{
      height:70,
      width:70,
      marginRight:30,
      alignItems:'center',
      alignContent:'center',
  },
  categories:{
      height:110,
      backgroundColor:'white',
      borderRadius:20,
      marginRight:10,
      marginBottom:50,
      justifyContent:'flex-start',
      alignSelf:'flex-start',
      
      
  },
  text:
  {
    justifyContent:'center',
    alignSelf:'flex-start',
    color:'blue',
    textAlign:'center',
   
  },
  itelselected:{
    fontSize: 24,
    width:300,
    height:40,
    backgroundColor: '#fff',
    borderRadius:40, 
    justifyContent:'center',
    alignSelf:'flex-start',
    color:'red',
    textAlign:'center'

  }
});
export default FlatlistTutorial;