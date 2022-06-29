import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  query,
  getDocs,
} from "firebase/firestore";

import { Themes } from "../constants";
import { Text, Button, TextBold, TextInput } from "../components/common";
import { globalStyles } from "../styles";
import { auth, db } from "../firebase/firebase-config";

const TakeAPGARScore = ({ navigation }) => {
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
  const [loading, setLoading] = useState(false);
  const [dataId, setDataId] = useState("");

  const images = [
    `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby1.png?alt=media&token=ad7f5a9a-b62c-4b20-bd09-afb85b09f762`,
    `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby2.png?alt=media&token=042d428a-29d2-438a-93cc-a53a7bc56769`,
    `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby3.png?alt=media&token=065b06f5-27b7-460b-92bd-e3d00f74d83e`,
    `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby4.png?alt=media&token=aeaf5d7d-2370-40d6-9f67-fd6f0aff4558`,
  ];
  const randomImage = Math.floor(Math.random() * images.length);

  const scoreTakenHandler = async () => {
    const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDataId(data);
    if (
      motherId === "" ||
      activity === "" ||
      respiration === "" ||
      pulse === "" ||
      grimace === "" ||
      appearance === "" ||
      dataId.find((each) => each.motherId === motherId)
    ) {
      setShowModal(true);
      return;
    } else {
      setLoading(true);
      const Result = value.reduce(
        (acc, curr) => parseInt(curr) + parseInt(acc)
      );
      let score = Result;
      setScore(score);
      const docRef = doc(db, "users", auth.currentUser.uid);
      const colRef = collection(docRef, "user");
      await addDoc(colRef, {
        id: motherId,
        motherId,
        activity,
        image: images[randomImage],
        pulse,
        grimace,
        appearance,
        respiration,
        activityScore,
        pulseScore,
        grimaceScore,
        appearanceScore,
        respirationScore,
        createdAt: serverTimestamp(),
        notificationMessage: `An APGAR score of ${motherId} has been recorded`,
        score: score,
        comment:
          score <= 3
            ? "Severly Depressed"
            : score >= 4 && score <= 6
            ? "Moderately Depresssed"
            : "Excellent Condition",
      })
        .then((res) => {
          navigation.navigate("Result", { id: res.id });
          setValue([]);
          setActivity("");
          setAppearance("");
          setPulse("");
          setGrimace("");
          setRespiration("");
          setLoading(false);
        })
        .catch((e) => console.warn(e));
      setLoading(false);
    }
  };

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
            <AntDesign color="blue" size={26} name="left" />
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
      <View style={{ width: "90%", marginTop: "4%" }}>
        <View style={styles.calContainer}>
          <TextInput
            inputType="numeric"
            edit={loading ? false : true}
            textInputStyle={styles.textInputStyle}
            onChangeText={(item) => {
              setMotherId(item);
            }}
            placeholder="Mother's ID(e.g 1, 2 ...)"
            label="Mother's ID"
          />
        </View>
        <View style={styles.calContainer}>
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
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
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
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
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
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
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
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
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
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
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
          disabled={loading ? true : false}
          title={
            loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              "Take Score"
            )
          }
          onPress={() => scoreTakenHandler()}
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
              <View>
                {dataId &&
                  (dataId.find((each) => each.motherId === motherId) ? (
                    <Text
                      textStyle={styles.warningText}
                      text="Mother's ID already exists, Assign a new number"
                    />
                  ) : (
                    <Text
                      textStyle={styles.warningText}
                      text="Please, Fill all the Fields to Calculate Your Score"
                    />
                  ))}
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setShowModal(false)}
                style={styles.modalBtnContainer}
              >
                <Text textStyle={styles.modalBtnText} text="Close" />
              </TouchableOpacity>
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
    marginTop: "7.5%",
  },
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
