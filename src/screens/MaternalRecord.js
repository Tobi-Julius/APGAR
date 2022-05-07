import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import { Picker } from '@react-native-picker/picker'



import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Button, TextInput } from '../components/common'
import { Text } from '../components/common'


const customFonts = {
  Montserrat: require("../assets/font/Montserrat.ttf")
};


const MaternalRecord = ({navigation}) => {

  const [deliveryMode, setdeliveryMode] = useState('')
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
            <View style={styles.inputContainer}>
            <TextInput textInputStyle={styles.textInputStyle} placeholder="Type Mother's ID" label="Mother's ID"/>
            </View>
            <View style={styles.inputContainer}>
            <TextInput textInputStyle={styles.textInputStyle} placeholder="Type Gestation Period (Weeks)" label="Gestation Period"/>
            </View>
            <View style={{width: '90%', marginTop: '12%'}}>
              <Text text='Delivery Mode'/>
            <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}>
              {!isLoaded ? <AppLoading /> :
            <Picker
              selectedValue={deliveryMode}
             mode={'dropdown'}
             itemStyle={{fontFamily: 'Montserrat'}}
             onValueChange={((item, index) => {
               setdeliveryMode(item)
             })}
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}>
              <Picker.Item label='Select Option' color='lightgrey' fontFamily='Montserrat' value='Select Option'/>
              <Picker.Item label='SVG' value='SVG'/>
              <Picker.Item label='CS' value='CS'/>
            </Picker>
              
              }
            </View>
            </View>
            <View style={styles.inputContainer}>
            <TextInput textInputStyle={styles.textInputStyle} placeholder="Type Birth Weight (Kg)" label="Birth Weight"/>
            </View>
            <Button title='NEXT' onPress={()=> navigation.navigate('MaternalRecordSecond')} textStyle={styles.btnText} containerStyle={styles.btnContainer}/>
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

export default MaternalRecord

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
  marginTop: '10%',
  width: '90%',
  borderRadius: 7
},
btnText: {
  padding: '5%',
  color: '#fff',
  fontSize: 20
}
})