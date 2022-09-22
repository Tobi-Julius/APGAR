import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import DrawerNavigation from "./DrawerNavigation";
import {
  MaternalHistory,
  Detail,
  Delete,
  MaternalRecord,
  MaternalRecordSecond,
  Notification,
  Result,
  DataBase,
} from "../screens";

const Stack = createSharedElementStackNavigator();

const RootNavigation = () => {
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
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="DrawerNavigation"
    >
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={options}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={options}
      />
      <Stack.Screen
        name="MaternalRecord"
        component={MaternalRecord}
        options={options}
      />
      <Stack.Screen
        name="MaternalRecordSecond"
        component={MaternalRecordSecond}
        options={options}
      />
      <Stack.Screen
        name="MaternalHistory"
        component={MaternalHistory}
        options={options}
      />
      <Stack.Screen name="DataBase" component={DataBase} options={options} />
      <Stack.Screen name="Detail" component={Detail} options={options} />
      <Stack.Screen name="Result" component={Result} options={options} />
      <Stack.Screen name="Delete" component={Delete} options={options} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
