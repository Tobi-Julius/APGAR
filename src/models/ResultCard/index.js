import { View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles";
import { styles } from "./styles";
import { Text } from "../../components/common";

export const ResultCard = () => {
  return (
    <View style={[globalStyles.rowCenter]}>
      <View style={styles.cardContainer}>
        <Text textStyle={styles.staticText} text="APGAR Score" />
        <Text textStyle={styles.staticText} text="is" />
        <View style={styles.varContainer}>
          <Text text="score" textStyle={styles.score} />
          <Text text="condition" textStyle={styles.condition} />
        </View>
        <View style={styles.footer} />
      </View>
    </View>
  );
};
