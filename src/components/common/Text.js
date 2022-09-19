import React, { useMemo } from "react";
import { Text as MainText } from "react-native";

export const Text = ({
  text,
  color,
  textAlign,
  textStyle,
  letterSpacing,
  ellipsizeMode,
  numberOfLines,
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
  return (
    <MainText
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[propStyle, color, textStyle]}
      {...others}
    >
      {text}
    </MainText>
  );
};
