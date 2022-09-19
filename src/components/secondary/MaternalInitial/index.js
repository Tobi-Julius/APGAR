import { View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles";
import { styles } from "./styles";
import { Button, TextInput, Text } from "../../common";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../constants";

export const MaternalInitial = () => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.rowCenter]}>
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Text textStyle={styles.text} text="Mother's ID" />
          <TextInput
            placeholderTextColor={theme.text}
            value={"constant"}
            editable={false}
          />
        </View>
        <View style={styles.container}>
          <Text textStyle={styles.text} text="Gestation Period" />
          <TextInput placeholder="Gestation Period" />
        </View>
        <View style={styles.container}>
          <Text textStyle={styles.text} text="Delivery Mode" />
          <View style={styles.Picker}>
            <Picker>
              <Picker.Item
                label="Delivery Mode"
                // color="lightgrey"
                value="Delivery Mode"
              />
              <Picker.Item label="SVG" value="SVG" />
              <Picker.Item label="CS" value="CS" />
            </Picker>
          </View>
        </View>
        <View style={styles.container}>
          <Text textStyle={styles.text} text="Birth Weight" />
          <TextInput placeholder="Birth Weight" />
        </View>
        <Button
          onPress={() => navigation.navigate("MaternalRecordSecond")}
          containerStyle={styles.btnContainer}
          textStyle={styles.btnTextStyle}
          title="Next"
        />
      </View>
    </View>
  );
};
