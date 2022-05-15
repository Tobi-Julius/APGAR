import { StyleSheet, View, Dimensions, TouchableOpacity, Image, FlatList  } from 'react-native'
import React, {useContext} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'




import { GlobalContext } from '../context/GlobalState'
import { Themes } from '../constants'
import { Text } from '../components/common'
import { globalStyles } from '../styles'
import openMenu from '../images/Icon/menuOpen.png'
import Logo from "../images/APGARlogo.png"



const DataBase = ({navigation}) => {

  const {users} = useContext(GlobalContext)

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
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
         <TouchableOpacity 
         onPress={()=> navigation.goBack()}
         style={styles.left}>
            <AntDesign color='blue' size={28} name='left' />
         </TouchableOpacity>
         <View style={styles.paramsContainer}>
         <Text text='Database' textStyle={[styles.parameters1]} />
         </View>
        <View style={{padding: 5}}>
          <FlatList 
          data={users}
          renderItem={Data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: '15%'
          }}
          />
        </View>
        </View>
      </View>
    )
  }

  const Data = ({item, index}) => {
    return (
       <View key={item.id} style={{width: '100%', marginTop: 18, borderColor: '#fcfcfc', borderBottomWidth: 12, borderWidth: 2,}}>
           <View>
             <View style={{flexDirection: 'row',marginBottom: 5, width: '100%', justifyContent:'space-between'}}>
             <View>
               <Text text={item.id} textStyle={styles.idNumber}/>
               <Text text='ID'/>
             </View>
             <View>
               <Text text='Year' />
               <Text text='Time'/>
             </View>
             </View>

          <View style={{flexDirection: 'row'}}>

            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

            <View style={{flexDirection: 'row', alignSelf: 'flex-end',}}>
              <View>
              <Image source={require('../images/hospital.png')} style={{width: 30, height: 30, marginRight: 5, resizeMode:'contain'}}/>
              </View>
            <View>
              <Text text='Score' />
              <Text text={item.score} textStyle={{color: Themes.primary}} />
            </View>
            </View>

            <View>
              <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('Delete', {id: item.id})}
              style={styles.deleteBtnContainer}>
                <Text textStyle={styles.deleteBtnText} text='Delete'/>
              </TouchableOpacity>

              <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('Detail', {id: item.id})}
              containerStyle={styles.detailBtnContainer}>
                <Text textStyle={styles.detailBtnText}   text='Detail'/>
              </TouchableOpacity>
            </View>
          </View>
            </View>
           </View>
         </View>
        ) }
  
  return (
    <View>
      {Header()}
      {Body()}

    </View>
  )
}

export default DataBase

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
  overflow: 'hidden',
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
idNumber: {
  color: Themes.primary,
  fontSize: 20,
},
deleteBtnContainer : {
  borderWidth: 1,
  borderColor: 'lightgray',
  marginBottom: 5,
  borderRadius: 7
},
deleteBtnText: {
  paddingLeft: 5,
  padding: 4,
},
detailBtnContainer: {
  borderRadius: 7
},
detailBtnText: {
  padding: 5,
  fontWeight:'900',
  color: Themes.primary,
  backgroundColor: 'lightblue'
}
})