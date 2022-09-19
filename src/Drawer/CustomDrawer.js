import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SimpleLineIcons } from "@expo/vector-icons";

import { icon, image, theme } from "../constants";
import { Text } from "../components/common";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { auth } from "../firebase/firebase-config";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { globalStyles } from "../styles";

export const CustomDrawer = (props) => {
  const { logOut } = useUserAuth();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      await logOut;
      props.navigation.replace("SignIn");
    } catch (error) {
      setError(error.message);
    }
  };
  const firstLetter = auth.currentUser !== null ? auth.currentUser.email : "?";

  const letter = firstLetter.split(" ").map((word) => word[0]);

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => props.navigation.closeDrawer()}
                style={styles.icon}
              >
                <Image source={icon.close} style={styles.styleIcon} />
              </TouchableOpacity>

              <View style={styles.circleContainer}>
                <Image source={image.hospital} style={styles.styleImage} />
                <View style={[styles.firstLetterStyle, globalStyles.rowCenter]}>
                  <Text text={"O"} textStyle={[styles.number]} />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} id={props.id} />
      </DrawerContentScrollView>

      <View>
        <TouchableOpacity
          style={styles.footer}
          activeOpacity={0.6}
          onPress={() => handleSubmit()}
        >
          <SimpleLineIcons name="logout" size={24} color={theme.secondary} />
          <Text textStyle={styles.logOut} text="Log Out" />
        </TouchableOpacity>
        <Text textStyle={styles.errText} text={`${error && error}`} />
      </View>
    </>
  );
};

