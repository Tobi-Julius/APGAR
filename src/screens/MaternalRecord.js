import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { auth } from "../firebase/firebase-config";

import { theme } from "../constants";
import { globalStyles } from "../styles";
import { Button, TextInput, Text } from "../components/common";
import KeyBoardAvoidingWrapper from "../components/Keyboard/KeyBoardAvoidingWrapper";
import { db } from "../firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { Header } from "../components/primary";
import { useNavigation } from "@react-navigation/native";
import { MaternalInitial } from "../components/secondary/MaternalInitial";

export const MaternalRecord = () => {
  const navigation = useNavigation();
  // const { id, motherId } = route.params;

  // const data = patients.find((item) => {
  //   return item.id === id;
  // });

  const [deliveryMode, setdeliveryMode] = useState("");
  const [birthWeight, setBirthWeight] = useState("");
  const [gestationPeriod, setGestationPeriod] = useState("");
  const [input, setInput] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <KeyBoardAvoidingWrapper>
      {/* <View style={{ marginTop: StatusBar.currentHeight }}>
        <StatusBar backgroundColor={theme.primary} />
        <View style={styles.headerContainer} />
        <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
          <View style={styles.bodyContentContainer}>
            <View style={{ marginTop: "5%", width: "100%" }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
                style={styles.leftIcon}
              >
                <AntDesign name="left" color="blue" size={26} />
              </TouchableOpacity>
              <Text
                text="Maternal Records"
                textStyle={[styles.textStyle]}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                edit={false}
                value={motherId}
                textInputStyle={styles.textInputStyle}
                label="Mother's ID"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                inputType="Numeric"
                textInputStyle={styles.textInputStyle}
                onChangeText={(item) => setGestationPeriod(item)}
                placeholder="Type Gestation Period (Weeks)"
                label="Gestation Period"
              />
            </View>
            <View style={{ width: "90%", marginTop: "8%" }}>
              <Text text="Delivery Mode" />
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "lightgrey",
                  marginTop: 2,
                  height: 45,
                  justifyContent: "center",
                }}
              >
                <Picker
                  selectedValue={deliveryMode}
                  mode={"dropdown"}
                  dropdownIconColor={theme.primary}
                  dropdownIconRippleColor={theme.primary}
                  onValueChange={(item, index) => {
                    setdeliveryMode(item);
                  }}
                  style={{
                    borderColor: "red",
                    color: theme.text,
                    borderRadius: 5,
                    fontWeight: "200",
                  }}
                >
                 
                </Picker>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                inputType="Numeric"
                textInputStyle={styles.textInputStyle}
                onChangeText={(item) => setBirthWeight(item)}
                placeholder="Type Birth Weight (Kg)"
                label="Birth Weight"
              />
              {input ? (
                <Text style={styles.errText} text="Pls, Input all fields" />
              ) : null}
            </View>

            <Button
              disabled={loading ? true : false}
              title={
                loading ? (
                  <ActivityIndicator color="white" size="small" />
                ) : (
                  "NEXT"
                )
              }
              onPress={async () => {
                if (
                  birthWeight === "" ||
                  deliveryMode === "" ||
                  gestationPeriod === ""
                ) {
                  setInput(!input);
                } else {
                  setLoading(true);
                  const docRef = doc(
                    db,
                    `users/${auth.currentUser.uid}/user`,
                    id
                  );
                  await updateDoc(
                    docRef,
                    {
                      deliveryMode: deliveryMode,
                      gestationPeriod: `${gestationPeriod}weeks`,
                      birthWeight: `${birthWeight}kg`,
                    }
                    // { merge: true }
                  )
                    .then(() => {
                      navigation.navigate("MaternalRecordSecond", {
                        id: id,
                      });
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
      </View> */}
      <View>
        <Header
          onPress={() => navigation.goBack()}
          show
          iconName="chevron-back"
          text="Maternal Records"
        />
        <MaternalInitial />
      </View>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: theme.primary,
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
    color: theme.secondary,
    marginTop: "5.5%",
    fontSize: 16,
    color: theme.primary,
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
    fontSize: 12,
    height: 48,
  },
  inputContainer: {
    width: "90%",
    marginTop: "9%",
  },
  btnContainer: {
    marginTop: "10%",
    width: "90%",
    borderRadius: 7,
  },
  btnText: {
    padding: 14,
    color: "#fff",
    fontSize: 16,
  },
  errText: {
    color: theme.secondary,
    fontSize: 12,
    paddingTop: 4,
  },
});
