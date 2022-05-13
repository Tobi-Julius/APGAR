import React, { useState, useRef } from "react";
import { SafeAreaView, 
    View, 
    Text as MainText, 
    StyleSheet, 
    FlatList, 
    StatusBar, 
    Image, 
    Dimensions,
    TouchableOpacity  } from "react-native";
import {AntDesign} from '@expo/vector-icons'
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';



import { Text } from "../components/common";
import { globalStyles } from "../styles";
import { Themes } from "../constants";


const customFonts = {
  Montserrat: require("../assets/font/Montserrat.ttf")
};


const Onboarding = ({navigation}) => {
    const ref = useRef(null)
  const [isLoaded] =useFonts(customFonts)

    const onboardingData = [
        {
            id: 1,
            text: 'APGAR Database',
            subText: 'Record and Store APGAR Score',
            image: require('../images/onboarding1.png')
        },
        {
            id: 2,
            text: 'Register your Hospital ',
            subText: 'Get a Unique ID No for your Hospital',
            image: require('../images/onboarding2.png')
        },
    ]


    const renderItem = ({item}) => {
        if(!isLoaded) {
        return <AppLoading />
      } return (
            <View style={styles.screenWidth}>
                <Image 
                source={item.image}
                style={styles.image}/>  
                <Text  text={item.text} textStyle={[styles.text, globalStyles.Heading1]} />
                <Text text={item.subText}  textStyle={[styles.text, globalStyles.Heading3]} />
            </View>
        )
    }


    const Slider = () => {
        return (
            <View style={styles.Slider}>
                {onboardingData.map((_, index) => {
                    return (
                        <View key={index} style={[styles.sliderRings, currentIndex === index && {
                            width: 14,
                            height: 8,
                            backgroundColor: Themes.primary
                        }]} />               
                    )
                })}
            </View>
        )
    }

    const Footer = () => {
        return (
            <View style={styles.Footer}>
                {currentIndex === onboardingData.length - 1 ? 
                
                    <View style={styles.innerContainer}>

               <TouchableOpacity
               activeOpacity={0.6}
               onPress={()=> navigation.replace('Register')}>
                   <MainText style={{fontSize: 20,textAlignVertical: 'center', fontFamily: 'Montserrat'}}>Register</MainText>
               </TouchableOpacity>
               <TouchableOpacity
               activeOpacity={0.6}
               onPress={()=> navigation.replace('SignIn')}
               style={styles.arrowContainer}>
                   <MainText style={{color:'#fff', padding: 1, fontFamily: 'Montserrat'}}>Sign in</MainText>
               </TouchableOpacity>
                </View> 
                :
                <View style={styles.innerContainer}>
               <TouchableOpacity
               activeOpacity={0.6}
               onPress={()=> navigation.replace('Register')}
               >
                   <MainText style={{fontSize: 20, fontFamily: 'Montserrat'}}>Skip</MainText>
               </TouchableOpacity>
               <TouchableOpacity
               activeOpacity={0.6}
               onPress={goNextSlide}
               style={styles.arrowContainer}>
                   <AntDesign color='#fff' size={18} name='arrowright' />
               </TouchableOpacity>
                </View>
                }
            </View>
        )
    }

    const [currentIndex, setCurrentIndex] = useState(0)

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / Dimensions.get('window').width)
        setCurrentIndex(currentIndex)
    }
    const goNextSlide = () => {
        const nextSlideIndex = currentIndex + 1;
        {if(nextSlideIndex !== onboardingData.length){
            const offset = nextSlideIndex * Dimensions.get('window').width;
            ref?.current?.scrollToOffset({offset})
            setCurrentIndex(nextSlideIndex)
        }}
    }
        if(!isLoaded) {
        return <AppLoading />
      } return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' backgroundColor='#fff'/>
            <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={onboardingData}
            renderItem={renderItem}
            contentContainerStyle={{
                height: Dimensions.get('window').height * 0.60,
                marginVertical: "15%",
                overflow: 'hidden'
            }}/>
            {Slider()}
            {Footer()}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    list: {
        alignItems: 'center',
    },
    screenWidth: {
        width: Dimensions.get('window').width,
        alignItems:'center'
    },
    image: {
        height: '70%',
        resizeMode: 'contain',
        overflow: 'hidden',
        width: '85%'
    },
    Slider: {
        height: Dimensions.get('window').height * 0.1,
        flexDirection : 'row',
        justifyContent: 'center',
    },
    sliderRings: {
        height: 7,
        width: 7,
        backgroundColor: Themes.text,
        borderRadius: 100/2,
        marginLeft: '1%'
    },
    Footer: {
        height: Dimensions.get('screen').height * 0.25,
        justifyContent: 'flex-end',
        paddingBottom: '15%',
        paddingLeft: '8%',
        paddingRight: '8%',
    },
    arrowContainer: {
        backgroundColor: Themes.primary,
        padding: 7,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 2
    },
    innerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    subText : {
        fontFamily: 'Montserrat',
    },
    text: {
        fontFamily: 'Montserrat'
    }
})

export default Onboarding;