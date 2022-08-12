//just used this to learn how to place images on my screen 
// its very cute 


import React, { Component } from 'react';
import { View,StyleSheet,Text,Image} from 'react-native';
import style from 'react-native-datepicker/style';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.main}>
        {/* <View style={styles.firstbox} /> */}
        
        {/* <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} /> */}
        {/* <Text style={styles.buttoncontainer}> Insert Email</Text>
        <Text style={styles.buttoncontainer}> Insert password</Text> */}
        <Image style={styles.image}
        source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg'
        }}
        />
       <Image style={styles.image}
        source={{
        uri: 'https://i.pinimg.com/originals/b7/54/62/b7546245c88b57416dbf2d689c40e682.jpg'
        }}
        />
        <Image style={styles.image}
        source={{
        uri: 'https://images.squarespace-cdn.com/content/v1/5197c024e4b0724ab77025c6/1589472546683-GHQ0AJQLP884YT98ITNY/IMG_0242.jpeg'
        }}
        />

        <Image style={styles.image}
        source={{
        uri: 'https://tailandfur.com/wp-content/uploads/2016/05/40-Cute-Otter-Pictures-14.jpg'
        }}
        />
        <Image style={styles.image}
        source={{
        uri: 'https://d12eu00glpdtk2.cloudfront.net/public/images/news/pottery-barn-kids-presents-little-explorers-sea-otters/_760x500_clip_center-center_none/5-June-sea_otters_holding_hands_by_ken_conger-002.jpg'
        }}
        />

        <Image style={styles.image}
        source={{
        uri: 'https://static01.nyt.com/images/2021/07/08/science/08TB-OTTERS1/08TB-OTTERS1-mobileMasterAt3x.jpg'
        }}
        />
        <Image style={styles.image}
        source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OtBmZUnY1UaRdI5NSGGZXMrw8G1Q4CSm07RSsTvD5TdYK5_FDDk2TJ_-UVvLO9ZLy4Y&usqp=CAU'
        }}
        />
        <Image style={styles.image}
        source={{
        uri: 'https://today.tamu.edu/wp-content/uploads/2021/07/GettyImages-522615548.jpg'
        }}
        />
      </View>
        
    );
  }
};
 
const styles = StyleSheet.create({
  main:{
        flex: 1,
        flexDirection: 'row', //column or row 
        flexWrap: 'wrap', // puts space around the content 
        alignItems:'center', //alignes horizontally 
        justifyContent: 'space-around',
        marginTop:100,
       
  },
  firstbox:{
        width:250,
        height:250,
        backgroundColor:'teal',
        flexDirection: 'column',
        alignSelf:'flex-end',
        justifyContent: '',

  },
  buttoncontainer:{
    borderWidth:1,
        borderColor: "black",
        borderRadius: 35,
        margin:10,
        width: 250,
        padding:20,
        alignSelf:'center',
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: 'contain'

  }
});