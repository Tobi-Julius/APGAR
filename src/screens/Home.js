import { ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";

import { theme } from "../constants";
import { db } from "../firebase/firebase-config";
import { useUserAuth } from "../context/firebaseContext/AuthContext";

import { HomeHeader, HomeBody } from "../components/primary";

import react from "react";
import { layout } from "../utils";

export const Home = () => {
  const [patientValue, setPatientValue] = useState([]);
  const { user } = useUserAuth();

  const getData = async () => {
    if (user) {
      const q = query(collection(db, `users/${user.uid}/user`));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPatientValue(data);
    }
  };

  useEffect(() => {
    let subcribe = true;
    if (subcribe) {
      getData();
    }
    return () => (subcribe = false);
  }, [user]);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScrollView
      style={{ backgroundColor: theme.white, flex: 1, height: layout.height }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          enabled
          progressBackgroundColor={"white"}
          size="default"
          onRefresh={react.useCallback(async () => {
            setRefreshing(true);
            if (user) {
              setRefreshing(false);
              const q = query(collection(db, `users/${user.uid}/user`));
              const querySnapshot = await getDocs(q);
              const data = querySnapshot?.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              setPatientValue(data);
            }
          }, [patientValue])}
        />
      }
    >
      <HomeHeader />
      <HomeBody patientValue={patientValue} />
    </ScrollView>
  );
};
