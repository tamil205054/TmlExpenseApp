//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// create a component
const Login = () => {
    return (
        <View style={{backgroundColor:'#fff',flex:1
        }}>
            <Image   source={require('../../assets/login.png')}/>
            <Text style={{flex:0.5}}>ddd</Text>
        </View>
    );
};
export default Login;
