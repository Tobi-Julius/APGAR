import { StyleSheet,  View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Text, Button } from '../components/common'

const MaternalHistory = ({navigation}) => {

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
               <TouchableOpacity
               activeOpacity={0.6}
               onPress={()=> navigation.goBack()}
               style={styles.X}>
                   <Text textStyle={styles.XStyles} text='X'/>
               </TouchableOpacity>
                   <View style={styles.maternalContainer}>
                <View style={styles.headerTextContainer}>
                <Text text='Maternal Hypertension'/>
                <Text text='No'/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 25}}>
                <Text text='Gestation Period'/>
                <Text text='No'/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 25}}>
                <Text text='Delivery Mode'/>
                <Text text='No'/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 25}}>
                <Text text='Birth Weight'/>
                <Text text='No'/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 25}}>
                <Text text='Fetal Position'/>
                <Text text='No'/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 25}}>
                <Text text='MSL'/>
                <Text text='No'/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                   </View>
                    <Button textStyle={styles.btnText} containerStyle={styles.btnContainer} title='Score : 03'/>
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

export default MaternalHistory;

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
container: {
    width: '80%', 
    height: '62%', 
    marginTop: '20%', 
    backgroundColor:'#fcfcfc',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
},
X: {
    position: 'absolute',
    right: '5%',
    top: '5%'
},
XStyles: {
  color:Themes.secondary, 
  fontWeight: '900', fontSize: 20
},
maternalContainer: {
    marginTop: '20%'
},
btnContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
},
btnText: {
    color: '#fff',
    padding: 12,
    fontSize: 20
},
headerTextContainer:  {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: 25
  }
})