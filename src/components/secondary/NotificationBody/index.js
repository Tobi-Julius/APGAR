import { View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Text } from "../../common";
import { globalStyles } from "../../../styles";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../constants";
import { useUserAuth } from "../../../context/firebaseContext/AuthContext";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";

export const NotificationBody = ({ patientValue }) => {
  const { user } = useUserAuth();

  const docRef = doc(db, "users", user.uid);

  const _deleteHandler = async () => {
    try {
      await updateDoc(docRef, {
        notificationMessage: deleteField(),
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View>
      <View style={[globalStyles.rowCenter]}>
        <View style={styles.headerTextContainer}>
          <Text textStyle={styles.displayTxt} text="New Notification" />
        </View>
      </View>
      <View style={styles.separator} />
      <View style={[globalStyles.rowCenter]}>
        <View style={styles.contentContainer}>
          {patientValue.map((item, index) => {
            const agoTime = (date) => {
              const seconds = Math.floor(new Date().getTime() / 1000 - date);

              // year
              let interval = seconds / 31536000;

              if (interval >= 1) {
                return Math.floor(interval) + " year(s) ago";
              }

              // months
              interval = seconds / 2592000;
              if (interval >= 1) {
                return Math.floor(interval) + " month(s) ago";
              }

              // days
              interval = seconds / 86400;
              if (interval >= 1) {
                return Math.floor(interval) + " day(s) ago";
              }

              // hours
              interval = seconds / 3600;
              if (interval >= 1) {
                return Math.floor(interval) + " hours(s) ago";
              }

              // minutes
              interval = seconds / 60;
              if (interval > 1) {
                return Math.floor(interval) + " minute(s) ago";
              }
              return Math.floor(seconds) + " seconds";
            };
            return (
              <View key={index} style={styles.messageContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.index} text={index + 1} />
                  <View>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode={"tail"}
                      textStyle={styles.message}
                      text={item.notificationMessage}
                    />
                    <Text
                      textStyle={styles.timeStamp}
                      text={agoTime(new Date(item.createdAt.seconds))}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => _deleteHandler()}
                >
                  <Ionicons name="trash" size={20} color={theme.secondary} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};
