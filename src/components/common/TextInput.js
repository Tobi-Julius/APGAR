import { StyleSheet, TextInput as Input, Text, View } from "react-native";
import React from "react";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";

import { Themes } from "../../constants";

const customFonts = {
  Montserrat: require("../../assets/font/Montserrat.ttf"),
};

export const TextInput = ({
  value,
  placeholder,
  onChangeText,
  label,
  labelStyle,
  textInputStyle,
  inputType,
  containerStyle,
  ...others
}) => {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={[containerStyle]}>
      <Text style={[labelStyle, styles.styleLable]}>{label}</Text>
      <Input
        placeholder={placeholder}
        value={value}
        autoCorrect={false}
        onChangeText={onChangeText}
        keyboardType={inputType}
        style={[styles.inputStyle, textInputStyle]}
        {...others}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: "lightgrey",
    borderWidth: 1,
    color: Themes.text,
    padding: 10,
    fontFamily: "Montserrat",
  },
  styleLable: {
    fontFamily: "Montserrat",
  },
});
