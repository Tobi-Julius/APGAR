import { View, FlatList } from "react-native";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { Header } from "../components/primary";
import { DatabaseCard } from "../components/secondary";
import { theme } from "../constants";
import { ListEmpty } from "../components/common";
import { globalStyles } from "../styles";
import { db, auth } from "../firebase/firebase-config";
import { layout } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { DeleteUser } from "../models/DeleteUser";

export const DataBase = () => {
  const [patientValue, setPatientValue] = useState([]);
  const [id, setId] = useState("");

  const navigation = useNavigation();

  const bottomSheetModalRef = useRef();

  const handlePresentModalPress = useCallback((id) => {
    setId(id);
    bottomSheetModalRef.current?.present();
  }, []);

  const dismiss = useCallback(() => {
    bottomSheetModalRef.current.dismiss();
  }, []);

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
  }, [patientValue]);

  return (
    <View style={{ backgroundColor: theme.white, flex: 1 }}>
      <Header
        onPress={() => navigation.navigate("Home")}
        iconName="chevron-back"
        show
        text="Database"
      />
      <View
        style={[
          globalStyles.rowCenter,
          {
            marginTop: layout.pixelSizeVertical(30),
            flexDirection: "column",
            height: layout.height - layout.heightPixel(190),
          },
        ]}
      >
        <FlatList
          onScroll={() => dismiss()}
          data={patientValue}
          renderItem={(props) => (
            <DatabaseCard
              handlePresentModalPress={handlePresentModalPress}
              {...props}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
          fadingEdgeLength={10}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: layout.widthPixel(360),
            marginBottom: layout.pixelSizeVertical(5),
          }}
        />
      </View>
      <DeleteUser id={id} bottomSheetModalRef={bottomSheetModalRef} />
    </View>
  );
};
