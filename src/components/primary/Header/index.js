import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "../../common";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../constants";

export const Header = ({
  show,
  disabled,
  text,
  iconName,
  onPress,
  ...others
}) => {
  return (
    <View>
      <View style={[styles.container]}>
        <SafeAreaView>
          {show && (
            <View style={styles.innerContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                disabled={disabled}
                onPress={onPress}
                {...others}
              >
                <Ionicons name={iconName} color={theme.primary} size={26} />
              </TouchableOpacity>
              <Text textStyle={styles.text} text={text} />
              <View />
            </View>
          )}
        </SafeAreaView>
      </View>
    </View>
  );
};
