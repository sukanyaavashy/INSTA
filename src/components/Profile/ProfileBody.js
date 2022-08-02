import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet,Modal,Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-vector-icons/Octicons';
import Table from 'react-native-vector-icons/FontAwesome';
import Online from 'react-native-vector-icons/MaterialIcons'
import Guide from 'react-native-vector-icons/MaterialCommunityIcons'
import Minus from 'react-native-vector-icons/AntDesign'
import Activity from 'react-native-vector-icons/Feather'


export const ProfileBody = ({
  // route,
  // params,
  // name,
  // accountName,
  // profileImage,
  post,
  followers,
  following,
}) => {

  // const dispatch =useDispatch()
  const storeData = useSelector((state)=>state)
  const userName=storeData.userReducer.userName;
  const profileName=storeData.userReducer.profileName;
  const imageProfile=storeData.userReducer.imageProfile;

  const [modalVisible, setModalVisible] = useState(false);
  const [menuVisible,setMenuVisible] = useState(false)
  const [userProfile,setUserProfile] = useState(false)

  return (



    <View>
       <View >
      <Modal
        animationType="fade"
        transparent={true}
        visible={userProfile}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          //setModalVisible(!modalVisible);
        }}
      >
        <Pressable onPress={() => setUserProfile(!userProfile)}>
         <View style={styles.userProfileView}>
          <View style={styles.createTextContainer}>
          <Minus style={styles.icon} name="minus" size={60} color="#000"/>
          </View>


            <View >

            <Pressable>
            <View style={styles.modelCard}>
            <Minus style={[styles.icon, styles.iconMargin]} name="user" size={30} color="#000"/>
            <Text style={styles.modalText}>{userName}</Text>

            </View>
            </Pressable>


            <Pressable >
            <View style={styles.modelCard}>
            <Icon style={[styles.icon, styles.iconMargin]} name="add-circle-outline" size={30} color="#000"/>
            <Text style={styles.modalText}>Add account</Text>

            </View>
            </Pressable>
          </View>
        </View>
        </Pressable>
      </Modal>
  </View>
      <Pressable onPress={() => setUserProfile(!userProfile)}>
      {userName ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {userName}
            </Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'black',
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            />

          </View>


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
         <View style={styles.modalView}>
          <View style={styles.createTextContainer}>
          <Minus style={styles.icon} name="minus" size={60} color="#000"/>
          <Text style={styles.createText}>create</Text>
          </View>


            <View >

            <Pressable>
            <View style={styles.modelCard}>
            <Video style={[styles.icon, styles.iconMargin]} name="video" size={30} color="#000"/>
            <Text style={styles.modalText}>Reel</Text>

            </View>
            </Pressable>


            <Pressable >
            <View style={styles.modelCard}>
            <Table style={[styles.icon, styles.iconMargin]} name="table" size={30} color="#000"/>
            <Text style={styles.modalText}>Post</Text>

            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Icon style={[styles.icon, styles.iconMargin]} name="add-circle-outline" size={30} color="#000"/>
            <Text style={styles.modalText}>Story</Text>
            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Icon style={[styles.icon, styles.iconMargin]} name="heart-circle-outline" size={30} color="#000"/>
            <Text style={styles.modalText}>Story Highlight</Text>
            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Online style={[styles.icon, styles.iconMargin]} name="online-prediction" size={30} color="#000"/>
            <Text style={styles.modalText}>Post</Text>

            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Guide style={[styles.icon, styles.iconMargin]} name="television-guide" size={30} color="#000"/>
            <Text style={styles.modalText}>Guide</Text>

            </View>
            </Pressable>
          </View>
        </View>
        </Pressable>
      </Modal>
  </View>

  <View >
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          //setModalVisible(!modalVisible);
        }}
      >
        <Pressable onPress={() => setMenuVisible(!menuVisible)}>
         <View style={styles.menuView}>
          <View style={styles.createTextContainer}>
          <Minus style={styles.icon} name="minus" size={60} color="#000"/>
          </View>


            <View >

            <Pressable>
            <View style={styles.modelCard}>
            <Icon style={[styles.icon, styles.iconMargin]} name="md-settings-outline" size={30} color="#000"/>
            <Text style={styles.modalText}>Settings</Text>

            </View>
            </Pressable>


            <Pressable >
            <View style={styles.modelCard}>
            <Icon style={[styles.icon, styles.iconMargin]} name="archive-outline" size={30} color="#000"/>
            <Text style={styles.modalText}>Archive</Text>

            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Activity style={[styles.icon, styles.iconMargin]} name="activity" size={30} color="#000"/>
            <Text style={styles.modalText}>Your activity</Text>
            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Guide style={[styles.icon, styles.iconMargin]} name="qrcode-scan" size={30} color="#000"/>
            <Text style={styles.modalText}>QR code</Text>
            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Table style={[styles.icon, styles.iconMargin]} name="save" size={30} color="#000"/>
            <Text style={styles.modalText}>Saved</Text>

            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Minus style={[styles.icon, styles.iconMargin]} name="bars" size={30} color="#000"/>
            <Text style={styles.modalText}>Close friends</Text>

            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Minus style={[styles.icon, styles.iconMargin]} name="staro" size={30} color="#000"/>
            <Text style={styles.modalText}>Favourites</Text>

            </View>
            </Pressable>
            <Pressable >
            <View style={styles.modelCard}>
            <Icon style={[styles.icon, styles.iconMargin]} name="heart-circle-outline" size={30} color="#000"/>
            <Text style={styles.modalText}>COVID-19 Information Center</Text>

            </View>
            </Pressable>
          </View>
        </View>
        </Pressable>
      </Modal>
  </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
              }}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <Feather
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source = {{uri:`${imageProfile}`}}
            // source={imageProfile}
            style={{
              resizeMode: 'cover',
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
            }}>
            {profileName}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{post}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  createTextContainer:{
    marginLeft:150,
  },
  createText:{
    // color:"red",
    fontSize:20

  },
  lineBar:{
    width:4

  },
  iconMargin:{
    marginRight:20

  },
  modalView: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:350,
    backgroundColor: "#f4f4f4",
    borderRadius: 20,
    alignItems: "flex-start",
    padding:5,
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
    fontSize:18
  },
  modelCard:{
     flexDirection:"row",
     alignItems:"center",
     margin:10,
  },
  menuView:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:270,
    backgroundColor: "#f4f4f4",
    borderRadius: 20,
    alignItems: "flex-start",
    padding:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  },
  userProfileView:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:575,
    backgroundColor: "#f4f4f4",
    borderRadius: 20,
    alignItems: "flex-start",
    padding:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  }
})