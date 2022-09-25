import { View } from "react-native";
import React from "react";
import { Text } from "../../common";
import { styles } from "./styles";
import { globalStyles } from "../../../styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ScoreDetail = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={globalStyles.rowCenter}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.headerStyle}>
              <Text textStyle={styles.text} text="Indicator" />
              <Text textStyle={styles.text} text="State" />
              <Text textStyle={styles.text} text="Point" />
            </View>
            <View style={styles.containerStyle}>
              <View style={styles.innerContainer}>
                <Text textStyle={styles.title} text="Activity" />
                <Text
                  textStyle={styles.content}
                  text={data?.activity.slice(0, data?.activity.length - 3)}
                />
                <Text textStyle={styles.score} text={data?.activityScore} />
              </View>
              <View style={styles.innerContainer}>
                <Text textStyle={styles.title} text="Pulse" />
                <Text
                  textStyle={styles.content}
                  text={data?.pulse.slice(0, data?.pulse.length - 3)}
                />
                <Text textStyle={styles.score} text={data?.pulseScore} />
              </View>
              <View style={styles.innerContainer}>
                <Text textStyle={styles.title} text="Grimace" />
                <Text
                  textStyle={styles.content}
                  text={data?.grimace.slice(0, data?.grimace.length - 3)}
                />
                <Text textStyle={styles.score} text={data?.grimaceScore} />
              </View>
              <View style={styles.innerContainer}>
                <Text textStyle={styles.title} text="Appearance" />
                <Text
                  textStyle={styles.content}
                  text={data?.appearance.slice(0, data?.appearance.length - 3)}
                />
                <Text textStyle={styles.score} text={data?.appearanceScore} />
              </View>
              <View style={styles.innerContainer}>
                <Text textStyle={styles.title} text="Respiration" />
                <Text
                  textStyle={styles.content}
                  text={data?.respiration.slice(
                    0,
                    data?.respiration.length - 3
                  )}
                />
                <Text textStyle={styles.score} text={data?.respirationScore} />
              </View>
            </View>
            <View style={styles.footer}>
              {data?.maternalHypertensiom ||
              data?.fetalPosition ||
              data?.birthWeight ||
              data?.gestationPeriod ||
              data?.MSL ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("MaternalHistory", { id: data?.id });
                  }}
                  activeOpacity={0.6}
                  style={styles.maternalHistoryContainer}
                >
                  <Text
                    textStyle={styles.maternalHistory}
                    text="Maternal History"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("MaternalRecord", { id: data?.id });
                  }}
                  style={styles.addMaternalRecordContainer}
                >
                  <Text
                    textStyle={styles.addMaternalRecord}
                    text="Add Maternal Record"
                  />
                </TouchableOpacity>
              )}
              <View style={styles.scoreContainer}>
                <Text
                  textStyle={styles.scoreText}
                  text={`Score: ${data?.score}`}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
