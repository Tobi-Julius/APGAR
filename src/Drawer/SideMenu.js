import { StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {AntDesign} from '@expo/vector-icons'
import {FontAwesome5} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'
import { GlobalContext } from '../context/GlobalState'



import TakeAPGARScore from '../screens/TakeAPGARScore'
import DataBase from '../screens/DataBase'
// import Feedback from '../screens/Feedback'
import Home from '../screens/Home'
import CustomDrawer from './CustomDrawer'


const Drawer = createDrawerNavigator()


const SideMenu = ({route}) => {

  const {users} = useContext(GlobalContext)

  const {id} = route.params

   const data = users.find((item) => {
   return item.id === id
 })

     return (
    <Drawer.Navigator
    initialRouteName='Home'
    drawerContent={props => <CustomDrawer {...props} id = {id} data = {data}/>}
    screenOptions={{headerShown: false, drawerLabelStyle: {marginLeft: -20, fontFamily: 'Montserrat', padding: 5}}}
    >
        <Drawer.Screen name='Home' component={Home}  options={{
          drawerIcon: ({color}) => (
            <AntDesign color={color} size={20} name='home' />
          )
        }}/>
        <Drawer.Screen name='TakeAPGARScore' component={TakeAPGARScore} 
        initialParams={{id:id}}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 color={color} size={20} name='edit' />
          )
        }} />
        <Drawer.Screen name='DataBase' component={DataBase}  
        initialParams={{id:id}}
        options={{
          drawerIcon: ({color}) => (
            <Feather color={color} size={20} name='database' />
          )
        }}/>
        {/* <Drawer.Screen name='Feedback' component={Feedback}  options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons color={color} size={20} name='message-text-outline' />
          )
        }}/> */}
    </Drawer.Navigator>
  )
}

export default SideMenu;

const styles = StyleSheet.create({})