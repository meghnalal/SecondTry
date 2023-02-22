import React, { Component } from 'react';
import { View,StyleSheet,Text,Image,TextInput,FlatList} from 'react-native';

const Remaining =() => {
    return(
        <View style={styles.main}>
            <Text style={styles.Text}>
                Remaining £200
            </Text>
        </View>

    )
}
const styles = StyleSheet.create({
    main:{
        
        flexDirection: 'column', //column or row 
        flexWrap: 'wrap', // puts space around the content 
        alignItems:'center', //alignes horizontally 
        //justifyContent: 'space-around',
        //marginTop:100,
       },
Text:{
    borderWidth:1.5,
    borderColor: "black",
    color:'teal',
    padding:20,
    borderRadius: 15,
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:15,

  },
});
export default Remaining;