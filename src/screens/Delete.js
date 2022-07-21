import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";

import { Themes } from "../constants";
import { Text, TextBold } from "../components/common";
import { db, auth } from "../firebase/firebase-config";

const Delete = ({ navigation, route }) => {
  const { id } = route.params;
  const [loading, setLoading] = useState(false);

  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const Body = () => {
    return (
      <View style={[styles.container]}>
        <View style={styles.innerContainer}>
          <View style={styles.deleteTextContainer}>
            <TextBold
              text="Delete ?"
              textAlign="center"
              textStyle={styles.deleteText}
            />
          </View>

          {loading ? (
            <ActivityIndicator
              style={{ marginTop: "8%" }}
              color={Themes.secondary}
              size="large"
            />
          ) : (
            <View style={styles.btns}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.noBtn}
                onPress={() => navigation.goBack()}
              >
                <Text textStyle={styles.noBtnText} text="NO" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={async () => {
                  setLoading(true);
                  await deleteDoc(
                    doc(db, `users/${auth.currentUser.uid}/user`, id)
                  );
                  setLoading(false);
                  navigation.navigate("Database");
                }}
                activeOpacity={0.6}
                style={styles.yesBtn}
              >
                <Text textStyle={styles.yesBtnText} text="YES" />
              </TouchableOpacity>
            </View>
          )}

          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: Themes.primary,
              padding: "8%",
              marginTop: "2%",
              width: "100%",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          ></View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor={Themes.primary} />
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
    height: "45%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.65,
    elevation: 5,
    // borderRadius: 5,
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
  },
  footerContainer: {
    width: "70%",
    height: "23%",
    borderRadius: 10,
  },
  safe: {
    padding: 12,
    flexDirection: "row",
  },
  containerStyle: {
    padding: 13,
    marginLeft: "28%",
    marginRight: "28%",
    marginTop: "20%",
    borderRadius: 5,
  },
  deleteTextContainer: {
    marginTop: "15%",
  },
  deleteText: {
    color: Themes.secondary,
  },
  btns: {
    marginTop: "15%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  noBtn: {
    borderWidth: 1,
    borderColor: Themes.primary,
    borderRadius: 7,
    fontSize: 12,
  },
  yesBtn: {
    backgroundColor: Themes.secondary,
    borderRadius: 7,
  },
  noBtnText: {
    color: Themes.primary,
    padding: 25,
  },
  yesBtnText: {
    color: "#fff",
    padding: 25,
  },
});

export default Delete;
