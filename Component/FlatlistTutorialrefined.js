import React, { useState } from 'react';
import { StyleSheet,Image, Text, View, FlatList , TextInput,TouchableOpacity,Item,Button,ScrollView } from 'react-native';
import Task1 from './Task1';
import {LinearGradient} from 'expo-linear-gradient';
import { profile } from './data';
import { Passing } from './Context';


const FlatlistTutorialrefined=() => {
  const[text,setText]=useState('')
  const [people, setPeople] = useState([ ]);
  const [heading,setHeading]= useState(false)
  const [store,setstore]=useState('')

  const changeHandler = (val) => {
    setText(val)
    console.log(text)   //console log every time change value 
  
  }
  const submitHandler = (text) => {
    console.log(people) //console.log last value
    setPeople([...people,text])
  }
  const imgrender = ({item}) => 
    (
    <View>
      <TouchableOpacity style={styles.categories} 
      onPress={()=>{submitHandler(text)
      setstore(item.heading)
      console.log(store)
      setHeading(true)}}>
        <View >
            <Image source={item.img} style={styles.img}/>
        </View>
        <Text style={styles.text}>{item.heading}</Text>
    </TouchableOpacity>
    
    </View>
  )


  return (
    <Passing.Provider value = {{ store , setstore}}>
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
      
      <ScrollView >
          {
            people.map((item,index) => 
               item ?  <Text key={index}>{item},{store}</Text>  : null 
               
              //<Task1 key={index} text={item}/>
            )
          }
          </ScrollView>
      <View style={styles.itelselected}>
      {heading ? <Text style={styles.text}>{store}</Text> : null}
    
      </View>
    </LinearGradient>
   </Passing.Provider>
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
      height:'50%',
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
    textAlign:'center'
  },
  

 
});
export default FlatlistTutorialrefined;