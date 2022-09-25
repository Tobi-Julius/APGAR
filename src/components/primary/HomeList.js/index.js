import { View, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Text } from "../../common";
import { layout } from "../../../utils";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { icon, theme } from "../../../constants";

export const HomeList = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.image }}
        />
        <BlurView style={styles.topBlurContainer} intensity={200}>
          <Text textStyle={styles.id} text="ID" />
          <Text textStyle={styles.idVar} text={item.id.slice(0, 4)} />
        </BlurView>
        <BlurView style={styles.bottomBlurContainer} intensity={200}>
          <Text
            ellipsizeMode={"tail"}
            numberOfLines={1}
            textStyle={styles.score}
            text={`Score: ${item.score}`}
          />
          <MaterialCommunityIcons
            name="hospital"
            size={20}
            color={theme.text}
          />
        </BlurView>
      </View>
    </View>
  );
};
