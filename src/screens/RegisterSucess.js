import { StyleSheet, View, Dimensions } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { GlobalContext } from "../context/GlobalState";

import { Themes } from "../constants";
import { Button, Text, TextBold } from "../components/common";
import { globalStyles } from "../styles";

const RegisterSucess = ({ navigation, route }) => {
  // const { users } = useContext(GlobalContext);

  const { id } = route.params;

  // const data = users.find((item) => {
  //   return item.id === id;
  // });
  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const Body = () => {
    return (
      <View style={[styles.container]}>
        <View style={styles.innerContainer}>
          <View
            style={{
              position: "absolute",
              top: 0,
              alignSelf: "center",
              padding: "15%",
            }}
          >
            <TextBold
              text="Success!"
              textStyle={[styles.title, globalStyles.Heading1]}
            />
          </View>

          <View
            style={{
              position: "absolute",
              alignItems: "center",
              width: "70%",
              alignSelf: "center",
              padding: "10%",
            }}
          >
            <Text
              textStyle={{ fontSize: 13 }}
              textAlign="center"
              text="You have successfully"
            />
            <Text
              textStyle={{ fontSize: 13 }}
              textAlign="center"
              text="registered your Hospital"
            />
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: Themes.primary,
              padding: "5%",
              width: "100%",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <Text textStyle={styles.id} text="ID No " />
            <TextBold textStyle={styles.number} text={id} />
          </View>
        </View>
        {Footer()}
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.safe}>
          <AntDesign name="warning" size={11} color="red" />
          <Text
            textStyle={{ marginLeft: 5 }}
            color={Themes.secondary}
            text="Keep ID safe"
          />
        </View>
        <Button
          containerStyle={styles.containerStyle}
          onPress={() => navigation.replace("SideMenu", { id })}
          textStyle={styles.textStyle}
          title="Continue"
        />
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
  },
  innerContainer: {
    width: "70%",
    backgroundColor: "#fcfcfc",
    height: "60%",
    justifyContent: "center",
    borderRadius: 10,
  },
  container: {
    height: Dimensions.get("window").height * 0.65,
    justifyContent: "center",
    alignItems: "center",
  },
  id: {
    color: "#fff",
  },
  number: {
    color: Themes.secondary,
    fontSize: 15,
  },
  footerContainer: {
    width: "70%",
    height: "23%",
    borderRadius: 10,
  },
  safe: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  containerStyle: {
    padding: 13,
    marginLeft: "28%",
    marginRight: "28%",
    marginTop: "20%",
    borderRadius: 5,
  },
  textStyle: {
    color: "#fff",
  },
  title: {},
});

export default RegisterSucess;
