import { StyleSheet, Text, View,flex } from 'react-native'
import React from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context'


export const styles = StyleSheet.create({
    image:{
      height:80,
      width:80,
      borderRadius:80
    },
    item:{

        borderWidth:1,
        borderColor:"green",
        padding:10,
        flexDirection:"row",
        backgroundColor: "white",
        justifyContent:"space-around",
        alignItems:"center",


    },
    userName:{
       paddingRight:50
    }


})