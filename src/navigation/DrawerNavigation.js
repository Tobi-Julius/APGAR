import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Home, TakeAPGARScore, DataBase } from "../screens";
import { CustomDrawer } from "../Drawer";
import { layout } from "../utils";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -layout.pixelSizeHorizontal(20),
          fontFamily: "Montserrat_500Medium",
          padding: layout.pixelSizeVertical(5),
        },
        headerPressOpacity: 0.6,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign color={color} size={20} name="home" />
          ),
        }}
      />
      <Drawer.Screen
        name="Take APGAR Score"
        component={TakeAPGARScore}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 color={color} size={20} name="edit" />
          ),
        }}
      />
      <Drawer.Screen
        name="Database"
        component={DataBase}
        options={{
          drawerIcon: ({ color }) => (
            <Feather color={color} size={20} name="database" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
