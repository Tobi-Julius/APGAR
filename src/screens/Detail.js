import { StyleSheet,  View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Text, Button } from '../components/common'

const Detail = ({navigation}) => {

  const Header = () => {
    return (
      <View style={styles.headerContainer}/>
    )
  }

    const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <TouchableOpacity 
         onPress={()=> navigation.goBack()}
         style={styles.left}>
            <AntDesign color='blue' size={28} name='left' />
         </TouchableOpacity>
         <View style={styles.paramsContainer}>
         <Text text='ID: ' textStyle={[styles.parameters1]} />
         <Text text='03' textStyle={[styles.parameters1]} />
         </View>
         <View style={{width: '100%', height: 100, backgroundColor:'red'}}>
            <Text text='hello'/>
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

export default Detail

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
paramsContainer: {
  flexDirection: 'row',
  marginTop: '6%',
},
left: {
  position: 'absolute',
  left: '4%',
  marginTop: '6%',
},
parameters1: {
  fontSize: 24,
  color: Themes.primary,
  fontWeight: '900'
}
})