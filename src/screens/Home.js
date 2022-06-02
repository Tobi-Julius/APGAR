import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import { GlobalContext } from "../context/GlobalState";

import { Themes } from "../constants";
import openMenu from "../images/Icon/menuOpen.png";
import Logo from "../images/APGARlogo.png";
import {
  TextInput,
  Button,
  TextBold,
  Text,
  TextMedium,
} from "../components/common";

const Home = ({ navigation }) => {
  const { patients } = useContext(GlobalContext);

  function handleChange(textValue) {
    // setData(
    //   data.filter((each) => {
    //     if (textValue === "") {
    //       return data;
    //     } else {
    //       return Object.values(each.id)
    //         .join("")
    //         .toLowerCase()
    //         .includes(textValue.toLowerCase());
    //     }
    //   })
    // );
  }

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            marginTop: "8%",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              source={openMenu}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          <View>
            <Image source={Logo} />
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Notification")}
          >
            <Ionicons
              name="md-notifications-outline"
              size={25}
              color={Themes.white}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          onChangeText={handleChange}
          containerStyle={{
            width: " 90%",
            height: 40,
            borderRadius: 6,
            marginTop: 8,
          }}
          placeholder="Search ID"
          textInputStyle={{
            color: Themes.text,
            backgroundColor: Themes.white,
            borderRadius: 5,
          }}
        />
        <View style={{ alignSelf: "flex-end", right: "10%", bottom: "8%" }}>
          <EvilIcons name="search" color="black" size={30} />
        </View>
      </View>
    );
  };
  const Body = () => {
    return (
      <View style={styles.body}>
        <View style={styles.one}>
          <View style={{ marginTop: 12 }}>
            <TextBold
              textStyle={{ fontSize: 13, marginBottom: 3 }}
              text="Take APGAR Score"
            />
            <View style={{ borderRadius: 20, height: "93%" }}>
              <Image
                source={require("../images/Home/APGARScore.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  position: "relative",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "row",
                  width: "100%",
                  backgroundColor: Themes.fadeBackground,
                  justifyContent: "space-between",
                  paddingRight: 5,
                  alignItems: "center",
                  borderBottomRightRadius: 19,
                  borderBottomLeftRadius: 19,
                  zIndex: 1,
                }}
              >
                <View
                  style={{
                    marginBottom: 5,
                    width: "77%",
                  }}
                >
                  <TextMedium
                    textStyle={{ fontSize: 11, letterSpacing: -0.3 }}
                    text="Instantly input APGAR parameters and generate"
                  />
                  <TextMedium
                    textStyle={{ fontSize: 10, letterSpacing: -0.7 }}
                    text="APGAR score of a new born baby"
                  />
                </View>
                <Button
                  onPress={() => {
                    navigation.navigate("Take APGAR Score");
                  }}
                  containerStyle={{
                    borderRadius: 5,
                    width: "23%",
                  }}
                  textStyle={{
                    fontSize: 10,
                    padding: 6,
                    color: Themes.white,
                    letterSpacing: -0.8,
                  }}
                  title="Take Score"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.two}>
          <View style={{ marginTop: 17 }}>
            <TextBold
              textStyle={{ fontSize: 13, marginBottom: 3 }}
              text="Check APGAR database"
            />
            <View style={{ borderRadius: 20, height: "93%" }}>
              <Image
                source={require("../images/Home/database.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  position: "relative",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "row",
                  width: "100%",
                  backgroundColor: Themes.fadeBackground,
                  justifyContent: "space-between",
                  paddingRight: 5,
                  alignItems: "center",
                  borderBottomRightRadius: 19,
                  borderBottomLeftRadius: 19,
                  zIndex: 1,
                  padding: 5,
                }}
              >
                <View
                  style={{
                    marginBottom: 5,
                    width: "65%",
                  }}
                >
                  <TextMedium
                    textStyle={{ fontSize: 11, letterSpacing: -0.3 }}
                    text="Easy access to APGAR database"
                  />
                </View>
                <Button
                  onPress={() => {
                    navigation.navigate("Database");
                  }}
                  containerStyle={{
                    borderRadius: 5,
                    width: "30%",
                  }}
                  textStyle={{
                    fontSize: 10,
                    padding: 6,
                    color: Themes.white,
                    letterSpacing: -0.8,
                  }}
                  title="Check Database"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.three}>
          <TextBold
            textStyle={{ fontSize: 13, marginBottom: "1%" }}
            text="Past Records"
          />
          {patients.length < 1 ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <TextMedium
                textStyle={styles.emptyData}
                text="You have not taken any record"
              />
            </View>
          ) : (
            <FlatList
              horizontal
              data={patients}
              renderItem={({ item, index }) => {
                return item.score === undefined ? null : (
                  <View
                    style={{
                      marginLeft: 17,
                      right: 15,
                      borderRadius: 8,
                    }}
                  >
                    <Image source={item.image} style={styles.babyImage} />
                    <View style={styles.idContainer}>
                      <TextBold
                        textStyle={{ fontSize: 6, color: "#000" }}
                        text="ID"
                      />
                      <TextBold
                        textStyle={{ fontSize: 12, color: Themes.primary }}
                        text={`${item.id === 10 ? item.id : `0${item.id}`}`}
                      />
                    </View>
                    <View style={styles.scoreContainer}>
                      <View>
                        <Text textStyle={{ fontSize: 7 }} text="Score" />
                        <TextBold
                          textStyle={{ color: Themes.primary, fontSize: 10 }}
                          text={`${
                            item.score === 10 ? item.score : `0${item.score}`
                          }`}
                        />
                      </View>
                      <View>
                        <SimpleLineIcons
                          name="options-vertical"
                          size={11}
                          color="black"
                        />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </View>
        <View style={styles.four}>
          <View style={styles.top} />
          <View style={styles.homeIcon}>
            <Octicons name="home" color={Themes.primary} size={20} />
          </View>
          <View style={styles.bottom} />
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
const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: Themes.primary,
    alignItems: "center",
  },
  container: {
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
    marginTop: "8%",
    alignItems: "center",
  },
  searchContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    height: 40,
  },
  menuStyle: {
    width: 22,
    height: 22,
  },
  inputStyle: {},
  searchIcon: {
    position: "absolute",
    justifyContent: "center",
    right: "8%",
    top: "65%",
  },
  body: {
    height: Dimensions.get("window").height * 0.8,
    width: "100%",
    alignItems: "center",
  },
  one: {
    height: "31%",
    width: "95%",
    borderRadius: 10,
  },
  two: {
    height: "31%",
    width: "95%",
    borderRadius: 10,
  },
  three: {
    height: "21%",
    width: "92%",
    overflow: "hidden",
    marginTop: "4.5%",
  },
  four: {
    marginTop: "2%",
    height: "14%",
    width: "100%",
  },

  text: {
    width: "80%",
  },
  babyImage: {
    width: 100,
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  idContainer: {
    position: "absolute",
    right: "5%",
    top: "5%",
    backgroundColor: Themes.fadeBackground,
    padding: 1,
    borderRadius: 3,
    alignItems: "center",
  },
  scoreContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Themes.fadeBackground,
    flexDirection: "row",
    width: "100%",
    height: "22%",
    justifyContent: "space-between",
    paddingLeft: 2,
    paddingRight: 2,
    alignItems: "flex-end",
  },
  top: {
    backgroundColor: Themes.white,
    height: "50%",
    width: "100%",
  },
  bottom: {
    backgroundColor: Themes.primary,
    height: "50%",
    width: "100%",
  },
  homeIcon: {
    position: "absolute",
    bottom: "23%",
    left: "44%",
    backgroundColor: Themes.white,
    zIndex: 1,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  emptyData: {
    alignItems: "center",
    color: Themes.secondary,
  },
});

export default Home;
