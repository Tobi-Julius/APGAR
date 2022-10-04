import { ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { theme } from "../constants";
import { auth, db } from "../firebase/firebase-config";
import { useUserAuth } from "../context/firebaseContext/AuthContext";

import { HomeHeader, HomeBody } from "../components/primary";

import react from "react";
import { layout } from "../utils";

export const Home = () => {
  const [patientValue, setPatientValue] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searching, setSearching] = useState(false);
  const { user } = useUserAuth();

  const q = query(collection(db, `users/${user?.uid}/user`));
  const getData = async () => {
    if (user) {
      if (!searchKeyword) {
        const querySnapshot = await getDocs(q);
        const data = querySnapshot?.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPatientValue(data);
      } else {
        setSearching(true);
        const q = query(
          collection(db, `users/${auth.currentUser.uid}/user`),
          where("score", "==", parseInt(searchKeyword))
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot?.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPatientValue(data);
        setSearching(false);
      }
    }
    return;
  };

  useEffect(() => {
    let subcribe = true;
    if (subcribe) {
      getData();
    }
    return () => (subcribe = false);
  }, [user, searchKeyword]);

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
      <HomeHeader
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <HomeBody searching={searching} patientValue={patientValue} />
    </ScrollView>
  );
};
