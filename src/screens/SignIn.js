import { StyleSheet, View, Dimensions,Image, TouchableOpacity, } from 'react-native'
import React, {useState, useContext} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { GlobalContext } from '../context/GlobalState';


import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Button, Text } from '../components/common'
import { TextInput } from '../components/common'


const SignIn = ({navigation}) => {

  const [id, setId] = useState('')

  const [inputFields, setInputFields] = useState('')

  
  const {users, addUser} = useContext(GlobalContext)
  
  
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
          <TouchableOpacity 
          onPress={() => navigation.navigate('Register')}
          style={styles.AntDesign}>
            <AntDesign color='black' size={24} name='left' />
          </TouchableOpacity>
          <Image 
            style={styles.image}
            source={require('../images/onboarding2.png')}/>
            <Text textStyle={[styles.text, globalStyles.Heading1]} text='Welcome Back !' />  
            <View style={styles.inputContainer}>
            <TextInput textInputStyle={styles.textInputStyle} onChangeText={(item) => setId(item)}  placeholder='Hospital ID' />
            </View>

            {inputFields ? <Text textStyle={styles.errText} text='Pls, Enter your ID No'/> : null}
            <TouchableOpacity 
            activeOpacity={0.6}
            style={{alignSelf: 'flex-start'}}
            onPress={()=> navigation.navigate('RetrieveId')}
            >
            <Text textStyle={styles.textStyle} text='Forget ID ?'/>
            </TouchableOpacity>
            
        <Button containerStyle={styles.containerStyle} 
        
        onPress={()=> {
          if (id === '') {
            setInputFields(!inputFields)
          }else {
            const newUser = {
              id: id,
              notificationMessage: 'An APGAR score of ID no 01 has been recorded'
            }
            addUser(newUser)
            navigation.replace('SideMenu', {id: newUser.id})
          }
        }}
         textStyle={styles.btnText} title='Sign In'/>
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
  marginTop: '13%',
  fontFamily: 'Montserrat'
},
inputContainer: {
  width: '90%',
  marginTop: '4%'
},
textInputStyle : {
  borderRadius: 6
},
textStyle: {
  color: Themes.primary,
  alignSelf: 'flex-start',
  paddingLeft: '7%',
  paddingTop: '3%'
},
containerStyle: {
  paddingLeft: 20,
  paddingRight: 20,
  padding: 14,
  marginTop: '8%',
  borderRadius: 6
},
btnText :{
  color: '#fff'
},
AntDesign: {
  position: 'absolute',
  left: '3%',
  top: '4%'
},
errText: {
  color: Themes.secondary,
  fontSize: 12,
  alignSelf: 'flex-start',
  marginLeft: '6%',
  paddingTop: '1%'
},
})



export default SignIn;
