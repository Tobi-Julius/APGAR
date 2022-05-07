import { StyleSheet, View,Dimensions, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import {Ionicons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'



import { Themes } from '../constants'
import { Text } from '../components/common';
import openMenu from '../images/Icon/menuOpen.png';
import {Button} from '../components/common'
import Logo from '../images/APGARlogo.png'
import { globalStyles } from '../styles';


const customFonts = {
  Montserrat: require("../assets/font/Montserrat.ttf")
};


const TakeAPGARScore = ({navigation}) => {


  const [activity, setActivity] = useState('')
  const [pulse, setPulse] = useState('')
  const [grimace, setGrimace] = useState('')
  const [appearance, setAppearance] = useState('')
  const [respiration, setRespiration] = useState('')
  const [index, setIndex] = useState([])





  const [isLoaded] = useFonts(customFonts)

   const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.container}>
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=> navigation.openDrawer()}
          >
          <Image 
          source={openMenu}
          style={styles.menuStyle}
          />
          </TouchableOpacity>
          <Image 
          source={Logo}
          style={styles.styleLogo}
          />
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=> navigation.navigate('Notification')}>
          <Ionicons name='notifications-outline' size={20} color='#fff'/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  const Body = () => {
      if(!isLoaded) {
        return <AppLoading />
      }
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
         <TouchableOpacity 
         onPress={()=> navigation.goBack()}
         style={styles.left}>
            <AntDesign color='blue' size={28} name='left' />
         </TouchableOpacity>
         <View style={styles.paramsContainer}>
         <Text text='APGAR ' textStyle={[styles.parameters1]} />
         <Text text=' Parameters' textStyle={[styles.parameters1]} />
         </View>
      {InputFields()}
        </View>
      </View>
    )
  }
  
  
  const InputFields = () => {
          if(!isLoaded) {
        return <AppLoading />
      } return (
          <View style={{width: '90%', marginTop:'8%'}}>
            <View style={styles.calContainer}>
              <Text text='Activity'/>
            <View 
            style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}
            >
              <Picker
              selectedValue={activity}
             mode={'dropdown'}
             itemStyle={{fontFamily: 'Montserrat'}}
             onValueChange={((item, index) => {
               setIndex([index -1, {...index}])
               setActivity(item)
             })}
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}
              >
                <Picker.Item value='Select Option' color='lightgrey' fontFamily='Montserrat' enabled={false} label='Select Option'/>
                <Picker.Item value= 'Loose and Floppy muscle tones: 0'   label= 'Loose and Floppy muscle tones: 0'/>
                <Picker.Item value= 'Flexed Arms and Legs: 1'  label='Flexed Arms and Legs: 1'/>
                <Picker.Item value= 'Active Motion: 2'  label='Active Motion: 2'/>
              </Picker>
            </View>

             {/* pulse */}

            </View>
            <View style={styles.calContainer}>
              <Text text='Pulse'/>
            <View 
            style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}
            >
              <Picker
              selectedValue={pulse}
             itemStyle={{fontFamily: 'Montserrat'}}
             mode={'dropdown'}
             onValueChange={((item, index) => {
               setIndex([index -1, ...index])
               setPulse(item)
             })}
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}
              >
                <Picker.Item value='Select Option' color='lightgrey' fontFamily='Montserrat' enabled={false} label='Select Option'/>
                <Picker.Item value= 'Absent: 0'   label= 'Absent: 0'/>
                <Picker.Item value= '< 100 bpm: 1'  label='< 100 bpm: 1'/>
                <Picker.Item value= '> 100 bpm: 2'  label='> 100 bpm: 2'/>
              </Picker>
            </View>

             {/* Grimace */}

            </View>
            <View style={styles.calContainer}>
              <Text text='Grimace'/>
            <View 
            style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}
            >
              <Picker
              selectedValue={grimace}
             mode={'dropdown'}
             itemStyle={{fontFamily: 'Montserrat'}}
             onValueChange={(item, index) => 
              setGrimace(item)
            }
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}
              >
                <Picker.Item value='Select Option' color='lightgrey' fontFamily='Montserrat' enabled={false} label='Select Option'/>
                <Picker.Item value= 'Floppy/No reaction: 0'   label= 'Floppy/No reaction: 0'/>
                <Picker.Item value= 'Minimal Response: 1'  label='Minimal Response: 1'/>
                <Picker.Item value= 'Prompt Response: 2'  label='Prompt Response: 2'/>
              </Picker>
            </View>

             {/* Appearance */}

            </View>
            <View style={styles.calContainer}>
              <Text text='Appearance'/>
            <View 
            style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}
            >
              <Picker
              selectedValue={appearance}
             itemStyle={{fontFamily: 'Montserrat'}}
             mode={'dropdown'}
             onValueChange={(item, index) => 
              setAppearance(item)
            }
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}
              >
                <Picker.Item value='Select Option' color='lightgrey' fontFamily='Montserrat' enabled={false} label='Select Option'/>
                <Picker.Item value= 'Blue Pale: 0'   label= 'Blue Pale: 0'/>
                <Picker.Item value= 'Blue Extremeties: 1'  label='Flexed Arms and Legs: 1'/>
                <Picker.Item value= 'Pink: 2'  label='Pink: 2'/>
              </Picker>
            </View>


             {/* Respiration */}

            </View>
            <View style={styles.calContainer}>
              <Text text='Respiration'/>
            <View 
            style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', marginTop: 2}}
            >
              <Picker
              selectedValue={respiration}
             itemStyle={{fontFamily: 'Montserrat'}}
             mode={'dropdown'}
             onValueChange={(item, index) => 
              setRespiration(item)
            }
             style={{
               borderColor: 'red',
               color: Themes.text,
               borderRadius: 5,
               fontWeight: '200',
             }}
              >
                <Picker.Item value='Select Option' color='lightgrey' fontFamily='Montserrat' enabled={false} label='Select Option'/>
                <Picker.Item value= 'Absent : 0' number={1}   label= 'Absent : 0'/>
                <Picker.Item value= 'Slow and Irregular: 1'  label='Slow and Irregular: 1'/>
                <Picker.Item value= 'Vogorous Cry: 2'  label='Vogorous Cry: 2'/>
              </Picker>
            </View>
            </View>
            <Button
            title = 'Take Score'
            onPress={()=> navigation.navigate('Result')}
            textStyle={styles.btnText} containerStyle={styles.btnContainer}/>
          </View>
          )
            }

      if(!isLoaded) {
        return <AppLoading />
      } return (
    <View>
      {Header()}
      {Body()}
    </View>
  )
}

const styles = StyleSheet.create({
headerContainer: {
  height: Dimensions.get('window').height * 0.2,
  backgroundColor: Themes.primary,
  justifyContent: 'center'
},
container: {
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingLeft: 20,
  paddingRight: 20,
},
menuStyle: {
  width: 18,
  height: 18
},
bodyContainer: {
  top: '-12%',
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
headContainer: {

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
calContainer: {
  width: '100%',
  marginTop: '8%'
},
btnContainer: {
  marginTop: '10%',
  borderRadius: 8
},
btnText: {
  padding: 20,
  color: '#fff',
  fontSize: 17
}

})
export default TakeAPGARScore
