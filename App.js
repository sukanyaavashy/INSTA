import React,{useEffect}from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useSelector,useDispatch} from "react-redux";
import { store } from "./src/redux/store";
import { getToken } from "./src/redux/actions";
import { Provider } from 'react-redux';
import {Authentication} from "./src/router";
import { HomeStackNavigation } from "./src/router";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store';
import { StackScreen } from './src/router';

const AppWrapper = () => {
  const storeData = useSelector((state) => state)
  const token = storeData.userReducer.token;
  const uid = storeData.userReducer.uid
  const dispatch = useDispatch();



  // useEffect(()=>{
  //   setTimeout(()=>{
  //     SplashScreen.hide()
  //   },1000)

  // },)

  if (uid){
    return(
      <StackScreen/>
    )
  }
  return(
    <Authentication/>
  )


}

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
      <AppWrapper />
      </PersistGate>
    </Provider>
  )
}

export default App;
