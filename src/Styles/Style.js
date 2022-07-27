import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context'


export const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    image:{
      height:80,
      width:80,
      borderRadius:80
    },
    item:{
        backgroundColor: "white",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:1,
        borderColor:"green",
        padding:10

    },
    userName:{
        paddingRight:50
    }


})