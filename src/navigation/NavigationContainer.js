import React from "react";
import { NavigationContainer as MainNavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import RootNavigation from "./RootNavigation";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

const NavigationContainer = () => {
  const { user } = useUserAuth();

  return (
    <MainNavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* {!user ? ( */}
        <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          // options={{tabA}}
        />
        {/* ) : ( */}
        <Stack.Screen name="RootNavigation" component={RootNavigation} />
        {/* )} */}
      </Stack.Navigator>
    </MainNavigationContainer>
  );
};

export default NavigationContainer;
