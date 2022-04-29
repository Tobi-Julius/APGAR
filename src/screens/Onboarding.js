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

import { Text } from "../components/common";
import { globalStyles } from "../styles";
import { Themes } from "../constants";


const Onboarding = ({navigation}) => {
    const ref = useRef(null)

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
        return (
            <View>
                <Image 
                source={item.image}
                style={styles.image}/>  
                <Text text={item.text} style={globalStyles.Heading1} />
                <Text text={item.subText} style={globalStyles.Heading3} />
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
                {
                    currentIndex === onboardingData.length - 1 ? 
                                    <View style={styles.innerContainer}>
               <TouchableOpacity
               activeOpacity={0.6}
               onPress={()=> navigation.replace('SignUp')}>
                   <MainText style={{fontSize: 20}}>Register</MainText>
               </TouchableOpacity>
               <TouchableOpacity
               activeOpacity={0.6}
               onPress={goNextSlide}
               style={styles.arrowContainer}>
                   <MainText style={{color:'#fff'}}>Sign in</MainText>
               </TouchableOpacity>
                </View> :
                <View style={styles.innerContainer}>
               <TouchableOpacity
               activeOpacity={0.6}
               onPress={()=> navigation.replace('SignUp')}
               >
                   <MainText style={{fontSize: 20}}>Skip</MainText>
               </TouchableOpacity>
               <TouchableOpacity
               activeOpacity={0.6}
               onPress={goNextSlide}
               style={styles.arrowContainer}>
                   <MainText style={{color:'#fff'}}>Next</MainText>
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
        return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' backgroundColor='#fff'/>
            <FlatList
            ref={ref}
            onMomentumScrollBegin={updateCurrentSlideIndex}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={onboardingData}
            renderItem={renderItem}
            contentContainerStyle={{
                height: Dimensions.get('window').height * 0.65,
                marginVertical: "15%"
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
    image: {
        height: '68%',
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        overflow: 'hidden',
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
        padding: 10,
        borderRadius: 2
    },
    innerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default Onboarding;