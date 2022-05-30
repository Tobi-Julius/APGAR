import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";

import { Themes } from "../constants";
import { globalStyles } from "../styles";
import { Button, TextInput, Text, TextBold } from "../components/common";

const RetrieveId = ({ navigation }) => {
  const [state, setState] = useState("");

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
            <AntDesign color={Themes.primary} size={24} name="left" />
          </TouchableOpacity>
          <TextBold
            text="Retrieve ID"
            textStyle={[globalStyles.Heading1, styles.textStyle]}
          />

          <View style={styles.container}>
            <TextInput
              textInputStyle={{ fontSize: 12, borderRadius: 5 }}
              placeholder="Hospital Name"
              onChangeText={() => {}}
            />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "68%",
                    borderWidth: 1,
                    borderColor: "lightgrey",
                    marginTop: 22,
                    height: 50,
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <Picker
                    selectedValue={state}
                    dropdownIconColor={Themes.primary}
                    dropdownIconRippleColor={Themes.primary}
                    fontFamily="Montserrat"
                    onValueChange={(item, index) => setState(item)}
                    style={{
                      borderWidth: 1,
                      borderColor: "red",
                      color: Themes.text,
                    }}
                  >
                    <Picker.Item label="state" enabled={false} value="state" />
                    <Picker.Item label="Bauchi" value="Bauchi" />
                    <Picker.Item label="Gombe" value="Gombe" />
                    <Picker.Item label="Lagos" value="Lagos" />
                    <Picker.Item label="Kaduna" value="Kaduna" />
                    <Picker.Item label="Kano" value="Kano" />
                    <Picker.Item label="Sokoto" value="Sokoto" />
                    <Picker.Item label="Katsina" value="Katsina" />
                    <Picker.Item label="Oyo" value="Oyo" />
                    <Picker.Item label="Enugu" value="Enugu" />
                    <Picker.Item label="Ondo" value="Ondo" />
                    <Picker.Item label="Borno" value="Borno" />
                    <Picker.Item label="Niger" value="Niger" />
                    <Picker.Item label="Nasarawa" value="Nasarawa" />
                    <Picker.Item label="Adamawa" value="Adamawa" />
                    <Picker.Item label="Kwara" value="Kwara" />
                    <Picker.Item label="Benue" value="Benue" />
                    <Picker.Item label="Rivers" value="Rivers" />
                    <Picker.Item label="Anambra" value="Anambra" />
                    <Picker.Item label="Kogi" value="Kogi" />
                    <Picker.Item label="Ogun" value="Ogun" />
                    <Picker.Item label="Imo" value="Imo" />
                    <Picker.Item label="Plateau" value="Plateau" />
                    <Picker.Item label="Zamfara" value="Zamfara" />
                    <Picker.Item label="Zamfara" value="Zamfara" />
                    <Picker.Item label="Taraba" value="Taraba" />
                    <Picker.Item label="Yobe" value="Yobe" />
                    <Picker.Item label="Osun" value="Osun" />
                    <Picker.Item label="Jigawa" value="Jigawa" />
                    <Picker.Item label="Cross River" value="Cross River" />
                    <Picker.Item label="Delta" value="Delta" />
                    <Picker.Item label="Edo" value="Edo" />
                    <Picker.Item label="Kebbi" value="Kebbi" />
                    <Picker.Item label="Abia" value="Abia" />
                    <Picker.Item label="Niger" value="Niger" />
                    <Picker.Item label="Bayelsa" value="Bayelsa" />
                    <Picker.Item label="Ekiti" value="Ekiti" />
                    <Picker.Item label="Abuja" value="Abuja" />
                  </Picker>
                </View>
                <View style={{ width: "28%" }}>
                  <TextInput
                    textInputStyle={{ fontSize: 12, borderRadius: 5 }}
                    placeholder="City"
                    onChangeText={() => {}}
                  />
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  marginTop: "3%",
                }}
                onPress={() => navigation.navigate("SignIn")}
              >
                <Text textStyle={styles.signInText} text="Sign in" />
              </TouchableOpacity>
              <Button
                onPress={() => navigation.replace("Recovery")}
                textStyle={styles.btnText}
                containerStyle={styles.containerStyle}
                title="Retrieve ID"
              />
            </View>
          </View>
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
    marginTop: "20%",
  },
  signInText: {
    color: Themes.primary,
    fontSize: 12,
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
    top: "6%",
  },
});

export default RetrieveId;
