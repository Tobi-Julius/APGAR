import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs, query } from "firebase/firestore";

import { Themes } from "../constants";
import { Text, TextBold } from "../components/common";
import { globalStyles } from "../styles";
import { db, auth } from "../firebase/firebase-config";

const Notification = ({ navigation }) => {
  const [patientValue, setPatientValue] = useState([]);

  useEffect(async () => {
    const getData = async () => {
      const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPatientValue(data);
    };
    getData();
  }, []);

  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <View style={{ marginTop: "5%", width: "100%" }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.goBack()}
              style={styles.leftIcon}
            >
              <AntDesign name="left" color="blue" size={28} />
            </TouchableOpacity>

            <TextBold
              text="Notifications"
              textStyle={[styles.textStyle, globalStyles.Heading1]}
            />
            <View style={styles.separatorText}>
              <Text
                textStyle={styles.notificationText}
                text="New Notifications"
              />
              <View style={styles.separator} />
            </View>
          </View>
          <View>
            {patientValue === true ? (
              <ActivityIndicator size="large" color={Themes.secondary} />
            ) : (
              <View>
                {patientValue.length < 1 ? (
                  <Text text="No New Notifications" />
                ) : (
                  <FlatList
                    data={patientValue}
                    renderItem={NotificationMessages}
                    showsVerticalScrollIndicator={false}
                  />
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  const NotificationMessages = ({ item, index }) => {
    return (
      <View
        keyExtractor={item.id}
        style={{
          maxWidth: "100%",
          alignItems: "center",
        }}
      >
        <View>
          <View style={styles.messageContainer}>
            <View style={{ maxHeight: 70, maxWidth: 70 }}>
              <Text textStyle={styles.messageNumber} text={`0${index + 1}`} />
            </View>
            <View>
              <Text
                textStyle={styles.messageText}
                text={item.notificationMessage}
              />
              <Text
                textStyle={styles.timeAgo}
                text={
                  item.createdAt ? item.createdAt.toDate().toTimeString() : ""
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.messageSeparator} />
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

export default Notification;

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
  container: {
    height: Dimensions.get("window").height * 0.55,
  },
  textStyle: {
    color: Themes.secondary,
    marginTop: "4%",
  },
  leftIcon: {
    position: "absolute",
    left: "2%",
    marginTop: "4%",
    zIndex: 1,
  },
  textInputStyle: {
    borderRadius: 8,
  },
  inputContainer: {
    width: "90%",
    marginTop: "12%",
  },
  notificationText: {
    fontSize: 14,
    color: Themes.primary,
    marginLeft: "1%",
  },
  messageContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    width: "95%",
  },
  messageText: {
    fontSize: 13,
    margin: 8,
    minWidth: "90%",
    maxWidth: "90%",
  },
  messageNumber: {
    backgroundColor: Themes.secondary,
    color: Themes.white,
    padding: 6,
    borderRadius: 5,
    marginLeft: 8,
    marginRight: 8,
  },
  timeAgo: {
    marginLeft: 10,
    color: Themes.text,
  },
  separator: {
    borderTopWidth: 1,
    width: "100%",
    borderColor: "lightgray",
    marginTop: 4,
  },
  separatorText: {
    marginTop: 30,
  },
  messageSeparator: {
    borderTopWidth: 1,
    width: "75%",
    borderColor: "lightgray",
    marginTop: 4,
  },
});
