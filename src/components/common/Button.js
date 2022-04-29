import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {globalStyles} from '../../styles'
import  { Themes }  from '../../constants'
// import {Text} from 'react-native'
import { Text } from './Text'

export const Button = ({
    title,
    onPress,
    textStyle,
    containerStyle,
    ...others
}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    style={[globalStyles.rowCenter ,{backgroundColor: Themes.primary}, containerStyle]}
    onPress={onPress}
    {...others}>
        <Text
        text={title}
        color={globalStyles.textColor}
        style={textStyle}
        />
    </TouchableOpacity>
  )
}
