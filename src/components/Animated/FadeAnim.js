import { Animated, View } from "react-native";
import React, { useRef, useEffect } from "react";

const FadeAnim = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeAnim;
