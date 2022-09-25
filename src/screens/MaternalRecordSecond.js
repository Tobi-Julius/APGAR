import { View } from "react-native";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";

import { theme } from "../constants";
import { db } from "../firebase/firebase-config";
import { auth } from "../firebase/firebase-config";
import { Header } from "../components/primary";
import { MaternalFinal } from "../components/secondary";
import { useNavigation, useRoute } from "@react-navigation/native";

export const MaternalRecordSecond = () => {
  const [value, setValue] = useState({
    maternalHypertension: "",
    fetalPosition: "",
    MSL: "",
    error: "",
    loading: "",
  });

  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();

  const updateHandler = async () => {
    if (
      value.MSL === "" ||
      value.maternalHypertension === "" ||
      value.fetalPosition === ""
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
          error: "",
        });
        const docRef = doc(db, `users/${auth.currentUser.uid}/user`, id);
        await updateDoc(docRef, {
          MSL: value.MSL,
          maternalHypertension: value.maternalHypertension,
          fetalPosition: value.fetalPosition,
        })
          .then(() => {
            navigation.replace("DataBase");
            setValue({
              ...value,
              loading: false,
              error: "",
              MSL: "",
              fetalPosition: "",
              maternalHypertension: "",
            });
          })
          .catch((e) => {
            setValue({
              ...value,
              loading: false,
              error: e.message,
            });
          });
      } catch (error) {
        setValue({
          ...value,
          loading: false,
          error: e.message,
        });
      }
    }
  };

  return (
    <View style={{ backgroundColor: theme.white, flex: 1 }}>
      <Header
        onPress={() => navigation.goBack()}
        show
        iconName="chevron-back"
        text="Maternal Records"
      />
      <MaternalFinal
        value={value}
        setValue={setValue}
        updateHandler={updateHandler}
      />
    </View>
  );
};
