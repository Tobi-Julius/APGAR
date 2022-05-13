import { StyleSheet, Text as MainText, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Picker } from '@react-native-picker/picker'

import { Button, TextInput } from '../components/common'
import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Text } from '../components/common'




const Register = ({navigation}) => {


  const [state, setState] = useState('')
  
  const Header = () => {
    return (
      <View style={styles.headerContainer}/>
    )
  }
  const InputFields =  () => {
     return (
      <View style={{width: '90%', borderRadius: 10, marginTop: '5%'}}>
        <TextInput 
        placeholder='Hospital Name' 
        onChangeText={()=>{}}
        textInputStyle={styles.TextInput}
        />
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

        <View style={{width: '68%', borderWidth: 1, borderRadius: 7, borderColor: 'lightgrey', marginTop: 16}}>
         <Picker 
         selectedValue={state}
         itemStyle={{fontFamily: 'Montserrat'}}
         onValueChange={(item, index) => setState(item)}
         style={{
           borderColor: 'red',
           color: Themes.text,
           borderRadius: 5,
           fontWeight: '200'
         }}>
           <Picker.Item label ='state' enabled={false}   value= 'state' />
           <Picker.Item label ='Bauchi'  value= 'Bauchi'/>
           <Picker.Item label ='Gombe'  value= 'Gombe'/>
           <Picker.Item label ='Lagos'  value= 'Lagos'/>
           <Picker.Item label ='Kaduna'  value= 'Kaduna'/>
           <Picker.Item label ='Kano'  value= 'Kano'/>
           <Picker.Item label ='Sokoto'  value= 'Sokoto'/>
           <Picker.Item label ='Katsina'  value= 'Katsina'/>
           <Picker.Item label ='Oyo'  value= 'Oyo'/>
           <Picker.Item label ='Enugu'  value= 'Enugu'/>
           <Picker.Item label ='Ondo'  value= 'Ondo'/>
           <Picker.Item label ='Borno'  value= 'Borno'/>
           <Picker.Item label ='Niger'  value= 'Niger'/>
           <Picker.Item label ='Nasarawa'  value= 'Nasarawa'/>
           <Picker.Item label ='Adamawa'  value= 'Adamawa'/>
           <Picker.Item label ='Kwara'  value= 'Kwara'/>
           <Picker.Item label ='Benue'  value= 'Benue'/>
           <Picker.Item label ='Rivers'  value= 'Rivers'/>
           <Picker.Item label ='Anambra'  value= 'Anambra'/>
           <Picker.Item label ='Kogi'  value= 'Kogi'/>
           <Picker.Item label ='Ogun'  value= 'Ogun'/>
           <Picker.Item label ='Imo'  value= 'Imo'/>
           <Picker.Item label ='Plateau'  value= 'Plateau'/>
           <Picker.Item label ='Zamfara'  value= 'Zamfara'/>
           <Picker.Item label ='Zamfara'  value= 'Zamfara'/>
           <Picker.Item label ='Taraba'  value= 'Taraba'/>
           <Picker.Item label ='Yobe'  value= 'Yobe'/>
           <Picker.Item label ='Osun'  value= 'Osun'/>
           <Picker.Item label ='Jigawa'  value= 'Jigawa'/>
           <Picker.Item label ='Cross River'  value= 'Cross River'/>
           <Picker.Item label ='Delta'  value= 'Delta'/>
           <Picker.Item label ='Edo'  value= 'Edo'/>
           <Picker.Item label ='Kebbi'  value= 'Kebbi'/>
           <Picker.Item label ='Abia'  value= 'Abia'/>
           <Picker.Item label ='Niger'  value= 'Niger'/>
           <Picker.Item label ='Bayelsa'  value= 'Bayelsa'/>
           <Picker.Item label ='Ekiti'  value= 'Ekiti'/>
           <Picker.Item label ='Abuja'  value= 'Abuja'/>
         </Picker>
        </View>

          <View style={{width: '28%'}}>
          <TextInput 
        placeholder='City' 
        onChangeText={()=>{}} 
        textInputStyle={styles.TextInput}

        />
          </View>
        
        </View>
        <TextInput 
        placeholder='Address' 
        onChangeText={()=>{}}
        textInputStyle={styles.TextInput}
        // value
        />
        <Button title='Register' onPress={()=> navigation.replace('RegisterSucess')} containerStyle={styles.btnContainer} textStyle={styles.btnText}/>
        <View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center',}}>
        <Text text='Registered ?'textStyle={[styles.register ,globalStyles.Heading3]}/>
        <TouchableOpacity
        activeOpacity={0.6}
        style={{marginLeft: '3%'}}
        onPress={()=> navigation.navigate('SignIn')}
        >
          <Text textStyle={{color: Themes.primary,}} text='Sign In'/>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
            <Image 
            style={styles.image}
            source={require('../images/onboarding2.png')}/>
            <Text textStyle={[styles.text, globalStyles.Heading1]} text='Register your Hospital' />  
          {InputFields()}
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
image : {
  marginTop: '4%',
  resizeMode: 'contain',
},
text: {
  marginTop: '15%',
},
btnText: {
  color: '#fff',
},
btnContainer: {
  padding: 20,
  marginTop: '12%',
  marginBottom: '3%',
  borderRadius: 5
},
TextInput: {
  borderRadius: 5
},


})

export default Register;