import { ScrollView } from "react-native";
import React, { useState } from "react";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { Header, PopUpModal } from "../components/primary";
import { TakeScore } from "../components/secondary";
import { useNavigation } from "@react-navigation/native";
import { babyImage } from "../constants";
import { useUserAuth } from "../context/firebaseContext/AuthContext";

export const TakeAPGARScore = () => {
  const navigation = useNavigation();
  const { user } = useUserAuth();

  const [valueScore, setValueScore] = useState({
    activity: "",
    pulse: "",
    grimace: "",
    appearance: "",
    respiration: "",
    activityScore: "",
    pulseScore: "",
    grimaceScore: "",
    appearanceScore: "",
    respirationScore: "",
  });
  const [others, setOthers] = useState({
    loading: false,
    modal: false,
    error: "",
  });

  const arrayValue = [
    parseInt(valueScore.activityScore),
    parseInt(valueScore.pulseScore),
    parseInt(valueScore.grimaceScore),
    parseInt(valueScore.appearanceScore),
    parseInt(valueScore.respirationScore),
  ].reduce((acc, curr) => parseInt(curr) + parseInt(acc));

  const scoreTakenHandler = async () => {
    const {
      activity,
      activityScore,
      pulse,
      pulseScore,
      grimace,
      grimaceScore,
      appearance,
      appearanceScore,
      respiration,
      respirationScore,
    } = valueScore;
    if (
      !valueScore.activity ||
      !valueScore.respiration ||
      !valueScore.pulse ||
      !valueScore.grimace ||
      !valueScore.appearance
    ) {
      setOthers({
        ...others,
        modal: true,
      });
    } else {
      try {
        setOthers({
          ...others,
          loading: true,
        });
        const docRef = doc(db, "users", user.uid);
        const colRef = collection(docRef, "user");
        await addDoc(colRef, {
          activity,
          activityScore,
          pulse,
          pulseScore,
          grimace,
          grimaceScore,
          appearance,
          appearanceScore,
          respiration,
          respirationScore,
          image: babyImage,
          score: arrayValue,
          createdAt: serverTimestamp(),
          notificationMessage: `An APGAR score taken at has been recorded successfully!`,
          comment:
            arrayValue <= 3
              ? "Severly Depressed"
              : arrayValue >= 4 && arrayValue <= 6
              ? "Moderately Depresssed"
              : "Excellent Condition",
        })
          .then((res) => {
            navigation.replace("Result", { id: res.id });
            setValueScore({
              ...valueScore,
              activity: "",
              pulse: "",
              grimace: "",
              appearance: "",
              respiration: "",
              activityScore: "",
              pulseScore: "",
              grimaceScore: "",
              appearanceScore: "",
              respirationScore: "",
            });
            setOthers({
              ...others,
              loading: false,
              error: "",
              modal: false,
            });
          })
          .catch((error) => {
            setOthers({
              ...others,
              error: error.message,
              loading: false,
            });
          });
      } catch (error) {
        setOthers({
          ...others,
          error: error.message,
          loading: false,
        });
      }
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header
        onPress={() => navigation.goBack()}
        iconName="chevron-back"
        show
        text="APGAR Parameters"
      />
      <TakeScore
        others={others}
        setOthers={setOthers}
        valueScore={valueScore}
        setValueScore={setValueScore}
        scoreTakenHandler={scoreTakenHandler}
      />
      <PopUpModal others={others} setOthers={setOthers} />
    </ScrollView>
  );
};
