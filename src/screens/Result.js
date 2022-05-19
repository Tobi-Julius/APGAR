import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { AntDesign } from '@expo/vector-icons'

import { GlobalContext } from '../context/GlobalState'
import { Text } from '../components/common'
import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Button } from '../components/common';



const Result = ({navigation, route}) => {

  const {users} = useContext(GlobalContext)
  const {id} = route.params

  const data = users.find((item) => {
   return item.id === id
 })


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

            <View style={styles.resultContainer}>
              <Text text='APGAR Score'/>
              <Text text='is'/>
              <Text textStyle={styles.textStyle} text={`${data.score === 10 ? data.score : `0${data.score}`}`}/>

              <View style={styles.footer}/>
              <Text textStyle={styles.comment} text={data.comment}/>

            </View>
          </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%'}}>
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
            <Button title='Add Maternal Record' onPress={()=> navigation.navigate('MaternalRecord', {id: data.id})} containerStyle={styles.btnContainer} textStyle={styles.btnText} /> 
            </View>

            <View style={styles.warning}>
             <AntDesign name='warning' size={11} color='red'/>
            <Text textStyle={styles.warningStyle} text='Adding Maternal record is an added advantage'/>
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
  height: Dimensions.get('window').height *0.54
},
textStyle: {
  color: Themes.secondary,
  marginTop: '5%'
},
footer: {
  backgroundColor: Themes.primary,
  width: '100%',
  height: '17%',
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
  padding: 10,
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
},
warning: {
  flexDirection: 'row',
  width: '85%',
  marginTop: 15,
},
warningStyle: {
  fontSize: 12,
  marginLeft: 5,
  textAlignVertical: 'top'
},
resultContainer: {
  backgroundColor: '#fcfcfc',
  height: '75%', 
  width: '75%',
  borderRadius: 13, 
  alignItems: 'center', 
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.35,
  shadowRadius: 4.65,
  elevation: 6
},
comment: {
  marginTop: 16
}
})