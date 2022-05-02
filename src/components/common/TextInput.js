import { StyleSheet, TextInput as Input, Text, View } from 'react-native'
import React from 'react'

import { globalStyles } from '../../styles'
import { Themes } from '../../constants'

export const TextInput = ({
    value,
    placeholder,
    onChangeText,
    label,
    labelStyle,
    textInputStyle,
    ...others
}) => {
  return (
      <View>
          <Text style={labelStyle}>{label}</Text>
          <Input 
          placeholder={placeholder}
          value={value}
          autoCorrect={false}
          onChangeText={onChangeText}
          style={[styles.inputStyle, textInputStyle]}
          {...others}
          />
      </View>
  )
}


const styles = StyleSheet.create({
    inputStyle: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        color: Themes.text,
        padding: 10
    }
})