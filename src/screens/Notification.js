import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { GlobalContext } from "../context/GlobalState";

import { Themes } from "../constants";
import { Text, TextBold } from "../components/common";
import { globalStyles } from "../styles";

const Notification = ({ navigation }) => {
  const { users } = useContext(GlobalContext);

  const [first, setfirst] = useState(users);

  const deleteItem = (id) => {
    setfirst(
      first.filter((each) => {
        return each.id !== id;
      })
    );
  };

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
          <FlatList
            data={first}
            renderItem={NotificationMessages}
            showsVerticalScrollIndicator={false}
          />
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
            <Text textStyle={styles.messageNumber} text={`0${index + 1}`} />
            {item.score === undefined ? (
              <Text
                textStyle={styles.messageText}
                text={`An APGAR score of ID no ${item.id} has not been recorded`}
              />
            ) : (
              <View>
                <Text
                  textStyle={styles.messageText}
                  text={item.notificationMessage}
                />
                <Text textStyle={styles.timeAgo} text="time ago" />
              </View>
            )}

            <TouchableOpacity
              onPress={() => deleteItem(item.id)}
              activeOpacity={0.6}
            >
              <AntDesign name="delete" size={15} color={Themes.secondary} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.messageSeparator} />
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
  btnContainer: {
    marginTop: "40%",
    width: "90%",
    borderRadius: 7,
  },
  btnText: {
    padding: "5%",
    color: "#fff",
    fontSize: 20,
    maxWidth: "2%",
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
    minWidth: "80%",
    maxWidth: "80%",
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
