import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet,TouchableOpacity} from 'react-native';
import {USERS} from '../../data/Database';

const Stories = ({navigation}) => {
  // console.log("navigation",navigation.navigate)
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('Status', {
              user: story.user,
              image: story.image,
            })
          }>
          <View
            key={index}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: story.image}} style={styles.story} />
            <Text style={{color: 'white'}}>
              {story.user.length > 10
                ? story.user.slice(0, 10).toLowerCase() + '... '
                : story.user.toLowerCase()}
            </Text>
          </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

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

export default Stories;
