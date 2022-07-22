import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './authentication/LoginScreen';
import RegistrationScreen from './authentication/RegistrationScreen';
import Home from './screens/homeScreen';
import SearchScreen from './screens/searchScreen';
import ReelsScreen from './screens/reelsScreen';
import ActivityScreen from './screens/activityScreen';
import ProfileScreen from './screens/profileScreen';
import FriendProfile from './components/Activity/FriendProfile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditProfile from './components/Profile/EditProfile';
import { ProfileButtons } from './components/Activity/ProfileBody';
import Ionic from 'react-native-vector-icons/Ionicons'



const Authentication = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}


const HomeStackNavigation = () =>{

  const Tab = createBottomTabNavigator();
  return(

          <Tab.Navigator screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
           height: 50,
           backgroundColor: '#f9f9f9',
          },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        if (route.name === 'Home') {
           iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Search') {
           iconName = focused ? 'search-sharp' : 'search-outline';
        }else if (route.name === 'Reels') {
           iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline';

        } else if (route.name === 'Activity') {
           iconName = focused ? 'heart' : 'heart-outline';

        } else if (route.name === 'Profile') {
           iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';

        }
        return <Ionic name={iconName} size={size} color={color}/>
      },
      inactiveBackgroundColor:"green",
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarActiveTintColor: '#3B82F6',
      tabBarInactiveTintColor: '#000',
      headerShown: false,
      unmountOnBlur: true
    })}>

              <Tab.Screen name = 'Home' component={Home} options={{headerShown:false}}/>
              <Tab.Screen name = 'Search' component={SearchScreen} options={{headerShown:false}}/>
              <Tab.Screen name = 'Reels' component={ReelsScreen} options={{headerShown:false}}/>
              <Tab.Screen name = 'Activity' component={ActivityScreen} options={{headerShown:false}}/>
              <Tab.Screen name = 'Profile' component={ProfileScreen} options={{headerShown:false}}/>
          </Tab.Navigator>

  )
}


const StackScreen = () =>{
  const Stack = createNativeStackNavigator()
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= 'HomeStackNavigation' component={HomeStackNavigation} options={{headerShown:false}}/>
        <Stack.Screen name= 'FriendProfile' component={FriendProfile} options={{headerShown:false}}/>
        <Stack.Screen name= 'EditProfile' component={EditProfile} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export {Authentication, StackScreen}

const styles = StyleSheet.create({
  tabBarIconStyle: {
    width: 24,
    height: 24
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});


