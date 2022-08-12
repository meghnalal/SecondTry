// used this custom input for my signin page 
// used it for the controller 

import React from "react";
import { View, Text, StyleSheet,TextInput } from "react-native";
import {Controller} from 'react-hook-form';


const CustomInput =({
    control,
    name,
    placeholder,
    secureTextEntry,
    rules={}
}) => {
    return(
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field:{value, onChange,onBlur},fieldState:{error}}) => ( 
               <View > 
               <TextInput 
                value={value}
                onChangeText={onChange} 
                onBlur={onBlur} 
                placeholder={placeholder}
                style={[styles.Input, {borderColor: error ? 'red':'black'}]} //to seee input style need to put in here 
                secureTextEntry={secureTextEntry}
                 />
             </View>
            )}
            />
    
    );
};
const styles = StyleSheet.create({
    
    Input: {
          borderWidth:1,
          borderColor: "black",
          borderRadius: 35,
          margin:10,
          width: 250,
          padding:20,
        },
    });

export default CustomInput;