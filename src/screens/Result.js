import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";

import { theme } from "../constants";
import { auth, db } from "../firebase/firebase-config";
import { Header } from "../components/primary";
import { CardButtons, ResultCard } from "../models";
import { useRoute } from "@react-navigation/native";

export const Result = () => {
  const route = useRoute();
  const { id } = route.params;

  const [value, setValue] = useState({
    error: "",
    patient: [],
  });

  const getData = async () => {
    try {
      const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setValue({
        ...value,
        patient: data,
        error: "",
      });
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      getData();
    }
    return () => (subscribe = false);
  }, []);

  const patientData = value.patient?.find((each) => {
    return each.id === id;
  });

  return (
    <View style={{ backgroundColor: theme.white, flex: 1 }}>
      <Header text="Result" show />
      <ResultCard patientData={patientData} />
      <CardButtons id={patientData?.id} />
    </View>
  );
};
