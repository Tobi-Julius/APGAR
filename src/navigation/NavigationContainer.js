import React, { useState, useEffect } from "react";
import { NavigationContainer as MainNavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import RootNavigation from "./RootNavigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createSharedElementStackNavigator();

const NavigationContainer = () => {
  const [userReady, setUserReady] = useState(null);

  useEffect(() => {
    const savedUser = async () => {
      const appUser = await AsyncStorage.getItem("userData");
      if (appUser !== null) {
        setUserReady(false);
      } else {
        setUserReady(true);
      }
    };
    savedUser();
  }, []);

  return (
    userReady !== null && (
      <MainNavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!userReady ? (
            <Stack.Screen name="RootNavigation" component={RootNavigation} />
          ) : (
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
          )}
        </Stack.Navigator>
      </MainNavigationContainer>
    )
  );
};

export default NavigationContainer;
