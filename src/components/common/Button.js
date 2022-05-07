import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {globalStyles} from '../../styles'
import  { Themes }  from '../../constants'
// import {Text} from 'react-native'
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import { Text } from './Text'

const customFonts = {
  Montserrat: require("../../assets/font/Montserrat.ttf")
};


export const Button = ({
    title,
    onPress,
    textStyle,
    containerStyle,
    ...others
}) => {
  const [isLoaded] =useFonts(customFonts)
      if(!isLoaded) {
        return <AppLoading />
      } return (
    <TouchableOpacity
    activeOpacity={0.6}
    style={[globalStyles.rowCenter ,{backgroundColor: Themes.primary}, containerStyle]}
    onPress={onPress}
    {...others}>
        <Text
        text={title}
        color={globalStyles.textColor}
        style={[textStyle, styles.styleText]}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  styleText: {
    fontFamily: 'Montserrat'
  }
})