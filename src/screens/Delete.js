import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';

import { Themes } from '../constants'
import { Text } from '../components/common'


const Delete = ({navigation, route}) => {


  const {users, deleteTodo} = useContext(GlobalContext)

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
      <View 
      style={[styles.container]}>
         <View 
        style={styles.innerContainer}>

          <View style={styles.deleteTextContainer}>
         <Text text='Delete ?' textAlign='center' textStyle={styles.deleteText}/>
          </View>

      <View style={styles.btns}>
        <TouchableOpacity
        activeOpacity={0.6}
        style={styles.noBtn}
        onPress={()=>navigation.goBack()}
        >
          <Text textStyle={styles.noBtnText} text='NO'/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          deleteTodo(data.id)
          navigation.navigate('Register')
        data.hospitalName = '',
        data.id = '',
         data.state = '',
         data.address = '',
         data.city = '',
         data.activity = '',
         data.pulse = '',
         data.grimace = '',
         data.appearance = '',
         data.respiration = '',
         data.score = '',
         data.motherID = '',
         data.deliveryMode = '',
         data.gestationPeriod = '',
         data.birthWeight = '',
         data.maternalHtpertension = '',
         data.fetalPosition = '',
         data.MSL = '',
         data.activityScore = '',
         data.pulseScore = '',
         data.grimaceScore = '',
         data.appearanceScore = '',
         data.respirationScore = ''
        }}
          activeOpacity={0.6}
        style={styles.yesBtn}
        >
          <Text textStyle={styles.yesBtnText} text='YES'/>
        </TouchableOpacity>
      </View>

        <View style={{position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'center', backgroundColor: Themes.primary, padding: '8%', width: '100%', 
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
      }}>
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

const styles = StyleSheet.create({
headerContainer: {
  height: Dimensions.get('window').height * 0.2,
  backgroundColor: Themes.primary
},
innerContainer: {
  width: '70%',
  backgroundColor: '#fcfcfc',
  height: '45%',
  borderRadius: 10,
},
container: {
  height: Dimensions.get('window').height * 0.65,
  justifyContent: 'center',
  alignItems: 'center',
},
id: {
  color: '#fff',
},
number: {
  color: Themes.secondary
},
footerContainer : {
  width: '70%',
  height: '23%',
  borderRadius: 10,
},
safe : {
  padding: 12,
  flexDirection: 'row'
},
containerStyle : {
  padding: 13,
  marginLeft: '28%',
  marginRight: '28%',
  marginTop: '20%',
  borderRadius: 5
},
deleteTextContainer: {
  marginTop: '15%'
},
deleteText: {
  color: Themes.secondary
},
btns: {
  marginTop: '15%',
  flexDirection: 'row',
  justifyContent: 'space-around'
},
noBtn: {
  borderWidth: 1,
  borderColor: Themes.primary,
  borderRadius: 7
},
yesBtn: {
  backgroundColor: Themes.secondary,
  borderRadius: 7

},
noBtnText: {
  color: Themes.primary,
  padding: 25
},
yesBtnText: {
  color: '#fff',
  padding: 25
}
})


export default Delete
