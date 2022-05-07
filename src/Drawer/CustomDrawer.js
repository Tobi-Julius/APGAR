import { StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import {SimpleLineIcons} from '@expo/vector-icons'


import Hospital from '../images/hospital.png'
import CloseIcon from '../images/Icon/menuClose.png'
import { Themes } from '../constants'
import {Text} from '../components/common'

const CustomDrawer = (props) => {

      const Header = () => {
    return (
      <View style={{height : Dimensions.get('window').height * 0.35}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=> props.navigation.closeDrawer()}
        style={styles.icon}>
          <Image 
          source={CloseIcon}
          style={styles.styleIcon}
          />
        </TouchableOpacity>
        <View style={styles.circleContainer}>
          <Image 
          source={Hospital}
          style={styles.styleImage}
          />
          <Text text='ID' textStyle={[styles.id]}/>
          <Text text='04' textStyle={[styles.number]}/>
        </View>
      </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
        {Header()}
    <DrawerContentScrollView {...props} > 
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    <View style={styles.footer}>
      <SimpleLineIcons name='logout' size={20} color={Themes.secondary} />
      <TouchableOpacity
      activeOpacity={0.6}
      onPress={()=> props.navigation.replace('SignIn')}
      style={{
        marginLeft: 7
      }}>
      <Text text='Log Out'/>
      </TouchableOpacity>
    </View>
    </View>

  )
}


const styles = StyleSheet.create({
container: {
    flex: 1
},
headerContainer: {
   height: Dimensions.get('window').height * 0.25,
   backgroundColor: Themes.primary,
   justifyContent: 'center'
},
icon:{
  alignSelf: 'flex-end',
  right: '8%',
  justifyContent: 'space-between',
  alignItems: "flex-end"
},
circleContainer: {
  width: 180,
  height: 180,
  backgroundColor: '#fcfcfc',
  position: 'absolute',
  bottom: '-35%',
  alignSelf: 'center',
  borderRadius: 90,
  justifyContent: 'center',
  alignItems: 'center',
},
number: {
  color: Themes.primary,
  fontSize: 23
},
id: {
  color: '#000',
  fontSize: 18
},
footer : {
  flexDirection: 'row',
  padding: '8%',
},
bar1: {
  width: 11,
  height:3,
  backgroundColor: '#fff'
},
bar2: {
  width: 15,
  height:3,
  marginTop: 3,
  backgroundColor: '#fff'
},
bar3: {
  width: 19,
  height: 3,
  marginTop: 3,
  backgroundColor: '#fff'
},
styleIcon: {
  width: 18,
  height: 18
},
styleImage: {
  marginBottom: 25
}
})

export default CustomDrawer