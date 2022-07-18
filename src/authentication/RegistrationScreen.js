import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, ActivityIndicator, Image, Platform } from 'react-native';
import React, { useState }from 'react'
import auth from '@react-native-firebase/auth';


const RegistrationScreen = ({navigation}) => {
    const [fullName, setfullName]=useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]=useState("")



  const NewUser=(email, password) =>{
    if(fullName.length==0){
      Alert.alert('Enter user full Name')
  }
  else if (email.length == 0) {
    Alert.alert("Enter Email");
  } else if (password.length == 0) {
    Alert.alert("Enter Password");
  }else if (confirmPassword.length == 0) {
      Alert.alert("Enter confirmPassword");
  }
  else if (password !== confirmPassword){
      Alert.alert("Password doesn't match")
  }

      else {
        // console.log('inside else condition');
        try{
           auth().createUserWithEmailAndPassword(email,password).then(
            function(res){
              // console.log("Before Assigning",res)
              res.user.updateProfile({displayName:fullName})
              console.log('After Assigning',res)
            //   console.log(navigation.goBack())
            }
          )
      }
     catch(e){
        if (e.code === "auth/invalid-email") {
          return (Alert.alert("Enter valid email"));
        } else if (e.code === "auth/weak-password") {
          return (Alert.alert("Password is short"));
        } else if (e.code === "auth/email-already-in-use") {
          return (Alert.alert("email-already-in-use"));
        } else {
          return (console.log(e.message));
        }

     };
      }

  }

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.uploadContainer} onPress={selectAvatar}>
        {!userAvatar && <>
          <Image style={styles.uploadImageIcon} source={require('../../images/image-gallery.png')} />
          <Text style={styles.uploadImageTitle}>Upload your avatar</Text>
        </>}
        {userAvatar && <Image style={styles.userAvatar} source={{ uri: userAvatar.uri }} />}
      </TouchableOpacity> */}
      <TextInput
        autoCapitalize='none'
        value={fullName}
        onChangeText={setfullName}
        placeholder="Full name"
        placeholderTextColor="#ccc"
        style={styles.input}
      />
      <TextInput
        autoCapitalize='none'
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#ccc"
        style={styles.input}
      />
      <TextInput
        autoCapitalize='none'
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        autoCapitalize='none'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.register} onPress={() =>{{NewUser(email, password),navigation.goBack()}}}>
        <Text style={styles.registerLabel}>Register</Text>
      </TouchableOpacity>
    </View>

  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    uploadContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    uploadImageIcon: {
      width: 96,
      height: 96
    },
    userAvatar: {
      width: 128,
      height: 128,
      borderRadius: 128 / 2
    },
    uploadImageTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      paddingVertical: 16
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
    register: {
      backgroundColor: '#3B82F6',
      borderRadius: 8,
      fontSize: 16,
      marginHorizontal: 24,
      marginVertical: 8,
      padding: 16,
    },
    registerLabel: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  });