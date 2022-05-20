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
import { TextInput, Button, TextBold, Text } from "../components/common";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

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
              <EvilIcons name="search" color={Themes.text} size={30} />
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
          <View style={styles.innerOne}>
            <TextBold
              textStyle={{ marginTop: "8%", fontSize: 16 }}
              text="Take APGAR Score"
            />
            <View
              style={{
                borderRadius: 15,
                marginTop: 10,
                height: 180,
              }}
            >
              <Image
                source={require("../images/Home/APGARScore.png")}
                style={{
                  resizeMode: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: 15,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  flexDirection: "row",
                  alignItems: "center",
                  bottom: 0,
                  backgroundColor: Themes.fadeBackground,
                  width: "100%",
                  borderBottomLeftRadius: 15,
                  borderBottomRightadius: 15,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "75%", marginLeft: 7, paddingTop: 5 }}>
                  <TextBold
                    textStyle={{ fontSize: 13 }}
                    text="Instantly input APGAR parameters and generate"
                  />
                  <TextBold
                    textStyle={{ fontSize: 13 }}
                    text="APGAR score of a new born baby"
                  />
                </View>
                <Button
                  onPress={() => navigation.navigate("TakeAPGARScore")}
                  textStyle={{
                    padding: 5,
                    color: Themes.white,
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                  containerStyle={{
                    width: "20%",
                    marginRight: 10,
                    borderRadius: 5,
                  }}
                  title="Take Score"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.two}>
          <View>
            <TextBold
              textStyle={{ marginTop: "7%" }}
              text="Check APGAR Database"
            />
            <View
              style={{
                borderRadius: 15,
                marginTop: 10,
                height: 180,
              }}
            >
              <Image
                source={require("../images/Home/database.png")}
                style={{
                  resizeMode: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: 15,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  flexDirection: "row",
                  alignItems: "center",
                  bottom: 0,
                  backgroundColor: Themes.fadeBackground,
                  width: "100%",
                  borderBottomLeftRadius: 15,
                  borderBottomRightadius: 15,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "60%", marginLeft: 7, paddingTop: 5 }}>
                  <TextBold
                    textStyle={{ fontSize: 13 }}
                    text="Easy access to APGAR past records "
                  />
                </View>
                <Button
                  onPress={() => navigation.navigate("DataBase")}
                  textStyle={{
                    padding: 5,
                    color: Themes.white,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                  containerStyle={{
                    width: "30%",
                    marginRight: 10,
                    borderRadius: 5,
                  }}
                  title="Check Database"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.three}>
          <TextBold
            textStyle={{ fontSize: 17, marginBottom: "3%" }}
            text="Past Records"
          />
          <FlatList
            horizontal
            data={data}
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
                      textStyle={{ fontSize: 10, color: "#000" }}
                      text="ID"
                    />
                    <TextBold
                      textStyle={{ fontSize: 18, color: Themes.primary }}
                      text={`${item.id === 10 ? item.id : `0${item.id}`}`}
                    />
                  </View>
                  <View style={styles.scoreContainer}>
                    <View>
                      <Text textStyle={{ fontSize: 12 }} text="Score" />
                      <TextBold
                        textStyle={{ color: Themes.primary }}
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
    height: "35%",
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
    right: "8%",
    top: "65%",
  },
  body: {
    height: Dimensions.get("window").height * 0.8,
    width: "100%",
    alignItems: "center",
  },
  one: {
    height: "34%",
    width: "95%",
    overflow: "hidden",
    borderRadius: 10,
  },
  two: {
    height: "34%",
    width: "95%",
    overflow: "hidden",
    borderRadius: 10,
  },
  three: {
    height: "20%",
    width: "92%",
    overflow: "hidden",
  },
  four: {
    marginTop: "2%",
    height: "12%",
    width: "100%",
  },
  imageOne: {
    resizeMode: "cover",
    height: "94%",
    width: "100%",
    borderRadius: 10,
  },
  textOne: {
    fontSize: 17,
    marginTop: 8,
    marginLeft: 5,
  },
  bottomTextContainerOne: {
    position: "absolute",
    backgroundColor: Themes.fadeBackground,
    width: "100%",
    height: "26%",
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
    width: "80%",
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
    width: 107,
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  idContainer: {
    position: "absolute",
    right: "5%",
    top: "5%",
    backgroundColor: Themes.fadeBackground,
    padding: 2,
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
});

export default Home;
