import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import { GlobalContext } from "../context/GlobalState";

import { Themes } from "../constants";
import openMenu from "../images/Icon/menuOpen.png";
import Logo from "../images/APGARlogo.png";
import { TextInput, Text, Button } from "../components/common";

const Home = ({ navigation }) => {
  const { users } = useContext(GlobalContext);
  const [data, setdata] = useState(users);

  function handleChange(textValue) {
    setdata(
      data.filter((each) => {
        if (textValue === "") {
          return data;
        } else {
          return Object.values(each.id)
            .join("")
            .toLowerCase()
            .includes(textValue.toLowerCase());
        }
      })
    );
  }

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={openMenu} style={styles.menuStyle} />
          </TouchableOpacity>
          <Image source={Logo} style={styles.styleLogo} />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Notification")}
          >
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.innerContainer}>
            <TextInput
              placeholder="Search ID"
              onChangeText={handleChange}
              textInputStyle={styles.inputStyle}
            />
            <View style={styles.searchIcon}>
              <EvilIcons name="search" color="lightgray" size={30} />
            </View>
          </View>
        </View>
      </View>
    );
  };
  const Body = () => {
    return (
      <View style={styles.body}>
        <View style={styles.one}>
          <Text textStyle={styles.textOne} text="Take APGAR score" />
          <View>
            <Image
              source={require("../images/Home/APGARScore.png")}
              style={styles.imageOne}
            />
            <View style={styles.bottomTextContainerOne}>
              <View style={styles.text}>
                <Text
                  textStyle={{ fontSize: 16, letterSpacing: -1 }}
                  text="Instantly input APGAR parameters and generate"
                />
                <Text
                  textStyle={{ fontSize: 16, letterSpacing: -1 }}
                  text="APGAR score of a new born baby"
                />
              </View>
              <Button
                textStyle={styles.btnText}
                title="Take Score"
                style={styles.btnContainer}
              />
            </View>
          </View>
        </View>
        <View style={styles.two}>
          <Text textStyle={styles.textOne} text="Check APGAR Database" />
          <View>
            <Image
              source={require("../images/Home/database.png")}
              style={styles.imageOne}
            />
            <View style={styles.bottomTextContainerTwo}>
              <Text
                textStyle={{
                  fontSize: 16,
                  marginBottom: 15,
                }}
                text="Easy access to APGAR past Record"
              />
              <Button
                textStyle={styles.btnText}
                title="Check Database"
                style={styles.btnContainer}
              />
            </View>
          </View>
        </View>
        <View style={styles.three}>
          <Text text="Past Records" />
          <FlatList
            horizontal
            data={data}
            renderItem={({ item, index }) => {
              return item.score === "" ? null : (
                <View style={{ marginLeft: 15, right: 15 }}>
                  <Image source={item.image} style={styles.babyImage} />
                  <View style={styles.idContainer}>
                    <Text textStyle={{ fontSize: 17 }} text={`0${item.id}`} />
                    <Text textStyle={{ fontSize: 12 }} text="ID" />
                  </View>
                  <View style={styles.scoreContainer}>
                    <View>
                      <Text text="Score" />
                      <Text text={item.score} />
                    </View>
                    <View>
                      <SimpleLineIcons
                        name="options-vertical"
                        size={15}
                        color="black"
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
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
    justifyContent: "center",
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
  },
  menuStyle: {
    width: 22,
    height: 22,
  },
  innerContainer: {
    width: "90%",
    justifyContent: "center",
    height: "50%",
  },
  inputStyle: {
    backgroundColor: Themes.white,
    borderRadius: 7,
    padding: 8,
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 32,
  },
  searchIcon: {
    position: "absolute",
    justifyContent: "center",
    right: "2%",
    top: "45%",
  },
  body: {
    height: Dimensions.get("window").height * 0.8,
    width: "100%",
    alignItems: "center",
  },
  one: {
    height: "35%",
    width: "98%",
    overflow: "hidden",
    borderRadius: 10,
  },
  two: {
    height: "35%",
    width: "98%",
    overflow: "hidden",
    borderRadius: 10,
  },
  three: {
    height: "20%",
    width: "98%",
    overflow: "hidden",
  },
  four: {
    height: "10%",
    width: "100%",
  },
  imageOne: {
    resizeMode: "cover",
    height: "94%",
    width: "100%",
    borderRadius: 10,
  },
  textOne: {
    fontSize: 18,
    marginTop: 8,
    marginLeft: 5,
  },
  bottomTextContainerOne: {
    position: "absolute",
    backgroundColor: Themes.fadeBackground,
    width: "100%",
    height: "24%",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    paddingRight: 10,
  },
  bottomTextContainerTwo: {
    position: "absolute",
    backgroundColor: Themes.fadeBackground,
    width: "100%",
    height: "24%",
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 0,
    paddingRight: 10,
  },
  text: {
    left: "10%",
  },
  btnContainer: {
    zIndex: 1,
    alignSelf: "flex-start",
    backgroundColor: Themes.primary,
    marginTop: 8,
    borderRadius: 5,
  },
  btnText: {
    padding: 6,
    color: Themes.white,
  },
  babyImage: {
    width: 100,
    height: "100%",
    resizeMode: "cover",
  },
  idContainer: {
    position: "absolute",
    right: "10%",
    top: "10%",
    backgroundColor: Themes.fadeBackground,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  scoreContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Themes.fadeBackground,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: "center",
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
    bottom: "15%",
    left: "44%",
    backgroundColor: Themes.white,
    zIndex: 1,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});

export default Home;
