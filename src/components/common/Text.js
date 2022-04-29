import React, {useMemo} from "react";
import { Text as MainText } from "react-native";

export const Text = ({
    text,
    color,
    textAlign,
    style,
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
         <MainText style={[propStyle, color, style]} {...others}>
            {text}
         </MainText>
     );
 };
    