import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

import { Themes } from "../constants";
import { globalStyles } from "../styles";
import { Button, TextInput, Text, TextBold } from "../components/common";

const RetrieveId = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={styles.AntDesign}
          >
            <AntDesign color={Themes.primary} size={28} name="left" />
          </TouchableOpacity>
          <TextBold
            text="Retrieve Password"
            textStyle={[globalStyles.Heading1, styles.textStyle]}
          />

          <View style={styles.container}>
            <TextInput
              edit={loading ? false : true}
              textInputStyle={{ fontSize: 12, borderRadius: 5, padding: 8 }}
              placeholder="Email"
              onChangeText={(item) => {
                setEmail(item);
              }}
            />
            <View>
              <Text textStyle={styles.errText} text={`${error && error}`} />

              <TouchableOpacity
                disabled={loading ? true : false}
                activeOpacity={0.6}
                style={{
                  marginTop: "3%",
                }}
                onPress={() => {
                  navigation.navigate("SignIn");
                }}
              >
                <Text textStyle={styles.signInText} text={"Sign in"} />
              </TouchableOpacity>
              <Button
                onPress={async () => {
                  setLoading(true);
                  try {
                    await sendPasswordResetEmail(auth, email);
                    setEmail("");
                    setError("");
                    setLoading(false);
                    navigation.navigate("Recovery");
                  } catch (error) {
                    setError(error.message);
                    setLoading(false);
                  }
                }}
                textStyle={styles.btnText}
                containerStyle={styles.containerStyle}
                title={
                  loading ? (
                    <ActivityIndicator color="white" size="small" />
                  ) : (
                    "Retrieve Passsword"
                  )
                }
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor={Themes.primary} />
      {Header()}
      {Body()}
    </View>
  );
};

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
  textStyle: {
    marginTop: "10%",
  },
  container: {
    width: "90%",
    marginTop: "7%",
  },
  signInText: {
    color: Themes.primary,
    fontSize: 12,
    textDecorationLine: "underline",
  },
  containerStyle: {
    marginTop: "5%",
    padding: 15,
    borderRadius: 7,
  },
  btnText: {
    color: "#fff",
  },
  AntDesign: {
    position: "absolute",
    left: "3%",
    top: "5%",
  },
  errText: {
    color: Themes.secondary,
    fontSize: 9,
    alignSelf: "flex-start",
    marginLeft: "1%",
    paddingTop: "1%",
  },
});

export default RetrieveId;
