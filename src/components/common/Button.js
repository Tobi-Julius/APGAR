import React from "react";
import { TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles";
import { theme } from "../../constants";
import { Text } from "./Text";

export const Button = ({
  title,
  onPress,
  textStyle,
  containerStyle,
  disabled,
  ...others
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      style={[
        globalStyles.rowCenter,
        { backgroundColor: theme.primary },
        containerStyle,
      ]}
      onPress={onPress}
      {...others}
    >
      <Text text={title} color={globalStyles.textColor} style={[textStyle]} />
    </TouchableOpacity>
  );
};
