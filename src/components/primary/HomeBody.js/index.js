import { Image, View, FlatList } from "react-native";
import React from "react";
import { Button, HomeListHeader, Text } from "../../common";
import { image } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { globalStyles } from "../../../styles";
import { BlurView } from "expo-blur";
import { HomeList } from "../HomeList.js";
import { layout } from "../../../utils";
import { ListEmpty } from "../../common";

export const HomeBody = ({ patientValue }) => {
  const navigation = useNavigation();

  const data = [
    {
      id: "1",
      text: "Take APGAR Score",
      image: image.APGARScore,
      title:
        "Instant input APGAR parameters and generate APGAR score of a new born baby",
      btnTitle: "Take Score",
      onPress: () => {
        navigation.navigate("Take APGAR Score");
      },
    },
    {
      id: "2",
      text: "Check APGAR Database",
      image: image.database,
      title: "Easy access to APGAR past records",
      btnTitle: "Check Database",
      onPress: () => {
        navigation.navigate("Database");
      },
    },
  ];

  return (
    <View style={[globalStyles.rowCenter]}>
      <View style={styles.container}>
        {data.map((item) => {
          return (
            <View key={item.id}>
              <HomeListHeader title={item.text} />
              <View style={styles.contentContainer}>
                <Image source={item.image} style={styles.image} />
                <BlurView
                  intensity={200}
                  tint="default"
                  style={styles.blurContainer}
                >
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    textStyle={styles.title}
                    text={item.title}
                  />
                  <Button
                    onPress={() => item.onPress()}
                    containerStyle={styles.btnContainer}
                    textStyle={styles.inputStyle}
                    title={item.btnTitle}
                  />
                </BlurView>
              </View>
            </View>
          );
        })}
        <HomeListHeader title="Past Record" />
        <FlatList
          ListEmptyComponent={(props) => <ListEmpty {...props} />}
          horizontal
          initialNumToRender={10}
          key={({ item }) => item.id}
          data={patientValue}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginRight:
                    patientValue.length === index + 1
                      ? 0
                      : layout.pixelSizeHorizontal(28),
                }}
              >
                <HomeList item={item} index={index} />
              </View>
            );
          }}
          contentContainerStyle={{
            marginVertical: layout.pixelSizeVertical(2),
          }}
        />
      </View>
    </View>
  );
};
