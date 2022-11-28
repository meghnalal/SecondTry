import React, { useState } from 'react';
import { StyleSheet,Image, Text, View, FlatList , TextInput,TouchableOpacity,Item,Button,ScrollView } from 'react-native';
import Task1 from './Task1';
import {LinearGradient} from 'expo-linear-gradient';
import { profile } from './data';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';



const Banwo=() => {
  const[input,setInput]=useState('')
  const [listinput, setlistofinput] = useState([ ]);
  const [heading,setHeading]= useState(false)
  const [store,setstore]=useState('')
  const[myArr, setMyArr] = useState([
    { name: 'home', type: '30' },
    { name: 'bills', type: '20' },
    { name: 'fuel', type: '50' },
    { name: 'driving', type: '23' },
  ]);
  

  const submitHandler = (text) => {
    const arr = [
      {name: text, type:input },
      
    ];
    setMyArr([...myArr, ...arr]);
    console.log(myArr)
     }

  const changeHandler = (val) => {
    setInput(val)
    
    }
                      const submitHandler1 = (text) => {
                        console.log(listinput) //console.log last value
                        setlistofinput([...listinput,text])
                      }


  const imgrender = ({item}) => 
    (
    <View>
      <TouchableOpacity style={styles.categories} 
      onPress={()=>{submitHandler(item.heading)
      setstore(item.heading)
      setHeading(true)}}>
        <View >
            <Image source={item.img} style={styles.img}/>
        </View>
        <Text style={styles.text}>{item.heading}</Text>
    </TouchableOpacity>
    
    </View>
  )

  const render =({item}) =>
  (
    <View>
       <Text style={styles.text}>{store}</Text>
    </View>
  )


  return (
    
    <LinearGradient colors = {['white', 'teal']} style={styles.container} >
      <TextInput
      placeholder={'enter'}
      value={input}
      onChangeText={changeHandler}/> 

      <Button 
      title="Press me"
      onPress={()=>submitHandler(input)}/> 

      <FlatList
      horizontal={true}
      data={profile}
      renderItem={imgrender}/>
      <ScrollView >
      {
        myArr.map((item) => (
          //<Text>text={item.name} {item.type}</Text>
          <View>
          <Task1 name={item.name} type={item.type}/>
          </View>
        ))
      }
      </ScrollView>
      <ScrollView >
          {
            listinput.map((item,index) => 
               item ?  <Text key={index}>{item},{store}</Text>  : null 
               
              //<Task1 key={index} text={item}/>
            )
          }
      </ScrollView>
      <FlatList
      data={store}
      renderItem={render}
      horizontal
      />
      <View style={styles.itelselected}>
      {heading ? <Text style={styles.text}>{store}</Text> : null}
    
      </View>
    </LinearGradient>
   
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
export default Banwo;