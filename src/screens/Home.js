import { StyleSheet, View, TouchableOpacity, Dimensions, Image,FlatList,statusbar } from 'react-native'
import React, {useContext, useState} from 'react'
import {Ionicons} from '@expo/vector-icons'
import {EvilIcons} from '@expo/vector-icons'
import {Octicons} from "@expo/vector-icons"

import { Themes } from '../constants'
import openMenu from '../images/Icon/menuOpen.png'
import Logo from '../images/APGARlogo.png'
import { TextInput, Text, Button } from '../components/common'

const Home = ({navigation}) => {

  // const {user} = useContext(GlobalContext)


  // console.warn(user)

  const homeData = [
    {
      id: 1,
      title: 'Take APGAR Score',
      text: 'Instantly input APGAR parameters and generate APGAR score of a new born baby',
      image: require('../images/Home/APGARScore.png'),
      btnText: 'Take Score',
    },
    {
      id: 2,
      title: 'Check APGAR Database',
      text: 'Easy Access to APGAR Past Record',
      image: require('../images/Home/database.png'),
      btnText: 'Check Database',
    },
  ]

  const pastRecord = [
    {
      id: 1,
      score: 3,
      image: require('../images/Home/baby1.png')
    },
    {
      id: 2,
      score: 6,
      image: require('../images/Home/baby2.png')
    },
    {
      id: 3,
      score: 9,
      image: require('../images/Home/baby3.png')
    },
    {
      id: 4,
      score: 7,
      image: require('../images/Home/baby4.png')
    }
  ]

  const [data, setdata] = useState(pastRecord)
  

  function handleChange (textValue) {
      setdata(data.filter(each => {
        if(textValue === '') {
          return data
        } else {
          return Object.values(each.id).join('').toLowerCase().includes(textValue.toLowerCase())
        }
      }))
  }


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
        <View>
          <TextInput placeholder='Search ID' onChangeText={handleChange} textInputStyle={styles.inputStyle} />
          <View style={styles.searchIcon}>
          <EvilIcons  name='search' color='black' size={30}/>
          </View>
        </View>
      </View>
    )
  }

  const rederHome = ({item, index}) => {
    return (
      <View style={{marginTop: 8, }} keyExtractor={item.id}>
          <Text textStyle={styles.titleStyle} text={item.title}/>

        <View style={{alignItems: 'center',}}>

          <View style={styles.imageTextContainer}>

            <Image source={item.image} style={styles.image}/>

            <View style={styles.btnTextContainer}>

              <View style={{width: '78%'}}>
              <Text textStyle={styles.textStyle} text={item.text}/>
              </View>

              <Button textStyle={styles.btnStyle} onPress={()=> {
                if(index === 0){
                  navigation.navigate('TakeAPGARScore')
                } if(index === 1){
                  navigation.navigate('DataBase')
                }
              }
              } containerStyle={styles.btnContainer} title={item.btnText}/>
            </View>

          </View>
        </View>
      </View>
    )
  }

  const Body = () => {
    return (
      <View>
          <FlatList
          data={homeData}
          showsVerticalScrollIndicator={false}
          renderItem={rederHome}
          contentContainerStyle={{
            height: Dimensions.get('window').height * 0.59,
            paddingVertical: 10,
          }}
          />
      </View>
    )
  }

  const FooterList = ({item}) => {
    return (
    <View style={{marginRight: 25}} keyExtractor={item.id}>
      <View>
        <Text text={item.id}/>
        <Image 
        source={item.image}
        style={{
          width: 105,
          height: 100,
          marginTop: -15
        }}/>
        <View style={styles.imageTopText}>
          <Text text= 'ID'/>
          <Text textStyle={styles.itemId} text = {item.id}/>
          </View>
        <View style={styles.imageBottomText}>
          <Text text= 'Score'/>
          <Text textStyle={styles.itemScore} text = {item.score}/>
          </View>

      </View>
    </View>
    )
  }
  const Footer = () => {
    return (
      <View style={{marginLeft: 8}}>
        <Text text='Past Record'/>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data = {data}
        renderItem={FooterList}
        contentContainerStyle={{
          marginVertical: 5,
          justifyContent: 'flex-end'
        }}
        />
      </View>
    )
  }
  

  return (
    <View>
      {Header()}
      {Body()}
      {Footer()}
      <View>
        <View style={{height: Dimensions.get('screen').height * 0.12, marginTop: -5 }}> 
        <View style={styles.topColor}/>
        <View style={styles.homeIconContainer}>
          <Octicons name='home' size={20} color={Themes.primary}/>
        </View>
        <View style={styles.bottomColor}/>
        </View>
      </View>
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
inputStyle: {
  width: '90%',
  alignSelf: 'center',
  backgroundColor: Themes.white,
  borderRadius: 7,
  marginBottom: '-7%',
  paddingLeft: 20
},
menuStyle: {
  width: 18,
  height: 18
},
searchIcon : {
  alignItems: 'flex-end',
  right: '8%',
  bottom: '10%'
},
titleStyle: {
  marginLeft: '3%'
},
btnStyle: {
  color: Themes.white,
  padding: 8,
  fontSize: 12
},
btnContainer: {
  borderRadius: 7,
  marginRight: 7,
},
btnTextContainer: {
  width: '100%',
  position: 'absolute',
  backgroundColor: Themes.fadeBackground,
   paddingTop: 2,
   bottom: 0,
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   padding: 5,
   borderBottomRightRadius: 20,
   borderBottomLeftRadius: 20
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  textStyle: {
    fontSize: 14
  },
  imageTextContainer: {
    width: '97%',
    height: Dimensions.get('window').height * 0.25,
    borderRadius: 20,
    marginTop: 10
  },
  bottomNav: {
    bottom: 0
  },
  itemId: {
    color: Themes.primary
  },
  itemScore: {
    color: Themes.primary,
    fontSize: 17
  },
  homeIconContainer: {
    position: 'absolute',
    left: '45%',
    top: '24%',
    zIndex: 1,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Themes.white,
    borderRadius: 20
  },
  topColor: {
    width: '100%',
    height: '38%' ,
    backgroundColor: Themes.white
  },
  bottomColor: {
    width: '100%',
    height:'60%' ,
    backgroundColor: Themes.primary,
  },
  imageTopText: {
    position: 'absolute',
    zIndex: 5,
    right: '7%',
    alignItems: 'center',
    top: '9%',
    backgroundColor: Themes.fadeBackground,
    paddingTop: 0,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 0
  },
  imageBottomText: {
    position: 'absolute',
    zIndex: 5,
    left: '2%',
    alignItems: 'center',
    width: '100%',
    bottom: '9%',
    backgroundColor: Themes.fadeBackground,
    paddingTop: 0,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 0
  }
})

export default Home;
