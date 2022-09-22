import { ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { theme } from "../constants";
import { auth, db } from "../firebase/firebase-config";

import { HomeHeader, HomeBody } from "../components/primary";

import react from "react";
import { layout } from "../utils";

const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const Home = () => {
  const [patientValue, setPatientValue] = useState([]);

  // const getData = useCallback(async () => {
  //   const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
  //   const querySnapshot = await getDocs(q);
  //   const data = querySnapshot.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   setPatientValue(data);
  // }, []);

  // useEffect(() => {
  //   let subcribe = true;
  //   if (subcribe) {
  //     getData();
  //   }
  //   return () => (subcribe = false);
  // }, []);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScrollView
      style={{ backgroundColor: theme.white, flex: 1, height: layout.height }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          color={"red"}
          enabled
          progressBackgroundColor={"white"}
          size="default"
          onRefresh={react.useCallback(() => {
            setRefreshing(true);
            wait(3000)
              .then((res) => {
                console.warn("REFRESHING");
                setRefreshing(false);
              })
              .catch((err) => {
                console.warn(err);
              });
          }, [refreshing])}
        />
      }
    >
      <HomeHeader />
      <HomeBody />
    </ScrollView>
  );
};
