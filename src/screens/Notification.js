import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase/firebase-config";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { Header } from "../components/primary";
import { theme } from "../constants";
import { NotificationBody } from "../components/secondary";

export const Notification = () => {
  const { user } = useUserAuth();
  const navigation = useNavigation();

  const [patientValue, setPatientValue] = useState([]);
  const q = query(collection(db, `users/${user.uid}/user`));

  const getData = async () => {
    const querySnapshot = await getDocs(q);
    const data = querySnapshot?.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPatientValue(data);
  };

  useEffect(() => {
    let subcribe = true;
    if (subcribe) {
      getData();
    }
    return () => (subcribe = false);
  }, []);

  return (
    <View style={{ backgroundColor: theme.white, flex: 1 }}>
      <Header
        show
        text="Notification"
        onPress={() => navigation.navigate("Home")}
        iconName="chevron-back"
      />
      <NotificationBody patientValue={patientValue} />
    </View>
  );
};
