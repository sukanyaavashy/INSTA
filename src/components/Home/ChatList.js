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

// const chat=(pic,Name)=>{
//   console.log("chat")
//   navigation.navigate("Chat",{img:pic,name:Name})
// }

const renderItem =({item})=>{
  return(
    <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}}>
    <View style={styles.item}>

        <Image
            style={styles.image}
            source={{uri:`${item.avatar}`}}
        />
        <Text>{item.first_name} {item.last_name}</Text>

        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}}> */}


    </View>
    </TouchableOpacity>
  )}

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