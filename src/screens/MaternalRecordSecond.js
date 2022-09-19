import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { doc, updateDoc } from "firebase/firestore";

import { theme } from "../constants";
import { Text, Button } from "../components/common";
import { globalStyles } from "../styles";
import { db } from "../firebase/firebase-config";
import { auth } from "../firebase/firebase-config";
import { Header } from "../components/primary";
import { MaternalFinal } from "../components/secondary";
import { useNavigation } from "@react-navigation/native";

export const MaternalRecordSecond = () => {
  // const { id } = route.params;
  const navigation = useNavigation();

  const [maternalHypertension, setMaternalHypertension] = useState("");
  const [fetalPosition, setFetalPosition] = useState("");
  const [MSL, setMSL] = useState("");
  const [input, setInput] = useState(false);
  const [loading, setLoading] = useState(false);

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
            <Text text="Maternal Records" textStyle={[styles.textStyle]} />
          </View>
          <View style={{ width: "90%", marginTop: "7%" }}>
            <Text textStyle={{ fontSize: 12 }} text="Maternal Hypertension" />
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "lightgrey",
                marginTop: 4,
                height: 48,
                justifyContent: "center",
              }}
            >
              <Picker
                selectedValue={maternalHypertension}
                mode={"dropdown"}
                dropdownIconColor={theme.primary}
                dropdownIconRippleColor={theme.primary}
                onValueChange={(item, index) => {
                  setMaternalHypertension(item);
                }}
                style={{
                  borderColor: "red",
                  color: theme.text,
                  borderRadius: 5,
                  fontWeight: "200",
                }}
              ></Picker>
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
                height: 48,
                justifyContent: "center",
              }}
            >
              <Picker
                selectedValue={fetalPosition}
                mode={"dropdown"}
                dropdownIconColor={theme.primary}
                dropdownIconRippleColor={theme.primary}
                onValueChange={(item, index) => {
                  setFetalPosition(item);
                }}
                style={{
                  borderColor: "red",
                  color: theme.text,
                  borderRadius: 5,
                  fontWeight: "200",
                }}
              ></Picker>
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
                height: 48,
                justifyContent: "center",
              }}
            >
              <Picker
                selectedValue={MSL}
                mode={"dropdown"}
                dropdownIconColor={theme.primary}
                dropdownIconRippleColor={theme.primary}
                onValueChange={(item, index) => {
                  setMSL(item);
                }}
                style={{
                  borderColor: "red",
                  color: theme.text,
                  borderRadius: 5,
                  fontWeight: "200",
                }}
              ></Picker>
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
    <View style={{ backgroundColor: theme.white, flex: 1 }}>
      <Header
        onPress={() => navigation.goBack()}
        show
        iconName="chevron-back"
        text="Maternal Records"
      />
      <MaternalFinal />
    </View>
  );
};

export default MaternalRecordSecond;
