import React, { useState } from 'react';
import { StyleSheet,Image, Text, View, FlatList , TextInput,TouchableOpacity,Item,Button,ScrollView } from 'react-native';
import Task1 from './Task1';
import {LinearGradient} from 'expo-linear-gradient';
import { profile } from './data';
import { LineChart,ProgressChart,PieChart } from 'react-native-chart-kit'

const Calculations = () => {
    const[input,setInput]=useState('')
    const [heading,setHeading]= useState(false)
    const[myArr, setMyArr] = useState( [
        { name: 'home', type: 70,color: "#003f5c" },
        { name: 'bills', type: 70,color: "#444e86" },
        { name: 'fuel', type: 70,color: "#955196" },
        { name: 'driving', type: 70,color: "#dd5182" },
        { name: 'Food', type: 70,color: "#ff6e54" }, 
        { name: 'logistic', type: 70,color: "#ffa600" }
      ]);

      const combinedObj = myArr.reduce((acc, curr) => {
        const name =curr.name
        const color=curr.color
        if (!acc[name]) {
            acc[name] = { name, type: parseInt(curr.type, 10),color };
        } else {
            acc[name].type += parseInt(curr.type, 10);
        }
        return acc
      }, {});
      console.log(combinedObj)
      const combinedArr = Object.values(combinedObj);
    const changeHandler = (val) => {
        //setInput(val) //uses the val input and sets it as setInput
        setInput(parseInt(val, 10));
        }
    const submitHandler = (text) => {
        const arr = [
            {name: text, type:input }, //
               ];
            setMyArr([...myArr, ...arr]);
            //console.log(myArr)
             }
    const imgrender = ({item}) => 
    (
    <View>
    <TouchableOpacity style={styles.categories} 
        onPress={()=>{submitHandler(item.heading)
        setstore(item.heading)
        setHeading(true)
        
        }}>
        <View>
            <Image source={item.img} style={styles.img}/>
        </View>
        <Text style={styles.text}>{item.heading}</Text>
        </TouchableOpacity>
        </View>
           )
    const chartConfig = {
      //      backgroundGradientFrom: "#1E2923",
        //    backgroundGradientFromOpacity: 100,
            //backgroundGradientTo: "#08130D",
         //   backgroundGradientToOpacity: 0.5,
             color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
         //   strokeWidth: 2, // optional, default 3
           // barPercentage: 0.5,
            //useShadowColorFromDataset: false // optional
          };
        ;
    return (
      <LinearGradient
      colors = {['white', 'teal']} style={styles.container}>
          <View>
          <PieChart style={styles.pychart}
            data={combinedArr}
            width={400}
            height={250}
            chartConfig={chartConfig}
            accessor={"type"}
            backgroundColor={"transparent"}
            paddingLeft={"10"}
            center={[20, 10]}
            absolute
            />
        </View>
        <TextInput
        placeholder={'enter spending'}
        value={input} //value get stored input
        onChangeText={changeHandler} 
        //onchangeText i store the input in setInput 
        /> 
     <FlatList
      horizontal={true}
      data={profile}
      renderItem={imgrender}
      // rendering the data.js
      />
      </LinearGradient>
    );
  };
  const styles = StyleSheet.create({
    container: {
        flex: 1,
       paddingTop: 40,
       paddingHorizontal: 20,
       backgroundColor: '#fff',
       marginTop:100,
     },
     pychart:{
        height:250,
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
    img:{
        height:70,
        width:70,
        marginRight:30,
        alignItems:'center',
        alignContent:'center',
    },
})
  export default Calculations;