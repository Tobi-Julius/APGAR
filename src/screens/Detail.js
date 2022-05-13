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
         <View style={styles.container}>
             <View style={styles.textHeadContainer}>
                 <Text textStyle={styles.indicatorText} text='Indicator' />
                 <Text textStyle={styles.indicatorText}  text='State' />
                 <Text textStyle={styles.indicatorText}  text='Point'/>
             </View>
         <View style={styles.row}>
             <Text text='Activity' textStyle={styles.text} />
             <Text text='Flexed Arm and Leg'/>
             <Text text='01' textStyle={styles.text}/>
         </View>
         <View style={styles.row}>
             <Text textStyle={styles.text} text='Pulse' />
             <Text text='Flexed Arm and Leg' />
             <Text text='01'/>
         </View>
         <View style={styles.row}>
             <Text textStyle={styles.text} text='Grimace' />
             <Text text='Flexed Arm and Leg' />
             <Text text='01'/>
         </View>
         <View style={styles.row}>
             <Text textStyle={styles.text} text='Appearance' />
             <Text text='Flexed Arm and Leg' />
             <Text text='01'/>
         </View>
         <View style={styles.row}>
             <Text textStyle={styles.text} text='Respiration' />
             <Text text='Flexed Arm and Leg' />
             <Text text='01'/>
         </View>

        <View style={styles.footerContainer} >
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=> navigation.navigate('MaternalHistory')}
          >
            <Text textStyle={styles.linkText} text='Maternity History' />
          </TouchableOpacity>
          <View style={styles.scoreContainer}>
            <Text textStyle={styles.scoreText} text='SCORE : 03'/>
          </View>
        </View>
         </View>
         <Button onPress={()=> navigation.navigate('DataBase')} textStyle={styles.btnText} containerStyle={styles.btnContainer} title='Close' />
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
},
indicatorText: {
    color: '#fff'
},
textHeadContainer :{
    flexDirection: 'row', 
    padding: 15, 
    backgroundColor: Themes.primary, 
    justifyContent:'space-between',
     paddingLeft: 10,
     paddingRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
},
container: {
    width: '80%', 
    height: '58%', 
    marginTop: '20%', 
    backgroundColor:'#fcfcfc',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
},
row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15%'
},
text: {
  fontSize: 18
},
footerContainer: {
  flexDirection: 'row',
  marginTop: '15%',
  alignItems: 'center',
  paddingLeft: 19,
},
scoreContainer: {
  position: 'absolute',
  right: 0,
  backgroundColor: Themes.primary,
  borderTopLeftRadius: 10
},
linkText: {
  color: Themes.primary,
  textDecorationLine: 'underline',
},
scoreText:{
  color: '#fff',
  padding: 8,
  fontSize: 18
},
btnContainer: {
  marginTop: '9%',
  borderRadius: 5
},
btnText: {
  padding: 20,
  color: "#fff",
  fontSize: 18
}
})