import React from 'react';
import {View, Text, ScrollView,Image,StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../components/Profile/BottomTabView';
import { ProfileBody } from '../components/Profile/ProfileBody';
import { ProfileButtons } from '../components/Profile/ProfileButtons';
import { USERS } from '../data/Database';
import { POSTS } from '../data/post';


const Profile = ({navigation}) => {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name={POSTS[0].user}
          accountName={POSTS[0].user}
          profileImage={{uri:POSTS[0].imageUrl}}
          post="344"
          followers="4.6M"
          following="35"
          // POSTS="458"
        />
        <ProfileButtons
          id={0}
          name={POSTS[0].user}
          accountName={POSTS[0].user}
          profileImage={{uri:POSTS[0].imageUrl}}
          navigation={navigation}
        />
      </View>
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Story Highlights
        </Text>
        <View style={{marginBottom: 13}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View
            key={index}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: story.image}} style={styles.story} />
          </View>
        ))}
      </ScrollView>
    </View>
      </View>
      <BottomTabView />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
    borderRadius: 70,
  },
});