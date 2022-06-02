import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { GlobalContext } from "../context/GlobalState";

import { Themes } from "../constants";
import { globalStyles } from "../styles";
import { Button, TextInput, Text, TextBold } from "../components/common";
import KeyBoardAvoidingWrapper from "../components/Keyboard/KeyBoardAvoidingWrapper";

const MaternalRecord = ({ navigation, route }) => {
  const { patients } = useContext(GlobalContext);

  const { id } = route.params;

  const data = patients.find((item) => {
    return item.id === id;
  });

  const [deliveryMode, setdeliveryMode] = useState("");
  const [birthWeight, setBirthWeight] = useState("");
  const [gestationPeriod, setGestationPeriod] = useState("");
  const [input, setInput] = useState(false);

  return (
    <KeyBoardAvoidingWrapper>
      <View>
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
              <TextBold
                text="Maternal Records"
                textStyle={[styles.textStyle]}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                edit={false}
                value={`${data.id >= 10 ? data.id : `0${data.id}`}`}
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
                  dropdownIconColor={Themes.primary}
                  dropdownIconRippleColor={Themes.primary}
                  fontFamily="Montserrat"
                  onValueChange={(item, index) => {
                    setdeliveryMode(item);
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
                    value="Select Option"
                  />
                  <Picker.Item label="SVG" value="SVG" />
                  <Picker.Item label="CS" value="CS" />
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
              title="NEXT"
              onPress={() => {
                if (
                  birthWeight === "" ||
                  deliveryMode === "" ||
                  gestationPeriod === ""
                ) {
                  setInput(!input);
                } else {
                  data.deliveryMode = deliveryMode;
                  data.gestationPeriod = `${gestationPeriod}weeks`;
                  data.birthWeight = `${birthWeight}kg`;
                  navigation.navigate("MaternalRecordSecond", { id: data.id });
                }
              }}
              textStyle={styles.btnText}
              containerStyle={styles.btnContainer}
            />
          </View>
        </View>
      </View>
    </KeyBoardAvoidingWrapper>
  );
};

export default MaternalRecord;

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
    marginTop: "5.5%",
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
    fontSize: 12,
    height: 44,
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
    color: Themes.secondary,
    fontSize: 12,
    paddingTop: 4,
  },
});
