import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';


import { Themes } from '../constants'
import { Text, Button } from '../components/common'
import { globalStyles } from '../styles'



const customFonts = {
  Montserrat: require("../assets/font/Montserrat.ttf")
};

const MaternalRecordSecond = ({navigation}) => {

  const [maternalHypertension, setMaternalHypertension] = useState('')
  const [fetalPosition, setFetalPosition] = useState('')
  const [MSL, setMSL] = useState('')

  const [isLoaded] = useFonts(customFonts)


      const Header = () => {
    return (
      <View style={styles.headerContainer}/>
    )
  }

     const Body = () => {
    if(!isLoaded) {
        return <AppLoading />
      } return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <View style={{marginTop: '5%', width:'100%'}}>
              <TouchableOpacity 
              activeOpacity={0.6}
              onPress={()=> navigation.goBack()}
              style={styles.leftIcon}>
                <AntDesign name='left' color='blue' size={28}/>
              </TouchableOpacity>
          <Text text='Maternal Records' textStyle={[styles.textStyle, globalStyles.Heading1]} /> 
            </View>
            <View style={{width: '90%', marginTop: '12%'}}>
              <Text text='Maternal Hypertension'/>
            <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}>
            <Picker
              selectedValue={maternalHypertension}
             mode={'dropdown'}
             itemStyle={{fontFamily: 'Montserrat'}}
             onValueChange={((item, index) => {
               setMaternalHypertension(item)
             })}
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}>
              <Picker.Item label='Select Option' color='lightgrey' fontFamily='Montserrat' enabled={false} value='Select Option'/>
              <Picker.Item label='Yes' fontFamily='Montserrat' value='Yes'/>
              <Picker.Item label='No' value='No'/>
            </Picker>
            </View>
            </View>
             <View style={{width: '90%', marginTop: '12%'}}>
              <Text text='Fetal Position'/>
            <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}>
            <Picker
              selectedValue={fetalPosition}
             mode={'dropdown'}
             itemStyle={{fontFamily: 'Montserrat'}}
             onValueChange={((item, index) => {
               setFetalPosition(item)
             })}
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}>
              <Picker.Item label='Select Option' color='lightgrey' fontFamily='Montserrat'  enabled={false} value='Select Option'/>
              <Picker.Item label='Normal' value='Normal'/>
              <Picker.Item label='Abnormal' value='Abnormal'/>
            </Picker>
            </View>
            </View>
            <View style={{width: '90%', marginTop: '12%'}}>
              <Text text='Meconium Stained Liquor (MSL)'/>
            <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}>
            <Picker
              selectedValue={MSL}
             mode={'dropdown'}
             itemStyle={{fontFamily: 'Montserrat'}}
             onValueChange={((item, index) => {
               setMSL(item)
             })}
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}>
              <Picker.Item label='Select Option' color='lightgrey' fontFamily='Montserrat' enabled={false} value='Select Option'/>
              <Picker.Item label='Normal' value='Normal'/>
              <Picker.Item label='Abnormal' value='Abnormal'/>
            </Picker>
            </View>
            </View>
            <Button title='SAVE' onPress={()=> navigation.navigate('DataBase')} textStyle={styles.btnText} containerStyle={styles.btnContainer}/>
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

export default MaternalRecordSecond

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