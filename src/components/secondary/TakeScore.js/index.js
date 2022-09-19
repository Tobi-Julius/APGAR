import { View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { theme } from "../../../constants";
import { Text, Button } from "../../common";
import { globalStyles } from "../../../styles";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const TakeScore = () => {
  const navigation = useNavigation();

  const takeScoreHandler = () => {
    navigation.navigate("Result");
  };

  return (
    <View style={[globalStyles.rowCenter, styles.container]}>
      <View style={styles.contentContainer}>
        {/* Activity */}

        <View style={styles.pickerContainer}>
          <Text textStyle={styles.title} text="Activity" />
          <View style={styles.picker}>
            <Picker
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode="dropdown"
              onValueChange={(picked, index) => {
                console.warn(picked, index - 1);
              }}
            >
              <Picker.Item
                value="Select Option"
                color="lightgrey"
                enabled={false}
                label="Select Option"
                fontFamily="Montserrat_500Medium"
              />
              <Picker.Item
                value="Loose and Floppy muscle tones: 0"
                label="Loose and Floppy muscle tones: 0"
              />
              <Picker.Item
                value="Flexed Arms and Legs: 1"
                label="Flexed Arms and Legs: 1"
              />
              <Picker.Item value="Active Motion: 2" label="Active Motion: 2" />
            </Picker>
          </View>
        </View>

        {/* Pulse */}

        <View style={styles.pickerContainer}>
          <Text textStyle={styles.title} text="Pulse" />
          <View style={styles.picker}>
            <Picker
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode="dropdown"
              onValueChange={(picked, index) => {
                console.warn(picked, index - 1);
              }}
            >
              <Picker.Item
                value="Select Option"
                color="lightgrey"
                enabled={false}
                label="Select Option"
              />
              <Picker.Item value="Absent: 0" label="Absent: 0" />
              <Picker.Item value="< 100 bpm: 1" label="< 100 bpm: 1" />
              <Picker.Item value="> 100 bpm: 2" label="> 100 bpm: 2" />
            </Picker>
          </View>

          {/* grimace */}
          <View style={styles.pickerContainer}>
            <Text textStyle={styles.title} text="Grimace" />
            <View style={styles.picker}>
              <Picker
                dropdownIconColor={theme.primary}
                dropdownIconRippleColor={theme.primary}
                mode="dropdown"
                onValueChange={(picked, index) => {
                  console.warn(picked, index - 1);
                }}
              >
                <Picker.Item
                  value="Select Option"
                  color="lightgrey"
                  enabled={false}
                  label="Select Option"
                />
                <Picker.Item
                  value="Floppy/No reaction: 0"
                  label="Floppy/No reaction: 0"
                />
                <Picker.Item
                  value="Minimal Response: 1"
                  label="Minimal Response: 1"
                />
                <Picker.Item
                  value="Prompt Response: 2"
                  label="Prompt Response: 2"
                />
              </Picker>
            </View>
          </View>

          {/* Appearance */}

          <View style={styles.pickerContainer}>
            <Text textStyle={styles.title} text="Appearance" />
            <View style={styles.picker}>
              <Picker
                dropdownIconColor={theme.primary}
                dropdownIconRippleColor={theme.primary}
                mode="dropdown"
                onValueChange={(picked, index) => {
                  console.warn(picked, index - 1);
                }}
              >
                <Picker.Item
                  value="Select Option"
                  color="lightgrey"
                  enabled={false}
                  label="Select Option"
                />
                <Picker.Item value="Blue Pale: 0" label="Blue Pale: 0" />
                <Picker.Item
                  value="Blue Extremeties: 1"
                  label="Blue extremeties: 1"
                />
                <Picker.Item value="Pink: 2" label="Pink: 2" />
              </Picker>
            </View>
          </View>

          {/* respiration */}

          <View style={styles.pickerContainer}>
            <Text textStyle={styles.title} text="Respiration" />
            <View style={styles.picker}>
              <Picker
                dropdownIconColor={theme.primary}
                dropdownIconRippleColor={theme.primary}
                mode="dropdown"
                onValueChange={(picked, index) => {
                  console.warn(picked, index - 1);
                }}
              >
                <Picker.Item
                  value="Select Option"
                  color="lightgrey"
                  enabled={false}
                  label="Select Option"
                />
                <Picker.Item value="Absent: 0" number={1} label="Absent: 0" />
                <Picker.Item
                  value="Slow and Irregular: 1"
                  label="Slow and Irregular: 1"
                />
                <Picker.Item value="Vigorous Cry: 2" label="Vigorous Cry: 2" />
              </Picker>
            </View>
          </View>
          <Button
            onPress={() => takeScoreHandler()}
            containerStyle={styles.btnContainer}
            textStyle={styles.btnText}
            title="Take Score"
          />
        </View>
      </View>
    </View>
  );
};
