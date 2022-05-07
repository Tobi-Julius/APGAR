import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'


import { Text } from '../components/common'
import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Button } from '../components/common';



const Result = ({navigation}) => {

  
  const Header = () => {
    return (
      <View style={styles.headerContainer}/>
    )
  }
    const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <View style={{marginTop: '5%', width:'100%'}}>
              <TouchableOpacity 
              activeOpacity={0.6}
              onPress={()=> navigation.goBack()}
              style={styles.leftIcon}>
              <AntDesign name='left' color='blue' size={28}/>
              </TouchableOpacity>
          <Text text='Result' textStyle={[styles.textStyle, globalStyles.Heading1]} /> 
          </View>
          <View style={[globalStyles.rowCenter, styles.container]}>
            <View style={{backgroundColor: '#fcfcfc', height: '50%', width: '75%',borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
              <Text text='APGAR Score'/>
              <Text text='is'/>
              <Text textStyle={styles.textStyle} text='03'/>
              <View style={styles.footer}/>
            </View>
          </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
            <View style={{width: '37%',}}>
                <TouchableOpacity
                onPress={()=> navigation.navigate('DataBase')}
                activeOpacity={0.6}
                style={{
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    borderColor: Themes.primary,
                    borderWidth: 1,
                    borderRadius: 7
                }} >
                    <Text textStyle={styles.textBtn} text='Skip'/>
                </TouchableOpacity>
            </View>
            <View style={{width: '55%'}}>
                <Button title='Add Maternal Record' onPress={()=> navigation.navigate('MaternalRecord')} containerStyle={styles.btnContainer} textStyle={styles.btnText} />
            </View> 
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

export default Result

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
textStyle: {
  marginTop: '10%'
},
container: {
  height: Dimensions.get('window').height *0.55
},
textStyle: {
  color: Themes.secondary,
  marginTop: '8%'
},
footer: {
  backgroundColor: Themes.primary,
  width: '100%',
  height: '15%',
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
  bottom: 0,
  position: 'absolute'
},
containerStyle: {
  position: 'absolute',
  bottom : '10%',
  paddingLeft: 20,
  paddingRight: 20,
  padding: 15,
  borderRadius: 5,
},
btnText : {
  color: '#fff',
  padding: 20,
},
leftIcon: {
    position: 'absolute',
    left: '2%',
    marginTop: '6%'
},
textBtn: {
    padding: 20
},
btnContainer: {
    borderRadius: 7
}
})