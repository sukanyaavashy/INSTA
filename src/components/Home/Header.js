import {StyleSheet, Text, View, TouchableOpacity, Image,Modal,Pressable} from 'react-native';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const Header = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.jpg')}
        />
      </TouchableOpacity>
  <View >
  <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          //setModalVisible(!modalVisible);
        }}
      >
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Pressable>
            <View style={styles.modelCard}>
            <Text style={styles.modalText}>Post</Text>
            <Icon style={styles.icon} name="reader-outline" size={30} color="#000"/>
            </View>
            </Pressable>


            <Pressable >
            <View style={styles.modelCard}>
            <Text style={styles.modalText}>Story</Text>
            <Icon style={styles.icon} name="add-circle-outline" size={30} color="#000"/>
            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Text style={styles.modalText}>Reel</Text>
            <Icon style={styles.icon} name="videocam-outline" size={30} color="#000"/>
            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Text style={styles.modalText}>Live</Text>
            <Icon style={styles.icon} name="wifi-outline" size={30} color="#000"/>
            </View>
            </Pressable>
          </View>
        </View>
        </Pressable>
      </Modal>
  </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Icon
            style={styles.icon}
            name="add-circle-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Icon
            style={styles.icon}
            name="heart-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>navigation.navigate("ChatList")}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgetext}> 18 </Text>
          </View>
          <Icon
            style={styles.icon}
            name="chatbubble-ellipses-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  modelText:{
    backgroundColor:"white",
    color:"white"

  },
  // modelContainer:{
  //   alignItems:'flex-end',
  //   justifyContent:'flex-end',


  // },
  modalView: {
    marginLeft:240,
    marginTop:60,
    width:150,
    backgroundColor: "white",
    borderRadius: 10,
    // padding: 35,
    alignItems: "flex-start",
    padding:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 25,
    marginRight:50,
    // textAlign: "center"
  },
  modelCard:{
    flexDirection:"row",
    // justifyContent:"space-around"
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // marginTop: 22
  // },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
    color: 'white',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  unreadBadge: {
    position: 'absolute',
    backgroundColor: '#FF3250',
    right: -5,
    top: -5,
    borderRadius: 25,
    width: 25,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgetext: {
    color: 'white',
    fontWeight: '600',
  },
})