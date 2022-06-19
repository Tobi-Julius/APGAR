import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { browserLocalPersistence, setPersistence } from "firebase/auth";

import { Themes } from "../constants";
import { globalStyles } from "../styles";
import { Button, Text, TextInput, TextBold } from "../components/common";
import { auth } from "../firebase/firebase-config";

function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { logIn } = useUserAuth();

  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const handleSubmit = async () => {
    setLoading(true);
    // setPersistence(auth, browserLocalPersistence)
    try {
      await logIn(email, password);
      navigation.navigate("SideMenu");
      setEmail("");
      setPassword("");
      setError("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
    //   .then(() => {
    //   })
    //   .catch((error) => {
    //     });
  };

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.AntDesign}
          >
            <AntDesign color="black" size={24} name="left" />
          </TouchableOpacity>

          <Image
            style={styles.image}
            source={require("../images/onboarding2.png")}
          />

          <TextBold textStyle={[styles.text]} text="Welcome Back !" />
          <View style={styles.inputContainer}>
            <TextInput
              edit={loading ? false : true}
              value={email}
              textInputStyle={styles.textInputStyle}
              onChangeText={(item) => setEmail(item)}
              placeholder="Email"
              // placeholder="Hospital ID"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              edit={loading ? false : true}
              value={password}
              textEntry={true}
              textInputStyle={styles.textInputStyle}
              onChangeText={(item) => setPassword(item)}
              placeholder="Password"
              // placeholder="Hospital ID"
            />
          </View>
          <Text textStyle={styles.errText} text={`${error && error}`}></Text>

          <TouchableOpacity
            disabled={loading ? true : false}
            activeOpacity={0.6}
            style={{ alignSelf: "flex-start" }}
            onPress={() => navigation.navigate("RetrieveId")}
          >
            <Text textStyle={styles.textStyle} text="Forget Password ?" />
          </TouchableOpacity>

          <Button
            containerStyle={styles.containerStyle}
            onPress={() => handleSubmit()}
            textStyle={styles.btnText}
            title={
              loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                "Sign In"
              )
            }
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      {Header()}
      {Body()}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: Themes.primary,
  },
  bodyContainer: {
    top: "-15%",
  },
  bodyContentContainer: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("screen").height * 0.8,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    marginTop: "4%",
    resizeMode: "contain",
    width: "70%",
    height: "20%",
  },
  text: {
    marginTop: "8%",
    fontFamily: "Montserrat",
    fontSize: 15,
    color: Themes.primary,
  },
  inputContainer: {
    width: "90%",
    marginTop: "4%",
  },
  textInputStyle: {
    borderRadius: 6,
    fontSize: 12,
  },
  textStyle: {
    color: Themes.primary,
    alignSelf: "flex-start",
    paddingLeft: "7%",
    paddingTop: "3%",
    fontSize: 11,
  },
  containerStyle: {
    marginTop: "8%",
    borderRadius: 6,
  },
  btnText: {
    color: "#fff",
    padding: 14,
  },
  AntDesign: {
    position: "absolute",
    left: "3%",
    top: "4%",
  },
  errText: {
    color: Themes.secondary,
    fontSize: 9,
    alignSelf: "flex-start",
    marginLeft: "6%",
    paddingTop: "1%",
  },
});

export default SignIn;
