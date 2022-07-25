import React, {Component,useEffect,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput,Image,Alert} from 'react-native';
import {useSelector,useDispatch} from "react-redux";
import {setEmail,setPassword,getUserUid} from "../redux/actions";
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";



const LoginScreen = ({navigation}) => {
  const dispatch =useDispatch()
  const storeData = useSelector((state)=>state)
  const {email,password,uid}=useSelector(state=>state.userReducer);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     setIsLoading(false);
  //   }
  // }, []);



   const loginHandle = (email, password) => {

      if (email.length==0){
        Alert.alert("Enter Email")
      }else if(password.length==0){
        Alert.alert("Enter Password")
      }
      else{
        auth().signInWithEmailAndPassword(email, password).then(
          function (result){
            const value= result.user.uid;
            dispatch(getUserUid(value));
            console.log('.....',value);
            // console.log('..........',storeData.userReducer.uid)
            console.log('..........',result.user)
          }

        ).catch(
          function(e){
            if (e.code==="auth/user-not-found"){
              // setIsLoading(false);
              return(Alert.alert("In correct email"))
            }else if(e.code==="auth/wrong-password"){
              // setIsLoading(false);
              return(Alert.alert("The password is invalid"))
            }else if(e.code==="auth/invalid-email"){
              // setIsLoading(false);
              return(Alert.alert("Enter valid email"))

            }
            else{
              // setIsLoading(false);
              return(console.log(e.message),Alert.alert(e.mesage))
            }

          });
      }}

    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/logo.png")}/>
      </View>
      <TextInput
        autoCapitalize='none'
        onChangeText={(value)=>dispatch(setEmail(value))}
        value={email}
        placeholder="Email"
        placeholderTextColor="#ccc"
        style={styles.input}

      />
      <TextInput
        autoCapitalize='none'
        onChangeText={(value)=>dispatch(setPassword(value))}
        value={password}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.input}

      />
      <TouchableOpacity style={styles.login} onPress={() => {loginHandle(email, password)}}>
        <Text style={styles.loginLabel}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('RegistrationScreen')}>
        <Text style={styles.registerLabel}>Register</Text>
      </TouchableOpacity>
    </View>

    );
  }


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 12,
  },
  login: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    fontSize: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 16,
  },
  loginLabel: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  register: {
    backgroundColor: '#fff',
    fontSize: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 16,
  },
  registerLabel: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});