import React, { useState, useEffect } from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  Register,
  Recovery,
  SignIn,
  RetrieveId,
  Onboarding,
  RegisterSucess,
} from "../screens";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthStack = createSharedElementStackNavigator();

const AuthNavigation = () => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null);
  const options = {
    animationEnabled: true,
    headerTransparent: true,
    headerShown: false,
    gestureEnabled: false,
    animation: "slide_from_right",
    animationDuration: 350,
    animationTypeForReplace: "push",
    customAnimationOnGesture: true,
    title: "",
    presentation: "card",
    cardStyleInterpolator: ({ current, next }) => {
      const opacity = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
      });
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "clamp",
          })
        : 0;
      return {
        cardStyle: {
          opacity: opacity,
        },
      };
    },
  };

  const savedData = async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunch");
    if (appData === null) {
      setIsAppFirstLaunch(true);
      AsyncStorage.setItem("isAppFirstLaunch", "false");
    } else {
      setIsAppFirstLaunch(false);
    }
  };
  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      savedData();
    }

    return () => (subscribe = false);
  }, []);

  return (
    isAppFirstLaunch !== null && (
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAppFirstLaunch && (
          <AuthStack.Screen name="Onboarding" component={Onboarding} />
        )}
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={options}
        />

        <AuthStack.Screen name="SignIn" component={SignIn} options={options} />

        <AuthStack.Screen
          name="RetrieveId"
          component={RetrieveId}
          options={options}
        />
      </AuthStack.Navigator>
    )
  );
};

export default AuthNavigation;
