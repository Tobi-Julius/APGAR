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

import { theme } from "../constants";
import { globalStyles } from "../styles";
import { Text, Button } from "../components/common";
import { auth, db } from "../firebase/firebase-config";

export const MaternalHistory = ({ navigation, route }) => {
  const [patientValue, setPatientValue] = useState([]);

  const getData = async () => {
    const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPatientValue(data);
  };
  useEffect(async () => {
    getData();
  }, []);

  const { id } = route.params;

  const data = patientValue.find((item) => {
    return item.id === id;
  });

  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        {data === undefined ? (
          <ActivityIndicator size="large" color={theme.secondary} />
        ) : (
          <View style={styles.bodyContentContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.left}
            >
              <AntDesign color="blue" size={28} name="left" />
            </TouchableOpacity>
            <View style={styles.paramsContainer}>
              <Text text="ID : " textStyle={[styles.parameters1]} />
              <Text text={data.motherId} textStyle={[styles.parameters1]} />
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
                style={styles.X}
              >
                <Text textStyle={styles.XStyles} text="X" />
              </TouchableOpacity>
              <View style={styles.maternalContainer}>
                <View style={styles.headerTextContainer}>
                  <Text
                    textStyle={{ fontSize: 12, marginLeft: 5 }}
                    text="Maternal Hypertension"
                  />
                  <Text
                    textStyle={{ fontSize: 10, marginRight: 5 }}
                    text={data.maternalHtpertension}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    borderColor: "lightgray",
                    borderWidth: 1,
                    marginTop: 15,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 25,
                  }}
                >
                  <Text
                    textStyle={{ fontSize: 12, marginLeft: 5 }}
                    text="Gestation Period"
                  />
                  <Text
                    textStyle={{ fontSize: 10, marginRight: 5 }}
                    text={data.gestationPeriod}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    borderColor: "lightgray",
                    borderWidth: 1,
                    marginTop: 15,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 25,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  <Text
                    textStyle={{ fontSize: 12, marginLeft: 5 }}
                    text="Delivery Mode"
                  />
                  <Text
                    textStyle={{ fontSize: 10, marginRight: 5 }}
                    text={data.deliveryMode}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    borderColor: "lightgray",
                    borderWidth: 1,
                    marginTop: 15,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 25,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  <Text
                    textStyle={{ fontSize: 12, marginLeft: 5 }}
                    text="Birth Weight"
                  />
                  <Text
                    textStyle={{ fontSize: 10, marginRight: 5 }}
                    text={data.birthWeight}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    borderColor: "lightgray",
                    borderWidth: 1,
                    marginTop: 15,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 25,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  <Text
                    textStyle={{ fontSize: 12, marginLeft: 5 }}
                    text="Fetal Position"
                  />
                  <Text
                    textStyle={{ fontSize: 10, marginRight: 5 }}
                    text={data.fetalPosition}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    borderColor: "lightgray",
                    borderWidth: 1,
                    marginTop: 15,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 25,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  <Text
                    textStyle={{ fontSize: 12, marginLeft: 5 }}
                    text="MSL"
                  />
                  <Text
                    textStyle={{ fontSize: 10, marginRight: 5 }}
                    text={data.MSL}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    borderColor: "lightgray",
                    borderWidth: 1,
                    marginTop: 15,
                  }}
                />
              </View>
              {data.score !== undefined ? (
                <Button
                  textStyle={styles.btnText}
                  containerStyle={styles.btnContainer}
                  title={`Score: ${data.score}`}
                />
              ) : (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate("TakeAPGARScore")}
                  style={styles.takeScore}
                >
                  <Text textStyle={styles.linkTextAdd} text="Take Score" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor={theme.primary} />

      {Header()}
      {Body()}
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
    height: Dimensions.get("screen").height * 0.9,
    borderRadius: 10,
    alignItems: "center",
  },
  paramsContainer: {
    flexDirection: "row",
    marginTop: "6%",
  },
  left: {
    position: "absolute",
    left: "4%",
    marginTop: "6%",
  },
  parameters1: {
    fontSize: 24,
    color: theme.primary,
    fontWeight: "900",
  },
  container: {
    width: "80%",
    marginTop: "10%",
    backgroundColor: "#fcfcfc",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.65,
    elevation: 5,
    borderRadius: 5,
  },
  X: {
    position: "absolute",
    right: "5%",
    top: "5%",
    zIndex: 1,
  },
  XStyles: {
    color: theme.secondary,
    fontWeight: "900",
    fontSize: 20,
  },
  maternalContainer: {
    marginTop: "18%",
  },
  btnContainer: {
    bottom: 0,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  btnText: {
    color: "#fff",
    padding: 12,
    fontSize: 20,
  },
  headerTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 25,
    paddingLeft: 5,
    paddingRight: 5,
  },
  linkTextAdd: {
    color: theme.secondary,
    textDecorationLine: "underline",
  },
  takeScore: {
    position: "absolute",
    right: 0,
    color: theme.secondary,
    borderTopLeftRadius: 10,
    position: "absolute",
    bottom: 0,
  },
});
