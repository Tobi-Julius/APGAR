import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput as Input } from "react-native-paper";
import { useTheme } from "react-native-paper";

import { layout } from "../../utils";

export const TextInput = ({
  value,
  placeholder,
  onChangeText,
  textInputStyle,
  inputType,
  containerStyle,
  edit,
  textEntry,
  blur,
  error,
  placeholderTextColor,
  type,
  ...others
}) => {
  const theme = useTheme();
  return (
    <View style={[containerStyle]}>
      <Input
        mode="outlined"
        label={placeholder}
        onBlur={blur}
        editable={edit}
        value={value}
        autoCorrect={false}
        onChangeText={onChangeText}
        keyboardType={inputType}
        secureTextEntry={textEntry}
        style={[styles.inputStyle, textInputStyle]}
        {...others}
        selectionColor={theme.primary}
        outlineColor="lightgrey"
        activeOutlineColor={theme.primary}
        error={error}
        textInputHeight={layout.heightPixel(38)}
        textContentTyp={type}
        inputStyle={{
          fontFamily: "Montserrat_500Medium",
          fontSize: layout.size.h4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h3,
    backgroundColor: "#fff",
  },
});
