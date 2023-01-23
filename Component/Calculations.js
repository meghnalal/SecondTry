import React, { useState } from 'react';
import { StyleSheet,Image, Text, View, FlatList , TextInput,TouchableOpacity,Item,Button,ScrollView } from 'react-native';
import Task1 from './Task1';
import {LinearGradient} from 'expo-linear-gradient';
import { profile } from './data';
import "react-native-svg"
import { AreaChart } from 'react-native-svg-charts'

const Calculations = () => {

    const[myArr, setMyArr] = useState([
        { name: 'home', type: '30' },
        { name: 'bills', type: '20' },
        { name: 'fuel', type: '50' },
        { name: 'driving', type: '23' },
      ]);
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    return (
      <LinearGradient
      colors = {['white', 'teal']} style={styles.container}>
        <AreaChart style={{ height: 200 }} data={data} svg={{ fill: '#ADD8E6' }} />
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
})
  export default Calculations;