import React, { useMemo } from "react";
import { Text as MainText, StyleSheet } from "react-native";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";

const customFonts = {
  MontserratMedium: require("../../assets/font/Montserrat-Medium.ttf"),
};

export const TextMedium = ({
  text,
  color,
  textAlign,
  textStyle,
  letterSpacing,
  ...others
}) => {
  const propStyle = useMemo(
    () => ({
      textAlign,
      letterSpacing,
      color,
    }),
    [textAlign, letterSpacing]
  );
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <MainText
      style={[propStyle, color, textStyle, styles.styleText]}
      {...others}
    >
      {text}
    </MainText>
  );
};

const styles = StyleSheet.create({
  styleText: {
    fontFamily: "MontserratMedium",
  },
});
