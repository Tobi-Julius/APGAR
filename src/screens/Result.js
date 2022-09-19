import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs, query } from "firebase/firestore";

import { Text } from "../components/common";
import { theme } from "../constants";
import { globalStyles } from "../styles";
import { Button } from "../components/common";
import { auth, db } from "../firebase/firebase-config";
import { Header } from "../components/primary";
import { CardButtons, ResultCard } from "../models";
import { useNavigation } from "@react-navigation/native";

export const Result = () => {
  const navigation = useNavigation();
  // const [patientValue, setPatientValue] = useState([]);

  // const getData = async () => {
  //   const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
  //   const querySnapshot = await getDocs(q);
  //   const data = querySnapshot.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   setPatientValue(data);
  // };

  // useEffect(async () => {
  //   getData();
  // }, []);

  // const { id } = route.params;

  // const patientData = patientValue.find((each) => {
  //   return each.id === id;
  // });

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <View style={{ marginTop: "5%", width: "100%" }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.goBack()}
              style={styles.leftIcon}
            >
              <AntDesign name="left" color="blue" size={28} />
            </TouchableOpacity>

            <Text
              text="Result"
              textStyle={[styles.textStyle, globalStyles.Heading1]}
            />
          </View>
          <View style={[globalStyles.rowCenter, styles.container]}>
            <View style={styles.resultContainer}>
              <Text textStyle={{ fontSize: 13 }} text="APGAR Score" />
              <Text textStyle={{ fontSize: 12 }} text="is" />
              {patientData === undefined ? (
                <ActivityIndicator color={theme.secondary} size="small" />
              ) : (
                <Text textStyle={styles.textStyle} text={patientData.score} />
              )}
              <View style={styles.footer} />
              {patientData === undefined ? (
                <ActivityIndicator color={theme.primary} size="small" />
              ) : (
                <Text textStyle={styles.comment} text={patientData.comment} />
              )}
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "95%",
            }}
          >
            <View style={{ width: "30%" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Database")}
                activeOpacity={0.6}
                style={{
                  backgroundColor: "#fff",
                  alignItems: "center",
                  borderColor: theme.primary,
                  borderWidth: 1,
                  borderRadius: 7,
                }}
              >
                <Text textStyle={styles.textBtn} text="Skip" />
              </TouchableOpacity>
            </View>
            {patientData === undefined ? (
              <ActivityIndicator color={theme.secondary} size="small" />
            ) : (
              <Button
                title="Add Maternal Record"
                onPress={() =>
                  navigation.navigate("MaternalRecord", {
                    id: patientData.id,
                    motherId: patientData.motherId,
                  })
                }
                containerStyle={styles.btnContainer}
                textStyle={styles.btnText}
              />
            )}
          </View>

          <View style={styles.warning}>
            <AntDesign name="warning" size={9} color="red" />
            <Text
              textStyle={styles.warningStyle}
              text="Adding Maternal record is an added advantage"
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: theme.white, flex: 1 }}>
      <Header
        onPress={() => navigation.goBack()}
        text="Result"
        iconName="chevron-back"
        show
      />
      <ResultCard />
      <CardButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: theme.primary,
  },
  bodyContainer: {
    top: "-15%",
  },
  bodyContentContainer: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("screen").height * 0.8,
    borderRadius: 10,
    alignItems: "center",
  },

  container: {
    height: Dimensions.get("window").height * 0.54,
  },
  textStyle: {
    color: theme.secondary,
    marginTop: "5%",
    fontSize: 12,
  },
  footer: {
    backgroundColor: theme.primary,
    width: "100%",
    height: "17%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  containerStyle: {
    position: "absolute",
    bottom: "10%",
    paddingLeft: 20,
    paddingRight: 20,
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 10,
  },
  leftIcon: {
    position: "absolute",
    left: "2%",
    marginTop: "5%",
    zIndex: 1,
  },
  textBtn: {
    padding: 15,
    fontSize: 10,
  },
  btnContainer: {
    borderRadius: 7,
    width: "55%",
  },
  warning: {
    flexDirection: "row",
    width: "85%",
    marginTop: 15,
  },
  warningStyle: {
    fontSize: 8,
    marginLeft: 2,
    textAlignVertical: "top",
  },
  resultContainer: {
    backgroundColor: "#fcfcfc",
    height: "75%",
    width: "75%",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.65,
    elevation: 6,
  },
  comment: {
    marginTop: "5%",
    fontSize: 12,
  },
  idFooter: {
    color: theme.text,
    // alignSelf: "center",
  },
});
