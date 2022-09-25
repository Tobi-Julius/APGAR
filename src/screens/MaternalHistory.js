import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { Header } from "../components/primary";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaternalDetail } from "../components/secondary";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { theme } from "../constants";
import { ActivityIndicator } from "react-native";

export const MaternalHistory = () => {
  const [patientValue, setPatientValue] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  const { user } = useUserAuth();

  const getData = async () => {
    const q = query(collection(db, `users/${user.uid}/user`));
    await getDocs(q).then((res) => {
      const data = res?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPatientValue(data);
    });
  };
  useEffect(() => {
    let subcribe = true;
    if (subcribe) {
      getData();
    }
    return () => (subcribe = false);
  }, []);

  const { id } = route.params;

  const data = patientValue.find((item) => {
    return item.id === id;
  });

  return (
    <View style={{ backgroundColor: theme.white, flex: 1 }}>
      <Header
        show
        onPress={() => navigation.goBack()}
        iconName="chevron-back"
        text={`ID: ${data?.id.slice(0, 4)}`}
      />
      {data ? (
        <MaternalDetail data={data} />
      ) : (
        <ActivityIndicator color={theme.primary} size={"large"} />
      )}
    </View>
  );
};
