import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'


import { Themes } from '../constants'
import { Text, Button } from '../components/common'
import { globalStyles } from '../styles'



const customFonts = {
  Montserrat: require("../assets/font/Montserrat.ttf")
};

const Notification = ({navigation}) => {




      const Header = () => {
    return (
      <View style={styles.headerContainer}/>
    )
  }

     const Body = () => { return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <View style={{marginTop: '5%', width:'100%'}}>
              <TouchableOpacity 
              activeOpacity={0.6}
              onPress={()=> navigation.goBack()}
              style={styles.leftIcon}>
                <AntDesign name='left' color='blue' size={28}/>
              </TouchableOpacity>
          <Text text='Notifications' textStyle={[styles.textStyle, globalStyles.Heading1]} /> 
          </View>
        </View>
      </View>
    )
  }


  return (
    <View>
      {Header()}
      {Body()}
    </View>
  )
}

export default Notification;

const styles = StyleSheet.create({
headerContainer: {
  height: Dimensions.get('window').height * 0.2,
  backgroundColor: Themes.primary
},
bodyContainer: {
   top: '-15%',
},
bodyContentContainer: {
  backgroundColor: '#fff',
  width: Dimensions.get('window').width * 0.9,
  height: Dimensions.get('screen').height * 0.8,
  borderRadius: 10,
  alignItems: 'center',
},
container: {
  height: Dimensions.get('window').height *0.55
},
textStyle: {
  color: Themes.secondary,
  marginTop: '4%'
},
leftIcon: {
    position: 'absolute',
    left: '2%',
    marginTop: '4%',
    zIndex: 1
},
textInputStyle: {
  borderRadius: 8,
  // marginTop: 
},
inputContainer: {
  width: '90%',
  marginTop: '12%',
},
btnContainer: {
  marginTop: '40%',
  width: '90%',
  borderRadius: 7
},
btnText: {
  padding: '5%',
  color: '#fff',
  fontSize: 20
}
})