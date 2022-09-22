import { View, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { Header } from "../components/primary";
import { DatabaseCard } from "../components/secondary";
import { theme } from "../constants";
import { ListEmpty } from "../components/common";
import { globalStyles } from "../styles";
import { db, auth } from "../firebase/firebase-config";
import { layout } from "../utils";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const DataBase = () => {
  const [patientValue, setPatientValue] = useState([]);

  const navigation = useNavigation();

  const getData = useCallback(async () => {
    const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPatientValue(data);
  }, [patientValue]);

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
        onPress={() => navigation.goBack()}
        iconName="chevron-back"
        show
        text="Database"
      />
      <View
        style={[
          globalStyles.rowCenter,
          {
            marginTop: layout.pixelSizeVertical(50),
            flexDirection: "column",
            height: layout.height - layout.heightPixel(200),
          },
        ]}
      >
        <FlatList
          data={patientValue}
          renderItem={(props) => <DatabaseCard {...props} />}
          ListEmptyComponent={() => <ListEmpty />}
          fadingEdgeLength={10}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: layout.widthPixel(340),
            // borderWidth: 1,
            // borderColor: "green",
            marginBottom: layout.pixelSizeVertical(10),
          }}
        />
      </View>
    </View>
  );
};
