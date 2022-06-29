import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs, query } from "firebase/firestore";

import { Themes } from "../constants";
import { globalStyles } from "../styles";
import { Text, Button, TextBold } from "../components/common";
import { db, auth } from "../firebase/firebase-config";

const Detail = ({ navigation, route }) => {
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
          <ActivityIndicator color={Themes.secondary} size="large" />
        ) : (
          <View style={styles.bodyContentContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.left}
            >
              <AntDesign color="blue" size={28} name="left" />
            </TouchableOpacity>

            <View style={styles.paramsContainer}>
              <TextBold text="ID : " textStyle={[styles.parameters1]} />
              <TextBold text={data.motherId} textStyle={[styles.parameters1]} />
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
                <Text text={data.activityScore} textStyle={styles.text} />
              </View>

              <View style={styles.row}>
                <Text textStyle={styles.text} text="Pulse" />
                <Text textStyle={{ fontSize: 10 }} text={data.pulse} />
                <Text textStyle={styles.text} text={data.pulseScore} />
              </View>

              <View style={styles.row}>
                <Text textStyle={styles.text} text="Grimace" />
                <Text textStyle={{ fontSize: 10 }} text={data.grimace} />
                <Text textStyle={styles.text} text={data.grimaceScore} />
              </View>

              <View style={styles.row}>
                <Text textStyle={styles.text} text="Appearance" />
                <Text textStyle={{ fontSize: 10 }} text={data.appearance} />
                <Text textStyle={styles.text} text={data.appearanceScore} />
              </View>

              <View style={styles.row}>
                <Text textStyle={styles.text} text="Respiration" />
                <Text textStyle={{ fontSize: 10 }} text={data.respiration} />
                <Text textStyle={styles.text} text={data.respirationScore} />
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
                      text={`SCORE: ${
                        data.score === 10 ? data.score : `0${data.score}`
                      }`}
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
    <View>
      {Header()}
      {Body()}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: Themes.primary,
  },
  bodyContainer: {
    top: "-15%",
  },
  bodyContentContainer: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("screen").height * 0.86,
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
    color: Themes.primary,
  },
  indicatorText: {
    color: "#fff",
  },
  textHeadContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: Themes.primary,
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
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "12%",
  },
  text: {
    fontSize: 12,
  },
  footerContainer: {
    flexDirection: "row",
    // height: "30%",
    alignItems: "center",
  },
  scoreContainer: {
    backgroundColor: Themes.primary,
    borderTopLeftRadius: 10,
    position: "absolute",
    right: 0,
    top: "30%",
    width: "45%",
  },
  takeScore: {
    position: "absolute",
    right: "3%",
    top: "6%",
    marginTop: "15%",
    color: Themes.secondary,
    borderTopLeftRadius: 10,
  },
  linkText: {
    color: Themes.primary,
    textDecorationLine: "underline",
    fontSize: 11,
    marginBottom: 6,
  },
  linkTextAdd: {
    color: Themes.secondary,
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
    marginTop: "22%",
    borderRadius: 5,
    width: "50%",
    alignSelf: "center",
    zIndex: 1,
  },
  btnText: {
    padding: 13,
    color: "#fff",
    fontSize: 18,
  },
});
