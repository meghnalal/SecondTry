import React, { Component } from 'react';
import { View,StyleSheet,Text,Image,TextInput,FlatList,Button,StatusBar,ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

class AddTransection extends Component{
    state = { //starting state 
        myTextInput:'',
        users:[]
    }
    onChangeInput = (event) =>{
        this.setState({
            myTextInput:event
            
        })
    }
    onAdduser = () =>{
        this.setState(prevState => {
            return{
                myTextInput:'',
                users:[...prevState.users,prevState.myTextInput]
            }
        })

    }
    render(){

        return ( // after view its rendering
        <LinearGradient colors = {['white', 'teal']}
            style={styles.gradient}>
        <View style= {styles.inputwrapper}> 

        <TextInput
          value={this.state.myTextInput} //assigning my value to be the state one
          style= {styles.input}
          onChangeText={this.onChangeInput} //on change text i will run the function 
        />
        <Button 
        title='Add Expense'
        onPress={this.onAdduser}
        /> 
        <ScrollView>
        {
            this.state.users.map( item => (
                <Text 
                style={styles.users} 
                key={item}>{item}
                
                </Text>
            ))
        }   
        
        </ScrollView>
        </View>
        </LinearGradient>
        )
      }
  };

  const styles = StyleSheet.create({
    inputwrapper:{

        width:'100%',
        
        marginTop:100
    },
     input:{
              width:'100%',
              backgroundColor: '#D3D3D3',
              marginTop:0,
              fontSize:20,
              padding:15
            },  
    users:{
        height:100,
        fontSize:30,
        borderWidth:1,
        borderColor:'gray',
        padding:7,
        marginBottom:20,
        },
    gradient:{
        flex:1,
    } 
          
          
});
  export default AddTransection;