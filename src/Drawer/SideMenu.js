import { StyleSheet,Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {AntDesign} from '@expo/vector-icons'
import {FontAwesome5} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';


import TakeAPGARScore from '../screens/TakeAPGARScore'
import DataBase from '../screens/DataBase'
import Feedback from '../screens/Feedback'
import Home from '../screens/Home'
import CustomDrawer from './CustomDrawer'


const customFonts = {
  Montserrat: require("../assets/font/Montserrat.ttf")
};

const Drawer = createDrawerNavigator()


const SideMenu = () => {

  const [isLoaded] = useFonts(customFonts)

      if(!isLoaded) {
        return <AppLoading />
      }  return (
    <Drawer.Navigator
    initialRouteName='Home'
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{headerShown: false, drawerLabelStyle: {marginLeft: -20, fontFamily: 'Montserrat', padding: 2}}}
    >
        <Drawer.Screen name='Home' component={Home}  options={{
          drawerIcon: ({color}) => (
            <AntDesign color={color} size={20} name='home' />
          )
        }}/>
        <Drawer.Screen name='TakeAPGARScore' component={TakeAPGARScore} options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 color={color} size={20} name='edit' />
          )
        }} />
        <Drawer.Screen name='DataBase' component={DataBase}  options={{
          drawerIcon: ({color}) => (
            <Feather color={color} size={20} name='database' />
          )
        }}/>
        <Drawer.Screen name='Feedback' component={Feedback}  options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons color={color} size={20} name='message-text-outline' />
          )
        }}/>
    </Drawer.Navigator>
  )
}

export default SideMenu;

const styles = StyleSheet.create({})