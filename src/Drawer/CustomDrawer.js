import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SimpleLineIcons } from "@expo/vector-icons";

import Hospital from "../images/hospital.png";
import CloseIcon from "../images/Icon/menuClose.png";
import { Themes } from "../constants";
import { Text, TextBold } from "../components/common";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { auth } from "../firebase/firebase-config";

const CustomDrawer = (props) => {
  
  const { logOut } = useUserAuth();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      await logOut
      props.navigation.replace("SignIn");
    } catch (error) {
      setError(error.message);
    }
  };
  const firstLetter = auth.currentUser !== null ? auth.currentUser.email : "?";

  const letter = firstLetter.split(" ").map((word) => word[0]);

  const Header = () => {

    return (
      <View style={{ height: Dimensions.get("window").height * 0.35 }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.closeDrawer()}
            style={styles.icon}
          >
            <Image source={CloseIcon} style={styles.styleIcon} />
          </TouchableOpacity>
          <View style={styles.circleContainer}>
            <Image source={Hospital} style={styles.styleImage} />
            {/* <Text text="ID" textStyle={[styles.id]} /> */}
            <View style={styles.firstLetterStyle}>
              {letter && <TextBold text={letter} textStyle={[styles.number]} />}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Header()}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} id={props.id} />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <SimpleLineIcons name="logout" size={20} color={Themes.secondary} />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleSubmit()}
          style={{
            marginLeft: 7,
          }}
        >
          <Text text="Log Out" />
        </TouchableOpacity>
        <Text textStyle={styles.errText} text={`${error && error}`}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: Dimensions.get("window").height * 0.25,
    backgroundColor: Themes.primary,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "flex-end",
    right: "8%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  circleContainer: {
    width: 160,
    height: 160,
    backgroundColor: "#fcfcfc",
    position: "absolute",
    bottom: "-40%",
    alignSelf: "center",
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: Themes.primary,
    fontSize: 26,
    textTransform: "uppercase",
    color: Themes.primary,
  },
  id: {
    color: "#000",
    fontSize: 18,
  },
  firstLetterStyle: {
    backgroundColor: Themes.text,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  footer: {
    flexDirection: "row",
    padding: "8%",
  },
  bar1: {
    width: 11,
    height: 3,
    backgroundColor: "#fff",
  },
  bar2: {
    width: 15,
    height: 3,
    marginTop: 3,
    backgroundColor: "#fff",
  },
  bar3: {
    width: 19,
    height: 3,
    marginTop: 3,
    backgroundColor: "#fff",
  },
  styleIcon: {
    width: 18,
    height: 18,
  },
  styleImage: {
    marginBottom: 25,
  },
  errText: {
    color: Themes.secondary,
    fontSize: 9,
    alignSelf: "flex-start",
    marginLeft: "6%",
    paddingTop: "1%",
  },
});

export default CustomDrawer;
