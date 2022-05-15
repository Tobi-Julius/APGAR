import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'



import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Button, Text } from '../components/common'



const Recovery = ({navigation}) => {

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <View style={{marginTop: '10%'}}>
          <Text text='ID Recovery' textStyle={[styles.textStyle, globalStyles.Heading1]} /> 
          </View>
          <View style={[globalStyles.rowCenter, styles.container]}>
            <View style={{backgroundColor: '#fcfcfc', height: '50%', width: '75%',borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
              <Text text='Your Hospital'/>
              <Text text='ID No is'/>
              <Text textStyle={styles.textStyle} text='10'/>
              <View style={styles.footer}/>
            </View>
            <Button textStyle={styles.btnText} onPress={()=> navigation.replace('SignIn', {id: 10})} containerStyle={styles.containerStyle} title='Sign In'/>
          </View>
        </View>
      </View>
    )
  }

const Header = () => {
    return (
      <View style={styles.headerContainer}/>
    )
  }

  return (
    <View>
      {Header()}
      {Body()}
    </View>
  )
}

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
  borderRadius: 5
},
btnText : {
  color: '#fff',
}

})

export default Recovery
