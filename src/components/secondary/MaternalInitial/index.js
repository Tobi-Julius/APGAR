import { View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles";
import { styles } from "./styles";
import { Button, TextInput, Text } from "../../common";
import { Picker } from "@react-native-picker/picker";
import { theme } from "../../../constants";
import { ActivityIndicator } from "react-native";

export const MaternalInitial = ({ value, setValue, updateHandler, id }) => {
  return (
    <View style={[globalStyles.rowCenter]}>
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Text textStyle={styles.text} text="Mother's ID" />
          <TextInput
            placeholderTextColor={theme.text}
            value={id.slice(0, 4)}
            editable={false}
          />
        </View>
        <View style={styles.container}>
          <Text textStyle={styles.text} text="Gestation Period (Weeks)" />
          <TextInput
            inputType={"numeric"}
            disabled={value.loading ? true : false}
            value={value.gestationPeriod}
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
            onChangeText={(text) => {
              setValue({
                ...value,
                gestationPeriod: text,
              });
            }}
          />
        </View>
        <View style={styles.container}>
          <Text textStyle={styles.text} text="Delivery Mode" />
          <View style={styles.Picker}>
            <Picker
              enabled={value.loading ? false : true}
              selectedValue={value.deliveryMode}
              dropdownIconColor={theme.primary}
              dropdownIconRippleColor={theme.primary}
              mode="dropdown"
              onValueChange={(text) => {
                setValue({
                  ...value,
                  deliveryMode: text,
                });
              }}
            >
              <Picker.Item label="Delivery Mode" value="Delivery Mode" />
              <Picker.Item label="SVG" value="SVG" />
              <Picker.Item label="CS" value="CS" />
            </Picker>
          </View>
        </View>
        <View style={styles.container}>
          <Text textStyle={styles.text} text="Birth Weight(Kg)" />
          <TextInput
            inputType={"numeric"}
            type={Number}
            disabled={value.loading ? true : false}
            value={value.birthWeight}
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
            onChangeText={(text) => {
              setValue({
                ...value,
                birthWeight: text,
              });
            }}
          />
        </View>
        <Text textStyle={styles.error} text={value.error && value.error} />
        <Button
          onPress={() => updateHandler()}
          containerStyle={styles.btnContainer}
          textStyle={styles.btnTextStyle}
          title={
            value.loading ? (
              <ActivityIndicator color={theme.white} size="small" />
            ) : (
              "Next"
            )
          }
        />
      </View>
    </View>
  );
};
