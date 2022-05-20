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
  const { users } = useContext(GlobalContext);

  const { id } = route.params;

  const data = users.find((item) => {
    return item.id === id;
  });

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
            <TextBold text={data.id} textStyle={[styles.parameters1]} />
          </View>
          <View style={styles.container}>
            <View style={styles.textHeadContainer}>
              <Text textStyle={styles.indicatorText} text="Indicator" />
              <Text textStyle={styles.indicatorText} text="State" />
              <Text textStyle={styles.indicatorText} text="Point" />
            </View>

            <View style={styles.row}>
              <Text text="Activity" textStyle={styles.text} />
              <Text text={data.activity} />
              <Text text={data.activityScore} textStyle={styles.text} />
            </View>

            <View style={styles.row}>
              <Text textStyle={styles.text} text="Pulse" />
              <Text text={data.pulse} />
              <Text textStyle={styles.text} text={data.pulseScore} />
            </View>

            <View style={styles.row}>
              <Text textStyle={styles.text} text="Grimace" />
              <Text text={data.grimace} />
              <Text textStyle={styles.text} text={data.grimaceScore} />
            </View>

            <View style={styles.row}>
              <Text textStyle={styles.text} text="Appearance" />
              <Text text={data.appearance} />
              <Text textStyle={styles.text} text={data.appearanceScore} />
            </View>

            <View style={styles.row}>
              <Text textStyle={styles.text} text="Respiration" />
              <Text text={data.respiration} />
              <Text textStyle={styles.text} text={data.respirationScore} />
            </View>

            <View style={styles.footerContainer}>
              {data.maternalHtpertension ? (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() =>
                    navigation.navigate("MaternalHistory", { id: data.id })
                  }
                >
                  <Text textStyle={styles.linkText} text="Maternity History" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() =>
                    navigation.navigate("MaternalRecord", { id: data.id })
                  }
                >
                  <Text
                    textStyle={styles.linkTextAdd}
                    text="Add Maternity History"
                  />
                </TouchableOpacity>
              )}
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
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate("TakeAPGARScore")}
                  style={styles.takeScore}
                >
                  <Text textStyle={styles.linkTextAdd} text="Take Score" />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <Button
            onPress={() => navigation.navigate("DataBase")}
            textStyle={styles.btnText}
            containerStyle={styles.btnContainer}
            title="Close"
          />
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
    height: Dimensions.get("screen").height * 0.8,
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
    height: "58%",
    marginTop: "20%",
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
    fontSize: 18,
  },
  footerContainer: {
    flexDirection: "row",
    marginTop: "15%",
    alignItems: "center",
    paddingLeft: 19,
  },
  scoreContainer: {
    position: "absolute",
    right: 0,
    bottom: "5%",
    backgroundColor: Themes.primary,
    borderTopLeftRadius: 10,
  },
  takeScore: {
    position: "absolute",
    right: "3%",
    color: Themes.secondary,
    borderTopLeftRadius: 10,
  },
  linkText: {
    color: Themes.primary,
    textDecorationLine: "underline",
  },
  linkTextAdd: {
    color: Themes.secondary,
    textDecorationLine: "underline",
  },
  scoreText: {
    color: "#fff",
    padding: 8,
    fontSize: 18,
    textAlignVertical: "center",
  },
  btnContainer: {
    marginTop: "13%",
    borderRadius: 5,
  },
  btnText: {
    padding: 20,
    color: "#fff",
    fontSize: 18,
  },
});
