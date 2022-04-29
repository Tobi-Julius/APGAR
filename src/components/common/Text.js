import React, {useMemo} from "react";
import { Text as MainText } from "react-native";

export const Text = ({
    text,
    color,
    textAlign,
    textStyle,
    letterSpacing,
    ...others
 }) => {
     const propStyle = useMemo (
         () => ({
             textAlign,
             letterSpacing,
             color
         }),
         [textAlign, letterSpacing],
     ); 
     return (
         <MainText style={[propStyle, color, textStyle]} {...others}>
            {text}
         </MainText>
     );
 };
    