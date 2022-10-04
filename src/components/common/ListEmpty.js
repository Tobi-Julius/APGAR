import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "./Text";
import { layout } from "../../utils";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../constants";

export const ListEmpty = ({ show }) => {
  return (
    <View style={styles.container}>
      <Text textStyle={styles.explore} text="Explore Our App" />
      {show && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="align-top" size={17} color={theme.primary} />
          <Text textStyle={styles.pull} text="Pull to Refresh" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.heightPixel(40),
    alignItems: "center",
    width: layout.widthPixel(360),
  },
  explore: {
    fontFamily: "Montserrat_600SemiBold",
    color: theme.secondary,
    fontSize: layout.size.h2,
  },
  pull: {
    fontFamily: "Montserrat_500Medium",
    color: theme.primary,
    fontSize: layout.size.h4,
    paddingVertical: layout.pixelSizeVertical(20),
  },
});
