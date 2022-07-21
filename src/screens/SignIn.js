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

import { Themes } from "../constants";
import { globalStyles } from "../styles";
import { Button, Text, TextInput, TextBold } from "../components/common";
import KeyBoardAvoidingWrapper from "../components/Keyboard/KeyBoardAvoidingWrapper";

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
    try {
      await logIn(email, password);
      navigation.replace("SideMenu");
      setEmail("");
      setPassword("");
      setError("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.AntDesign}
          >
            <AntDesign color="blue" size={24} name="left" />
          </TouchableOpacity>

          <Image
            style={styles.image}
            source={require("../images/onboarding2.png")}
          />

          <TextBold textStyle={[styles.text]} text="Welcome Back !" />
          <TextInput
            containerStyle={styles.inputContainer}
            edit={loading ? false : true}
            value={email}
            textInputStyle={styles.textInputStyle}
            onChangeText={(item) => setEmail(item)}
            placeholder="Email"
          />
          <TextInput
            containerStyle={styles.inputContainer}
            edit={loading ? false : true}
            value={password}
            textEntry={true}
            textInputStyle={styles.textInputStyle}
            onChangeText={(item) => setPassword(item)}
            placeholder="Password"
          />
          <Text textStyle={styles.errText} text={`${error && error}`}></Text>
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              disabled={loading ? true : false}
              activeOpacity={0.6}
              style={{ alignSelf: "flex-start" }}
              onPress={() => navigation.navigate("RetrieveId")}
            >
              <Text textStyle={styles.textStyle} text="Forget Password?" />
            </TouchableOpacity>
            <TouchableOpacity
              disabled={loading ? true : false}
              activeOpacity={0.6}
              style={{ alignSelf: "flex-start", marginLeft: -14 }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text textStyle={styles.textStyleRegister} text="Register" />
            </TouchableOpacity>
          </View>

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
    <KeyBoardAvoidingWrapper>
      <View>
        {Header()}
        {Body()}
      </View>
    </KeyBoardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.25,
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
    marginTop: "4.5%",
    resizeMode: "contain",
    width: "75%",
    height: "20%",
  },
  text: {
    marginTop: "3.5%",
    fontSize: 18,
    color: Themes.primary,
  },
  inputContainer: {
    width: "90%",
    height: "10%",
    marginTop: "1.3%",
  },
  textInputStyle: {
    borderRadius: 5,
    fontSize: 12,
    padding: 10,
  },
  textStyle: {
    color: Themes.secondary,
    alignSelf: "flex-start",
    paddingLeft: "7%",
    paddingTop: "3%",
    fontSize: 11,
  },
  textStyleRegister: {
    color: Themes.primary,
    alignSelf: "flex-start",
    paddingLeft: "6%",
    paddingTop: "3%",
    fontSize: 11,
  },
  containerStyle: {
    marginTop: "4%",
    borderRadius: 6,
    height: 48,
  },
  btnText: {
    color: "#fff",
    padding: 14,
  },
  AntDesign: {
    position: "absolute",
    left: "3%",
    top: "4%",
    zIndex: 1,
  },
  errText: {
    color: Themes.secondary,
    fontSize: 9,
    alignSelf: "flex-start",
    marginLeft: "6%",
    marginTop: ".4%",
    paddingTop: "1%",
  },
});

export default SignIn;
