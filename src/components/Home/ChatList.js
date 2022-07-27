import {  Text, View,FlatList,TouchableOpacity ,Image} from 'react-native'
import React, { useState,useEffect } from 'react'
import SearchBox from '../Search/SearchBox'
import { styles } from '../../Styles/Style'


const ChatList = ({navigation}) => {
  const [data,setData] = useState()

  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then((res) =>
        res.json()
    ).then((json) =>{
        setData(json.data)
       console.log(data)
    }).catch((e)=> {
        console.log(e);
    })


},[navigation])

const chat=(pic,Name)=>{
  console.log("chat")
  navigation.navigate("Chat",{img:pic,name:Name})
}

const renderItem =({item})=>{
  return(
  <View style={styles.item}>
  <TouchableOpacity onPress={()=>{modalFunc(item.avatar)}}>
    <View>
    <Image
        style={styles.image}
        source={{uri:`${item.avatar}`}}
   />
    </View>


      </TouchableOpacity>
      <TouchableOpacity onPress={()=>chat(item.avatar,item.first_name)}>
      <View style={styles.userName}>

      <Text>
          {
            item.first_name
          } {item.last_name}

          </Text>


      </View>
      </TouchableOpacity>
      </View>)
}

return (
    <View>
      <SearchBox/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ChatList

// const styles = StyleSheet.create({})