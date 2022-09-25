import { View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Text } from "../../common";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const DatabaseCard = ({ item, handlePresentModalPress }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.contentContainer}>
        <View style={styles.cardHeadContainer}>
          <View>
            <Text textStyle={styles.varId} text={item?.id.slice(0, 4)} />
            <Text textStyle={styles.id} text="ID" />
          </View>

          <View style={styles.dateTimeContainer}>
            <Text
              textStyle={styles.dateTime}
              text={`${new Date(
                item?.createdAt.seconds * 1000
              ).toLocaleDateString()}`}
            />
            <Text
              textStyle={styles.dateTime}
              text={`${new Date(
                item?.createdAt.seconds * 1000
              ).toLocaleTimeString()}`}
            />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.cardBodyContainer}>
          <Image
            source={{
              uri: item?.image,
            }}
            style={styles.img}
          />
          <View style={styles.cardBodyInnerContainer}>
            <View style={styles.scoreCommentContainer}>
              <Text textStyle={styles.score} text="score" />
              <Text textStyle={styles.scoreVar} text={item?.score} />
              <Text textStyle={styles.comment} text={item?.comment} />
            </View>
            <View style={styles.iconRecordContainer}>
              <TouchableOpacity
                onPress={() => handlePresentModalPress(item?.id)}
                style={styles.deleteContainer}
                activeOpacity={0.6}
              >
                <Text textStyle={styles.deleteText} text="Delete" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Detail", { id: item?.id });
                }}
                style={styles.detailContainer}
                activeOpacity={0.6}
              >
                <Text textStyle={styles.detailText} text="Details" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
