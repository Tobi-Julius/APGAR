import { StyleSheet, View, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'


import { Themes } from '../constants'
import { Text } from '../components/common'
import { globalStyles } from '../styles'


const Notification = ({navigation}) => {
    
  const data =[
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},  
    {id: 9},
  ]
  
  const [first, setfirst] = useState(data)

    const deleteItem = (id) => {
      setfirst(first.filter(each => {
       return each.id !== id
      }))
  }

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
          <Text text='Notifications' textStyle={[styles.textStyle, globalStyles.Heading1]} /> 
          <View style={styles.separatorText}>
          <Text textStyle={styles.notificationText} text='New Notifications'/>
          <View style={styles.separator}/>
          </View>
          </View>
          <FlatList
          data = {first}
          renderItem={NotificationMessages}
          showsVerticalScrollIndicator={false}
          />
      
        </View>
      </View>
    )
  }

  const NotificationMessages = ({item, index}) => {
    return (
      <View keyExtractor ={item.id} style={{width: '100%', alignItems: 'center'}}>
        <View >
          <View style={styles.messageContainer}>
            <Text textStyle={styles.messageNumber} text='06'/>
            <View>
            <Text textStyle={styles.messageText} text='An APGAR score of ID no 06 has been recorded'/>
            <Text textStyle={styles.timeAgo} text='time ago'/>
            </View>
            <TouchableOpacity 
            onPress={()=> deleteItem(item.id)}
            activeOpacity={0.6}
            >
            <AntDesign name='delete' size={20} color={Themes.secondary} />
            </TouchableOpacity>
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

export default Notification;

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
},
separator: {
  height: 2,
  backgroundColor: 'lightgray',
  width: '100%',
},
separatorText: {
  marginTop: '10%' 
},
notificationText: {
  fontSize: 20,
  color: Themes.primary,
  marginLeft: '1%'
},
messageContainer: {
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 30,
  alignItems: 'center'
},
messageText: {
  fontSize: 13,
  marginLeft: 8,
  marginRight: 8,
},
messageNumber: {
  backgroundColor: Themes.secondary,
  color: Themes.white,
  padding: 12,
  borderRadius: 7,
  marginLeft: 8,
  marginRight: 8,
},
timeAgo: {
  marginLeft: 10
}
})