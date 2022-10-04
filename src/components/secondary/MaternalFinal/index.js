import { View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles";
import { styles } from "./style";
import { Button, Text } from "../../common";
import { Picker } from "@react-native-picker/picker";
import { theme } from "../../../constants";
import { ActivityIndicator } from "react-native";

export const MaternalFinal = ({ updateHandler, setValue, value }) => {
  return (
    <View style={[globalStyles.rowCenter]}>
      <View style={styles.contentContainer}>
        <View style={styles.pickerContainer}>
          <Text textStyle={styles.title} text="Maternal Hypertension" />
          <View style={styles.picker}>
            <Picker
              enabled={value.loading ? false : true}
              selectedValue={value.maternalHypertension}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode="dropdown"
              onValueChange={(text) => {
                setValue({
                  ...value,
                  maternalHypertension: text,
                });
              }}
            >
              <Picker.Item
                label="Select Option"
                enabled={false}
                value="Select Option"
              />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
        </View>

        <View style={styles.pickerContainer}>
          <Text textStyle={styles.title} text="Fetal Position" />
          <View style={styles.picker}>
            <Picker
              enabled={value.loading ? false : true}
              selectedValue={value.fetalPosition}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode="dropdown"
              onValueChange={(text) => {
                setValue({
                  ...value,
                  fetalPosition: text,
                });
              }}
            >
              <Picker.Item
                label="Select Option"
                enabled={false}
                value="Select Option"
              />
              <Picker.Item label="Normal" value="Normal" />
              <Picker.Item label="Abnormal" value="Abnormal" />
            </Picker>
          </View>
        </View>

        <View style={styles.pickerContainer}>
          <Text textStyle={styles.title} text="Meconium Stained Liquor(MSL)" />
          <View style={styles.picker}>
            <Picker
              enabled={value.loading ? false : true}
              selectedValue={value.MSL}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode="dropdown"
              onValueChange={(text) => {
                setValue({
                  ...value,
                  MSL: text,
                });
              }}
            >
              <Picker.Item
                label="Select Option"
                enabled={false}
                value="Select Option"
              />
              <Picker.Item label="Normal" value="Normal" />
              <Picker.Item label="Abnormal" value="Abnormal" />
            </Picker>
          </View>
          <Text text={value.error && value.error} textStyle={styles.error} />
        </View>
        <Button
          disabled={value.loading ? true : false}
          onPress={() => updateHandler()}
          textStyle={styles.btnText}
          title={
            value.loading ? (
              <ActivityIndicator color={theme.white} size="small" />
            ) : (
              "Save"
            )
          }
          containerStyle={styles.btnContainer}
        />
      </View>
    </View>
  );
};
