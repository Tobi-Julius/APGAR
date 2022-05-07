import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {EvilIcons} from '@expo/vector-icons'


import { Themes } from '../constants'
import openMenu from '../images/Icon/menuOpen.png'
import Logo from '../images/APGARlogo.png'
import { TextInput } from '../components/common'

const Home = ({navigation}) => {


   const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.container}>
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=> navigation.openDrawer()}
          >
          <Image 
          source={openMenu}
          style={styles.menuStyle}
          />
          </TouchableOpacity>
          <Image 
          source={Logo}
          style={styles.styleLogo}
          />
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=> navigation.navigate('Notification')}>
          <Ionicons name='notifications-outline' size={20} color='#fff'/>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput placeholder='Search ID' textInputStyle={styles.inputStyle} />
          <View style={styles.searchIcon}>
          <EvilIcons  name='search' color='black' size={30}/>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View>
      {Header()}
    </View>
  )
}
const styles = StyleSheet.create({
headerContainer: {
  height: Dimensions.get('window').height * 0.2,
  backgroundColor: Themes.primary,
  justifyContent: 'center'
},
container: {
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingLeft: 20,
  paddingRight: 20,
},
inputStyle: {
  width: '90%',
  alignSelf: 'center',
  backgroundColor: '#fff',
  borderRadius: 7,
  marginBottom: '-7%',
  paddingLeft: 20
},
menuStyle: {
  width: 18,
  height: 18
},
searchIcon : {
  position: 'absolute',
  right: '10%',
  top: '77%'
}
})

export default Home
