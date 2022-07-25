import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  Pressable
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useDispatch} from "react-redux";
import { getUserUid } from '../../redux/actions';


const EditProfile = ({route, navigation}) => {
  const dispatch = useDispatch();

  function logOut() {
    dispatch(getUserUid(''));
  }

  const {name, accountName, profileImage} = route.params;
  console.log("edit profile",navigation)
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };


const modelFun = () =>{
  console.log("new");

}


  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Pressable onPress={modelFun}>
        <Text
          style={{
            color: '#3493D9',
          }}>
          Change profile photo
        </Text>
        </Pressable>

      </View>
      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => logOut()}>
        <Text style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
            Logout
          </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;