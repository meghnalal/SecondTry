import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
const Container = () => {
    return ( 
      <LinearGradient color= {['#373B44', '#4286f4', '#373B44']}
      style={styles.gradient}>
          
      </LinearGradient>
      
    );
  };
  const styles = StyleSheet.create({
      gradient:{
          flex:1,
      },
  });

  export default Container;