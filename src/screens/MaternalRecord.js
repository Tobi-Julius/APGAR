import { View } from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase/firebase-config";

import KeyBoardAvoidingWrapper from "../components/Keyboard/KeyBoardAvoidingWrapper";
import { db } from "../firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { Header } from "../components/primary";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaternalInitial } from "../components/secondary/MaternalInitial";

export const MaternalRecord = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState({
    deliveryMode: "",
    birthWeight: "",
    gestationPeriod: "",
    loading: false,
    error: "",
  });
  const route = useRoute();
  const { id } = route.params;

  const updateHandler = async () => {
    if (
      value.birthWeight === "" ||
      value.deliveryMode === "" ||
      value.gestationPeriod === ""
    ) {
      setValue({
        ...value,
        error: "Input all fields",
      });
    } else {
      try {
        setValue({
          ...value,
          loading: true,
        });
        const docRef = doc(db, `users/${auth.currentUser.uid}/user`, id);
        await updateDoc(docRef, {
          deliveryMode: value.deliveryMode,
          gestationPeriod: `${value.gestationPeriod}weeks`,
          birthWeight: `${value.birthWeight}kg`,
        })
          .then(() => {
            navigation.navigate("MaternalRecordSecond", {
              id: id,
            });
            setValue({
              ...value,
              loading: false,
              error: "",
              birthWeight: "",
              deliveryMode: "",
              gestationPeriod: "",
            });
          })
          .catch((e) => {
            setValue({
              ...value,
              error: e.message,
              loading: false,
            });
          });
      } catch (error) {
        setValue({
          ...value,
          error: error.message,
          loading: false,
        });
      }
    }
  };

  return (
    <KeyBoardAvoidingWrapper>
      <View>
        <Header
          onPress={() => navigation.navigate("DataBase")}
          show
          iconName="chevron-back"
          text="Maternal Records"
        />
        <MaternalInitial
          id={id}
          updateHandler={updateHandler}
          value={value}
          setValue={setValue}
        />
      </View>
    </KeyBoardAvoidingWrapper>
  );
};
