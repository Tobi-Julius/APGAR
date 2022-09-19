import { View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles";
import { styles } from "./styles";
import { Button } from "../../components/common";
import { Text } from "../../components/common";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants";
import { useNavigation } from "@react-navigation/native";

export const CardButtons = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={[globalStyles.rowCenter]}>
        <View style={[styles.contentContainer, globalStyles.rowBetween]}>
          <Button
            onPress={() => navigation.navigate("Database")}
            containerStyle={styles.skipBtnContainer}
            textStyle={styles.skipBtnText}
            title="Skip to Record"
          />
          <Button
            onPress={() => navigation.navigate("MaternalRecord")}
            containerStyle={styles.addBtnContainer}
            textStyle={styles.addBtnText}
            title="Add maternal record"
          />
        </View>
      </View>
      <View style={[globalStyles.rowCenter]}>
        <View style={styles.cautionContainer}>
          <Ionicons name="warning-outline" size={16} color={theme.secondary} />
          <Text
            text="Adding maternal record is an added advantage"
            textStyle={styles.cautionText}
          />
        </View>
      </View>
    </View>
  );
};
