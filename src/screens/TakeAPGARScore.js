import {
  View,
  TouchableOpacity,
  Modal,
  Keyboard,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";

import { theme } from "../constants";
import { Text, Button } from "../components/common";
import { globalStyles } from "../styles";
import { auth, db } from "../firebase/firebase-config";
import { Header } from "../components/primary";
import { TakeScore } from "../components/secondary";
import { useNavigation } from "@react-navigation/native";

export const TakeAPGARScore = () => {
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
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const images = [
    `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby1.png?alt=media&token=ad7f5a9a-b62c-4b20-bd09-afb85b09f762`,
    `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby2.png?alt=media&token=042d428a-29d2-438a-93cc-a53a7bc56769`,
    `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby3.png?alt=media&token=065b06f5-27b7-460b-92bd-e3d00f74d83e`,
    `https://firebasestorage.googleapis.com/v0/b/apgar-f18f9.appspot.com/o/images%2Fbaby4.png?alt=media&token=aeaf5d7d-2370-40d6-9f67-fd6f0aff4558`,
  ];
  const randomImage = Math.floor(Math.random() * images.length);
  const number = Math.random().toString(36).slice(2, 6);

  const scoreTakenHandler = async () => {
    if (
      activity === "" ||
      respiration === "" ||
      pulse === "" ||
      grimace === "" ||
      appearance === ""
    ) {
      setShowModal(true);
    } else {
      setLoading(true);
      const arrayValue = [
        parseInt(activityScore),
        parseInt(pulseScore),
        parseInt(grimaceScore),
        parseInt(appearanceScore),
        parseInt(respirationScore),
      ];
      const Result = arrayValue.reduce(
        (acc, curr) => parseInt(curr) + parseInt(acc)
      );
      let score = Result;
      const docRef = doc(db, "users", auth.currentUser.uid);
      const colRef = collection(docRef, "user");
      await addDoc(colRef, {
        id: number,
        motherId: number,
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
        notificationMessage: `An APGAR score of ID No ${number} has been recorded`,
        score: score.toFixed(),
        comment:
          score <= 3
            ? "Severly Depressed"
            : score >= 4 && score <= 6
            ? "Moderately Depresssed"
            : "Excellent Condition",
      })
        .then((res) => {
          navigation.navigate("Result", { id: res.id });
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

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>{InputFields()}</View>
      </View>
    );
  };

  const InputFields = () => {
    return (
      <View style={{ width: "90%", marginTop: "4%" }}>
        <View style={styles.calContainer}>
          <Text textStyle={{ fontSize: 13 }} text="Activity" />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "lightgrey",
              marginTop: 2,
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Picker
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
              selectedValue={activity}
              mode={"dropdown"}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              onValueChange={(item, index) => {
                setActivity(item);
                setActivityScore(index - 1);
              }}
              style={{}}
            ></Picker>
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
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Picker
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
              selectedValue={pulse}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode={"dropdown"}
              onValueChange={(item, index) => {
                setPulse(item);
                setPulseScore(index - 1);
              }}
              style={{
                borderColor: "red",
                color: theme.text,
                borderRadius: 5,
                fontWeight: "200",
              }}
            ></Picker>
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
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Picker
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
              selectedValue={grimace}
              mode={"dropdown"}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              onValueChange={(item, index) => {
                setGrimace(item);
                setGrimaceScore(index - 1);
              }}
              style={{
                borderColor: "red",
                color: theme.text,
                borderRadius: 5,
                fontWeight: "200",
              }}
            ></Picker>
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
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Picker
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
              selectedValue={appearance}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode={"dropdown"}
              onValueChange={(item, index) => {
                setAppearance(item);
                setAppearanceScore(index - 1);
              }}
              style={{
                borderColor: "red",
                color: theme.text,
                borderRadius: 5,
                fontWeight: "200",
              }}
            ></Picker>
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
              justifyContent: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Picker
              enabled={loading ? false : true}
              onFocus={Keyboard.dismiss}
              selectedValue={respiration}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode={"dropdown"}
              onValueChange={(item, index) => {
                setRespiration(item);
                setRespirationScore(index - 1);
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
                <Text
                  textStyle={styles.warningText}
                  text="Please, Fill all the Fields to Calculate Your Score"
                />
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
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header
        onPress={() => navigation.goBack()}
        iconName="chevron-back"
        show
        text="APGAR Parameters"
      />
      {/* {popUpModal()} */}
      <TakeScore />
    </ScrollView>
  );
};
