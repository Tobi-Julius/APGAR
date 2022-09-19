import {
  image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs, query } from "firebase/firestore";

import { theme } from "../constants";
import { globalStyles } from "../styles";
import { Text, Button } from "../components/common";
import { db, auth } from "../firebase/firebase-config";

export const Detail = ({ navigation, route }) => {
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
          <ActivityIndicator color={theme.secondary} size="large" />
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
              <View style={styles.textHeadContainer}>
                <Text textStyle={styles.indicatorText} text="Indicator" />
                <Text textStyle={styles.indicatorText} text="State" />
                <Text textStyle={styles.indicatorText} text="Point" />
              </View>

              <View style={styles.row}>
                <Text text="Activity" textStyle={styles.text} />
                <Text
                  textAlign="center"
                  textStyle={{
                    fontSize: 10,
                    width: "70%",
                    alignSelf: "center",
                  }}
                  text={data.activity}
                />
                <Text text={data.activityScore} textStyle={styles.textLeft} />
              </View>

              <View style={styles.row}>
                <Text textStyle={styles.text} text="Pulse" />
                <Text textStyle={{ fontSize: 10 }} text={data.pulse} />
                <Text textStyle={styles.textLeft} text={data.pulseScore} />
              </View>

              <View style={styles.row}>
                <Text textStyle={styles.text} text="Grimace" />
                <Text textStyle={{ fontSize: 10 }} text={data.grimace} />
                <Text textStyle={styles.textLeft} text={data.grimaceScore} />
              </View>

              <View style={styles.row}>
                <Text textStyle={styles.text} text="Appearance" />
                <Text textStyle={{ fontSize: 10 }} text={data.appearance} />
                <Text textStyle={styles.textLeft} text={data.appearanceScore} />
              </View>

              <View style={styles.row}>
                <Text textStyle={styles.text} text="Respiration" />
                <Text textStyle={{ fontSize: 10 }} text={data.respiration} />
                <Text
                  textStyle={styles.textLeft}
                  text={data.respirationScore}
                />
              </View>

              <View style={styles.footerContainer}>
                {data.maternalHtpertension ? (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ marginTop: "15%" }}
                    onPress={() =>
                      navigation.navigate("MaternalHistory", { id: data.id })
                    }
                  >
                    <Text
                      textStyle={styles.linkText}
                      text="Maternity History"
                    />
                  </TouchableOpacity>
                ) : null}
                {data.score !== undefined ? (
                  <View style={styles.scoreContainer}>
                    <Text
                      textStyle={styles.scoreText}
                      text={`SCORE: ${data.score}`}
                    />
                  </View>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      navigation.navigate("TakeAPGARScore");
                    }}
                    style={styles.takeScore}
                  >
                    <Text textStyle={styles.linkTextAdd} text="Take Score" />
                  </TouchableOpacity>
                )}
              </View>
              <Button
                onPress={() => navigation.goBack()}
                textStyle={styles.btnText}
                containerStyle={styles.btnContainer}
                title="Close"
              />
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
    height: Dimensions.get("screen").height * 0.77,
    borderRadius: 10,
    alignItems: "center",
    zIndex: 1,
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
  },
  indicatorText: {
    color: "#fff",
  },
  textHeadContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: theme.primary,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    width: "88%",
    height: "75%",
    marginTop: "10%",
    backgroundColor: "#fcfcfc",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#fcfcfc",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.65,
    elevation: 5,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "12%",
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
  },
  textLeft: {
    fontSize: 12,
    marginRight: 5,
  },
  footerContainer: {
    flexDirection: "row",
    // height: "30%",
    alignItems: "center",
  },
  scoreContainer: {
    backgroundColor: theme.primary,
    borderTopLeftRadius: 10,
    position: "absolute",
    right: 0,
    top: "30%",
    width: "45%",
    justifyContent: "flex-end",
  },
  takeScore: {
    position: "absolute",
    right: "3%",
    top: "6%",
    marginTop: "15%",
    color: theme.secondary,
    borderTopLeftRadius: 10,
  },
  linkText: {
    color: theme.primary,
    textDecorationLine: "underline",
    fontSize: 11,
    marginBottom: 6,
  },
  linkTextAdd: {
    color: theme.secondary,
    textDecorationLine: "underline",
    fontSize: 10,
    zIndex: 1,
  },
  scoreText: {
    color: "#fff",
    padding: 10,
    fontSize: 18,
    textAlignVertical: "center",
    fontSize: 13,
  },
  btnContainer: {
    marginTop: "12%",
    borderRadius: 5,
    width: "50%",
    alignSelf: "center",
    zIndex: 1,
  },
  btnText: {
    padding: "5%",
    color: "#fff",
    fontSize: 18,
  },
});
