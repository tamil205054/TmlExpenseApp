//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
type  Props = {
  width : number,
  children: string | JSX.Element 
  onPress?:(event:any)=> void,
  loading?:boolean
}
// create a component
const Button = ({width = 0,children='Button',loading = false,onPress = (e:any)=>{}}:Props) => {
    return (
       
          <TouchableOpacity style={[styles.btn,{width}]}  onPress={(e)=>{
            onPress(e);
          }}>
          <Text style={styles.btnTxt}>{loading ? <ActivityIndicator/> : children}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'green',
        padding:20,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
      }, 
      btnTxt:{
        color:'#fff',
        fontWeight:'900',
        fontSize:18
      }
});

//make this component available to the app
export default Button;
