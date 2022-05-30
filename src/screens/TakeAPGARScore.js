import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { GlobalContext } from "../context/GlobalState";

import { Themes } from "../constants";
import { Text, Button, TextBold, TextInput } from "../components/common";
import { globalStyles } from "../styles";

import baby1 from "../images/Home/baby1.png";
import baby2 from "../images/Home/baby2.png";
import baby3 from "../images/Home/baby3.png";
import baby4 from "../images/Home/baby4.png";

const TakeAPGARScore = ({ navigation }) => {
  const { addPatient, patients } = useContext(GlobalContext);

  const [activity, setActivity] = useState("");
  const [activityScore, setActivityScore] = useState("");
  const [pulse, setPulse] = useState("");
  const [pulseScore, setPulseScore] = useState("");
  const [grimace, setGrimace] = useState("");
  const [grimaceScore, setGrimaceScore] = useState("");
  const [appearance, setAppearance] = useState("");
  const [appearanceScore, setAppearanceScore] = useState("");
  const [respiration, setRespiration] = useState("");
  const [respirationScore, setRespirationScore] = useState("");
  const [value, setValue] = useState([0]);
  const [score, setScore] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [motherId, setMotherId] = useState("");

  const images = [baby1, baby2, baby3, baby4];
  const randomImage = Math.floor(Math.random() * images.length);
  const Header = () => {
    return <View style={styles.headerContainer} />;
  };
  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.left}
          >
            <AntDesign color="blue" size={28} name="left" />
          </TouchableOpacity>

          <View style={styles.paramsContainer}>
            <TextBold text="APGAR " textStyle={[styles.parameters1]} />
            <TextBold text=" Parameters" textStyle={[styles.parameters1]} />
          </View>

          {InputFields()}
        </View>
      </View>
    );
  };

  const InputFields = () => {
    return (
      <View style={{ width: "90%", marginTop: "2%" }}>
        <View style={styles.calContainer}>
          <View>
            <TextInput
              inputType="Numeric"
              textInputStyle={styles.textInputStyle}
              onChangeText={(item) => {
                setMotherId(item);
              }}
              placeholder="Type Mother's ID"
              label="Mother's ID"
            />
          </View>
          <Text textStyle={{ fontSize: 13 }} text="Activity" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
              height: 42,
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={activity}
              mode={"dropdown"}
              dropdownIconColor={Themes.primary}
              dropdownIconRippleColor={Themes.primary}
              fontFamily="Montserrat"
              onValueChange={(item, index) => {
                setValue((prevState) => [...prevState, index - 1]);
                setActivity(item);
                setActivityScore(index - 1);
              }}
              style={{
                borderColor: "red",
                color: Themes.text,
                borderRadius: 5,
                fontWeight: "200",
              }}
            >
              <Picker.Item
                value="Select Option"
                color="lightgrey"
                fontFamily="Montserrat"
                enabled={false}
                label="Select Option"
              />
              <Picker.Item
                value="Loose and Floppy muscle tones: 0"
                label="Loose and Floppy muscle tones: 0"
              />
              <Picker.Item
                value="Flexed Arms and Legs: 1"
                label="Flexed Arms and Legs: 1"
              />
              <Picker.Item value="Active Motion: 2" label="Active Motion: 2" />
            </Picker>
          </View>

          {/* pulse */}
        </View>
        <View style={styles.calContainer}>
          <Text textStyle={{ fontSize: 13 }} text="Pulse" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
              height: 42,
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={pulse}
              dropdownIconColor={Themes.primary}
              dropdownIconRippleColor={Themes.primary}
              fontFamily="Montserrat"
              mode={"dropdown"}
              onValueChange={(item, index) => {
                setValue((prevState) => [...prevState, index - 1]);
                setPulse(item);
                setPulseScore(index - 1);
              }}
              style={{
                borderColor: "red",
                color: Themes.text,
                borderRadius: 5,
                fontWeight: "200",
              }}
            >
              <Picker.Item
                value="Select Option"
                color="lightgrey"
                enabled={false}
                label="Select Option"
              />
              <Picker.Item value="Absent: 0" label="Absent: 0" />
              <Picker.Item value="< 100 bpm: 1" label="< 100 bpm: 1" />
              <Picker.Item value="> 100 bpm: 2" label="> 100 bpm: 2" />
            </Picker>
          </View>

          {/* Grimace */}
        </View>
        <View style={styles.calContainer}>
          <Text textStyle={{ fontSize: 13 }} text="Grimace" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
              height: 42,
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={grimace}
              mode={"dropdown"}
              dropdownIconColor={Themes.primary}
              dropdownIconRippleColor={Themes.primary}
              fontFamily="Montserrat"
              onValueChange={(item, index) => {
                setValue((prevState) => [...prevState, index - 1]);
                setGrimace(item);
                setGrimaceScore(index - 1);
              }}
              style={{
                borderColor: "red",
                color: Themes.text,
                borderRadius: 5,
                fontWeight: "200",
              }}
            >
              <Picker.Item
                value="Select Option"
                color="lightgrey"
                fontFamily="Montserrat"
                enabled={false}
                label="Select Option"
              />
              <Picker.Item
                value="Floppy/No reaction: 0"
                label="Floppy/No reaction: 0"
              />
              <Picker.Item
                value="Minimal Response: 1"
                label="Minimal Response: 1"
              />
              <Picker.Item
                value="Prompt Response: 2"
                label="Prompt Response: 2"
              />
            </Picker>
          </View>

          {/* Appearance */}
        </View>
        <View style={styles.calContainer}>
          <Text textStyle={{ fontSize: 13 }} text="Appearance" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
              height: 42,
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={appearance}
              dropdownIconColor={Themes.primary}
              dropdownIconRippleColor={Themes.primary}
              fontFamily="Montserrat"
              mode={"dropdown"}
              onValueChange={(item, index) => {
                setValue((prevState) => [...prevState, index - 1]);
                setAppearanceScore(index - 1);
                setAppearance(item);
              }}
              style={{
                borderColor: "red",
                color: Themes.text,
                borderRadius: 5,
                fontWeight: "200",
              }}
            >
              <Picker.Item
                value="Select Option"
                color="lightgrey"
                fontFamily="Montserrat"
                enabled={false}
                label="Select Option"
              />
              <Picker.Item value="Blue Pale: 0" label="Blue Pale: 0" />
              <Picker.Item
                value="Blue Extremeties: 1"
                label="Blue extremeties: 1"
              />
              <Picker.Item value="Pink: 2" label="Pink: 2" />
            </Picker>
          </View>

          {/* Respiration */}
        </View>
        <View style={styles.calContainer}>
          <Text textStyle={{ fontSize: 13 }} text="Respiration" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
              height: 37,
              justifyContent: "center",
              height: 42,
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={respiration}
              dropdownIconColor={Themes.primary}
              dropdownIconRippleColor={Themes.primary}
              fontFamily="Montserrat"
              mode={"dropdown"}
              onValueChange={(item, index) => {
                setValue((prevState) => [...prevState, index - 1]);
                setRespiration(item);
                setRespirationScore(index - 1);
              }}
              style={{
                borderColor: "red",
                color: Themes.text,
                borderRadius: 5,
                fontWeight: "200",
              }}
            >
              <Picker.Item
                value="Select Option"
                color="lightgrey"
                fontFamily="Montserrat"
                enabled={false}
                label="Select Option"
              />
              <Picker.Item value="Absent: 0" number={1} label="Absent: 0" />
              <Picker.Item
                value="Slow and Irregular: 1"
                label="Slow and Irregular: 1"
              />
              <Picker.Item value="Vigorous Cry: 2" label="Vigorous Cry: 2" />
            </Picker>
          </View>
        </View>
        <Button
          title="Take Score"
          onPress={() => {
            if (
              motherId === "" ||
              patients.find((each) => each.id === motherId) ||
              activity === "" ||
              respiration === "" ||
              pulse === "" ||
              grimace === "" ||
              appearance === ""
            ) {
              setShowModal(true);
            } else {
              const Result = value.reduce(
                (acc, curr) => parseInt(curr) + parseInt(acc)
              );
              let score = Result;
              setScore(score);
              const newPatient = {
                id: motherId,
                motherId: motherId,
                activity: activity,
                image: images[randomImage],
                pulse: pulse,
                grimace: grimace,
                appearance: appearance,
                respiration: respiration,
                activityScore: activityScore,
                pulseScore: pulseScore,
                grimaceScore: grimaceScore,
                appearanceScore: appearanceScore,
                respirationScore: respirationScore,
                notificationMessage: `An APGAR score of ID no ${motherId} has been recorded`,
                score: score,
                comment:
                  score <= 3
                    ? "Severly Depressed"
                    : score >= 4 && score <= 6
                    ? "Moderately Depresssed"
                    : "Excellent Condition",
              };
              addPatient(newPatient);
              navigation.navigate("Result", { id: motherId });
              setValue([]);
              setActivity("");
              setAppearance("");
              setPulse("");
              setGrimace("");
              setRespiration("");
            }
          }}
          textStyle={styles.btnText}
          containerStyle={styles.btnContainer}
        />
      </View>
    );
  };
  const popUpModal = () => {
    return (
      <View>
        <Modal
          visible={showModal}
          animationType="fade"
          transparent
          onRequestClose={() => {
            setShowModal(false);
          }}
        >
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warningHeaderContainer}>
                <Text textStyle={styles.warningHeaderText} text="Warning" />
              </View>
              <Text
                textStyle={styles.warningText}
                text="Please, Fill all the Fields to Calculate Your Score/Mother ID already exist"
              />
              <Pressable
                onPress={() => setShowModal(false)}
                style={styles.modalBtnContainer}
              >
                <Text textStyle={styles.modalBtnText} text="Close" />
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <View>
      {popUpModal()}
      {Header()}
      {Body()}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: Themes.primary,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  menuStyle: {
    width: 18,
    height: 18,
  },
  bodyContainer: {
    top: "-12%",
  },
  bodyContentContainer: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.8,
    borderRadius: 10,
    alignItems: "center",
  },
  paramsContainer: {
    flexDirection: "row",
    marginTop: "6%",
  },
  headContainer: {},
  left: {
    position: "absolute",
    left: "2%",
    marginTop: "6%",
  },
  parameters1: {
    fontSize: 16,
    color: Themes.primary,
    fontWeight: "900",
  },
  calContainer: {
    width: "100%",
    marginTop: "4%",
  },
  btnContainer: {
    marginTop: "10%",
    borderRadius: 8,
  },
  btnText: {
    padding: 17,
    color: "#fff",
    fontSize: 17,
  },
  warning_modal: {
    backgroundColor: "#fff",
    width: 250,
    height: 250,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  centered_view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000099",
  },
  warningHeaderContainer: {
    backgroundColor: Themes.secondary,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
  },
  warningHeaderText: {
    padding: 16,
    color: "#fff",
    fontSize: 20,
  },
  warningText: {
    textAlign: "center",
    marginTop: "8%",
  },
  modalBtnContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Themes.primary,
    width: "100%",
  },
  modalBtnText: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  textInputStyle: {
    height: 40,
    borderRadius: 5,
  },
});
export default TakeAPGARScore;
