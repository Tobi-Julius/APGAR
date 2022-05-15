import { StyleSheet,  View, Dimensions, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { GlobalContext } from '../context/GlobalState'

import { Themes } from '../constants'
import { globalStyles } from '../styles'
import { Text, Button } from '../components/common'

const MaternalHistory = ({navigation, route}) => {


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
          <TouchableOpacity 
         onPress={()=> navigation.goBack()}
         style={styles.left}>
            <AntDesign color='blue' size={28} name='left' />
         </TouchableOpacity>
         <View style={styles.paramsContainer}>
         <Text text='ID : ' textStyle={[styles.parameters1]} />
         <Text text={`0${data.id}`} textStyle={[styles.parameters1]} />
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
                <Text text={data.maternalHtpertension}/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 25}}>
                <Text text='Gestation Period'/>
                <Text text={data.gestationPeriod}/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 25, paddingLeft: 5,paddingRight: 5}}>
                <Text text='Delivery Mode'/>
                <Text text={data.deliveryMode}/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 25, paddingLeft: 5,paddingRight: 5}}>
                <Text text='Birth Weight'/>
                <Text text={data.birthWeight}/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 25, paddingLeft: 5,paddingRight: 5}}>
                <Text text='Fetal Position'/>
                <Text text={data.fetalPosition}/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 25, paddingLeft: 5,paddingRight: 5}}>
                <Text text='MSL'/>
                <Text text={data.MSL}/>
                </View>
                       <View style={{width: '100%', borderColor: 'lightgray', borderWidth: 1, marginTop: 15}}/>
                   </View>
                    <Button textStyle={styles.btnText} containerStyle={styles.btnContainer} title={`Score : 0${data.score}`}/>
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
    marginTop: '20%',
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
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 25,
  paddingLeft: 5,
  paddingRight: 5
  }
})