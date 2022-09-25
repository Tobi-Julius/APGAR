import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { Header } from "../components/primary";
import { theme } from "../constants";
import { db, auth } from "../firebase/firebase-config";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScoreDetail } from "../components/secondary";
import { ActivityIndicator } from "react-native";

export const Detail = () => {
  const [patientValue, setPatientValue] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const getData = async () => {
    const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
    await getDocs(q).then((res) => {
      const data = res.docs.map((doc) => ({
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

  const data = patientValue.find((item) => {
    return item.id === id;
  });

  return (
    <View style={{ backgroundColor: theme.white, flex: 1 }}>
      <Header
        onPress={() => navigation.goBack()}
        iconName="chevron-back"
        show
        text={`ID: ${data?.id.slice(0, 4)}`}
      />
      {data ? (
        <ScoreDetail data={data} />
      ) : (
        <ActivityIndicator color={theme.primary} size="small" />
      )}
    </View>
  );
};
