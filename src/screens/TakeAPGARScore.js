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
import { Text, Button, TextBold } from "../components/common";
import { globalStyles } from "../styles";

const TakeAPGARScore = ({ navigation, route }) => {
  const { id } = route.params;

  const { users } = useContext(GlobalContext);

  const data = users.find((item) => {
    return item.id === id;
  });

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
  const [value, setValue] = useState([]);
  const [score, setScore] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      <View style={{ width: "90%", marginTop: "8%" }}>
        <View style={styles.calContainer}>
          <Text text="Activity" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
            }}
          >
            <Picker
              selectedValue={activity}
              mode={"dropdown"}
              itemStyle={{ fontFamily: "Montserrat" }}
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
                value="Loose and Floppy muscle tones"
                label="Loose and Floppy muscle tones"
              />
              <Picker.Item
                value="Flexed Arms and Legs"
                label="Flexed Arms and Legs"
              />
              <Picker.Item value="Active Motion" label="Active Motion" />
            </Picker>
          </View>

          {/* pulse */}
        </View>
        <View style={styles.calContainer}>
          <Text text="Pulse" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
            }}
          >
            <Picker
              selectedValue={pulse}
              itemStyle={{ fontFamily: "Montserrat" }}
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
                fontFamily="Montserrat"
                enabled={false}
                label="Select Option"
              />
              <Picker.Item value="Absent" label="Absent" />
              <Picker.Item value="< 100 bpm" label="< 100 bpm" />
              <Picker.Item value="> 100 bpm" label="> 100 bpm" />
            </Picker>
          </View>

          {/* Grimace */}
        </View>
        <View style={styles.calContainer}>
          <Text text="Grimace" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
            }}
          >
            <Picker
              selectedValue={grimace}
              mode={"dropdown"}
              itemStyle={{ fontFamily: "Montserrat" }}
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
                value="Floppy/No reaction"
                label="Floppy/No reaction"
              />
              <Picker.Item value="Minimal Response" label="Minimal Response" />
              <Picker.Item value="Prompt Response" label="Prompt Response" />
            </Picker>
          </View>

          {/* Appearance */}
        </View>
        <View style={styles.calContainer}>
          <Text text="Appearance" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
            }}
          >
            <Picker
              selectedValue={appearance}
              itemStyle={{ fontFamily: "Montserrat" }}
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
              <Picker.Item value="Blue Pale" label="Blue Pale" />
              <Picker.Item value="Blue Extremeties" label="Blue extremeties" />
              <Picker.Item value="Pink" label="Pink" />
            </Picker>
          </View>

          {/* Respiration */}
        </View>
        <View style={styles.calContainer}>
          <Text text="Respiration" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
            }}
          >
            <Picker
              selectedValue={respiration}
              itemStyle={{ fontFamily: "Montserrat" }}
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
              <Picker.Item value="Absent" number={1} label="Absent" />
              <Picker.Item
                value="Slow and Irregular"
                label="Slow and Irregular"
              />
              <Picker.Item value="Vigorous Cry" label="Vigorous Cry" />
            </Picker>
          </View>
        </View>
        <Button
          title="Take Score"
          onPress={() => {
            if (
              (activity === "" &&
                respiration === "" &&
                pulse === "" &&
                grimace === "",
              appearance === "")
            ) {
              setShowModal(true);
            } else {
              const Result = value.reduce(
                (acc, curr) => parseInt(curr) + parseInt(acc)
              );
              let score = Result;
              setScore(score);
              navigation.navigate("Result", { id: data.id });
              data.activity = activity;
              data.pulse = pulse;
              data.grimace = grimace;
              data.appearance = appearance;
              data.respiration = respiration;
              data.activityScore = activityScore;
              data.pulseScore = pulseScore;
              data.grimaceScore = grimaceScore;
              data.appearanceScore = appearanceScore;
              data.respirationScore = respirationScore;
              data.notificationMessage = `An APGAR score of ID no ${data.id} has been recorded`;
              data.score = score;
              data.comment =
                data.score <= 3
                  ? "Severly Depressed"
                  : score >= 4 && score <= 6
                  ? "Moderately Depresssed"
                  : "Excellent Condition";

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
                text="Please, Fill all the Fields to Calculate Your Score"
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
    height: Dimensions.get("screen").height * 0.8,
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
    left: "4%",
    marginTop: "6%",
  },
  parameters1: {
    fontSize: 24,
    color: Themes.primary,
    fontWeight: "900",
  },
  calContainer: {
    width: "100%",
    marginTop: "8%",
  },
  btnContainer: {
    marginTop: "10%",
    borderRadius: 8,
  },
  btnText: {
    padding: 20,
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
});
export default TakeAPGARScore;
