import { Image, View, FlatList } from "react-native";
import React from "react";
import { Button, Text } from "../../common";
import { image } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { globalStyles } from "../../../styles";
import { BlurView } from "expo-blur";
import { HomeList } from "../HomeList.js";
import { layout } from "../../../utils";

export const HomeBody = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: "1",
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
            <View style={styles.contentContainer} key={item.id}>
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
          );
        })}
        <FlatList
          horizontal
          key={({ item }) => item.id}
          data={data}
          renderItem={(props) => {
            return <HomeList props={props} />;
          }}
          contentContainerStyle={{
            marginVertical: layout.pixelSizeVertical(17),
          }}
        />
      </View>
    </View>
  );
};
