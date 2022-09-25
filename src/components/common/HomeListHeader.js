import { StyleSheet } from "react-native";
import React from "react";
import { Text } from "./Text";
import { layout } from "../../utils";

export const HomeListHeader = ({ title }) => {
  return <Text textStyle={styles.title} text={title} />;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h4,
    marginTop: layout.pixelSizeVertical(12),
  },
});
