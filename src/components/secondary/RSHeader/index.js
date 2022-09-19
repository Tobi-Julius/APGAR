import { View, Image } from "react-native";
import React from "react";
import { Text } from "../../common";
import { styles } from "./styles";
import { globalStyles } from "../../../styles";
import { image } from "../../../constants";

export const RSHeader = ({ text }) => {
  return (
    <View style={[styles.wrapper, globalStyles.rowCenter]}>
      <View style={[styles.container]}>
        <Image source={image.onboarding2} style={styles.image} />
        <View>
          <Text textStyle={styles.text} text={text} />
        </View>
      </View>
    </View>
  );
};
