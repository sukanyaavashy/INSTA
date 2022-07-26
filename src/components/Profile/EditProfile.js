import React,{useState}from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  Pressable,
  Modal,
  StyleSheet
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { getUserUid } from '../../redux/actions';
import ImageCropPicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import {useSelector,useDispatch} from "react-redux";
import { getUserName } from '../../redux/actions';


const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  //const [userName, setUserName] = useState('')
  const [profileName, setProfileName] = useState('')
  const [image,setImage] = useState('https://i0.wp.com/bloggers.society19.com/wp-content/uploads/2015/11/water-40.jpg?resize=563%2C755&ssl=1')
  const dispatch =useDispatch()
  const storeData = useSelector((state)=>state)
  const {userName}=useSelector(state=>state.userReducer);



  function logOut() {
    dispatch(getUserUid(''));
  }

  // const {name, accountName, profileImage} = route.params;
  console.log("edit profile",navigation)
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };

const setGalleryPic = () =>{
  ImageCropPicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
    setImage(image.path)
  });
}

const setCameraPic = () =>{
  ImageCropPicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
    setImage(image.path)
  });
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
          // source={image}
          source={{uri:`${image}`}}
          style={{width: 80, height: 80, borderRadius: 100}}
        />

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable>
            <Text style={styles.modalText}>Change Profile Photo</Text>
            </Pressable>
            <Pressable onPress={setGalleryPic}>
            <Text style={styles.modalText}>Profile from Gallery</Text>
            </Pressable>
            <Pressable onPress={setCameraPic}>
            <Text style={styles.modalText}>Profile from Camera</Text>
            </Pressable>
            <Pressable>
            <Text style={styles.modalText}>Remove Profile Photo</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        <Pressable onPress={() => setModalVisible(!modalVisible)}>
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
            defaultValue={profileName}
            onChangeText={(text)=>setProfileName(profileName)}

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
            value={userName}
            onChangeText={(value)=>dispatch(getUserName(value))}
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});