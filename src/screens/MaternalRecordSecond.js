import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { doc, updateDoc } from "firebase/firestore";

import { Themes } from "../constants";
import { Text, Button, TextBold } from "../components/common";
import { globalStyles } from "../styles";
import { db } from "../firebase/firebase-config";
import { auth } from "../firebase/firebase-config";

const MaternalRecordSecond = ({ navigation, route }) => {
  const { id } = route.params;

  const [maternalHypertension, setMaternalHypertension] = useState("");
  const [fetalPosition, setFetalPosition] = useState("");
  const [MSL, setMSL] = useState("");
  const [input, setInput] = useState(false);
  const [loading, setLoading] = useState(false);

  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <View style={{ marginTop: "5%", width: "100%" }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.goBack()}
              style={styles.leftIcon}
            >
              <AntDesign name="left" color="blue" size={28} />
            </TouchableOpacity>
            <TextBold text="Maternal Records" textStyle={[styles.textStyle]} />
          </View>
          <View style={{ width: "90%", marginTop: "7%" }}>
            <Text textStyle={{ fontSize: 12 }} text="Maternal Hypertension" />
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "lightgrey",
                marginTop: 4,
                height: 45,
                justifyContent: "center",
              }}
            >
              <Picker
                selectedValue={maternalHypertension}
                mode={"dropdown"}
                dropdownIconColor={Themes.primary}
                dropdownIconRippleColor={Themes.primary}
                fontFamily="Montserrat"
                onValueChange={(item, index) => {
                  setMaternalHypertension(item);
                }}
                style={{
                  borderColor: "red",
                  color: Themes.text,
                  borderRadius: 5,
                  fontWeight: "200",
                }}
              >
                <Picker.Item
                  label="Select Option"
                  color="lightgrey"
                  fontFamily="Montserrat"
                  enabled={false}
                  value="Select Option"
                />
                <Picker.Item label="Yes" fontFamily="Montserrat" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
            </View>
          </View>
          <View style={{ width: "90%", marginTop: "10%" }}>
            <Text textStyle={{ fontSize: 12 }} text="Fetal Position" />
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "lightgrey",
                marginTop: 4,
                height: 39,
                justifyContent: "center",
              }}
            >
              <Picker
                selectedValue={fetalPosition}
                mode={"dropdown"}
                dropdownIconColor={Themes.primary}
                dropdownIconRippleColor={Themes.primary}
                fontFamily="Montserrat"
                onValueChange={(item, index) => {
                  setFetalPosition(item);
                }}
                style={{
                  borderColor: "red",
                  color: Themes.text,
                  borderRadius: 5,
                  fontWeight: "200",
                }}
              >
                <Picker.Item
                  label="Select Option"
                  color="lightgrey"
                  fontFamily="Montserrat"
                  enabled={false}
                  value="Select Option"
                />
                <Picker.Item label="Normal" value="Normal" />
                <Picker.Item label="Abnormal" value="Abnormal" />
              </Picker>
            </View>
          </View>
          <View style={{ width: "90%", marginTop: "10%" }}>
            <Text
              textStyle={{ fontSize: 12 }}
              text="Meconium Stained Liquor (MSL)"
            />
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "lightgrey",
                marginTop: 4,
                height: 39,
                justifyContent: "center",
              }}
            >
              <Picker
                selectedValue={MSL}
                mode={"dropdown"}
                dropdownIconColor={Themes.primary}
                dropdownIconRippleColor={Themes.primary}
                fontFamily="Montserrat"
                onValueChange={(item, index) => {
                  setMSL(item);
                }}
                style={{
                  borderColor: "red",
                  color: Themes.text,
                  borderRadius: 5,
                  fontWeight: "200",
                }}
              >
                <Picker.Item
                  label="Select Option"
                  color="lightgrey"
                  fontFamily="Montserrat"
                  enabled={false}
                  value="Select Option"
                />
                <Picker.Item label="Normal" value="Normal" />
                <Picker.Item label="Abnormal" value="Abnormal" />
              </Picker>
            </View>
            {input ? (
              <Text style={styles.errText} text="Pls, Input all fields" />
            ) : null}
          </View>
          <Button
            disabled={loading ? true : false}
            title={
              loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                "SAVE"
              )
            }
            onPress={async () => {
              if (
                MSL === "" ||
                maternalHypertension === "" ||
                fetalPosition === ""
              ) {
                setInput(!input);
              } else {
                setLoading(true);
                const docRef = doc(
                  db,
                  `users/${auth.currentUser.uid}/user`,
                  id
                );
                // const colRef = collection(docRef, "user", id);
                await updateDoc(
                  docRef,
                  {
                    MSL: MSL,
                    maternalHtpertension: maternalHypertension,
                    fetalPosition: fetalPosition,
                  }
                  // { merge: true }
                )
                  .then(() => {
                    navigation.navigate("Database");
                    setLoading(false);
                  })
                  .catch((e) => console.warn(e));
                setLoading(false);
              }
            }}
            textStyle={styles.btnText}
            containerStyle={styles.btnContainer}
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
};

export default MaternalRecordSecond;

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
  container: {
    height: Dimensions.get("window").height * 0.55,
  },
  textStyle: {
    color: Themes.secondary,
    marginTop: "4%",
    fontSize: 16,
    color: Themes.primary,
    textAlign: "center",
  },
  leftIcon: {
    position: "absolute",
    left: "2%",
    marginTop: "4%",
    zIndex: 1,
  },
  textInputStyle: {
    borderRadius: 8,
  },
  inputContainer: {
    width: "90%",
    marginTop: "12%",
  },
  btnContainer: {
    marginTop: "40%",
    width: "90%",
    borderRadius: 7,
  },
  btnText: {
    padding: "5%",
    color: "#fff",
    fontSize: 20,
  },
  errText: {
    color: Themes.secondary,
    fontSize: 12,
    paddingTop: 4,
  },
});
