import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { GlobalContext } from "../context/GlobalState";

import { Themes } from "../constants";
import { globalStyles } from "../styles";
import { Text, Button, TextBold } from "../components/common";

const Detail = ({ navigation, route }) => {
  const Header = () => {
    return <View style={styles.headerContainer} />;
  };
  const { patients } = useContext(GlobalContext);

  const { id } = route.params;

  const data = patients.find((item) => {
    return item.id === id;
  });

  let pulse;
  if (data.pulse === "Absent: 0") {
    pulse = "Absent";
  } else if (data.pulse === "< 100 bpm: 1") {
    pulse === "< 100 bpm";
  } else if (data.pulse === "> 100 bpm: 2") {
    pulse = "> 100 bpm";
  }

  let activity;
  if (data.activity === "Loose and Floppy muscle tones: 0") {
    activity = "Loose and Floppy muscle tones";
  } else if (data.activity === "Flexed Arms and Legs: 1") {
    activity === "Flexed Arms and Legs";
  } else if (data.activity === "Active Motion: 2") {
    activity = "Active Motion";
  }

  let grimace;
  if (data.grimace === "Floppy/No reaction: 0") {
    grimace = "Floppy/No reaction";
  } else if (data.grimace === "Minimal Response: 1") {
    grimace === "Minimal Response";
  } else if (data.grimace === "Prompt Response: 2") {
    grimace = "Prompt Response";
  }

  let appearance;
  if (data.appearance === "Blue Pale: 0") {
    appearance = "Blue Pale";
  } else if (data.appearance === "Blue Extremeties: 1") {
    appearance === "Blue Extremeties";
  } else if (data.appearance === "Pink: 2") {
    appearance = "Pink";
  }

  let respiration;
  if (data.respiration === "Absent: 0") {
    respiration = "Absent";
  } else if (data.respiration === "Slow and Irregular: 1") {
    respiration === "Slow and Irregular";
  } else if (data.respiration === "Vigorous Cry: 2") {
    respiration = "Vigorous Cry";
  }

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.left}
          >
            <AntDesign color="blue" size={28} name="left" />
          </TouchableOpacity>

          <View style={styles.paramsContainer}>
            <TextBold text="ID : " textStyle={[styles.parameters1]} />
            <TextBold text={`0${data.id}`} textStyle={[styles.parameters1]} />
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
                text={activity}
              />
              <Text text={data.activityScore} textStyle={styles.text} />
            </View>

            <View style={styles.row}>
              <Text textStyle={styles.text} text="Pulse" />
              <Text textStyle={{ fontSize: 10 }} text={pulse} />
              <Text textStyle={styles.text} text={data.pulseScore} />
            </View>

            <View style={styles.row}>
              <Text textStyle={styles.text} text="Grimace" />
              <Text textStyle={{ fontSize: 10 }} text={grimace} />
              <Text textStyle={styles.text} text={data.grimaceScore} />
            </View>

            <View style={styles.row}>
              <Text textStyle={styles.text} text="Appearance" />
              <Text textStyle={{ fontSize: 10 }} text={appearance} />
              <Text textStyle={styles.text} text={data.appearanceScore} />
            </View>

            <View style={styles.row}>
              <Text textStyle={styles.text} text="Respiration" />
              <Text textStyle={{ fontSize: 10 }} text={respiration} />
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
                  <Text textStyle={styles.linkText} text="Maternity History" />
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
              onPress={() => navigation.navigate("DataBase")}
              textStyle={styles.btnText}
              containerStyle={styles.btnContainer}
              title="Close"
            />
          </View>
        </View>
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
  },
  btnText: {
    padding: 13,
    color: "#fff",
    fontSize: 18,
  },
});
