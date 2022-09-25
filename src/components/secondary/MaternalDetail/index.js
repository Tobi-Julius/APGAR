import { View } from "react-native";
import React from "react";
import { Text } from "../../common";
import { globalStyles } from "../../../styles";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const MaternalDetail = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.rowCenter]}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            activeOpacity={0.6}
            style={styles.cancelBtn}
          >
            <Text textStyle={styles.X} text="X" />
          </TouchableOpacity>
          <View style={styles.table}>
            <View style={styles.textVarContainer}>
              <Text textStyle={styles.title} text={"Maternal Hypertension"} />
              <Text textStyle={styles.var} text={data?.maternalHypertension} />
            </View>
            <View style={[styles.separatorContainer, globalStyles.rowCenter]}>
              <View style={styles.separator} />
            </View>
            <View style={styles.textVarContainer}>
              <Text textStyle={styles.title} text={"Gestation Period"} />
              <Text textStyle={styles.var} text={data?.gestationPeriod} />
            </View>
            <View style={[styles.separatorContainer, globalStyles.rowCenter]}>
              <View style={styles.separator} />
            </View>
            <View style={styles.textVarContainer}>
              <Text textStyle={styles.title} text={"Delivery Mode"} />
              <Text textStyle={styles.var} text={data?.deliveryMode} />
            </View>
            <View style={[styles.separatorContainer, globalStyles.rowCenter]}>
              <View style={styles.separator} />
            </View>
            <View style={styles.textVarContainer}>
              <Text textStyle={styles.title} text={"Birth Weight"} />
              <Text textStyle={styles.var} text={data?.birthWeight} />
            </View>
            <View style={[styles.separatorContainer, globalStyles.rowCenter]}>
              <View style={styles.separator} />
            </View>
            <View style={styles.textVarContainer}>
              <Text textStyle={styles.title} text={"Fetal Position"} />
              <Text textStyle={styles.var} text={data?.fetalPosition} />
            </View>
            <View style={[styles.separatorContainer, globalStyles.rowCenter]}>
              <View style={styles.separator} />
            </View>
            <View style={styles.textVarContainer}>
              <Text textStyle={styles.title} text={"MSL"} />
              <Text textStyle={styles.var} text={data?.MSL} />
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Text
              textStyle={styles.footerText}
              text={`SCORE: ${data?.score}`}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
